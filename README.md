<div align="center">
  <img src="assets/imgs/logo-light.svg" alt="Logo de Fernando Torres" height="84" />

  <h1>Fernando Torres | Portafolio profesional</h1>

  <p>Desarrollo Full Stack .NET, software empresarial e integraciones entre SAP Business One y Salesforce.</p>

  <p>
    <a href="https://byfernandotorres.online/">Ver sitio</a> ·
    <a href="assets/docs/FernandoTorres_CV.pdf">Abrir CV</a> ·
    <a href="https://www.linkedin.com/in/fernandotorresrivera">LinkedIn</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JavaScript-0e0f0f?style=flat-square" alt="HTML, CSS y JavaScript" />
    <a href="https://byfernandotorres.online/"><img src="https://img.shields.io/badge/GitHub%20Pages-en%20línea-e69955?style=flat-square&amp;logo=github" alt="Publicado en GitHub Pages" /></a>
  </p>
</div>

[Características](#características) · [Proyectos](#proyectos-destacados) · [Ejecución local](#ejecución-local) · [Mantenimiento](#mantenimiento) · [Publicación](#publicación)

## Descripción

Sitio personal de **Fernando Torres**, Ingeniero en Informática y Desarrollador Full Stack .NET. Reúne experiencia profesional, tecnologías, formación, certificaciones y casos de estudio para que reclutadores y equipos técnicos puedan conocer su trabajo y ponerse en contacto.

Cada caso presenta el problema, la solución técnica, la aportación de Fernando y los resultados, con diagramas y capturas de la aplicación.

> [!NOTE]
> El portafolio es un sitio estático: no necesita instalar paquetes, compilar ni ejecutar un backend .NET. Las tecnologías .NET, SQL Server y SAP corresponden a los proyectos presentados.

## Características

- **Perfil y trayectoria:** experiencia profesional, formación, certificaciones, enlaces profesionales y CV en PDF.
- **Proyectos con evidencia:** cuadrícula adaptable y cinco casos de estudio independientes con galerías GLightbox.
- **Contacto:** Web3Forms y hCaptcha, validación de campos y estados de envío, éxito y error.
- **Experiencia visual:** tema oscuro, navegación adaptable, animaciones con soporte para movimiento reducido y efectos Three.js de carga condicional.
- **Optimización y SEO:** imágenes WebP con fallbacks PNG/JPG, carga diferida, canonical, Open Graph, Twitter Cards y JSON-LD.
- **Analítica:** Umami Cloud para visitas y eventos de proyectos, CV y contacto, con [aviso de privacidad](privacidad.html).

## Tecnologías del sitio

| Área | Implementación |
| --- | --- |
| Base | HTML5, CSS3 y JavaScript; contenido en español de México (`es-MX`) |
| Interfaz | Bootstrap, jQuery, Font Awesome y GLightbox |
| Animación | GSAP y Three.js; estilos y scripts propios |
| Servicios externos | Web3Forms, hCaptcha, Umami Cloud y Google Fonts |
| Publicación | GitHub Pages con dominio personalizado |

Las bibliotecas de interfaz se incluyen en `assets/`; no hay `package.json`, bundler ni proceso de build.

## Proyectos destacados

| Caso de estudio | Solución | Tecnologías principales |
| --- | --- | --- |
| [Trading Book](assets/projects/trading.html) | Registro y análisis de operaciones con criptomonedas. [Código fuente](https://github.com/FernandoTR/NET-TradingBookApp). | .NET 10, ASP.NET Core MVC, EF Core, SQL Server, Clean Architecture, Chart.js |
| [Integración Salesforce–SAP Business One](assets/projects/apiSalesforceSap.html) | API REST para órdenes de venta, clientes, inventario, precios y productos. | .NET 8, C#, JWT, OAuth 2.0, Salesforce API, SAP B1, SAP HANA |
| [Portal de Distribuidores](assets/projects/distribuidores.html) | Plataforma B2B con catálogo, pedidos, pagos y preórdenes integradas con SAP. | ASP.NET MVC, C#, SQL Server, SAP B1 API, PayPal, Crystal Reports |
| [Portal de Proveedores](assets/projects/proveedores.html) | Validación de CFDI, control documental y consulta del estado de pago. | ASP.NET MVC, C#, SQL Server, SAP DI API, XML |
| [Portal de Viáticos](assets/projects/viaticos.html) | Solicitudes, comprobaciones, autorizaciones y evidencias de gastos. | ASP.NET MVC, C#, SQL Server, SAP B1 DI API, XML, PDF |

Los proyectos empresariales se documentan como casos de estudio; su código es privado.

## Ejecución local

Necesitas **Git**, **Python 3** y un navegador moderno.

1. Clona el repositorio y entra en su carpeta:

   ```bash
   git clone https://github.com/FernandoTR/FernandoTR-Portfolio.git portfolio
   cd portfolio
   ```

2. Inicia un servidor estático desde la raíz del proyecto.

   **Windows:**

   ```powershell
   py -m http.server 8080
   ```

   **macOS / Linux:**

   ```bash
   python3 -m http.server 8080
   ```

3. Abre [http://localhost:8080](http://localhost:8080). Detén el servidor con `Ctrl+C`.

> [!TIP]
> También puedes usar Live Server en VS Code. Sirve siempre la raíz del repositorio por HTTP; evita abrir las páginas con `file://`.

El formulario, las fuentes de Google y la analítica usan servicios externos y requieren conexión. Umami está restringido al dominio de producción mediante `data-domains`, por lo que las visitas a `localhost` no se registran.

## Estructura del proyecto

```text
.
├── index.html                  # Perfil, proyectos, experiencia, tecnologías y contacto
├── privacidad.html             # Aviso sobre analítica y datos de contacto
├── CNAME                       # Dominio de producción
├── DESIGN.md                   # Identidad visual y componentes
├── PRODUCT.md                  # Propósito, audiencia y restricciones
├── specs/                      # Especificaciones y decisiones de implementación
└── assets/
    ├── css/                    # style.css y estilos de bibliotecas
    ├── docs/FernandoTorres_CV.pdf
    ├── fonts/                  # Fuentes de iconos locales
    ├── imgs/                   # Logo, retrato, tecnologías y capturas en works/
    ├── js/                     # scripts.js, bibliotecas y efectos visuales
    └── projects/               # Cinco casos de estudio y project-template.html
```

## Mantenimiento

### Contenido y diseño

- Edita perfil, experiencia, tarjetas de proyectos y contacto en [`index.html`](index.html).
- Ajusta los estilos en [`assets/css/style.css`](assets/css/style.css) y el comportamiento compartido en [`assets/js/scripts.js`](assets/js/scripts.js). Los inicializadores del formulario y la carga condicional de Three.js están en `index.html`.
- Sustituye el CV en `assets/docs/FernandoTorres_CV.pdf` y conserva las rutas de sus enlaces.
- Consulta [`DESIGN.md`](DESIGN.md), [`PRODUCT.md`](PRODUCT.md) y las [especificaciones](specs/) para mantener la identidad y las decisiones del sitio.

### Agregar un proyecto

1. Copia [`project-template.html`](assets/projects/project-template.html) dentro de `assets/projects/` con un nombre propio.
2. Completa contenido, capturas y metadatos específicos. La plantilla conserva `noindex, nofollow`; ajusta esa directiva cuando el caso esté listo para publicarse.
3. Añade las imágenes en `assets/imgs/works/`, con versiones WebP y fallbacks PNG/JPG, y crea su tarjeta en `.portfolio-grid` de `index.html`.
4. Usa rutas `assets/...` en la página principal y `../../assets/...` en los casos. Conserva el regreso a `../../index.html#portfolio` y verifica la galería GLightbox.

### Formulario y analítica

- Conserva la clave `access_key` de Web3Forms, `h-captcha-response`, los IDs de campos y errores, `#contact-submit-btn` y `#toast`, salvo que actualices también su JavaScript.
- hCaptcha se carga cuando el visitante se acerca al formulario. Comprueba tanto los errores de validación como la respuesta del servicio.
- Umami se incluye en la página principal y los cinco casos públicos. Registra `project_open`, `cv_open` y `contact_sent`; este último se envía tras una respuesta de éxito de Web3Forms. No se envía el contenido del formulario a Umami.
- Mantén [`privacidad.html`](privacidad.html) alineado con los servicios utilizados.

> [!IMPORTANT]
> Respeta el orden de carga: jQuery → jQuery Migrate → `plugins.js` → plugins específicos, como GLightbox → `scripts.js` → inicializadores correspondientes.

## Publicación

El sitio se publica directamente desde los archivos del repositorio en **GitHub Pages**:

1. En **Settings → Pages**, selecciona **Deploy from a branch**, la rama que quieras publicar y la carpeta **`/ (root)`**.
2. Configura el dominio personalizado `byfernandotorres.online`, sus registros DNS y HTTPS.
3. Conserva [`CNAME`](CNAME) y las URLs canonical, Open Graph, Twitter y JSON-LD alineadas con `https://byfernandotorres.online/`.

No hay un workflow de CI propio en el repositorio. GitHub Pages sirve el HTML y los recursos estáticos sin una compilación de la aplicación.

### Verificación antes de publicar

- [ ] Revisar la página principal y los casos de estudio en escritorio y móvil.
- [ ] Recorrer navegación, enlaces y tarjetas con teclado; comprobar foco visible y movimiento reducido.
- [ ] Abrir las galerías GLightbox y comprobar imágenes y fallbacks.
- [ ] Validar el formulario: campos vacíos, correo inválido, hCaptcha, envío y estados de error.
- [ ] Abrir el CV y los enlaces profesionales y de privacidad.
- [ ] Revisar metadatos sociales y URLs de producción; comprobar los eventos de Umami en el dominio publicado.
- [ ] Ejecutar Lighthouse para detectar regresiones de rendimiento, accesibilidad y SEO.
