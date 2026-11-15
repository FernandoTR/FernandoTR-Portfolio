/* Shared case-study architecture explorer. Project image carousels are independent. */
(function () {
    'use strict';

    const explorer = document.querySelector('[data-architecture]');
    if (!explorer) return;

    const nodes = Array.from(explorer.querySelectorAll('[data-layer]'));
    const wires = Array.from(explorer.querySelectorAll('[data-from]'));
    const details = Array.from(explorer.querySelectorAll('[data-detail]'));
    const reset = explorer.querySelector('[data-architecture-reset]');
    const status = explorer.querySelector('[data-architecture-status]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData = navigator.connection && navigator.connection.saveData;
    let active = '';
    let animations = [];

    function stopMotion() {
        animations.forEach(animation => animation.cancel());
        animations = [];
    }

    function selectLayer(layer, announce) {
        if (active === layer) return;
        stopMotion();
        active = layer;
        const overview = layer === 'overview';
        const connected = new Set([layer]);

        wires.forEach(wire => {
            const selected = wire.dataset.from === layer || wire.dataset.to === layer;
            wire.classList.toggle('is-selected', selected);
            if (selected) {
                connected.add(wire.dataset.from);
                connected.add(wire.dataset.to);
                const trace = wire.querySelector('.architecture-trace');
                if (announce && !reducedMotion.matches && !saveData && trace.animate) {
                    animations.push(trace.animate(
                        [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
                        { duration: 620, easing: 'cubic-bezier(.16, 1, .3, 1)' }
                    ));
                }
            }
        });

        nodes.forEach(node => {
            node.setAttribute('aria-pressed', String(node.dataset.layer === layer));
            node.classList.toggle('is-related', connected.has(node.dataset.layer));
        });
        details.forEach(detail => { detail.hidden = detail.dataset.detail !== layer; });
        reset.setAttribute('aria-pressed', String(overview));
        explorer.dataset.active = layer;

        const panel = details.find(detail => detail.dataset.detail === layer);
        if (announce) {
            status.textContent = overview
                ? 'Mapa completo. Todas las conexiones están visibles.'
                : panel.querySelector('h3').textContent + '. ' + panel.querySelector('h4 + p').textContent;
            if (!reducedMotion.matches && !saveData && panel.animate) {
                animations.push(panel.animate(
                    [{ opacity: 0.65, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }],
                    { duration: 260, easing: 'cubic-bezier(.16, 1, .3, 1)' }
                ));
            }
        }
    }

    nodes.forEach(node => {
        node.disabled = false;
        node.addEventListener('click', () => selectLayer(node.dataset.layer, true));
    });
    reset.hidden = false;
    reset.addEventListener('click', () => selectLayer('overview', true));
    explorer.classList.add('is-ready');
    selectLayer(explorer.dataset.architectureInitial || 'infrastructure', false);

    reducedMotion.addEventListener('change', stopMotion);
    document.addEventListener('visibilitychange', () => { if (document.hidden) stopMotion(); });
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) stopMotion();
        }).observe(explorer);
    }
})();
