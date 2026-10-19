(function () {
    'use strict';

    var frame = document.querySelector('[data-hero-portrait]');
    if (!frame) return;
    var photo = frame.querySelector('img');
    if (!photo) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var canvas, renderer, resizeObserver, viewObserver, loaderObserver;
    var visible = false;
    var photoVisible = false;
    var loaded = false;
    var started = false;
    var failed = false;
    var disposed = false;
    var remaining = 3000;
    var waitingSince = null;
    var delayTimer = 0;
    var animation = 0;
    var lastTime = 0;
    var elapsed = 0;
    var scatter = 0;
    var pose = { yaw: 0, pitch: 0, x: 0, y: 0, strength: 0 };
    var target = { yaw: 0, pitch: 0, x: 0, y: 0, strength: 0 };
    var velocity = { yaw: 0, pitch: 0, x: 0, y: 0, strength: 0 };
    var poseKeys = Object.keys(pose);

    function rgb(value) {
        var hex = value.trim().replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(function (part) { return part + part; }).join('');
        return [0, 2, 4].map(function (offset) { return parseInt(hex.slice(offset, offset + 2), 16) / 255; });
    }

    function samplePortrait() {
        var width = frame.clientWidth;
        var height = frame.clientHeight;
        if (!width || !height) throw new Error('El retrato no tiene dimensiones visibles.');
        // Keep the reference's dot spacing in our narrower desktop and mobile frame.
        var columns = Math.max(64, Math.min(92, Math.round(width / 5)));
        var rows = Math.round(columns * height / width);
        var sample = document.createElement('canvas');
        sample.width = columns;
        sample.height = rows;
        var context = sample.getContext('2d', { willReadFrequently: true });
        var mask = document.createElement('canvas');
        mask.width = columns;
        mask.height = rows;
        var maskContext = mask.getContext('2d', { willReadFrequently: true });
        if (!context || !maskContext) throw new Error('Canvas no disponible.');

        // Match the photo's object-fit: cover and top-center crop at every viewport size.
        var scale = Math.max(columns / photo.naturalWidth, rows / photo.naturalHeight);
        var drawnWidth = photo.naturalWidth * scale;
        var drawnHeight = photo.naturalHeight * scale;
        var left = (columns - drawnWidth) / 2;
        context.drawImage(photo, left, 0, drawnWidth, drawnHeight);

        // Image-specific matte for 0.jpg, in normalized source-image coordinates.
        // Keep the dark hair and shirt while excluding the original gray background.
        var silhouette = new Path2D(
            'M 0 0.825 C 0.08 0.758 0.22 0.726 0.302 0.685 ' +
            'L 0.307 0.602 C 0.282 0.553 0.273 0.494 0.286 0.43 ' +
            'C 0.279 0.357 0.292 0.295 0.306 0.25 ' +
            'C 0.297 0.201 0.327 0.146 0.371 0.115 ' +
            'C 0.418 0.074 0.48 0.055 0.535 0.047 ' +
            'C 0.592 0.053 0.64 0.057 0.684 0.08 ' +
            'C 0.755 0.108 0.799 0.161 0.808 0.218 ' +
            'C 0.82 0.275 0.805 0.329 0.793 0.385 ' +
            'C 0.826 0.404 0.825 0.444 0.803 0.481 ' +
            'C 0.799 0.554 0.767 0.613 0.725 0.654 ' +
            'L 0.748 0.696 C 0.84 0.737 0.936 0.765 1 0.795 L 1 1 L 0 1 Z'
        );
        maskContext.filter = 'blur(0.5px)';
        maskContext.translate(left, 0);
        maskContext.scale(drawnWidth, drawnHeight);
        maskContext.fill(silhouette);

        var pixels = context.getImageData(0, 0, columns, rows).data;
        var coverage = maskContext.getImageData(0, 0, columns, rows).data;
        var points = [];
        var histogram = new Uint32Array(256);
        for (var row = 0; row < rows; row++) {
            for (var column = 0; column < columns; column++) {
                var offset = (row * columns + column) * 4;
                var share = coverage[offset + 3] / 255;
                if (share < 0.08) continue;
                var tone = (pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722) / 255;
                histogram[Math.round(tone * 255)]++;
                points.push((column + 0.5) / columns * 2 - 1, 1 - (row + 0.5) / rows * 2, tone, share, 0);
            }
        }
        // Separate highlight dots and retain small shadow dots instead of a solid face.
        // Keep depth based on the original luminance; size encodes the stronger contrast.
        var count = points.length / 5;
        var cumulative = 0;
        var black = 0;
        var white = 255;
        for (var bin = 0; bin < histogram.length; bin++) {
            cumulative += histogram[bin];
            if (cumulative < count * 0.02) black = bin;
            if (cumulative >= count * 0.98) { white = bin; break; }
        }
        var range = Math.max(1, white - black);
        for (var point = 0; point < points.length; point += 5) {
            var contrast = Math.max(0, Math.min(1, (points[point + 2] * 255 - black) / range));
            points[point + 4] = 0.9 * (0.18 + 0.82 * Math.pow(contrast, 2.2)) * (0.35 + 0.65 * points[point + 3]);
        }
        var styles = getComputedStyle(frame);
        return {
            points: new Float32Array(points),
            columns: columns,
            ink: styles.getPropertyValue('--portrait-ink').trim(),
            accent: styles.getPropertyValue('--portrait-accent').trim()
        };
    }

    function createFlatRenderer(surface) {
        var context = surface.getContext('2d');
        if (!context) throw new Error('Canvas no disponible.');
        var data;
        return {
            animated: false,
            resize: function (portrait, width, height, ratio) {
                data = portrait;
                surface.width = Math.round(width * ratio);
                surface.height = Math.round(height * ratio);
                context.setTransform(ratio, 0, 0, ratio, 0, 0);
            },
            draw: function () {
                var width = frame.clientWidth;
                var height = frame.clientHeight;
                var path = new Path2D();
                var spacing = width / data.columns;
                for (var i = 0; i < data.points.length; i += 5) {
                    var x = (data.points[i] + 1) * width / 2;
                    var y = (1 - data.points[i + 1]) * height / 2;
                    var radius = spacing * 0.5 * data.points[i + 4];
                    path.moveTo(x + radius, y);
                    path.arc(x, y, radius, 0, Math.PI * 2);
                }
                context.clearRect(0, 0, width, height);
                context.fillStyle = data.ink;
                context.fill(path);
            },
            destroy: function () {}
        };
    }

    function createWebGLRenderer(surface) {
        var gl = surface.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true });
        if (!gl) throw new Error('WebGL no disponible.');
        var shaders = [];
        var buffer;
        var program;
        function destroy() {
            if (buffer) gl.deleteBuffer(buffer);
            if (program) gl.deleteProgram(program);
            shaders.forEach(function (shader) { gl.deleteShader(shader); });
        }
        function shader(type, source) {
            var compiled = gl.createShader(type);
            shaders.push(compiled);
            gl.shaderSource(compiled, source);
            gl.compileShader(compiled);
            if (!gl.getShaderParameter(compiled, gl.COMPILE_STATUS)) throw new Error('No se pudo compilar el retrato.');
            return compiled;
        }
        try {
            program = gl.createProgram();
            gl.attachShader(program, shader(gl.VERTEX_SHADER, [
                'attribute vec4 aPoint;',
                'attribute float aSize;',
                'uniform float uAspect, uPixel, uTime, uMorph, uScatter, uYaw, uPitch, uStrength;',
                'uniform vec2 uPointer;',
                'varying float vAccent, vAlpha, vDiameter, vRasterSize;',
                'float seed(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
                'void main() {',
                '  float tone = aPoint.z;',
                '  vec3 p = vec3(aPoint.x * uAspect, aPoint.y, (tone - 0.35) * 0.32 * uMorph);',
                '  vec2 delta = p.xy - uPointer;',
                '  float lens = (1.0 - smoothstep(0.0, 0.28, length(delta))) * uStrength * uMorph;',
                '  p.xy += delta / max(length(delta), 0.001) * lens * 0.055;',
                '  p.z += lens * 0.16;',
                '  p.z += sin(uTime * 0.9 + p.y * 6.0 + p.x * 3.0) * 0.009 * uMorph;',
                '  float random = seed(aPoint.xy);',
                '  vec3 direction = vec3(cos(random * 44.0), sin(random * 31.0), sin(random * 17.0));',
                '  p += direction * (1.0 - uMorph) * (0.12 + random * 0.12);',
                '  p += direction * uScatter * (0.3 + random) * uMorph;',
                '  float yaw = uYaw * uMorph, pitch = uPitch * uMorph;',
                '  p = vec3(cos(yaw) * p.x + sin(yaw) * p.z, p.y, -sin(yaw) * p.x + cos(yaw) * p.z);',
                '  p = vec3(p.x, cos(pitch) * p.y - sin(pitch) * p.z, sin(pitch) * p.y + cos(pitch) * p.z);',
                '  float perspective = 2.8 / max(0.5, 2.8 - p.z);',
                '  gl_Position = vec4(p.x / uAspect * perspective, p.y * perspective, 0.0, 1.0);',
                '  vDiameter = uPixel * aSize * perspective * (1.0 + lens * 0.4);',
                // Pad the sprite so antialiased circle edges are never clipped to a square.
                '  vRasterSize = ceil(max(1.0, vDiameter)) + 2.0;',
                '  gl_PointSize = vRasterSize;',
                '  float scan = 1.15 - mod(uTime, 9.0) / 9.0 * 2.5;',
                '  vAccent = max((1.0 - smoothstep(0.0, 0.025, abs(aPoint.y - scan))) * 0.75, lens * 0.65) * uMorph;',
                '  vAlpha = aPoint.w * min(1.0, vDiameter * vDiameter) * (1.0 - uScatter * 0.75);',
                '}'
            ].join('\n')));
            gl.attachShader(program, shader(gl.FRAGMENT_SHADER, [
                'precision mediump float;',
                'uniform vec3 uInk, uAccent;',
                'varying float vAccent, vAlpha, vDiameter, vRasterSize;',
                'void main() {',
                '  float radius = max(1.0, vDiameter) * 0.5;',
                '  float distance = length(gl_PointCoord - 0.5) * vRasterSize;',
                '  float alpha = (1.0 - smoothstep(max(0.0, radius - 0.5), radius + 0.5, distance)) * vAlpha;',
                '  if (alpha < 0.01) discard;',
                '  gl_FragColor = vec4(mix(uInk, uAccent, vAccent) * alpha, alpha);',
                '}'
            ].join('\n')));
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('No se pudo iniciar el retrato.');
            gl.useProgram(program);
            buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            var attribute = gl.getAttribLocation(program, 'aPoint');
            gl.enableVertexAttribArray(attribute);
            gl.vertexAttribPointer(attribute, 4, gl.FLOAT, false, 20, 0);
            var sizeAttribute = gl.getAttribLocation(program, 'aSize');
            gl.enableVertexAttribArray(sizeAttribute);
            gl.vertexAttribPointer(sizeAttribute, 1, gl.FLOAT, false, 20, 16);
            var uniforms = {};
            ['Aspect', 'Pixel', 'Time', 'Morph', 'Scatter', 'Yaw', 'Pitch', 'Strength', 'Pointer', 'Ink', 'Accent'].forEach(function (name) {
                uniforms[name] = gl.getUniformLocation(program, 'u' + name);
            });
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.clearColor(0, 0, 0, 0);
            var count = 0;
            return {
                animated: true,
                resize: function (portrait, width, height, ratio) {
                    surface.width = Math.round(width * ratio);
                    surface.height = Math.round(height * ratio);
                    gl.viewport(0, 0, surface.width, surface.height);
                    gl.bufferData(gl.ARRAY_BUFFER, portrait.points, gl.STATIC_DRAW);
                    count = portrait.points.length / 5;
                    gl.uniform1f(uniforms.Aspect, width / height);
                    gl.uniform1f(uniforms.Pixel, width / portrait.columns * ratio);
                    gl.uniform3fv(uniforms.Ink, rgb(portrait.ink));
                    gl.uniform3fv(uniforms.Accent, rgb(portrait.accent));
                },
                draw: function (time, morph, spread) {
                    gl.clear(gl.COLOR_BUFFER_BIT);
                    gl.uniform1f(uniforms.Time, time);
                    gl.uniform1f(uniforms.Morph, morph);
                    gl.uniform1f(uniforms.Scatter, spread);
                    gl.uniform1f(uniforms.Yaw, pose.yaw + (target.strength ? 0 : Math.sin(time * 0.4) * 0.08));
                    gl.uniform1f(uniforms.Pitch, pose.pitch);
                    gl.uniform1f(uniforms.Strength, pose.strength);
                    gl.uniform2f(uniforms.Pointer, pose.x, pose.y);
                    gl.drawArrays(gl.POINTS, 0, count);
                },
                destroy: destroy
            };
        } catch (error) {
            destroy();
            throw error;
        }
    }

    function makeSurface() {
        var surface = document.createElement('canvas');
        surface.className = 'dot-canvas';
        // The original image remains the single accessible description of this portrait.
        surface.setAttribute('aria-hidden', 'true');
        return surface;
    }

    function resize() {
        if (failed || disposed || !renderer) return;
        try {
            renderer.resize(samplePortrait(), frame.clientWidth, frame.clientHeight, Math.min(window.devicePixelRatio || 1, 2));
            draw();
        } catch (error) {
            fallback();
        }
    }

    function draw() {
        var progress = reduceMotion.matches ? 1 : Math.min(1, elapsed / 1.8);
        renderer.draw(elapsed, 1 - Math.pow(1 - progress, 3), reduceMotion.matches ? 0 : scatter);
    }

    function canRun() {
        return loaded && visible && !document.hidden && !failed && !disposed;
    }

    function loaderFinished() {
        var loader = document.querySelector('.loader-wrap');
        return document.body.classList.contains('hero-handwriting-ready') || !loader || getComputedStyle(loader).display === 'none';
    }

    function pauseDelay() {
        if (waitingSince !== null) remaining = Math.max(0, remaining - (performance.now() - waitingSince));
        waitingSince = null;
        window.clearTimeout(delayTimer);
        delayTimer = 0;
    }

    function sync() {
        if (!canRun() || (!started && !photoVisible)) {
            pauseDelay();
            window.cancelAnimationFrame(animation);
            animation = 0;
            lastTime = 0;
            return;
        }
        if (!started && loaderFinished()) {
            if (waitingSince !== null) return;
            waitingSince = performance.now();
            delayTimer = window.setTimeout(function () {
                pauseDelay();
                if (!canRun()) return;
                started = true;
                if (loaderObserver) loaderObserver.disconnect();
                // Paint a valid frame before exposing the canvas or fading the photograph.
                draw();
                frame.classList.add('is-particles');
                sync();
            }, remaining);
        } else if (started) {
            if (reduceMotion.matches || !renderer.animated) {
                window.cancelAnimationFrame(animation);
                animation = 0;
                lastTime = 0;
                draw();
            } else if (!animation) {
                animation = window.requestAnimationFrame(tick);
            }
        }
    }

    function tick(now) {
        animation = 0;
        if (!canRun()) return;
        var delta = lastTime ? Math.min((now - lastTime) / 1000, 1 / 30) : 1 / 60;
        lastTime = now;
        elapsed += delta;
        // Interruptible pointer spring: mass 1, stiffness 100, damping 10.
        poseKeys.forEach(function (key) {
            velocity[key] += ((target[key] - pose[key]) * 100 - velocity[key] * 10) * delta;
            pose[key] += velocity[key] * delta;
        });
        var rect = frame.getBoundingClientRect();
        var spread = Math.max(0, Math.min(0.7, (rect.height / 2 - rect.bottom) / (rect.height / 2) * 0.7));
        scatter += (spread - scatter) * Math.min(1, delta / 0.6);
        draw();
        animation = window.requestAnimationFrame(tick);
    }

    function resetPointer() {
        poseKeys.forEach(function (key) { target[key] = 0; });
    }

    function pointerMove(event) {
        if (!started || !finePointer.matches || reduceMotion.matches || event.pointerType === 'touch') return;
        var rect = frame.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width * 2 - 1;
        var y = (event.clientY - rect.top) / rect.height * 2 - 1;
        target.yaw = x * 0.5;
        target.pitch = y * 0.32;
        target.x = x * rect.width / rect.height;
        target.y = -y;
        target.strength = 1;
    }

    function preferenceChanged() {
        resetPointer();
        if (reduceMotion.matches) {
            poseKeys.forEach(function (key) { pose[key] = velocity[key] = 0; });
            scatter = 0;
        }
        sync();
    }

    function fallback() {
        failed = true;
        pauseDelay();
        window.cancelAnimationFrame(animation);
        animation = 0;
        frame.classList.add('is-fallback');
        frame.classList.remove('is-particles');
        if (resizeObserver) resizeObserver.disconnect();
        if (viewObserver) viewObserver.disconnect();
        if (loaderObserver) loaderObserver.disconnect();
        if (renderer) renderer.destroy();
        if (canvas) canvas.remove();
    }

    function contextLost(event) {
        event.preventDefault();
        fallback();
    }

    function initialize() {
        if (loaded || failed || disposed || !photo.naturalWidth) return;
        try {
            canvas = makeSurface();
            if (!reduceMotion.matches) {
                try {
                    renderer = createWebGLRenderer(canvas);
                    canvas.classList.add('dot-canvas-3d');
                } catch (error) {
                    canvas = makeSurface();
                }
            }
            if (!renderer) renderer = createFlatRenderer(canvas);
            canvas.addEventListener('webglcontextlost', contextLost);
            frame.appendChild(canvas);
            resize();
            if (failed) return;
            loaded = true;
            if ('ResizeObserver' in window) {
                resizeObserver = new ResizeObserver(resize);
                resizeObserver.observe(frame);
            } else {
                window.addEventListener('resize', resize, { passive: true });
            }
            sync();
        } catch (error) {
            fallback();
        }
    }

    function checkVisibility() {
        var rect = frame.getBoundingClientRect();
        visible = rect.bottom > 0 && rect.top < window.innerHeight && rect.width > 0;
        var visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        photoVisible = visible && visibleHeight / rect.height >= 0.35;
        sync();
    }

    function pageHide(event) {
        pauseDelay();
        window.cancelAnimationFrame(animation);
        animation = 0;
        lastTime = 0;
        if (event.persisted) return;
        disposed = true;
        if (renderer) renderer.destroy();
        if (resizeObserver) resizeObserver.disconnect();
        if (viewObserver) viewObserver.disconnect();
        if (loaderObserver) loaderObserver.disconnect();
        frame.removeEventListener('pointermove', pointerMove);
        frame.removeEventListener('pointerleave', resetPointer);
        document.removeEventListener('visibilitychange', sync);
        reduceMotion.removeEventListener('change', preferenceChanged);
        finePointer.removeEventListener('change', resetPointer);
        window.removeEventListener('resize', resize);
        window.removeEventListener('scroll', checkVisibility);
        window.removeEventListener('resize', checkVisibility);
    }

    frame.addEventListener('pointermove', pointerMove, { passive: true });
    frame.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', sync);
    reduceMotion.addEventListener('change', preferenceChanged);
    finePointer.addEventListener('change', resetPointer);
    window.addEventListener('pagehide', pageHide);
    window.addEventListener('pageshow', sync);
    if ('IntersectionObserver' in window) {
        viewObserver = new IntersectionObserver(function (entries) {
            visible = entries[0].isIntersecting;
            photoVisible = visible && entries[0].intersectionRatio >= 0.35;
            sync();
        }, { threshold: [0, 0.35] });
        viewObserver.observe(frame);
    } else {
        window.addEventListener('scroll', checkVisibility, { passive: true });
        window.addEventListener('resize', checkVisibility, { passive: true });
        checkVisibility();
    }
    loaderObserver = new MutationObserver(sync);
    loaderObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    if (photo.complete && photo.naturalWidth) initialize();
    else photo.addEventListener('load', initialize, { once: true });
})();
