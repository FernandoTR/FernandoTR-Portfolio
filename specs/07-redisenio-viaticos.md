# SPEC 07 — Rediseño del caso Portal de Viáticos

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-16  
> **Objetivo:** Reorganizar `viaticos.html` con la estructura y el lenguaje visual de `trading.html`, integrando la portada y dos capturas en un carrusel y conservando los datos del proyecto.

## Alcance

**Incluye:**

- Adaptar toda la página `viaticos.html` al patrón de TradingBook, incluidos encabezado, pie, jerarquía tipográfica, espaciado y tarjetas. Limitar los ajustes CSS nuevos a Viáticos.
- Reunir `PortalViaticos.png`, `PortalViaticos_Detail01.png` y `PortalViaticos_Detail02.png` en un carrusel con aura, leyendas visibles, avance cada cinco segundos, pausa accesible y apertura en GLightbox. Mostrar cada imagen completa y retirar la galería inferior duplicada.
- Ordenar el caso como portada, funciones principales, detalles del proyecto, arquitectura, control operativo, contribución y resultado. Condensar repeticiones sin perder los datos existentes.
- Convertir las cuatro capas documentadas en un diagrama accesible y conservar la nota de repositorio privado.

**Fuera de alcance:**

- Cambiar hechos del proyecto, metadatos SEO, URL canónica, analítica, imágenes o destinos actuales de los enlaces.
- Editar TradingBook, la página de inicio, otros casos o el JavaScript compartido; añadir dependencias, publicar el repositorio o modificar el sistema original de viáticos.

## Modelo de datos

No se introducen estructuras persistentes ni contratos externos. El carrusel usa, en este orden, `PortalViaticos.png`, `PortalViaticos_Detail01.png` y `PortalViaticos_Detail02.png`, con sus versiones WebP y PNG existentes.

La portada tendrá la leyenda «Vista principal del Portal de Viáticos». Las otras dos conservarán las descripciones actuales: «Creación de solicitud con datos de viaje, importes y documentación inicial» y «Comprobación de gastos con evidencias, documentos fiscales y seguimiento de estatus». El índice activo y el estado de pausa solo existen mientras la página está abierta.

## Plan de implementación

1. Añadir a la sección las clases `project-trading` y `project-viaticos`. Reutilizar los estilos de TradingBook y acotar cualquier regla nueva de `style.css` a Viáticos.
2. Montar el carrusel con las tres imágenes, sus alternativas WebP/PNG, textos accesibles, leyendas y un grupo propio de GLightbox. Mantener la galería actual durante este paso para que las capturas sigan disponibles.
3. Incorporar el aura y el comportamiento inline usado por los casos recientes: avance cada cinco segundos, control de pausa, detención fuera de vista o con la página oculta y respeto a movimiento reducido. Tras comprobar las tres diapositivas, retirar la galería duplicada.
4. Reorganizar las cuatro funciones en tarjetas y reunir descripción, periodo 2020, tipo, empresa, rol, integración, disponibilidad y tecnologías en «Detalles del proyecto».
5. Representar Web MVC, Negocio, Integración y Datos/IIS en un diagrama accesible, usando solo lo ya documentado.
6. Presentar control operativo, contribución y resultado con las tarjetas del patrón TradingBook, conservando las afirmaciones y la nota sobre el repositorio privado.
7. Adaptar encabezado y pie al patrón existente, conservar los destinos de los enlaces, respetar el orden de scripts del repositorio y actualizar la versión de `style.css` referida por esta página.

## Criterios de aceptación

- [ ] La página presenta, en orden, portada, funciones, detalles, arquitectura, control operativo, contribución y resultado, con encabezado y pie coherentes con TradingBook.
- [ ] Conserva periodo 2020, empresa IT Consultant, rol Full Stack .NET Developer, tecnologías, integración con SAP Business One DI API, disponibilidad privada y las afirmaciones actuales sobre funciones y resultado.
- [ ] El carrusel contiene exactamente la portada y `Detail01` y `Detail02`, en ese orden, con leyendas visibles, alternativas WebP/PNG y las tres imágenes en un mismo grupo de GLightbox; la galería inferior ya no aparece.
- [ ] Las tres imágenes se ven completas, sin recorte, en una ventana de altura estable tanto en móvil como en escritorio.
- [ ] El carrusel avanza cada cinco segundos; el control accesible pausa y reanuda el avance y el aura.
- [ ] El avance y el aura se detienen cuando la página está oculta, el carrusel sale de vista o el usuario prefiere movimiento reducido.
- [ ] El diagrama describe las cuatro capas documentadas, tiene texto accesible y se puede recorrer en móvil sin perder contenido.
- [ ] La nota de repositorio privado permanece visible; enlaces, SEO, URL canónica y analítica conservan sus destinos.
- [ ] Tras servir el sitio desde la raíz, Viáticos funciona en móvil y escritorio sin imágenes faltantes, desbordamientos ni errores nuevos de consola; TradingBook y los casos recientes conservan su aspecto.

## Decisiones

- **Sí:** aplicar el patrón de TradingBook a toda la página, incluidos encabezado y pie, para mantener coherencia con los casos recientes.
- **Sí:** reunir portada, solicitud y comprobación en un solo carrusel con leyendas y GLightbox; elimina la repetición de la galería inferior.
- **Sí:** usar `object-fit: contain` para mostrar completas las pantallas, aunque queden márgenes.
- **Sí:** convertir las cuatro capas existentes en un diagrama y condensar frases repetidas sin introducir hechos nuevos.
- **Sí:** reutilizar las clases visuales y el comportamiento inline ya usados por Proveedores, con CSS nuevo limitado a `project-viaticos`.
- **No:** recortar capturas para llenar la ventana, añadir un enlace al repositorio privado, cambiar el JavaScript compartido o modificar otros proyectos.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| La portada y las capturas tienen proporciones distintas. | Usar una ventana estable con `object-fit: contain` y revisar las tres diapositivas en móvil y escritorio. |
| Las clases de TradingBook también se usan en otros casos. | Acotar los ajustes nuevos a `project-viaticos` y comprobar TradingBook, Distribuidores y Proveedores. |
| El movimiento puede continuar fuera de vista o dificultar la lectura. | Reutilizar pausa, detección de visibilidad y `prefers-reduced-motion`; verificar las leyendas y el estado del control. |

## Qué no incluye esta especificación

- Editar TradingBook, la página de inicio u otros casos de estudio.
- Cambiar imágenes, datos del proyecto, metadatos SEO, URL canónica, analítica o destinos de enlaces.
- Publicar el repositorio, añadir dependencias o modificar la aplicación empresarial original.
