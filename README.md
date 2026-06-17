<div align="center">
  <img src="assets/imgs/logo-light.svg" alt="Fernando Torres" height="84" />

  <h1>Fernando Torres | Personal Portfolio & Resume</h1>

  <p><strong>Portafolio profesional de un Desarrollador Full Stack .NET enfocado en software empresarial, backend, datos e integraciones.</strong></p>

  <p>
    <a href="https://byfernandotorres.online/">Ver sitio</a> ·
    <a href="#proyectos-destacados">Proyectos</a> ·
    <a href="#ejecución-local">Ejecución local</a> ·
    <a href="#personalización">Personalización</a>
  </p>

  <p>
    <a href="https://byfernandotorres.online/"><img src="https://img.shields.io/badge/site-byfernandotorres.online-e69955?style=flat-square" alt="Sitio web" /></a>
    <img src="https://img.shields.io/badge/static-HTML%20%7C%20CSS%20%7C%20JS-0e0f0f?style=flat-square" alt="Static HTML CSS JS" />
    <img src="https://img.shields.io/badge/deploy-GitHub%20Pages-222?style=flat-square&logo=github" alt="GitHub Pages" />
    <img src="https://img.shields.io/badge/contact-Web3Forms-146ef5?style=flat-square" alt="Web3Forms" />
  </p>
</div>

## Descripción

Este repositorio contiene el sitio personal de **Fernando Torres**, Ingeniero en Informática y **Full Stack .NET Developer** con más de 9 años de experiencia construyendo aplicaciones web, APIs, sistemas internos e integraciones empresariales.

El sitio está pensado como una carta de presentación técnica: resume experiencia profesional, stack principal, certificaciones, CV descargable y case studies de proyectos reales enfocados en automatización, SAP Business One, Salesforce, SQL Server y desarrollo .NET.

> [!NOTE]
> Es un sitio estático. No requiere framework, bundler ni proceso de build para ejecutarse localmente o publicarse en GitHub Pages.

## Características

- Landing personal con perfil, enlaces profesionales y CV en PDF.
- Carrusel de proyectos relevantes con tarjetas optimizadas y enlaces a case studies.
- Páginas individuales para proyectos con contexto, arquitectura, tecnologías, rol, capturas y resultados.
- Sección de experiencia profesional, formación técnica y certificaciones.
- Sección de stack técnico orientada a backend, frontend, datos e integraciones.
- Formulario de contacto con Web3Forms, hCaptcha, validación cliente y mensajes de estado accesibles.
- SEO básico y social sharing con canonical, Open Graph, Twitter Cards y JSON-LD.
- Imágenes WebP con fallback PNG/JPG, lazy loading y lightbox para galerías.
- Animación de fondo con Three.js cargada de forma condicional para cuidar rendimiento.

## Stack del sitio

| Área | Tecnologías |
| --- | --- |
| Base | HTML5, CSS3, JavaScript |
| UI | Bootstrap, Font Awesome, Swiper, GLightbox |
| Interacción | jQuery, scripts propios, Three.js condicional |
| Formulario | Web3Forms, hCaptcha |
| SEO | Metadata social, JSON-LD, canonical URLs |
| Hosting | GitHub Pages con dominio personalizado |

## Stack profesional presentado

El contenido del portafolio destaca experiencia con:

- **Backend:** C#, .NET, ASP.NET MVC, ASP.NET Web API, Entity Framework.
- **Datos:** SQL Server, SAP HANA, modelado y optimización de consultas.
- **Frontend:** JavaScript, TypeScript, Angular, jQuery, Bootstrap.
- **Integraciones:** REST, SOAP, SAP Business One, SAP DI API, Salesforce REST API.
- **Herramientas:** Git, GitHub, Azure DevOps, Swagger, Postman, IIS.

## Proyectos destacados

