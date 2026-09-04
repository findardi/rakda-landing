---
version: 1
slug: "src-routes-lang-lang-faq-page-svelte"
primary_target: "src/routes/[[lang=lang]]/faq/+page.svelte"
related_targets: ["src/lib/faq/content.ts"]
---

# FAQ page

Scope: a general-questions FAQ page, one route in two locales (`/faq` Indonesian, `/en/faq` English), indexed and SEO-friendly. Visitor mode: Read.

Audience and job: a decision-maker or their counsel with one or two specific questions before moving deal documents into Rakda; some arrive from search with the question already in mind.

Task: find the answer in seconds, trust it, and either go to the proof on the landing page or start the trial. Content: 37 general questions in seven topics (basics, getting started, access, security, tracking and Q&A, plans and trial, after the deal), authored from PRODUCT.md truth with Ellty's and Ansarada's public FAQ sets as the question map. No pricing numbers, no support promise, certification stated as the infrastructure provider's, never Rakda's.

Constraints: every answer in the DOM without JavaScript; each clause deep-linkable; FAQPage JSON-LD; canonical and hreflang only when PUBLIC_SITE_URL is set; the page follows the site's section grammar: intro column left and sticky, content right.

Memorable moment: a reference numeral in the margin that names where the landing page proves the answer, and thickens its leader when touched.

Unresolved: site URL for canonical and sitemap; whether a support channel is ever added.

## Direction contract

THESIS: The FAQ is a numbered sheet: every question a clause with a permanent number, every hard fact a reference numeral pointing at the landing section that proves it. It refuses the bare accordion list.

OWN-WORLD: The app's Clean Room unchanged: near-white ground, Inter prose, JetBrains Mono for clause numbers, reference numerals, and facts; hairlines as material; teal only for the touched reference and the primary action; light, flat.

STORY: A reader with one question finds its number in the sticky index, reads a plain answer, sees the numeral that names where the landing page proves it, and leaves with the proof or the trial.

FIRST VIEWPORT: Slim nav. Left, sticky: title, one-line intro, numbered index of seven topics marking the topic on screen. Right: "1 Dasar-dasar" rule, clause 1.1 open with its answer and margin numeral, 1.2 to 1.5 folded under heavy rules.

FORM: Lembar Bernomor, challenger fused from the patent drawing sheet, competitive verdict, code-led; seed key 286950c5.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
