# SPEC 03 — Analítica de visitas con Umami

> **Estado:** En Pausa · **Dependencias:** revisión del aviso de privacidad antes de publicar · **Fecha:** 2026-10-15
> **Objetivo:** Medir visitas y acciones clave del portafolio con Umami Cloud gratuito e informar sobre el tratamiento de datos de analítica y contacto.

## Alcance

**Incluye:**

- Configurar un sitio privado en Umami Cloud Hobby para `byfernandotorres.online`, conservando GitHub Pages como alojamiento.
- Medir desde la carga de `index.html` y los cinco casos públicos: `trading`, `apiSalesforceSap`, `distribuidores`, `proveedores` y `viaticos`.
- Consultar métricas generales y sesiones separadas: fecha, páginas visitadas, dispositivo, navegador, ubicación aproximada cuando esté disponible y duración estimada estándar.
- Registrar vistas de página automáticamente, clics desde la home hacia casos de estudio, clics al CV y envíos confirmados del formulario de contacto.
- Colocar el enlace «Aviso de privacidad» junto a «Ver CV (PDF)» en el pie de `index.html` y `assets/projects/trading.html`. La página de privacidad identificará a Fernando Torres, ofrecerá `germenstr@gmail.com` como contacto y describirá Umami, Web3Forms y hCaptcha.
- Resolver la revisión legal del aviso antes de publicar la analítica, sin inventar ni publicar un domicilio contra la decisión del titular.

**Fuera de alcance:**

- La plantilla interna `assets/projects/project-template.html`.
- Informes o alertas por correo.
- Mostrar la IP exacta, identificar nominalmente a visitantes o guardar una base de datos local de visitas.
- Grabaciones de sesiones, seguimiento de todos los clics o envío del contenido del formulario a Umami.
- Crear un servidor propio, cambiar GitHub Pages o contratar un plan de pago.

## Datos e interfaces

No se introduce una base de datos local. Umami almacena las estadísticas de su sitio en sesiones anónimas; no se llamará a `umami.identify()` ni se configurará `data-distinct-id`.

| Registro | Origen | Datos personalizados enviados a Umami |
| --- | --- | --- |
| Vista de página | Carga de cada página pública | Ninguno; excluir parámetros de búsqueda y fragmentos `#` |
| `project_open` | Clic desde la home hacia un caso de estudio | `project`: `trading`, `apiSalesforceSap`, `distribuidores`, `proveedores` o `viaticos` |
| `cv_open` | Clic en un enlace al CV | Ninguno |
| `contact_sent` | Respuesta satisfactoria de Web3Forms | Ninguno |

Los campos y servicios del formulario existentes permanecen igual. Nombre, correo, mensaje y respuesta de hCaptcha nunca se envían a Umami. `cv_open` mide la intención de abrir el CV, no la finalización de una descarga.

## Plan de implementación

**Condición previa a la publicación:** resolver mediante revisión legal cómo ofrecer un aviso válido sin publicar un domicilio personal. Si no existe una solución válida, se puede preparar y verificar el código localmente, pero no activar la analítica en producción.

1. Crear un sitio privado en el plan gratuito Umami Cloud Hobby para `byfernandotorres.online` y obtener su identificador de sitio. El portafolio sigue funcionando sin cambios.
2. Crear `privacidad.html` con texto revisado sobre analítica, contacto, Web3Forms y hCaptcha. No inventar datos para completar el aviso.
3. Añadir el enlace «Aviso de privacidad» junto al enlace del CV en el pie de `index.html` y `assets/projects/trading.html`; incorporar solo los estilos necesarios en `assets/css/style.css`.
4. Añadir el script de Umami a esas seis páginas, limitado al dominio de producción y sin parámetros de búsqueda, fragmentos ni identificación personalizada. Excluir `assets/projects/project-template.html`.
5. Registrar `project_open` y `cv_open` sin alterar sus enlaces. Registrar `contact_sent` únicamente en la rama que confirma el éxito de Web3Forms.
6. Una vez resuelta la condición legal, publicar y verificar visitas reales, sesiones y los tres tipos de acciones en Umami.

