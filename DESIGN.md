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
    fontFamily: "Poppins, sans-serif"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: 1.3
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "45px"
    fontWeight: 400
    lineHeight: 1.3
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.5
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
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

A dark, type-led professional portfolio where the work and career evidence lead. Warm amber signals emphasis and interaction; charcoal surfaces keep long-form project details and technical credentials comfortable to scan. Poppins carries the main hierarchy, while Space Grotesk adds a compact, technical accent to numeric metrics.

The interface combines restrained controls with expressive portfolio imagery and a few softly layered panels. Keep the existing Spanish Mexico content, typography, and recognizable amber-on-dark identity consistent across the home page and case studies.

**Key Characteristics:**
- Dark charcoal canvas with a warm amber accent.
- Poppins-led hierarchy, with Space Grotesk for numeric display.
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

## Typography

**Display Font:** Poppins (with sans-serif fallback)
**Body Font:** Poppins (with sans-serif fallback)
**Label/Mono Font:** Space Grotesk for numeric metrics; it is not a general-purpose mono face.

**Character:** Poppins gives headings and body copy a consistent, approachable geometric voice. Space Grotesk makes numeric metrics feel more technical without introducing a second text voice.

### Hierarchy
- **Display** (400, 60px, 1.3): Primary page headings; fluid hero headings may use viewport-based sizing.
- **Headline** (400, 45px, 1.3): Section-level headings.
- **Title** (400, 24px, 1.3): Subsection and card headings, with local size overrides where defined.
- **Body** (300, 15px, 1.5): General reading text; project and resume copy uses narrower measure and more open local line-height.
- **Label** (400, 13px, 1.5): Compact controls, tags, and metadata.

**The Two-Font Rule.** Use Space Grotesk for numeric display accents; keep prose and labels in Poppins.

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
- **Do** use Poppins for prose and Space Grotesk for numeric metrics.
- **Do** preserve the wide dark canvas and differentiated charcoal surfaces.
- **Do** keep case-study imagery and project evidence prominent in the experience.
- **Do** retain rounded, lightly bordered components and clear focus treatment.

### Don't:
- **Don't** introduce a competing accent palette into shared site components.
- **Don't** flatten all charcoal surfaces into one undifferentiated black field.
- **Don't** use Space Grotesk as a replacement body font.
