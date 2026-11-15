---
name: Fernando Torres Portfolio
description: A dark, type-led portfolio that presents enterprise software work with clear visual evidence.
colors:
  amber: "#e69955"
  charcoal: "#0e0f0f"
  charcoal-raised: "#101111"
  charcoal-soft: "#141514"
  warm-muted: "#bbbaa6"
  body-muted: "#aaa"
  white: "#fff"
typography:
  display:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "80px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading-lg:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.33
  heading-sm:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.4
  subheading:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Vela Sans, Inter, Noto Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Inter, Noto Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  xs: "5px"
  sm: "10px"
  md: "14px"
  lg: "22px"
spacing:
  xs: "5px"
  sm: "10px"
  md: "15px"
  lg: "25px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.warm-muted}"
    textColor: "{colors.charcoal-raised}"
    rounded: "12px"
    padding: "12px 36px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.warm-muted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-muted}"
    rounded: "12px"
    padding: "12px 36px"
    height: "56px"
  chip:
    backgroundColor: "rgba(255,255,255,0.015)"
    textColor: "rgba(255,255,255,0.68)"
    rounded: "999px"
    padding: "7px 15px"
  certification-card:
    backgroundColor: "{colors.charcoal-raised}"
    textColor: "{colors.warm-muted}"
    rounded: "10px"
    padding: "22px 24px"
  contact-field:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "5px"
    padding: "15px"
    height: "auto"
---

# Design System: Fernando Torres Portfolio

## Overview

**Creative North Star: "The Modern Portfolio"**

A dark, type-led professional portfolio where the work and career evidence lead. Warm amber signals emphasis and interaction; charcoal surfaces keep long-form project details and technical credentials comfortable to scan. Vela Sans defines the hierarchy, with Inter as its approved substitute and the compact-label face.

The interface combines restrained controls with expressive portfolio imagery and a few softly layered panels. Keep the existing Spanish Mexico content, typography, and recognizable amber-on-dark identity consistent across the home page and case studies.

**Key Characteristics:**
- Dark charcoal canvas with a warm amber accent.
- Vela Sans-led hierarchy, italic display emphasis, and Inter for compact controls and tabular numerals.
- Evidence-forward project cards and case-study imagery.
- Rounded controls and panels with restrained hover emphasis.

## Colors

The palette pairs a single warm accent with near-black surfaces and soft warm-gray text.

### Primary
- **Warm Amber**: Used for active navigation, focus outlines, project and certification hover cues, and small emphasis moments.

### Neutral
- **Near-black Charcoal**: The site canvas; the slightly raised charcoal and soft charcoal distinguish panels and section surfaces.
- **Warm Muted Gray**: Main interface text and the home hero action surface, balancing contrast against dark backgrounds.
- **Soft Gray**: Supporting body copy; white is reserved for high-contrast text and form content.

**The Amber Signal Rule.** Keep amber as a focused interaction and emphasis color; do not turn it into a broad surface fill.

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 16px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Vela Sans — Primary typeface across all interface text · `--font-vela-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12, 14, 16, 18, 20, 24, 32, 80
- **Line height:** 1.10–1.70
- **Letter spacing:** -0.01em at 32px and above; 0.02em at 12–16px
- **OpenType features:** `"blwf", "cv03", "cv04", "cv09", "cv11"`
- **Role:** Primary typeface across all interface text — navigation, body, headings, and display. The 80px display weight with -0.01em tracking and the italic variant for emphasis words are the system's signature voice. Custom glyph alternates (blwf, cv03, cv04, cv09, cv11) give it a humanist warmth that a generic grotesque lacks.

### Noto Sans — Secondary fallback for body copy and list content · `--font-noto-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 16, 18
- **Line height:** 1.40
- **Role:** Secondary fallback for body copy and list content when Vela Sans is unavailable — a safety net that preserves rhythm but loses the custom personality.

### Inter (gs-inter-2020-11) — Small-label and button text · `--font-inter-gs-inter-2020-11`
- **Substitute:** Inter
- **Weights:** 400, 600, 700
- **Sizes:** 12, 15
- **Line height:** 1.20
- **Role:** Small-label and button text rendering at compact sizes; brings tabular clarity to tags, badges, and dense UI rows.

