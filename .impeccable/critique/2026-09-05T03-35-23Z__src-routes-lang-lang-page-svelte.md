---
target: the landing page
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
target_identity: "file:/home/ardis/project/personal/rakda-landing/src/routes/[[lang=lang]]/+page.svelte"
target_fingerprint: "sha256:863c1f67e8f7632274a87e4fddc032bee308c9b1c49888fb3ca5fd15ad4bba32"
target_path: /home/ardis/project/personal/rakda-landing/src/routes/[[lang=lang]]/+page.svelte
timestamp: 2026-09-05T03-35-23Z
slug: src-routes-lang-lang-page-svelte
---
Method: dual-agent (A: Assessment A design review · B: Assessment B detector evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Ring, chips, activity line, URL track state; back/reset leave the log contradicting the grid; on the phone the consequence is 423px below the tap. |
| 2 | Match System / Real World | 3 | Real folder names, templates, roles; "rendisi", "pengerasan viewer", "hanya-tambah", "jendela kehilangan fokus" are jargon. |
| 3 | User Control and Freedom | 3 | Back and reset undo the grid; no way to leave the 144-stop tab sequence early. |
| 4 | Consistency and Standards | 2 | Two teal CTAs in the load viewport vs the One Voice Rule; "08.25" vs "10:02" time formats; inert chips styled like buttons. |
| 5 | Error Prevention | 3 | Toggle model cannot produce an invalid state; dependency rules live only in 12px fine print. |
| 6 | Recognition Rather Than Recall | 2 | 144 icon-only buttons without tooltip; Watermark/Original glyphs near-identical when on; legend 12px muted and far away. |
| 7 | Flexibility and Efficiency | n/a | Persuade surface, single path; URL-encoded grid is the one accelerator. |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined hairline system; §2 prints each question three times; hero shows 36 cells where 8 would teach. |
| 9 | Error Recovery | 2 | Every CTA and both "Masuk" links resolve to #trial; the only explanation is an 11px mono dev note. |
| 10 | Help and Documentation | 3 | FAQ bound by §n numerals is real help; in-page grid help is one fine-print paragraph. |
| **Total** | | **24/36** | **Acceptable (67%)** |

n/a heuristics: 7. Applicable maximum: 36.

## Design Specificity Verdict

LLM assessment: authored. The product is present in the first viewport as a working instrument (144 URL-backed permission toggles, a rendered sheet with a per-request watermark, an append-only activity line); every later sheet is a real app state drawn from the same demo data; the §n numeral system binds landing to FAQ. Category habit survives in the nav and the Close (generic tagline repeated).

Deterministic scan: CLI ran in degraded regex mode (parser modules unresolvable), one advisory finding: off-ramp 1.25rem mobile heading in src/routes/[[lang=lang]]/faq/+page.svelte:182. Browser overlay: 40 flags per landing locale across six rules; real: line-length on Matrix .rule (~91ch) and .try (~98ch) and EngagementSection .legend (~123ch) at 12px; sans text below the ramp (DocPreview .fine "Contoh dokumen" 10px, ActivityLine .note 11px); skipped heading (h1 then h3 inside DocPreview). False positives: wide-tracking on mono fine stamp and watermark spans; 24 chart tooltips at the fine step; cramped-padding on the owner silo. FAQ: 37 numbered-clause flags are the committed pattern; text-occlusion on permalink #1.4 and a non-sticky contents column are worth a look; transition: height reported somewhere on /faq.

Visual overlays: injected in a [Human] Chrome tab on /, /en, /faq; console reported 40, 40, 3 anti-patterns.

## Overall Impression

The hero is the page's peak and only proof, and it lands only for a mouse on a wide screen. Below it the page is calm and truthful but under-sells the §6 honesty ledger, its strongest argument. Biggest opportunity: make the hero land for every persona.

## What's Working

- The hero is the product: URL state, live-clock watermark, audit line per click.
- §6 ledger copy states honest limits as selling points; no benchmark does this.
- §7 artifacts are real app states, subgrid-aligned.

## Priority Issues

- [P0] Every CTA loops to #trial and the Close admits it in an 11px mono note (Close, nav, hero). Fix: honest fallback (email field or mailto), hide "Masuk", remove the dev note. Command: /impeccable harden
- [P1] Phone hero: preview 423px below the tapped cell; hint says "di kanan"; group tab does not follow focus (hero). Fix: preview above the matrix, sticky under the nav; bind tab to focus; breakpoint-aware hint. Command: /impeccable adapt
- [P1] 144 sequential tab stops plus 24 inert chart buttons; two live regions re-announce on every toggle (hero, §3). Fix: roving tabindex with arrow keys, one hidden status line, non-focusable bars with a hidden data table. Command: /impeccable harden
- [P2] Grid recognition and stale trail: no tooltips, twin glyphs, rules in 12px at 70ch, back/reset leave the log contradicting the grid (hero). Fix: title on segments, distinct Original glyph, rule text in the preview footer, log entries on popstate and reset. Command: /impeccable clarify
- [P3] §6 trust sheet has the least authority: strike-through at 1.67:1, 20ch definitions at 1024. Fix: mono "tidak diklaim" prefix instead of strike, stack under 1200px, larger measure. Command: /impeccable bolder

Section to improve next: the hero (four of five issues live there); §6 second.

## Cognitive Load

Hero viewport: 6 of 8 checklist failures (high). Sheets: 0 to 1 each. The four-toggle cell is intrinsic; 12 folders by 3 groups at first sight is extraneous.

## Emotional Journey

Peak: first desktop toggle. Valleys: §2 after the hero, §5 into §6, the mobile hero. Reassurance exists in §6 with the least authority and no link from the hero. Peak-end weak: generic tagline, small sign-in link, dev note.

## Persona Red Flags

- Jordan: 36 unlabeled cells, twin glyphs, fine-print rules, jargon, inert chips, "Anda tidak punya akses", CTA lands on the dev note.
- Sam: Tab 8 to 151, double live regions, 24 inert chart buttons, tablist without arrow keys, three "Contoh dokumen" labels.
- Casey: two teal buttons in the fold (14% teal), 2123px hero, preview off-screen, hint "di kanan", §2 repeats questions.
- Indonesian deal lead on Drive links: page never names Drive, never says "tamu tidak pernah ditagih", forwarding fear answered only by the watermark.

## Minor Observations

Nav plus hero teal CTAs; matrix overflow at 1024 to 1130px and tabs at 767 although three groups fit at 768; colon vs dot times; en-GB "05 Sept 2026"; duplicate "membuka dokumen" lines; unread bars drawn at 2.4px; §7 "kode 6 digit" vs five digits plus caret; §2 chips overrun at 1024; FAQ permalink #1.4 occluded and contents column not sticky.

## Questions to Consider

- What if "Yang tidak kami klaim" were the second thing on the page, under the grid?
- Is the right hero instrument the grid, or the watermark burn with the visitor's own email?
- Is a trust page complete without the owner's own exposure stated?
