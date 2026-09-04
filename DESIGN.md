---
name: Rakda Landing
description: The Clean Room, carried from the app to the marketing page; the permission grid is the hero, and every later section is a numbered sheet in one frame.
colors:
  primary: "oklch(0.48 0.105 215)"
  primary-strong: "oklch(0.42 0.105 215)"
  primary-content: "oklch(0.99 0.002 220)"
  primary-soft: "oklch(0.955 0.02 215)"
  accent: "oklch(0.52 0.11 155)"
  warning-ink: "oklch(0.52 0.12 70)"
  error: "oklch(0.5 0.19 25)"
  surface: "oklch(0.997 0.002 220)"
  ground: "oklch(0.985 0.004 220)"
  panel: "oklch(0.965 0.006 225)"
  line: "oklch(0.905 0.01 225)"
  line-strong: "oklch(0.82 0.014 228)"
  ink: "oklch(0.22 0.02 235)"
  ink-2: "oklch(0.31 0.02 235)"
  ink-3: "oklch(0.4 0.02 235)"
  muted: "oklch(0.48 0.02 235)"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.3rem + 2.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  display-close:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  lede:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  title-md:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.45
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  subhead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SF Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums"
  fine:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SF Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
    fontFeature: "tabular-nums"
  tick:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SF Mono, monospace"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tabular-nums"
rounded:
  tile: "3px"
  tag: "4px"
  field: "6px"
  box: "8px"
  pill: "999px"
spacing:
  "2xs": "0.375rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "0.875rem"
  base: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  "2xl": "2rem"
  "3xl": "2.5rem"
  "4xl": "3rem"
  "5xl": "4rem"
  page: "5rem"
  section: "5.5rem"
  section-mobile: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-content}"
    rounded: "{rounded.field}"
    padding: "0.625rem 1.125rem"
    height: "2.75rem"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.625rem 1.125rem"
    height: "2.75rem"
  button-quiet-hover:
    backgroundColor: "{colors.panel}"
  button-disabled:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
  button-sm:
    padding: "0.375rem 0.875rem"
    height: "2.25rem"
    typography: "{typography.body}"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 0.5rem"
    height: "1.5rem"
    typography: "{typography.mono}"
  chip-sans:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 0.5rem"
    height: "1.5rem"
    typography: "{typography.label}"
  chip-primary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-strong}"
    rounded: "{rounded.pill}"
    padding: "0 0.5rem"
    height: "1.5rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "1.25rem 1.5rem"
  card-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "0.875rem"
  room-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "0.875rem 1rem"
  permission-segment:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    width: "2rem"
    height: "1.75rem"
  permission-segment-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  permission-segment-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  group-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.field}"
    padding: "0.375rem 0.5rem"
    height: "2.25rem"
  group-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  nav:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    height: "3.5rem"
  lang-toggle:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.tag}"
    padding: "0.25rem 0.375rem"
    typography: "{typography.mono}"
  secnum:
    textColor: "{colors.muted}"
    typography: "{typography.subhead}"
  faq-clause:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "1rem 0 0.875rem"
    typography: "{typography.lede}"
  faq-index-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.field}"
    padding: "0.375rem 0.625rem"
    typography: "{typography.subhead}"
---

# Design System: Rakda Landing

## Overview

**Creative North Star: "The Clean Room"**

The landing page inherits the app's world by decision, not by resemblance: the same mark, the same Inter and JetBrains Mono pairing, the same slate-teal on cool near-white, light only. What changes is the job. The app's Clean Room holds documents; the landing page's Clean Room holds a working permission grid in the first viewport and lets the visitor operate it. The product is not pictured, it is present. Every section after the hero is a numbered sheet in the same frame: an intro column that sticks on the left, an instrument on the right (three Q&A silos, an engagement chart, a template list beside its folder tree, three lifecycle room cards, a two-column security ledger). The FAQ page is the same frame turned into a numbered index and a stack of clauses.

The material is the hairline. One-pixel lines in two weights carry almost all structure; filled surfaces step by tiny lightness differences on the same cool hue, and the page never resorts to shadow, gradient, or a tinted band to separate regions. Ink does the work colour would do elsewhere: a toggled-on permission is ink on surface, the selected group tab is ink, the newest activity line is ink and older lines thin through three greys to muted. Teal is reserved for meaning: the one action per view, the focused cell, the watermark burned across the page, the engagement bars, selection and caret, the active topic's numeral in the FAQ index, and the leader pulled taut on a touched reference.

