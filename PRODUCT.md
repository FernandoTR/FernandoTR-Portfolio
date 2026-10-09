# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El público principal son reclutadores y líderes técnicos que evalúan la contratación de Fernando Torres. Necesitan conocer su experiencia, revisar evidencia de su trabajo y acceder a su CV y medios de contacto.

## Product Purpose

Portafolio profesional de Fernando Torres, Ingeniero en Informática y Desarrollador Full Stack .NET. Su objetivo prioritario, confirmado por el propietario, es demostrar experiencia .NET e integraciones empresariales para conseguir entrevistas.

## Positioning

El contenido existente presenta experiencia en software empresarial, backend, datos y automatización operativa, con casos de integración entre SAP Business One, Salesforce y sistemas internos. Las afirmaciones profesionales deben sustentarse en el contenido y los documentos reales del portafolio.

## Operating Context

Los visitantes consultan el perfil, experiencia profesional, tecnologías y certificaciones; exploran proyectos y sus casos de estudio; abren el CV y pueden contactar a Fernando mediante el formulario o sus enlaces profesionales.

## Capabilities and Constraints

- Sitio estático HTML, CSS y JavaScript publicado mediante GitHub Pages. No hay build, gestor de paquetes, pruebas automatizadas ni CI configurados.
- Dominio de producción: `https://byfernandotorres.online/`. Canonical, Open Graph, Twitter y JSON-LD deben mantenerse alineados con él.
- La home está en `index.html`; los casos de estudio están en `assets/projects/`. `project-template.html` es una plantilla interna con `noindex, nofollow`.
- Carrusel de proyectos con Swiper y galerías con GLightbox. Conservar sus atributos de inicialización y el orden de scripts indicado en `AGENTS.md`.
- Formulario con Web3Forms, hCaptcha, validación y estados de envío. Preservar los contratos de campos, IDs y mensajes con su JavaScript.
- Mantener imágenes WebP y sus fallbacks PNG/JPG; sincronizar referencias entre home y casos de estudio.
- Servir localmente desde la raíz por HTTP con `py -m http.server 8080`; verificar las superficies modificadas en escritorio y móvil.

## Brand Commitments

Identidad profesional: Fernando Torres. Contenido y metadatos en español de México (`es-MX`), con voz profesional y enfoque técnico en .NET e integraciones empresariales. El sitio cuenta con logos, fotografía y enlaces profesionales existentes.

## Evidence on Hand

- `index.html`: perfil, experiencia, tecnologías, certificaciones y enlaces profesionales.
- `assets/docs/FernandoTorres_CV.pdf`: CV descargable.
- `assets/projects/trading.html`: Trading Book.
- `assets/projects/apiSalesforceSap.html`: integración Salesforce–SAP Business One.
- `assets/projects/distribuidores.html`, `proveedores.html` y `viaticos.html`: portales empresariales.
- `assets/imgs/works/`: capturas de proyectos y galerías.
- `README.md` y `AGENTS.md`: contexto técnico y reglas de mantenimiento.

No inventar resultados, credenciales, clientes ni testimonios. La exactitud y vigencia de las cifras profesionales existentes deben confirmarse antes de modificarlas o ampliarlas.

## Product Principles

- Ayudar a evaluar la candidatura con evidencia técnica concreta.
- Vincular la experiencia .NET con problemas de operación e integración empresarial.
- Facilitar el acceso al CV y al contacto para avanzar hacia una entrevista.
- Preservar la veracidad del contenido y las funciones existentes.

## Open Decisions

No se ha establecido un estándar de accesibilidad específico ni una definición cuantitativa de éxito. No asumir nuevos requisitos o métricas como hechos confirmados.
