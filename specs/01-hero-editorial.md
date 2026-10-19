# SPEC 01 — Hero con perfil integrado

> **Estado:** Cerrado · **Dependencias:** Ninguna · **Fecha:** 2026-10-08
> **Objetivo:** Integrar `author-profile` exclusivamente en el hero y ampliar las secciones posteriores, conservando los estilos existentes y simplificando la jerarquía del texto.

## Alcance y auditoría

**Incluido:**

- Integrar fotografía, nombre, redes y CV dentro de `#home`.
- Liberar la columna lateral de las secciones posteriores y alinear la navegación al contenedor.
- Corregir el perfil parcialmente fuera de pantalla, su aparición antes del titular en móvil y los encabezados usados como etiquetas.
- Conservar fondo oscuro, fotografía, fuentes, colores, datos profesionales y enlaces existentes.

**Fuera del alcance:**

- Rediseño visual de otras secciones y casos de estudio.
- Cambios en el funcionamiento del formulario.
- Datos profesionales, dependencias o fuentes nuevas.
- Refinamiento visual del paso 4, omitido por solicitud del usuario: retirada de tarjeta, chips, inclinación y brillos, nuevos espaciados y mejoras de controles.

## Datos e interfaces

Esta mejora no introduce estructuras de datos ni interfaces públicas nuevas. Reutiliza la fotografía, las tecnologías, la experiencia y los enlaces actuales.

Se conservan los IDs de navegación, los atributos de inicialización del carrusel y los contratos del formulario. Se retira `sticky_item` únicamente del perfil de la home; los casos de estudio conservan ese ID y su inicialización compartida.

## Diseño acordado

- Mostrar «Fernando Torres» como identidad y **«Desarrollador Full Stack .NET»** como único H1 del hero.
- Colocar debajo «Software empresarial que conecta operación, datos y negocio».
- Seguir la columna izquierda de la referencia visual aprobada posteriormente: saludo, título en dos líneas, propuesta, chips, tres métricas y botones «Ver proyectos» y «Ver CV»; sustituir el bloque anterior «Perfil profesional» en el hero.
- Reutilizar las cifras existentes de experiencia: +9 años, +4 portales y reducción aproximada del 80 % de inconsistencias en integración Salesforce–SAP.
- Desde 992 px: texto a la izquierda y perfil a la derecha, con proporción 1.8:1 y separación adaptable. Por debajo: texto primero y perfil después; en teléfonos estrechos, métricas en filas.
- Conservar la tarjeta, inclinación, brillos, chips y estilos actuales de los controles. Mantener CV y redes junto al perfil.
- Mantener los ajustes mínimos del paso 1 para que el perfil permanezca en el flujo del hero con altura natural.

## Plan de implementación

1. En `index.html`, mover la única instancia de `author-profile` dentro de `#home`, retirar su contenedor fijo y su ID `sticky_item`; conservar imágenes y enlaces. Ajustar en el mismo paso los estilos necesarios para que el perfil permanezca en el flujo del hero.
2. Sustituir las columnas `col-lg-9 offset-lg-3` de contenido y navegación por columnas de ancho completo. Mantener IDs, anclas y atributos de inicialización.
3. Aplicar el texto y orden acordados; convertir los encabezados decorativos del hero en elementos de texto.
4. **Omitido por solicitud del usuario.** Los cambios de refinamiento editorial se revirtieron; conservar los estilos anteriores al paso 4 y los ajustes de los pasos 1, 2 y 3.
5. Mantener intacta la inicialización sticky de `assets/js/scripts.js`: los casos de estudio todavía utilizan `#sticky_item`.

Cada paso debe dejar la página funcional y servible desde la raíz por HTTP.

## Criterios de aceptación