Numbers tie the two pages together. Six landing sections carry a reference numeral (§1 to §6) at the head of their title; the FAQ prints the same numeral in its margin with a leader running to the answer it proves. Density is professional-tool density, not brochure density. Tables sit at 13px, machine facts at 11px mono, prose at 14 to 18px with generous line-height; headings are tight (negative tracking, line-height near 1) so they read as labels on an instrument rather than slogans. Motion is spent on consequence: the watermark burns from blur to sharp, the appended activity line drops in, a clause's chevron turns. Everything else transitions in 150 ms or not at all.

**Key Characteristics:**
- Hairlines (`line`, `line-strong`) are the structural material; filled containers are rare and near-white.
- Teal appears only where it means action, focus, watermark, measured data, or the active mark in an index; ink carries selection and on-state.
- Inter for every human sentence and control label; JetBrains Mono for every machine fact (emails, times, IPs, counts, statuses, page numbers, section and clause numerals), always tabular.
- Light only, `color-scheme: light`, theme-color `#f7fbfc`.
- One section grammar after the hero: sticky intro left, instrument right (`.split`, 4fr/8fr), stacked below 1024px. Inner compositions differ; the frame does not.
- A reference-numeral system (`§n`) printed at both ends: on the landing section and in the FAQ margin.
- Authored animations draw a consequence and collapse under `prefers-reduced-motion`.

## Colors

A single slate-teal accent over a cool near-white neutral ramp, all on one hue family (220 to 235) so nothing on the page reads as a foreign material.

### Primary
- **Slate Teal** (`primary`): the one action per view (trial button), the focused cell ring on the matrix, the watermark text at 28% opacity, engagement chart bars, text selection at 18%, caret, quiet inline links, the `active` lifecycle room card's border, and the FAQ reference leader when hovered or focused (line and filled dot). Never a background for regions or cards.
- **Slate Teal Deep** (`primary-strong`): hover state of the primary button and chart bars; text colour of the selected template name, the primary chip, a hovered FAQ question, a touched reference numeral, and the active topic's numeral in the FAQ index.
- **Teal Paper** (`primary-soft`): background of `chip-primary` only (the "watermarked", "FAQ" and "active" chips), with a 40% primary border.
- **Primary Content** (`primary-content`): text on the primary button.

### Secondary
- **Ledger Green** (`accent`): Q&A status text for answered questions only. Not a second brand colour.

### Tertiary
- **Amber Ink** (`warning-ink`): Q&A status text for waiting questions. Text only, never a fill.
- **Error** (`error`): defined for lineage parity; neither page currently renders it.

### Neutral
- **Surface** (`surface`): the whitest layer; cards, the simulated document page, the segmented cell, chips, quiet buttons, the owner silo, the active/hovered template row, lifecycle room cards, the FAQ index chips on mobile, the hollow ring at the end of a reference leader. Also the text colour on ink fills.
- **Ground** (`ground`): the page body and the nav (at 92% over an 8px blur). FAQ clauses sit directly on ground with no fill.
- **Panel** (`panel`): one step down; the document-preview frame, disabled buttons, hovered segments and quiet buttons, the lifecycle stage tile.
- **Line** (`line`): default hairline; section tops, table rows, list rows, tree branches, card borders, the activity list, FAQ index rows, the bottom of the last clause in a group.
- **Line Strong** (`line-strong`): emphasised hairline; table heads, chip and quiet-button borders, the segmented-cell frame, dashed placeholders, lifecycle arrows, unread chart bars, the strike-through on non-claims, the FAQ index's top rule, the closed clause's 2px top rule, the reference leader at rest, the FAQ close's top rule.
- **Ink** (`ink`): headings, table row labels, on-state fills, the newest activity line, tooltip background, FAQ questions and reference labels, the active topic's title in the index.
- **Ink 2** (`ink-2`): body prose, ledes, ledger definitions, chip text, second activity line, nav links at rest, FAQ answers, index titles at rest.
- **Ink 3** (`ink-3`): third activity line; hover border on the language toggle.
- **Muted** (`muted`): captions, hints, legends, table heads, column ticks, unset permission icons, fourth-and-older activity lines, every section, group, and clause numeral at rest, permalinks, the chevron. Never below 0.5625rem, and below 0.6875rem only in mono.

