# AGENTS.md

## Repo Shape
- Static GitHub Pages portfolio; there is no `package.json`, build step, test runner, linter, formatter, or CI workflow in this repo.
- Serve from the repo root, not via `file://`: Windows `py -m http.server 8080`, macOS/Linux `python3 -m http.server 8080`, then open `http://localhost:8080`.
- Production domain is fixed by `CNAME`: `byfernandotorres.online`. Keep canonical, Open Graph, Twitter, and JSON-LD URLs aligned to that domain.

## Main Files
- `index.html` is the home page and contains the portfolio carousel, contact form, SEO metadata, inline Web3Forms/hCaptcha submit logic, and conditional Three.js loader.
- `assets/projects/*.html` are standalone case-study pages. They use `../../assets/...` paths; the home page uses `assets/...` paths.
- `assets/projects/project-template.html` is the internal template and is intentionally `noindex, nofollow`.
- Custom code lives in `assets/css/style.css` and `assets/js/scripts.js`; vendored/minified plugin assets live under `assets/css/plugins/` and `assets/js/`.

## Change Notes
- Preserve script order on pages: jQuery, jQuery migrate, `plugins.js`, page-specific plugin scripts such as `glightbox.min.js`, then `scripts.js` and inline initializers.
- `assets/js/scripts.js` initializes Swiper from `data-carousel="swiper"` and related `data-swiper` attributes; changing carousel classes/IDs can silently break navigation.
- Project images use WebP plus PNG/JPG fallbacks. When adding or replacing project imagery, keep both formats and update references in the home card and project page.
- When adding a project, update the home carousel in `index.html`, create/copy a page under `assets/projects/`, set page-specific canonical/OG/Twitter metadata, and link back to `../../index.html#portfolio`.
- Contact form IDs/names are consumed by inline JS and Web3Forms/hCaptcha. If editing the form, preserve the hidden Web3Forms access key field, `h-captcha-response`, `#contact-submit-btn`, field IDs, error IDs, and `#toast` behavior unless changing the JS too.
- Site copy and metadata are Spanish Mexico (`<html lang="es-MX">`); keep user-facing content consistent with that locale.

## Manual Verification
- No automated checks are configured; verify changes in a browser after serving locally.
- Check desktop and mobile layouts, portfolio carousel controls, project-page GLightbox galleries, contact validation/hCaptcha/Web3Forms states, CV link `assets/docs/FernandoTorres_CV.pdf`, and SEO/social URLs for edited pages.