| Proyecto | Enfoque | Stack principal | Disponibilidad |
| --- | --- | --- | --- |
| [Trading Book](assets/projects/trading.html) | Plataforma analítica para registrar y evaluar operaciones de trading cripto. | .NET 10, ASP.NET Core MVC, EF Core, SQL Server, Clean Architecture, Chart.js | [Código fuente](https://github.com/FernandoTR/NET-TradingBookApp) |
| [API Integración Salesforce SAP B1](assets/projects/apiSalesforceSap.html) | API REST para sincronizar órdenes, clientes, inventario, precios y productos entre CRM y ERP. | .NET 8, C#, REST API, JWT, OAuth 2.0, Salesforce API, SAP B1, SAP HANA | Privado |
| [Portal de Distribuidores](assets/projects/distribuidores.html) | Portal B2B para catálogo, carrito, checkout y preórdenes integradas con SAP Business One. | ASP.NET MVC, C#, SQL Server, SAP B1 API, PayPal, Crystal Reports | Privado |
| [Portal de Proveedores](assets/projects/proveedores.html) | Validación CFDI, control documental y autoservicio para proveedores integrado con SAP B1. | ASP.NET MVC, C#, SQL Server, SAP DI API, CFDI, Bootstrap | Privado |
| [Portal de Viáticos](assets/projects/viaticos.html) | Gestión de solicitudes, comprobaciones, autorizaciones y evidencias de viáticos. | ASP.NET MVC, C#, SQL Server, SAP B1 DI API, IIS, XML, PDF | Privado |

## Estructura del proyecto

```text
.
├── CNAME
├── README.md
├── index.html
└── assets/
    ├── css/
    │   ├── plugins.css
    │   ├── style.css
    │   └── plugins/
    ├── docs/
    │   └── FernandoTorres_CV.pdf
    ├── fonts/
    ├── imgs/
    │   ├── header/
    │   ├── skills/
    │   └── works/
    ├── js/
    │   ├── scripts.js
    │   ├── plugins.js
    │   ├── glightbox.min.js
    │   ├── jquery-3.6.0.min.js
    │   ├── jquery-migrate-3.4.0.min.js
    │   ├── three.min.js
    │   └── cdemo.js
    └── projects/
        ├── trading.html
        ├── apiSalesforceSap.html
        ├── distribuidores.html
        ├── proveedores.html
        ├── viaticos.html
        └── project-template.html
```

## Ejecución local

Clona el repositorio y levanta un servidor estático desde la raíz del proyecto.

```bash
git clone <repository-url>
cd "FTORRES - Personal Portfolio & Resume"
```

Opción con Python en Windows:

```powershell
py -m http.server 8080
```

Opción con Python en macOS/Linux:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador.

> [!TIP]
> También puedes usar extensiones como Live Server en VS Code. Lo importante es servir el sitio por HTTP y no abrir los archivos directamente con `file://`.



## Personalización

Los puntos principales de edición están concentrados en archivos estáticos:

- `index.html`: perfil, experiencia, proyectos del carrusel, tecnologías, certificaciones y formulario.
- `assets/projects/*.html`: case studies individuales de cada proyecto.
- `assets/projects/project-template.html`: plantilla interna para crear nuevos proyectos, marcada como `noindex`.
- `assets/css/style.css`: estilos visuales principales y componentes personalizados.
- `assets/js/scripts.js`: comportamiento global del tema y utilidades del sitio.
- `assets/docs/FernandoTorres_CV.pdf`: CV descargable.
- `assets/imgs/works/`: capturas principales, galerías y versiones WebP.

> [!IMPORTANT]
> Si cambias imágenes de proyectos, conserva el fallback PNG/JPG y genera también la versión WebP correspondiente para mantener rendimiento y compatibilidad.

## Checklist de calidad

Antes de publicar cambios, conviene validar:

- La home carga correctamente en escritorio y móvil.
- El carrusel de proyectos responde a mouse, teclado y touch.
- Las galerías de proyectos abren con GLightbox.
- El formulario valida campos, hCaptcha y envío con Web3Forms.
- Los enlaces externos abren correctamente.
- El CV se descarga o abre desde `assets/docs/FernandoTorres_CV.pdf`.
- Las rutas canonical, Open Graph y Twitter Cards apuntan al dominio final.
- Lighthouse no reporta regresiones importantes en Performance, Accessibility, Best Practices y SEO.