### Named Rules
**The One Voice Rule.** Teal is under 10% of any screen. It marks the single action, the focused cell, the burned watermark, measured bars, selection, and the one active mark in an index. If a second teal element competes with the trial button in a viewport, one of them is wrong.

**The Ink Is the On-State Rule.** Toggled-on permissions, the selected group tab, and the owner silo's top edge are ink, not teal. Selection is a matter of contrast, not of brand colour. The FAQ index follows it halfway: the active title goes to full ink and 500 weight, and only its numeral takes `primary-strong`.

**The Recency Ramp Rule.** Time-ordered lists step `ink` → `ink-2` → `ink-3` → `muted` from newest to oldest. Age is drawn as lightness; there is no timestamp badge, no "new" chip.

**The Hairline Material Rule.** Regions are separated by a 1px `line` on top, never by a background band. Reach for `line-strong` only for the head of a table, the frame of a control, or the top of a closed clause. The one 2px rule on either page is the closed FAQ clause, and it drops to 1px when opened.

**The Numeral Is Muted Rule.** A reference, group, or clause numeral is mono, `muted`, and 500 weight at most. It rises to `ink` when it is the thing being pointed at (`§n` in the FAQ margin) and to `primary-strong` only when it is the active mark or under the pointer.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter Variable (same family)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, SF Mono, monospace)

**Character:** One sans for everything a person says, one mono for everything a machine knows, including every numeral that indexes the page. Inter is set tight at the top of the ramp (600, negative tracking, line-height near 1) and loose at the bottom (400, 1.5 to 1.6). Mono is never decorative: it marks the fact as verifiable and gets tabular numerals by default.

### Hierarchy
- **Display** (600, `clamp(2.125rem, 1.3rem + 2.6vw, 3.25rem)`, 1.05, -0.025em): the hero H1 only, max 26ch.
- **Display Close** (600, `clamp(1.875rem, 1.2rem + 2.6vw, 3rem)`, 1.08): the landing Close title only, max 22ch. The same voice one step smaller.
- **Headline** (600, `clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem)`, 1.15, -0.02em): every landing section H2 via `.h2`, max 24ch, balanced wrapping; the FAQ H1 at 1.08.
- **Heading** (600, 1.375rem, `ink`): FAQ group heads (with their mono group numeral in a 3.25rem column) and the FAQ close head. Drops to 1.25rem under 768px. The only fixed heading size on the ramp; it exists because a group head inside a sheet must not compete with the page H1.
- **Lead** (1.125rem, 1.5): the hero sub (400, `ink-2`, max 58ch) and the wordmark (600, -0.01em, `ink`).
- **Lede** (400, 1.0625rem, 1.6, `ink-2`): the paragraph under each H2 and under the FAQ H1, max 62ch; the FAQ close body at 52ch. The FAQ question is the same size at 500, 1.4, -0.005em, `ink`.
- **Title Md** (500, 1rem, 1.45): the hero and close CTAs, the Close body, the lifecycle hint and Q&A question titles at their largest, and the template name at 600.
- **Title** (500, 0.9375rem, 1.45, `ink`): question text, ledger terms, lifecycle hints, primary buttons; the FAQ answer (400, 1.6, `ink-2`, max 66ch) and the FAQ index title (`ink-2`, 1.35).
- **Body** (400, 0.875rem, 1.5 to 1.55, `ink-2`): answers, descriptions, definitions, nav links, the FAQ back link. Room and document names are 500 at 0.875rem in `ink`; the FAQ group numeral is mono 500 at 0.875rem in `muted`.
- **Subhead** (600, 0.8125rem, `ink`): h3 inside cards, silos, the activity header. Same size as table text; weight alone lifts it. At 500 in mono, 0.8125rem is also the size of every reference and clause numeral (`.secnum`, the FAQ clause number, `§n` in the margin) and of the reference label and mobile index chip text in Inter.
- **Label** (400, 0.75rem, `muted`): captions, legends, table heads (500), chart legend, tree label, FAQ facts, the index numeral. Hints, permalinks, index counts, and the index head (uppercase, 0.04em) go to 0.6875rem.
- **Mono** (400, 0.6875rem, 0.01 to 0.06em, tabular): chip text, activity times, page counts, IPs, watermark text (0.06em), the language toggle (0.75rem, 0.06em), the FAQ question count. Mono values in a table or definition list sit at 0.75rem.
- **Fine** (mono, 0.625rem, 0.08em, `muted`): the confidentiality stamp and fine print inside the simulated document, and the chart tooltip. Reserved for text that is inside an instrument, never for page copy.
- **Tick** (mono, 0.5625rem, `muted`): the engagement chart's axis ticks only. The smallest size on either page; it is a ruler mark, not a label.

