# SPEC 04 — Rediseño del caso Salesforce ↔ SAP

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-15  
> **Objetivo:** Reorganizar `apiSalesforceSap.html` con el lenguaje visual de `trading.html`, conservando el contenido técnico e integrando la portada y sus tres capturas en un carrusel con aura animada.

## Alcance

**Incluye:**

- Reorganizar el contenido en el orden aprobado: portada con carrusel, resumen y detalles, capacidades, arquitectura y seis endpoints, seguridad, contribución y resultado.
- Adaptar a la página Salesforce ↔ SAP la jerarquía, tipografía, tarjetas, paneles, espaciado y tratamiento cromático de TradingBook. Los estilos nuevos quedan limitados a esta página.
- Integrar en el carrusel las cuatro imágenes ya usadas por el caso. Conservar las tres descripciones como leyendas visibles que cambian con la diapositiva; reutilizar el título y la introducción de la galería retirada como texto introductorio del carrusel.
- Incorporar el aura animada, el avance automático cada cinco segundos, el control para pausar y reanudar y la apertura de las cuatro imágenes en GLightbox, siguiendo el comportamiento de TradingBook y respetando la preferencia de movimiento reducido.
- Conservar los textos técnicos, datos del proyecto, enlaces, metadatos y recursos de imagen existentes, incluidos los formatos WebP y PNG.

**Fuera del alcance:**

- Cambiar contenido, arquitectura descrita, endpoints, rol, resultado, metadatos SEO o URLs.
- Modificar `trading.html`, otros casos, estilos compartidos que afecten al sitio entero o `assets/js/scripts.js`.
- Añadir imágenes, dependencias, servicios o cambios al backend.

## Modelo de datos

No se introducen estructuras de datos persistentes ni contratos nuevos. El carrusel reutiliza las cuatro imágenes y sus textos ya presentes en `apiSalesforceSap.html`; conserva solo el índice de diapositiva y el estado de pausa en memoria durante la sesión.

## Plan de implementación

1. Añadir una clase exclusiva a `assets/projects/apiSalesforceSap.html` y estilos CSS limitados a esa página en `assets/css/style.css`. Aplicar la jerarquía visual de TradingBook sin afectar otros casos.
2. Reordenar el contenido en la secuencia aprobada, conservando las secciones, datos, enlaces y los seis endpoints.
3. Integrar la portada y las tres capturas existentes en el hero, trasladar ahí el texto introductorio y las leyendas, agrupar las imágenes en GLightbox y retirar la galería separada.
4. Añadir el aura y comportamiento del carrusel de TradingBook: avance cada cinco segundos, pausa y reanudación, detención cuando no está visible y respeto a `prefers-reduced-motion`.

## Criterios de aceptación

- [ ] La página conserva sus metadatos SEO, URLs, navegación, textos técnicos, seis endpoints, datos del proyecto y enlaces.
- [ ] El contenido aparece en el orden aprobado y mantiene todas las secciones existentes, con la galería separada retirada.
- [ ] El carrusel reúne la portada y las tres capturas, conserva el texto introductorio y muestra la leyenda correspondiente a cada diapositiva.
- [ ] Las cuatro imágenes se abren en un mismo grupo de GLightbox y siguen usando sus archivos WebP y PNG actuales.
- [ ] El carrusel avanza cada cinco segundos, se pausa y reanuda desde un control accesible y se detiene cuando la página está oculta o el carrusel sale de vista.
- [ ] Con `prefers-reduced-motion`, no se reproducen el avance automático ni el aura animada.
- [ ] Los estilos nuevos solo afectan a `apiSalesforceSap.html`; la página se presenta correctamente en móvil y escritorio.
- [ ] No aparecen errores nuevos en consola ni recursos de imagen faltantes al servir el sitio por HTTP.

## Decisiones

- **Sí:** usar TradingBook como referencia visual, con reglas CSS limitadas a la página Salesforce ↔ SAP para evitar regresiones en otros casos.
- **Sí:** conservar el contenido, datos y enlaces existentes; reorganizar su presentación en el orden aprobado.
- **Sí:** integrar la portada y las tres capturas actuales en un solo carrusel, manteniendo las leyendas.
- **Sí:** reutilizar GLightbox y el patrón de animación y control de TradingBook, sin agregar dependencias.
- **No:** editar `trading.html`, otros casos de estudio o reglas CSS compartidas que afecten al sitio entero.
- **No:** cambiar `assets/js/scripts.js`, alterar metadatos o URLs, ni agregar imágenes o contenido nuevos.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Las capturas verticales pueden recortarse o hacer que el carrusel cambie de tamaño al avanzar. | Mantener una ventana responsive estable, mostrar cada imagen completa sin recorte y revisar los cuatro slides en móvil y escritorio. |
| Los cambios locales existentes en la página y en `style.css` pueden mezclarse con la nueva implementación. | Hacer cambios acotados sobre el estado actual y revisar el diff sin restaurar ni reemplazar archivos. |
| La animación puede resultar inadecuada para algunas preferencias o estados de página. | Reutilizar la pausa y las condiciones de visibilidad y reducción de movimiento de TradingBook, y verificarlas en la página destino. |

## Qué no incluye esta especificación

- Cambiar textos técnicos, datos, endpoints, rol, resultado, metadatos SEO o URLs.
- Editar `trading.html`, otros casos de estudio, `assets/js/scripts.js` o estilos globales que afecten otras páginas.
- Añadir imágenes, dependencias, servicios, backend o analítica nueva.
