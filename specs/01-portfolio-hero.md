# SPEC 01 — Hero del portafolio

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-08  
> **Objetivo:** Crear una propuesta de home que incluya únicamente la navegación superior y el hero del portafolio de Fernando Torres, siguiendo `DESIGN.md`.

## Scope

**Incluido:**

- Crear `index2.html` en español de México y `assets/css/styles2.css`.
- Usar `assets/css/portfolio-v2.css` como CSS base y cargar `styles2.css` después.
- Diseñar navegación superior y hero con presentación profesional, enfoque Full Stack .NET e integraciones empresariales, acceso al CV y contacto por LinkedIn.
- Mostrar `assets/imgs/works/PortalTrading_Detail01.webp`, con fallback `PortalTrading_Detail01.png`, enlazada a `assets/projects/trading.html`.
- Aplicar la dirección visual de `DESIGN.md` y adaptar el hero a escritorio y móvil.

**Fuera de esta etapa:**

- Las demás secciones de la página, que se definirán en especificaciones posteriores.
- Rediseño de casos de estudio y reemplazo de `index.html`.

## Data model

Esta etapa no introduce nuevas estructuras de datos ni almacenamiento. Reutiliza contenido, enlaces e imágenes existentes. Usa Inter y Sora como sustituto de Esbuild, con fuentes de sistema como respaldo.

## Implementation plan

1. Crear `index2.html` con metadatos en español, `noindex, nofollow`, navegación y estructura semántica del hero.
2. Cargar los dos archivos CSS en orden y construir el hero con la aurora azul y coral, texto profesional, captura de Trading Book y acciones de CV y LinkedIn.
3. Crear `assets/css/styles2.css` con los estilos propios del hero y las adaptaciones responsive, estados de foco y respeto a movimiento reducido.

## Acceptance criteria

- [ ] La página contiene únicamente navegación y hero, en español de México.
- [ ] Carga `portfolio-v2.css` antes de `styles2.css`.
- [ ] Presenta la especialidad y el enfoque profesional usando información existente.
- [ ] Usa la captura de Trading Book en WebP con fallback PNG y enlace al caso de estudio.
- [ ] Los enlaces al CV y LinkedIn funcionan.
- [ ] A 375 px y 1440 px no hay desbordamiento horizontal, cortes ni superposiciones.
- [ ] Los enlaces son accesibles por teclado y muestran foco visible; las animaciones respetan movimiento reducido.
- [ ] Servida por HTTP, la página no tiene errores de consola ni recursos faltantes.
- [ ] `index.html` permanece intacto y la propuesta lleva `noindex, nofollow`.

## Decisions

- El rediseño se realizará por etapas, cada una con su propia especificación.
- La home nueva empieza en `index2.html`; su reemplazo futuro se tratará aparte.
- Se conserva `portfolio-v2.css` como base y los estilos propios van en `styles2.css`.
- Trading Book es la captura elegida por su atractivo visual; se descarta la captura Salesforce–SAP.
- El contacto del hero dirige al LinkedIn existente; no se añade un correo no encontrado en la home.
- La dirección visual sigue `DESIGN.md`; la composición se resolverá con la skill **impeccable**.

## Risks

- `index2.html` será una propuesta independiente hasta una etapa posterior de reemplazo.
- El hero depende de recursos existentes: CV, perfil de LinkedIn, captura y página de Trading Book.

## What is **not** in this spec

- Las secciones restantes, el rediseño de casos de estudio y el reemplazo de `index.html` se abordarán en futuras etapas.