### Named Rules
**The Mono-for-Facts Rule.** Anything the system would know without a human typing it (an email, a time, an IP, a page count, a folder count, a status word, a copyright line, a section or clause number) is set in JetBrains Mono. A control label is never mono: `.chip-sans` exists so that "Export CSV" and "Add 14 folders" stay in Inter.

**The Tight Top, Loose Bottom Rule.** Headings tighten (negative tracking, line-height 1.05 to 1.2) as they grow; prose loosens (1.5 to 1.6) as it shrinks. Nothing below 0.875rem gets tighter than normal tracking except mono.

**The Inside-the-Instrument Rule.** `fine` (0.625rem) and `tick` (0.5625rem) appear only inside a rendered instrument (the document sheet, the chart). Page copy, captions, and hints never go below 0.6875rem.

## Layout

The container is `.wrap`: full width to 82rem, centred, with 1.25rem inline padding under 640px and 2rem above. The nav is a 3.5rem sticky bar. Landing sections are stacked sheets: each is a `.section` with a 1px `line` top border and 5.5rem vertical padding (3.5rem under 768px); the hero has no top rule and pads 2.25rem above, 4.5rem below; the close pads 7rem (4.5rem mobile). The FAQ page pads 3rem above and 5rem below (2rem / 3.5rem mobile).

**The hero** is the one section with its own grid: a headline band (`minmax(0,1fr) auto`, bottom-aligned, 2rem × 3rem gaps) over a deck split `1.3fr | minmax(19rem, 1fr)` with a 2.5rem gutter; matrix left, document preview and activity right. Its reference numeral `§1` sits at the head of the room name above the matrix.

**Every section after the hero, and the FAQ page, uses `.split`:** a two-column grid `minmax(0, 4fr) minmax(0, 8fr)` with a 3rem × 4rem gap, items aligned to start. The left `.intro` (H2 with its `§n` numeral, lede 0.875rem below) is `position: sticky; top: 5rem`, so the section's title stays in view while its instrument scrolls. The right column holds the instrument. Under 1024px the grid collapses to one column with a 2rem gap and the intro un-sticks. The inner compositions differ by section and are not part of the grammar:
- Q&A: three equal silos divided by vertical hairlines under a `line-strong` rule; the owner silo lifts to `surface` with an ink top edge.
- Engagement: a `surface` chart card with a 24-bar grid at 9rem height.
- Templates: a selectable list beside a hairline-branched folder tree.
- Lifecycle: three equal columns, 2rem gaps (1.5rem under 1024px, one column under 768px), 1px hairline arrows between room cards above 1024px.
- Security: a two-column ledger; the "do" column a definition grid (`14rem | 1fr`), the "don't" column single-column with struck terms.
- FAQ: the intro holds the H1, lede, mono question count, and the sticky index; the content holds seven groups of native `<details>` clauses, then a close under a `line-strong` rule.

**FAQ clause grid.** Summary and body share the same first column: `3.25rem | minmax(0,1fr) | auto` for the summary (number, question, chevron) and `3.25rem | minmax(0,1fr) | 11rem` for the body (empty, answer at max 66ch, margin). The 11rem margin column carries the reference and the permalink with 1.25rem left padding; the leader's 1.75rem length equals that padding plus the 0.5rem grid gap, so its terminal ring lands exactly on the answer column's edge. Under 768px the number column narrows to 2.5rem, the margin moves under the answer as a row, and the leader becomes a static 6px ring inline before `§n`.