- [x] Existe una sola instancia de `author-profile`, dentro de `#home`, y sale de pantalla al avanzar.
- [x] No hay columna lateral vacía, recortes ni desplazamiento horizontal a 390, 768, 992 y 1440 px.
- [x] El orden móvil y las dos columnas desde 992 px corresponden al diseño acordado.
- [x] CV, redes, menú móvil y anclas funcionan con sus estilos existentes.
- [x] El hero conserva la tarjeta y los chips anteriores al paso 4, sin añadir movimiento decorativo nuevo.
- [x] Carrusel y formulario mantienen sus contratos y distribución; no aparecen errores nuevos de JavaScript.
- [ ] Un caso de estudio conserva su comportamiento sticky y galería.

Verificar en navegador después de servir el repositorio desde su raíz. No enviar mensajes reales mediante el formulario como parte de la comprobación.

## Decisiones tomadas y descartadas

- **Sí:** integrar el perfil en el hero conservando su apariencia previa, por solicitud posterior del usuario de omitir el paso 4.
- **Sí:** reutilizar fotografía, fuentes, colores y enlaces existentes, para mantener la identidad y evitar dependencias nuevas.
- **Sí:** ampliar el contenido posterior y alinear la navegación, para eliminar el espacio reservado al perfil fijo.
- **Sí:** conservar el JavaScript sticky compartido y retirar su ID solo en la home, para preservar los casos de estudio.
- **Omitido:** retirar tarjeta exterior, chips decorativos, inclinación y brillos, modificar los espacios y ampliar los controles a 44 × 44 px. Estas mejoras del paso 4 no forman parte de la entrega actual.
- **No:** nuevas cifras profesionales o rediseño de otras secciones, porque exceden el alcance confirmado.

## Riesgos identificados

| Riesgo | Mitigación |
| --- | --- |
| Los estilos existentes mantienen limitaciones de accesibilidad y decoración detectadas en la auditoría. | Dejar explícito que las mejoras del paso 4 se omiten; no declarar cumplimiento AA ni objetivos de 44 × 44 px sin verificarlos. |
| El mayor ancho altera la distribución del carrusel o formulario. | Verificar ambos en escritorio y móvil conservando sus contratos de inicialización. |
| Cambios en código compartido afectan los proyectos. | Conservar `sticky_item` fuera de la home y revisar un caso de estudio. |

## Evidencia y límites de la auditoría

Se revisaron el código, el detector de Impeccable y el hero local con viewports de escritorio y móvil. Las alertas del detector ajenas al hero se excluyeron de esta especificación.

No se comprobaron envíos reales del formulario ni dispositivos físicos. La revisión móvil utilizó un viewport emulado.

## Qué no incluye esta especificación

- Rediseño de los casos de estudio o de las demás secciones.
- Cambios funcionales en el formulario o servicios externos.
- Nuevas dependencias, fuentes, fotografías o afirmaciones profesionales.
- Refinamiento editorial y mejoras de accesibilidad del paso 4 omitido.

## Resultado de implementación y verificación

- Pasos 1, 2, 3 y 5 completados; paso 4 omitido y revertido por solicitud del usuario.
- Verificados viewports efectivos de 390, 768, 992 y 1440 px sin desbordamiento horizontal. Texto primero en móvil y dos columnas desde 992 px.
- Verificados una sola instancia de author-profile dentro de #home, ausencia de columna lateral vacía y salida del perfil de pantalla al navegar a contacto.
- Verificados avance del carrusel, apertura del menú móvil y navegación al contacto.
- CV local presente; destinos, nombres accesibles y atributos de los enlaces profesionales conservados. No se comprobaron los servicios externos de redes sociales.
- El formulario vacío queda bloqueado por validación nativa. No se probaron envío real, resolución de hCaptcha ni respuestas de Web3Forms.
- Galería GLightbox de Trading Book verificada: apertura, imagen cargada, avance y cierre. Sin errores de consola capturados en home y Trading Book.
- scripts.js y trading.html permanecen sin cambios. La inicialización sticky y el ID del proyecto se conservan; no se confirmó visualmente su activación durante el desplazamiento. El último criterio permanece pendiente y el estado sigue Aprobado.
- git diff --check pasa para los archivos de implementación. No se hicieron commit, merge ni publicación.