### SF Pro Display — Apple-platform native rendering · `--font-sf-pro-display`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12, 16
- **Line height:** 1.20
- **Role:** Apple-platform native rendering for cards and system surfaces — supplements Vela Sans on macOS/iOS contexts.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 12px | 1.2 | 0.24px | `--text-caption` |
| body-sm | — | — | 14px | 1.7 | 0.28px | `--text-body-sm` |
| body | — | — | 16px | 1.5 | 0px | `--text-body` |
| subheading | — | — | 18px | 1.4 | 0px | `--text-subheading` |
| heading-sm | — | — | 20px | 1.4 | 0px | `--text-heading-sm` |
| heading | — | — | 24px | 1.33 | 0px | `--text-heading` |
| heading-lg | — | — | 32px | 1.2 | -0.32px | `--text-heading-lg` |
| display | — | — | 80px | 1.1 | -0.8px | `--text-display` |

### Web implementation

`assets/css/typography.css` is the shared source for these tokens and their role assignments, loaded after each page's component styles. Sizes use rem units at a 16px browser default; display headings scale from 32px to 80px to fit the available viewport. Constrained editorial headings use a slower fluid scale. Prose uses a 45–75ch measure where its layout permits. The role table takes precedence over family-level defaults: ordinary 16px body copy has zero tracking, while compact captions and controls use 0.02em.

Vela Sans font files are not present in the repository. The live stack prefers an installed Vela Sans, then the explicitly approved Inter substitute, then Noto Sans and generic sans-serif. Inter regular/italic and the Noto Sans fallback are loaded with `display=swap`. The `gs-inter-2020-11` token names the compact role and resolves to Inter; it does not claim a separate bundled font. SF Pro is resolved locally on Apple systems, with `system-ui` elsewhere, for native-style notification surfaces. OpenType features are requested on the primary stack and ignored by a face when unsupported. Font Awesome icon faces remain dedicated to icons.

Use 400 for prose, 500 for headings and 600 for emphasis. Compact Inter controls use 600 and may use 700 for strong labels. Use italic emphasis for the contact invitation. Numeric metrics use tabular numerals rather than a separate display family. The home phrase “Full Stack .NET” is an explicit exception: it restores the original SVG outline lettering and its progressive stroke/fill animation, repeating every five seconds. Its letterforms are fixed vector artwork, independent of the font stack; an accessible text label names the phrase, and reduced motion shows the fully filled static artwork.

## Layout

The main frame caps at 1600px and the wide content container at 1400px; some home layouts use a 1170px measure. Bootstrap rows provide the column grid, with tighter and wider gutters selected by content. The home portfolio is a horizontally navigable Swiper carousel, while case studies use a centered text measure and wide project imagery.

At tablet and mobile widths, the existing stylesheet reduces spacing, collapses or reflows multi-column content, and moves navigation into its compact treatment. The principal responsive thresholds are 992px and 768px; the home hero metrics stack at 479px. Preserve those behaviors when extending shared layouts.

## Elevation & Depth

Depth is hybrid: most sections rely on tonal charcoal differences and subtle translucent borders, while floating navigation and project hero media use soft shadows and blur. Hover states can lift cards slightly and add an amber glow, but resting panels should remain visually quiet.

**The Resting Surface Rule.** Keep shadow and glow emphasis tied to floating layers or interaction states; use tonal layering for ordinary content grouping.

## Shapes

The system mixes compact form fields (5px radius), certification panels (10px), hero actions (12px), and more generous project or portfolio cards (22–28px). Chips and date metadata use pill silhouettes. Borders are usually thin and translucent; image frames clip media to rounded shells.

## Components

### Buttons
- **Shape:** Home hero actions use softly rounded corners (12px); shared theme buttons rely on a mix of transparent and bordered styles.
- **Primary:** The home hero primary action uses warm muted gray with dark text (12px 36px padding, 56px minimum height).
- **Hover / Focus:** Hero actions invert to the warm-muted surface, focus receives a visible amber outline, and active controls may use amber.
- **Secondary / Ghost:** The home secondary action is transparent with a warm-muted border and text.