Breakpoints, as used: 1024px collapses `.split` and the FAQ index (from a column list to a wrap of chips), un-sticks intros, and hides lifecycle arrows; 768px collapses silos, gallery, lifecycle, footer, the clause margin, the group-head numeral column, and switches the matrix to one-group-at-a-time tabs; 640px changes container padding and the ledger row; 480px hides the nav sign-in and FAQ links. The spacing rhythm reuses 0.375, 0.5, 0.75, 0.875, 1, 1.25, 1.5, 2, 2.5, 3, 4 and 5rem; a section's inner blocks are 2.5 to 3rem apart, FAQ groups 3rem, rows within a list 0.875rem, controls 0.375 to 0.5rem. Anchored targets carry a scroll margin of 4.5 to 5rem so the sticky nav never covers them.

## Elevation & Depth

The system is flat. Depth is tonal and linear: `ground` → `surface` for something that is a thing (card, page, control, index chip), `panel` for something recessed (the preview frame, a disabled button, a hovered segment, the stage tile), and hairlines for every boundary. The one authored shadow is the simulated document page inside the preview, a 1px drop at 6% ink that makes the sheet read as paper on a desk; it is a material fact of that component, not a card treatment. The nav gets an 8px backdrop blur at 92% ground so content scrolls under it without a hard band. The FAQ's open/closed state is drawn in rule weight, not in fill: 2px `line-strong` closed, 1px open.

### Shadow Vocabulary
- **Paper sheet** (`box-shadow: 0 1px 2px color-mix(in oklch, var(--color-ink) 6%, transparent)`): the rendered document page only.

### Named Rules
**The Flat-By-Default Rule.** Cards and controls are bordered, not lifted. If a surface needs to read as raised, step it to `surface` and give it a `line` border; shadow is reserved for a page that is literally a sheet.

**The Consequence Motion Rule.** Animations draw a consequence at the moment it happens: the watermark burn (320 ms, blur 6px → 0, `ease-out-expo`), the appended activity line (240 ms, 4px drop, `ease-out-expo`), and the clause chevron's 180° turn (200 ms, `ease-out-expo`). State changes on controls, rules, and leaders transition in 150 ms ease-out. Everything collapses to 0.01 ms under `prefers-reduced-motion`.

## Shapes

Small, consistent radii on a rectilinear page. Controls, fields, the stage tile, and the mobile index chip are 6px (`field`); containers, cards, room cards, and the preview frame are 8px (`box`); chips are pills (999px); the language toggle and chart tooltip are 4px; the legend icon tile and the focus outline are 3px. Chart bars round only their top corners (3px). Borders are 1px, solid for real things and dashed (`line-strong`) for placeholders (the forbidden-view panel, the archive package); the only 2px border is the closed clause's top rule. The permission cell is a segmented control: four 2rem × 1.75rem cells inside one 6px frame, separated by `line` hairlines, with the on-state as a solid ink fill and no radius on inner segments. The reference leader is a 1px line ending in a 6px ring (1px `line-strong` stroke, `surface` fill) that becomes 2px and a filled teal dot on hover. Icons are inline SVG at 1.5 stroke (1.4 on the mark), round caps, 14px in controls and clause chevrons and 12px in legends; the lifecycle arrow is a hairline with a 6px rotated-square head.

## Components

### Buttons
Calm and rectangular; the primary is the only saturated fill on the page.
- **Shape:** softly rounded (6px), 1px transparent border reserved so quiet and primary share metrics.
- **Primary:** slate teal on primary content, 500 weight, 2.75rem min height, 0.625rem × 1.125rem padding, 0.9375rem type. The hero, close, and FAQ close CTAs grow to 3rem and 1rem type.
- **Hover / Focus:** background to `primary-strong` in 150 ms; focus is the global 2px teal outline at 2px offset.
- **Quiet:** `surface` fill, `ink` text, `line-strong` border; hover to `panel`. Used for downloads in the preview.
- **Small:** 2.25rem min height, 0.375rem × 0.875rem, 0.875rem type (nav trial, preview downloads).
- **Disabled:** `panel` fill, `muted` text, `line` border, not-allowed cursor.
- **Quiet link:** a text button in `primary` with a 1px underline at 0.16em offset; hover to `primary-strong`. Used for "reset". The FAQ close's "back" link is the plain 0.875rem `ink-2` link instead, hover to `ink`.