Cada paso deja el sitio navegable y el formulario operativo.

## Criterios de aceptación

- [ ] Umami Cloud usa el plan gratuito, con estadísticas privadas y conservación de seis meses.
- [ ] La home y los cinco casos públicos registran una vista cada uno en producción; la plantilla interna y `localhost` no se registran.
- [ ] No se envían a Umami parámetros de búsqueda, fragmentos `#`, identificadores personales ni datos escritos en el formulario.
- [ ] Cada clic desde la home a un caso de estudio registra `project_open` con el proyecto correcto, sin alterar el enlace.
- [ ] Los enlaces al CV registran `cv_open`, sin afirmar que la descarga terminó.
- [ ] `contact_sent` se registra una sola vez tras un envío confirmado; la validación fallida o el error de Web3Forms no lo registran.
- [ ] Umami muestra métricas generales y sesiones con páginas visitadas, fecha, dispositivo, navegador, ubicación aproximada cuando esté disponible y duración estimada estándar. No muestra la IP exacta.
- [ ] El enlace «Aviso de privacidad» aparece junto a «Ver CV (PDF)» en el pie de `index.html` y `assets/projects/trading.html` y abre `privacidad.html`, que describe también Web3Forms y hCaptcha.
- [ ] La revisión del aviso queda resuelta antes de publicar la analítica; el texto no inventa un domicilio.
- [ ] Si Umami no carga, navegación, galerías, CV y formulario siguen funcionando en móvil y escritorio.
- [ ] No se configuran informes ni notificaciones por correo.

## Decisiones tomadas y descartadas

- **Sí:** Umami Cloud Hobby para el dominio del portafolio. Es la elección final del titular y permite conservar GitHub Pages.
- **Sí:** medir desde que carga la página y consultar métricas generales junto con sesiones separadas.
- **Sí:** usar la duración estimada estándar y la conservación de seis meses del plan gratuito.
- **Sí:** registrar solo aperturas de proyectos, clics al CV y envíos de contacto confirmados. Estos eventos responden a las acciones solicitadas sin seguir todos los clics.
- **Sí:** usar sesiones anónimas sin identificación explícita. Umami puede procesar la IP de conexión para estimar la ubicación, pero no se mostrará ni se guardará una IP exacta en los informes del sitio.
- **Sí:** preparar un enlace visible y una página de privacidad, con publicación condicionada a resolver la revisión legal sin divulgar un domicilio personal.
- **No:** PostHog, considerado inicialmente y sustituido por Umami a petición del titular.
- **No:** Umami Pro, informes semanales y notificaciones por correo; el titular eligió el plan gratuito y retiró el requisito de correo.
- **No:** registros propios del servidor o un servidor nuevo para obtener IP exactas; quedan fuera del alcance del sitio estático en GitHub Pages.

## Riesgos y límites

- **Aviso de privacidad:** sin una solución jurídicamente válida para el requisito de domicilio, la publicación de la analítica queda detenida. El aviso no debe inventar datos ni incluir un domicilio que Fernando Torres no desea publicar.
- **Medición incompleta:** bloqueadores, restricciones del navegador o fallas al cargar Umami pueden impedir el registro de visitas y eventos. Esto no debe afectar el funcionamiento del sitio.
- **Estimaciones:** la ciudad puede ser imprecisa o no estar disponible; la duración de una visita con una sola página puede no resultar útil. Las sesiones anónimas tampoco equivalen necesariamente a personas únicas.
- **Plan gratuito:** la conservación de seis meses y el límite de eventos del plan Hobby restringen el historial y el volumen medible.

## Qué no incluye esta especificación

- Informes o alertas por correo, incluido el resumen semanal planteado al inicio.
- IP exacta, registros propios del servidor o identificación nominal de visitantes.
- Grabaciones de sesiones, seguimiento de todos los clics o contenido escrito en el formulario.
- Analítica en la plantilla interna de proyectos.
- Cambiar GitHub Pages, contratar un plan de pago o crear un servidor.