### Chips
- **Style:** Small translucent dark fills, subtle pale borders, muted white text, and pill corners.
- **State:** Hover can brighten the text and border with a slight lift; tags may use amber fill on hover.

### Cards / Containers
- **Corner Style:** Certification cards use compact 10px corners; portfolio cards use larger rounded shells (22px) and project media frames reach 28px.
- **Background:** Raised charcoal with thin translucent borders; portfolio cards may use a faint translucent gradient.
- **Shadow Strategy:** Mostly flat at rest; hover lift and amber glow are used on portfolio cards, with deeper ambient shadow under project hero media.
- **Internal Padding:** Certification cards use 22px 24px; other cards set padding by content.

### Inputs / Fields
- **Style:** Transparent fields with a thin pale border, white text, and compact corners (5px desktop; some contact form fields round to 14px on narrow screens).
- **Focus:** The border brightens to white.
- **Error / Disabled:** Form status uses distinct success and error colors; keep the existing validation and state messaging hierarchy intact.

### Navigation
- **Style:** Links are muted warm-gray, with a compact rounded treatment. The scrolled navigation becomes a translucent charcoal floating bar with blur and a soft shadow; the active link uses amber.

### Project Cards
Project previews pair a fixed visual image area with a text-led summary and compact technology tags. Keep project imagery prominent and allow the carousel controls to remain recognizable and reachable.

## Do's and Don'ts

### Do:
- **Do** keep the warm amber accent focused on emphasis, active states, and interaction.
- **Do** use the Vela Sans stack for prose and headings, and the compact Inter token for labels, controls and tabular metrics.
- **Do** preserve the wide dark canvas and differentiated charcoal surfaces.
- **Do** keep case-study imagery and project evidence prominent in the experience.
- **Do** retain rounded, lightly bordered components and clear focus treatment.

### Don't:
- **Don't** introduce a competing accent palette into shared site components.
- **Don't** flatten all charcoal surfaces into one undifferentiated black field.
- **Don't** introduce page-specific font families or bypass the shared typography tokens.

## Experimental home: Ingeniería viva

The `design/impeccable-overdrive` branch enhances the home in **Experience** mode. Its authored moment is an interactive, isometric integration diagram: a layered .NET core connects Salesforce, SAP Business One and SQL Server. These connections illustrate the portfolio's capabilities; they are not live telemetry or a claim that every project shares one architecture. Each selectable system points to its supporting case study.

Home-specific styles live in `assets/css/engineering.css`, scoped through `.engineering-home`; behavior lives in `assets/js/engineering.js`. The existing charcoal/amber identity stays authoritative. The shared Vela Sans stack carries the hero at a fluid 32–80px, paired with the restored SVG lettering for “Full Stack .NET”; warm paper (`#ece9df`) improves primary text contrast, and supporting copy uses `#b7b6a8`. The portrait becomes a compact signature alongside the existing experience and availability content. The Salesforce–SAP case study is visually featured in the project grid on desktop.

The diagram has one highlighted data path, subtle pointer-responsive perspective, and an explicit pause control. Its animation pauses outside the viewport and in hidden tabs. Reduced-motion and data-saving preferences receive the static composition; buttons and case-study links remain usable. Without JavaScript, the diagram and its initial case-study description remain visible. Touch uses direct selection rather than hover. Native buttons provide keyboard selection and pressed states, and a polite live region announces the selected explanation. The hero title separately reuses the original handwriting initializer in `assets/js/scripts.js`.

## Contact: Carta viva

The contact section uses correspondence as its visual metaphor: an editorial invitation on charcoal beside a single sheet of warm stationery. Its local stylesheet is `assets/css/contact.css`, scoped to `#contact`. Keep the factual invitation, response-time copy, LinkedIn destination, and Web3Forms/hCaptcha field contracts intact.