### Chips
Small, bordered, pill-shaped facts.
- **Style:** 1.5rem tall, 0.5rem inline padding, `surface` fill, `line-strong` border, `ink-2` text. Default is mono at 0.6875rem for statuses and counts.
- **Sans variant:** `.chip-sans` swaps to Inter 0.75rem 500 for control labels that happen to be chip-shaped ("Export CSV", "Add N folders").
- **Primary variant:** `primary-soft` fill, 40% primary border, `primary-strong` text; marks the watermarked state, the FAQ promotion, and the active lifecycle state. In the room card the status chip sits on its own row under the tile and name.
- **Index chip (FAQ, under 1024px):** not a pill. A 6px `field` box, `surface` fill, `line-strong` border, 0.375rem × 0.625rem padding, mono numeral 0.75rem `muted` beside an Inter title 0.8125rem; the active chip's numeral goes `primary-strong` and its title `ink` 500.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** `surface` for the engagement card and lifecycle room cards; `panel` for the document-preview frame, which then holds a `surface` page inside it.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px `line`; `line-strong` when the card is a control (lifecycle room cards) and `primary` when it is the active state.
- **Internal Padding:** 1.25rem × 1.5rem (1rem on mobile) for cards; 0.875rem for the preview frame; 0.875rem × 1rem for room cards.
- **Room card:** a grid `auto | 1fr` with 0.625rem × 0.75rem gaps: a 2.25rem `panel` stage tile (mono 0.75rem 500, 6px) beside the room name (600, `ink`), and the status chip spanning the full width on its own row.

### Inputs / Fields
The pages have no text inputs. Their fields are toggles and disclosures:
- **Permission segment:** 2rem × 1.75rem, `muted` icon on transparent; hover `panel` + `ink`; on-state `ink` fill with `surface` icon, hover to `ink-2`. The whole cell frame takes a 2px teal outline when it is the previewed cell.
- **Group tab (mobile):** 2.25rem, `surface` with `line-strong` border, 0.8125rem 500 `ink-2`; active is `ink` fill with `surface` text.
- **Template row:** borderless list button, hairline below, `surface` fill on hover and when selected; the selected name turns `primary-strong`. No side stripe.
- **FAQ clause (disclosure):** a native `<details>` with the marker hidden; the summary is the whole row (number, question, chevron), cursor pointer, question to `primary-strong` on hover, focus outline at 4px offset so it clears the rule.
- **Focus:** global 2px `primary` outline, 2px offset, 3px radius; segments pull it inside (-2px) so the frame stays intact.

### Navigation
Sticky, 3.5rem, `ground` at 92% over an 8px blur with a `line` bottom hairline. Left: the mark in `primary` with the wordmark in `ink` (1.125rem 600, -0.01em). Right, 1.25rem apart (0.75rem under 480px): the language toggle (mono 0.75rem, 0.06em, 4px bordered tag, hover to `ink` text and `ink-3` border), a plain FAQ link and sign-in link (0.875rem `ink-2`, underline on hover, both hidden under 480px), and the small primary trial button. The FAQ link sets `aria-current="page"` on the FAQ route; it has no distinct visual active state beyond the shared link style. A skip link slides in from above on focus.

### The Permission Matrix
The signature. A real table: `line-strong` under the head, `line` under every row, 0.8125rem, folder names in `ink` at 450 weight, group names in `muted` 0.75rem. Each cell is a segmented four-toggle control (view, watermark, download, original). The state lives in the URL; the focused cell is ringed in teal and drives the preview beside it.

### The Document Preview
A `panel` frame around a `surface` sheet (16rem tall, paper shadow) showing a mono confidentiality stamp (`fine`), a document title, an excerpt, and a two-column facts table with mono values. When the watermark permission is on, seven rotated (-24deg) mono lines in `primary` at 28% opacity burn across the sheet with the viewer's group, email, date, time, and IP. When view is off, the sheet is replaced by a dashed `line-strong` placeholder on `ground`.

### The Activity Line
An ordered list under a `line` rule, 3rem mono time column plus text, 0.375rem row padding, hairline between rows. Newest first, newest darkest, capped at seven. Human actors are Inter 500; machine actors (an email) are mono 400 at 0.75rem.

