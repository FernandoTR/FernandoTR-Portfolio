(function () {
    'use strict';

    const diagram = document.querySelector('[data-integration]');
    if (!diagram) return;

    const stage = diagram.querySelector('.integration-stage');
    const drawing = diagram.querySelector('.integration-drawing');
    const detail = diagram.querySelector('.integration-detail');
    const buttons = diagram.querySelectorAll('[data-system]');
    const motionButton = diagram.querySelector('.integration-motion');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const saveData = navigator.connection && navigator.connection.saveData;
    const systems = {
        salesforce: {
            title: 'Del CRM a la operación.',
            description: 'Salesforce y SAP Business One conectados mediante una API REST en .NET 8 para automatizar pedidos y consultas comerciales.',
            href: 'assets/projects/apiSalesforceSap.html',
            link: 'Explorar la integración',
            project: 'apiSalesforceSap'
        },
        sap: {
            title: 'El ERP, conectado con tu negocio.',
            description: 'Un portal B2B en ASP.NET MVC para consultar el catálogo, realizar pagos y registrar pedidos en SAP Business One.',
            href: 'assets/projects/distribuidores.html',
            link: 'Ver Portal de Distribuidores',
            project: 'distribuidores'
        },
        data: {
            title: 'Datos que se convierten en decisiones.',
            description: 'Trading Book: registro y análisis de operaciones de trading con ASP.NET Core, Entity Framework Core y SQL Server.',
            href: 'assets/projects/trading.html',
            link: 'Conocer Trading Book',
            project: 'trading'
        }
    };

    buttons.forEach(function (button) {
        button.disabled = false;
        button.addEventListener('click', function () {
            const key = button.dataset.system;
            const system = systems[key];
            diagram.dataset.active = key;
            buttons.forEach(function (item) {
                item.setAttribute('aria-pressed', String(item === button));
            });
            detail.querySelector('h3').textContent = system.title;
            detail.querySelector('p').textContent = system.description;
            const link = detail.querySelector('a');
            link.firstChild.textContent = system.link + ' ';
            link.href = system.href;
            link.dataset.umamiEventProject = system.project;
        });
    });

    let inView = false;
    let paused = false;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function resetPerspective() {
        cancelAnimationFrame(frame);
        frame = 0;
        drawing.style.transform = '';
    }

    function syncMotion() {
        const staticMode = reducedMotion.matches || saveData;
        diagram.classList.toggle('is-running', inView && !paused && !staticMode && !document.hidden);
        motionButton.hidden = Boolean(staticMode);
        motionButton.setAttribute('aria-pressed', String(paused));
        motionButton.textContent = paused ? 'Reanudar animación' : 'Pausar animación';
        if (!diagram.classList.contains('is-running')) resetPerspective();
    }

    motionButton.addEventListener('click', function () {
        paused = !paused;
        syncMotion();
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            inView = entries[0].isIntersecting;
            syncMotion();
        }, { threshold: 0.1 });
        observer.observe(diagram);
    }
    reducedMotion.addEventListener('change', syncMotion);
    finePointer.addEventListener('change', resetPerspective);
    document.addEventListener('visibilitychange', syncMotion);
    window.addEventListener('pagehide', resetPerspective);

    stage.addEventListener('pointermove', function (event) {
        if (!finePointer.matches || !diagram.classList.contains('is-running')) return;
        const bounds = stage.getBoundingClientRect();
        pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
        pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
        if (frame) return;
        frame = requestAnimationFrame(function () {
            drawing.style.transform = 'perspective(1000px) rotateX(' + (-pointerY * 6) + 'deg) rotateY(' + (pointerX * 8) + 'deg)';
            frame = 0;
        });
    }, { passive: true });
    stage.addEventListener('pointerleave', resetPerspective);
    document.querySelectorAll('.navbar a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                // Match the existing menu toggle in scripts.js (class + ARIA).
                document.getElementById('navbarSupportedContent').classList.remove('show');
                document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
            }
        });
    });
    syncMotion();
})();
