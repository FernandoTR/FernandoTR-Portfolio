# SPEC 06 — Rediseño del caso Portal de Proveedores

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-16  
> **Objetivo:** Reorganizar `proveedores.html` con la estructura y el lenguaje visual de `trading.html`, integrando la portada y `Detail01` en un carrusel y conservando los datos del proyecto.

## Alcance

**Incluye:**

- Adaptar la página completa a la jerarquía visual de TradingBook: portada, funciones, detalles, arquitectura, control documental, contribución, resultado, encabezado y pie.
- Integrar `PortalProveedores_inicio.png` y `PortalProveedores_Detail01.png` en un carrusel de dos diapositivas con aura, avance cada cinco segundos, pausa accesible, leyendas visibles y GLightbox.
- Sustituir los cuatro bloques de arquitectura por un diagrama accesible de Web, Reglas, SAP/Datos y Documentos.
- Condensar la redacción sin perder hechos, tecnologías, periodo, empresa, rol, integraciones, disponibilidad ni resultado; conservar la nota de repositorio privado.

**Fuera de alcance:**

- Mostrar `Detail02` en la página; su archivo permanece en el repositorio.
- Cambiar metadatos SEO, URL canónica, analítica o afirmaciones técnicas.
- Editar `trading.html`, la portada del sitio, otros casos o el JavaScript compartido; añadir dependencias o funciones al portal original.

## Modelo de datos

No se introducen estructuras persistentes ni contratos externos. El carrusel usa, en este orden, `PortalProveedores_inicio.png` y `PortalProveedores_Detail01.png`, con sus alternativas WebP existentes. La portada lleva una leyenda descriptiva nueva; `Detail01` conserva la descripción «Consulta y seguimiento de documentos cargados por proveedores». El índice activo y el estado de pausa viven solo mientras la página está abierta.

## Plan de implementación

1. Añadir `project-trading` y una clase exclusiva `project-proveedores` a la sección del caso; reutilizar los estilos existentes y limitar a esa clase cualquier ajuste nuevo en `assets/css/style.css`.
2. Montar el carrusel con portada y `Detail01`, sus leyendas, aura y GLightbox; incorporar el avance, la pausa y las condiciones de visibilidad y movimiento reducido con JavaScript inline. Retirar la galería inferior y la referencia visible a `Detail02` cuando ambas imágenes estén accesibles en el carrusel.
3. Reordenar el contenido en funciones principales, detalles del proyecto, arquitectura, control documental, mi contribución y resultado. Convertir las cuatro capas documentadas en un diagrama accesible y condensar la redacción sin perder datos.
4. Adaptar encabezado y pie al patrón de TradingBook, conservando sus destinos actuales y la nota de repositorio privado. Revisar el CSS de la página y actualizar su versión en el enlace a `style.css`.

## Criterios de aceptación

- [ ] La página muestra, en orden, portada, funciones, detalles, arquitectura, control documental, contribución y resultado; el encabezado y el pie siguen el patrón de TradingBook.
- [ ] Conserva los hechos del proyecto, periodo 2024, empresa IT Consultant, rol, tecnologías, integraciones, disponibilidad, nota de repositorio privado y resultado.
- [ ] El carrusel muestra solo la portada y `Detail01`, con leyendas correspondientes, archivos WebP/PNG y apertura de ambas imágenes en el mismo grupo de GLightbox; `Detail02` deja de mostrarse.
- [ ] Las dos imágenes se muestran completas en una ventana responsive de altura estable con `object-fit: contain`.
- [ ] El carrusel avanza cada cinco segundos y el control accesible pausa y reanuda tanto el avance como el aura.
- [ ] El avance y el aura se detienen cuando la página está oculta, el carrusel sale de vista o está activa la preferencia de movimiento reducido.
- [ ] El diagrama muestra las cuatro capas documentadas, ofrece descripción accesible y puede recorrerse en móvil sin perder contenido.
- [ ] Los enlaces, metadatos SEO, URL canónica y analítica conservan sus destinos; en móvil y escritorio no hay desbordamientos, imágenes faltantes ni errores nuevos en consola.

## Decisiones

- **Sí:** aplicar TradingBook a la página completa y reutilizar sus clases y patrón de interacción; los ajustes CSS nuevos quedan limitados a `project-proveedores`.
- **Sí:** mostrar la portada y `Detail01` en el carrusel, porque esta captura representa el seguimiento documental central del caso.
- **Sí:** mostrar ambas imágenes completas con `object-fit: contain`, aunque pueda haber márgenes dentro de la ventana.
- **Sí:** retirar `Detail02` de la página, conservando el archivo en el repositorio.
- **Sí:** condensar textos repetidos y presentar las cuatro capas existentes en un diagrama; no añadir hechos técnicos ni resultados.
- **No:** publicar un enlace al repositorio privado, agregar dependencias o cambiar el JavaScript compartido.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Las imágenes tienen proporciones distintas y podrían cambiar la altura o perder texto al recortarse. | Usar una ventana responsive de altura estable con `object-fit: contain`; revisar ambos estados en móvil y escritorio. |
| Las clases de TradingBook se usan en otros casos. | Limitar los ajustes nuevos a `project-proveedores` y comprobar que las páginas existentes mantienen su aspecto. |
| El movimiento podría continuar fuera de vista o ignorar preferencias de accesibilidad. | Reutilizar la pausa, la comprobación de visibilidad y `prefers-reduced-motion`; verificar cada estado. |

## Qué no incluye esta especificación

- Mostrar `Detail02` en la página, publicar el código del portal o añadir imágenes.
- Modificar hechos técnicos, resultados, metadatos SEO, URL canónica o analítica.
- Editar la portada del sitio, TradingBook, otros casos o el JavaScript compartido; añadir dependencias o funciones al sistema de proveedores.
