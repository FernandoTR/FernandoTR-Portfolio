# SPEC 05 — Rediseño del caso Portal de Distribuidores

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-16
> **Objetivo:** Reorganizar `distribuidores.html` con la estructura y el lenguaje visual de `trading.html`, integrando la portada y tres capturas en un carrusel y conservando los datos del proyecto.

## Alcance

**Incluye:**

- Adaptar `assets/projects/distribuidores.html` a la jerarquía, tipografía, tarjetas, espaciado y composición de `trading.html`, con estilos limitados a esta página.
- Reunir la portada y tres capturas en un carrusel con aura, avance automático, control de pausa, leyendas visibles y apertura en GLightbox; retirar la captura casi cuadrada `Detail04` y la galería inferior.
- Ordenar el caso como portada, funciones principales, detalles del proyecto, arquitectura, reto técnico, contribución y resultado. Condensar textos sin perder los datos existentes.
- Representar Web, Negocio, Datos y ERP en un diagrama propio, sin añadir afirmaciones técnicas no documentadas.
- Usar el encabezado y el pie de TradingBook, incluidos enlaces a contacto, redes, CV y privacidad; conservar una nota visible sobre el repositorio privado.

**Fuera de alcance:**

- Cambiar los hechos del proyecto, sus metadatos SEO, URL canónica o imágenes.
- Editar `trading.html`, la home, otros casos, `assets/js/scripts.js` o estilos globales que alteren otras páginas.
- Publicar el repositorio, agregar un botón de código, dependencias, servicios o funcionalidades del portal B2B.

## Modelo de datos

No se introducen estructuras persistentes ni contratos externos. El carrusel usa cuatro imágenes, en este orden: `PortalDistribuidores_inicio.png`, `PortalDistribuidores_Detail01.png`, `PortalDistribuidores_Detail02.png` y `PortalDistribuidores_Detail03.png`, cada una con alternativa WebP y PNG. `Detail04` queda fuera del carrusel por su proporción casi cuadrada.

Cada diapositiva conserva su descripción accesible y muestra una leyenda: «Vista principal del Portal de Distribuidores» para la portada y las leyendas correspondientes a `Detail01`, `Detail02` y `Detail03`. El índice activo y el estado de pausa existen solo en memoria mientras la página está abierta.

## Plan de implementación

1. Añadir `project-trading` y una clase propia a la sección de distribuidores; crear solo los ajustes CSS locales necesarios y actualizar la versión de `style.css` en esta página.
2. Preparar la portada con cuatro diapositivas, el aura SVG con identificadores propios, leyendas visibles y el control accesible. Mantener temporalmente la galería inferior para que las capturas sigan disponibles.
3. Añadir el comportamiento inline existente: avance cada cinco segundos, pausa y reanudación, detención al ocultar la página o salir de vista, respeto a movimiento reducido y apertura mediante GLightbox. Retirar la galería inferior tras verificar las cuatro diapositivas y sus leyendas.
4. Convertir las cuatro capacidades en tarjetas y reunir descripción, año, tipo, empresa, rol, integraciones, disponibilidad y tecnologías en «Detalles del proyecto», conservando los datos de la franja actual.
5. Sustituir los bloques de arquitectura por un diagrama accesible de Web, Negocio, Datos y ERP. Presentar reto técnico, contribución y resultado con los paneles de TradingBook.
6. Adaptar encabezado y pie de página; conservar los destinos actuales y añadir los enlaces de contacto, redes, CV y aviso de privacidad presentes en TradingBook.

## Criterios de aceptación

- [x] El contenido aparece en el orden aprobado y conserva los hechos, tecnologías, año, empresa, rol, disponibilidad, reto y resultado del caso.
- [x] La portada y las capturas `Detail01` a `Detail03` reúnen cuatro imágenes con versiones WebP y PNG, muestran la leyenda correspondiente y permiten abrirlas en un mismo grupo de GLightbox.
- [x] El carrusel avanza cada cinco segundos; el control accesible pausa y reanuda tanto el avance como el aura.
- [x] El avance y el aura se detienen cuando la página está oculta, la portada sale de vista o está activa `prefers-reduced-motion`.
- [x] El diagrama muestra Web, Negocio, Datos y ERP con texto accesible; puede recorrerse en móvil sin cortar su contenido.
- [x] `Detail04` queda fuera del carrusel por indicación del usuario; las cuatro imágenes restantes llenan una ventana de altura estable con `object-fit: cover`.
- [x] El encabezado y pie ofrecen los enlaces acordados; el caso indica que el repositorio es privado y no muestra un enlace de código.
- [x] Los metadatos SEO, URL canónica, enlaces del caso y script de Umami siguen apuntando a sus destinos actuales.
- [x] En móvil y escritorio no aparecen desbordamientos, imágenes faltantes ni errores nuevos en consola; los estilos de otros casos no cambian.

## Decisiones

- **Sí:** aplicar la estructura de TradingBook a la página completa, incluidos encabezado y pie; mantiene coherencia entre los casos.
- **Sí:** integrar la portada y `Detail01` a `Detail03` en un solo carrusel con leyendas; evita repetir imágenes en una galería inferior.
- **Sí:** retirar `Detail04`, casi cuadrada, por indicación posterior del usuario y llenar la ventana estable con `object-fit: cover`.
- **Sí:** condensar la redacción para las nuevas tarjetas sin cambiar los hechos ni añadir resultados no documentados.
- **Sí:** crear un diagrama de las cuatro capas ya descritas y reutilizar el patrón visual y de movimiento existente.
- **Sí:** mostrar una nota de repositorio privado en la portada.
- **No:** agregar un enlace de código o un botón de contacto en lugar de ese enlace.
- **No:** cambiar otros proyectos, dependencias, metadatos SEO o el JavaScript compartido.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Las capturas tienen proporciones distintas. | Usar una ventana de proporción estable y `object-fit: cover`; revisar las cuatro diapositivas en móvil y escritorio. |
| Las reglas de TradingBook son compartidas por otros casos y podrían alterar su aspecto. | Añadir solo ajustes bajo la clase propia de distribuidores y revisar TradingBook y Salesforce ↔ SAP tras el cambio. |
| La nueva interacción podría continuar animándose fuera de vista o dificultar la lectura. | Reutilizar las condiciones de visibilidad y movimiento reducido, ofrecer control de pausa y comprobar el texto de cada leyenda. |

## Qué no incluye esta especificación

- Editar `trading.html`, la home u otros casos de estudio.
- Cambiar metadatos SEO, URL canónica, analítica o enlaces existentes del caso.
- Añadir imágenes, tecnologías, métricas, resultados o afirmaciones técnicas que no estén documentadas.
- Publicar el código del portal, añadir dependencias o modificar su backend.