- **Paper and ink:** reuse `#ece9df` as the form surface; `#252820` is the text and button ink, `#5d6055` the secondary text, `#676a60` the placeholder, and `#8a8c7d` the field rule. Amber remains the emphasis on the dark canvas; its darker counterpart `#82501e` provides readable focus treatment on paper. Errors use `#a23125`; confirmed success uses `#32633b`.
- **Typography and shape:** the shared Vela Sans stack for the fluid editorial heading and 16px inputs/prose, Inter for 12px labels and metadata and the 15px send control. Response notes use the 14px small-body role. Decorative envelope lettering uses the 12px caption token and stays hidden from assistive technology. Stationery corners are 4px; the send button is 3px. A neutral, offset shadow distinguishes the sheet from the canvas.
- **Interaction:** the CSS/SVG envelope lifts its letter while writing, folds during the actual request, and departs only after a successful HTTP response with Web3Forms confirmation. Errors preserve the draft. Motion is finite, disabled by reduced-motion preferences, and simplified to the send-button envelope at widths below 992px. No animation runtime is added.
- **Responsive form:** single-column fields on small screens, 16px input text, visible keyboard focus, and compact hCaptcha on narrow or touch devices. Inline errors and the live status region are authoritative; the existing toast remains a secondary confirmation. Without JavaScript, the page shows the contact information and a note directing visitors to LinkedIn or enabling JavaScript for hCaptcha.

## TradingBook: Arquitectura viva

The TradingBook case study uses a dependency explorer as its authored interaction. Local styles in `assets/css/trading.css` and behavior in `assets/js/trading.js` sit alongside the shared typography contract. The image hero, aura, carousel and their motion controls retain their own implementation.

- Open editorial rows replace repeated capability and outcome panels. Project metadata stays compact; the architecture heading carries the strongest section-level hierarchy. Charcoal, warm paper and amber reuse the existing palette.
- Security, contribution and result share one outcome layout: heading and context in the left column, supporting list in the right column; the columns stack on mobile.
- Native buttons select Web, Application, Domain, Infrastructure, SQL Server or external services. The map highlights direct incoming and outgoing relationships and presents the selected responsibilities alongside it. Arrows mean project references or external access, never live data flow. Reset restores the complete map.
- Connection traces draw once on selection; interrupted animations cancel cleanly. Reduced motion and data-saving preferences receive immediate state changes. Offscreen or hidden-page animations stop.
- Below 768px the map becomes a two-column selector with readable responsibilities and textual dependencies below, in the same order as keyboard navigation. Keyboard focus, pressed states and a polite status announcement expose selection. Without JavaScript the loading overlay is hidden and the static map and all responsibilities remain visible.

## Salesforce–SAP: Integración viva

The Salesforce–SAP case study reuses TradingBook's navigation, editorial feature rows, project facts, grouped stack, outcome rows and architecture explorer through `assets/css/trading.css` and `assets/js/trading.js`. Local overrides in `assets/css/salesforce-sap.css` position the integration map and improve the endpoint directory. The existing `project-hero-shell`, aura, images, captions and carousel animation remain authoritative.

- Select Salesforce, API .NET 8, SAP Business One or SAP HANA to reveal responsibilities and highlight direct connections. `data-architecture-initial="api"` selects the integration layer initially; TradingBook retains its Infrastructure default.
- Two-way arrows represent information exchange; the one-way connection to SAP HANA represents a data query. These are conceptual integration relationships, not live telemetry or an execution sequence. The shared finite trace animation respects reduced motion, data saving and page visibility.
- On mobile the diagram becomes a two-column system selector with connection descriptions beneath it. Without JavaScript all descriptions remain readable. The endpoint directory retains the six documented routes and reflows to method/path rows with descriptions below.
- Method labels retain semantic blue, green and amber, with higher-contrast pairs: POST `#a7c8ed` on `#192535`, GET `#a8d3b5` on `#192b21`, PATCH `#edc27e` on `#302719`. Their compact 4px corners distinguish code metadata from interactive controls; the page otherwise inherits the charcoal, warm-paper and amber palette.