### The Reference Numeral
The device that binds the landing page to the FAQ. `REFS` in `src/lib/refs.ts` numbers six landing sections §1 to §6 in landing order; `secnum()` prints the numeral. On the landing page it is `.secnum`: inline at the head of the section H2 (or the hero room name), mono 0.8125rem 500, 0.02em, `muted`, raised 0.35em with 0.625rem after it, so the headline still reads as one line. In the FAQ margin the same `§n` is mono 0.8125rem in `ink`, beside a two-line Inter label (a 0.6875rem `muted` descriptor over the 0.8125rem `ink` section name), reached by a 1.75rem leader from the answer column's edge. Hover or focus pulls the leader taut (2px, `primary`), fills the ring, and turns the numeral `primary-strong` with the label underlined. Under 768px the leader is a static ring inline before the numeral.

### The FAQ Index
A sticky contents list in the intro column under a `line-strong` rule: a mono uppercase head ("No." / contents, 0.6875rem, 0.04em, `muted`) over rows on `line` hairlines, each `2.25rem | 1fr | auto`: mono numeral 0.75rem `muted`, title 0.9375rem `ink-2`, mono count 0.6875rem `muted`. The topic on screen (measured against a reading line just under the nav) marks itself with a `primary-strong` 500 numeral and a full-`ink` 500 title, and carries `aria-current="location"`. Under 1024px it becomes a wrap of index chips with the head and count hidden.

### The FAQ Clause
A native `<details>` on `ground`, 2px `line-strong` top rule that drops to 1px when open, the last clause in a group closed by a `line` hairline. Summary: mono number 0.8125rem `muted` 0.02em, question 1.0625rem 500 `ink`, 14px chevron in `muted` that rotates 180° when open. Body: answer 0.9375rem 1.6 `ink-2` in a 66ch measure, optional facts as a wrapping `dl` at 0.75rem (`muted` term, mono `ink` value), then the margin with the reference numeral and a mono permalink `#n.m` (0.6875rem `muted`, `ink` and underlined on hover). A hash in the URL opens its clause and marks its group in the index.

### Footer
A `line` top rule, 2rem × 2.5rem padding, three columns (mark at 20px, synthetic-data note in 0.75rem `muted`, FAQ and language links plus mono rights line). Collapses to one column under 768px.

## Do's and Don'ts

### Do:
- **Do** separate regions with a 1px `line` on top; use `line-strong` only for table heads, control frames, and the top of a closed clause.
- **Do** put every machine fact (time, email, IP, count, status, page number, section or clause numeral) in JetBrains Mono with tabular numerals, and every control label in Inter.
- **Do** draw on-states in ink: toggled segments, the active tab, the owner silo's edge, the active index title.
- **Do** keep teal to the single action, the focused element, the watermark, measured data, selection, and the one active mark in an index; audit any viewport where two teal elements compete.
- **Do** step time-ordered lists `ink` → `ink-2` → `ink-3` → `muted`.
- **Do** build every section after the hero on `.split`: sticky intro with its `§n` numeral on the left, the instrument on the right, one column under 1024px. Vary the instrument, not the frame.
- **Do** number a new landing section in `REFS` if the FAQ will ever point at it, and print the numeral at both ends.
- **Do** keep radii at 6px for controls and 8px for containers, borders at 1px, and dashed only for placeholders.
- **Do** spend motion only on a consequence the visitor caused, and collapse it under `prefers-reduced-motion`.

### Don't:
- **Don't** add a dark mode or a tinted section background; both pages are light only with `color-scheme: light`.
- **Don't** fill a card, band, or hero with `primary` or `primary-soft`; teal is ink on this page, never a surface, except the chip.
- **Don't** use shadow to lift cards or controls; the paper sheet in the preview is the only shadow.
- **Don't** mark the selected template row with a side stripe or a teal background; it is `surface` fill with a `primary-strong` name.
- **Don't** render toggled permissions in teal; on is ink.
- **Don't** set page copy, captions, or hints below 0.6875rem; `fine` and `tick` live only inside the document sheet and the chart.
- **Don't** give a section after the hero its own frame; the seven-unalike-compositions approach was withdrawn on 2026-09-05 in favour of one grammar.
- **Don't** add hover lifts, scale transforms, or scroll-triggered reveals; the only transitions are 150 ms colour and rule-weight changes and the consequence animations.
