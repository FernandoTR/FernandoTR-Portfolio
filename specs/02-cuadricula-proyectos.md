# SPEC 02 — Cuadrícula de proyectos

> **Estado:** Implementado · **Dependencias:** Ninguna · **Fecha:** 2026-10-09
> **Objetivo:** Sustituir el carrusel de `#portfolio` por una cuadrícula responsive de cinco tarjetas que conserve el contenido, el orden y los enlaces actuales.

## Alcance

**Incluido:**

- Sustituir el carrusel de `#portfolio` en `index.html` por cinco tarjetas en el orden actual.
- Mostrar dos columnas desde 768 px en tablet y escritorio, y una por debajo de 768 px; alinear a la izquierda la tarjeta final.
- Destacar las capturas y conservar los textos, enlaces de detalle, repositorio de Trading Book y etiquetas «Privado».
- Reducir el espacio sobrante y reservar el ámbar para los enlaces de acción y el foco de teclado, siguiendo la identidad visual existente.
- Ajustar los estilos de la sección en `assets/css/style.css` y retirar de ella los controles y atributos de inicialización del carrusel.

**Fuera del alcance:**

- Cambios en los casos de estudio, otros carruseles, navegación, formulario o contenido y metadatos de la página.

## Datos e interfaces

Esta sección no introduce estructuras de datos ni interfaces públicas nuevas. Reutiliza el contenido, las imágenes y los destinos de enlace actuales.

Se eliminan de `#portfolio` el marcado y los controles de Swiper; las demás instancias de Swiper del sitio conservan su inicialización.

## Plan de implementación

1. En `index.html`, retirar los controles y el marcado Swiper de `#portfolio`; presentar las cinco tarjetas en una cuadrícula semántica, conservando contenido, orden, capturas, etiquetas y enlaces.
2. En `assets/css/style.css`, aplicar las columnas responsive acordadas, reducir los espacios sobrantes y ajustar el énfasis visual de capturas, CTA y foco.
3. Servir la home desde la raíz por HTTP y revisar la cuadrícula en móvil, tablet y escritorio; comprobar orden, enlaces y etiquetas.

## Criterios de aceptación

- [x] La sección muestra cinco tarjetas en el orden y con el contenido actuales.
- [x] La cuadrícula tiene una columna por debajo de 768 px y dos desde 768 px en adelante; la tarjeta final queda alineada a la izquierda.
- [x] Las capturas se aprecian con claridad y se conservan los enlaces de detalle, el repositorio de Trading Book y las cuatro etiquetas «Privado».
- [x] La sección ya no muestra controles ni depende de la inicialización Swiper.
- [x] El espacio sobrante se reduce y el ámbar se reserva para CTA y foco de teclado.
- [x] La home se sirve por HTTP sin recursos faltantes ni errores nuevos en consola.

## Decisiones tomadas y descartadas

- **Sí:** reemplazar el carrusel por una cuadrícula estática; los cinco proyectos quedarán visibles sin navegación entre slides.
- **Sí:** usar el corte de 768 px para pasar de una a dos columnas y mantener dos en escritorio, alineando a la izquierda la última fila incompleta.
- **Sí:** mantener contenido y destinos actuales, y reservar el ámbar para CTA y foco.
- **No:** cambiar casos de estudio, otros carruseles o secciones de la home; quedan fuera de esta especificación.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Los estilos actuales dependen de clases de Swiper para dimensionar tarjetas e imágenes. | Reemplazar esos selectores por estilos acotados a la nueva cuadrícula de proyectos y verificar el diseño en los tres tamaños acordados. |
| La inicialización compartida de Swiper podría afectar otros carruseles si se modifica globalmente. | Retirar solo los atributos y controles de `#portfolio`; no cambiar `assets/js/scripts.js`. |

## Qué no incluye esta especificación

- Rediseñar los casos de estudio u otros carruseles.
- Cambiar textos, imágenes, enlaces, formulario, navegación o metadatos.
- Añadir dependencias o modificar la inicialización compartida de Swiper.
