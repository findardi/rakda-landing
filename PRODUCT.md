# Product

<!-- impeccable:product-schema 1 -->

This repository is the marketing landing page for **Rakda**, a virtual data room. The application itself lives in the sibling repo `../rakda` (`web/` SvelteKit app, `server/` Go API). That repo's `web/PRODUCT.md` is the app's own product record; this file records what the landing page must know and preserve. Facts below cite `rakda/...` paths as evidence. Items marked *(inferred)* are my reading of the notes, not a confirmed decision.

## Platform

web

## Users

**Primary visitor (confirmed by user):** business decision-makers evaluating a tool for their company. Concretely, the app's stated users (`rakda/web/PRODUCT.md`): deal teams, startup founders and operators, and legal and finance professionals running due diligence, fundraising, M&A, property transactions, audits, or litigation. Their work is confidential, high-stakes, and time-bound.

**Segment** (`rakda/CLAUDE.md`, "lower-mid market"): individuals, small teams, and buyers priced out of enterprise VDRs. Indonesia first. Enterprise procurement needs (SSO, deep admin hierarchies) are explicitly not a target.

**What they use today:** a shared cloud drive with a link. That substitute, not iDeals, is the thing to beat.

**Not the landing page audience:** guests (counterparties) invited into a room. They use the app but never buy; per-guest metering was rejected because "the guest is the opposing party" (`rakda/brainstorm-folder/current-phase.md`). *(inferred: the page should not court guests.)*

## Product Purpose

Rakda is a self-serve virtual data room: a secure room for storing, sharing, and auditing confidential documents during a deal. The team's stated core value is "not features, but trust". Product success is that users entrust their most sensitive documents to Rakda and never doubt who accessed what (`rakda/web/PRODUCT.md`).

**Landing page success (confirmed by user):** a visitor decides Rakda is trustworthy enough and signs up to start the 30-day trial.

**Stage: pre-launch.** The app is a feature-complete MVP running on a dev environment. Production is not yet provisioned, billing is deferred, and the payment gateway is undecided (Midtrans or Xendit) (`rakda/brainstorm-folder/current-phase.md`). The sign-up destination URL does not exist yet.

## Positioning

A data room a small deal team can set up without training and afford without a sales call, with security that does not depend on which plan they buy. *(synthesis of the confirmed differentiators below)*

Differentiators the competitor scans (against Ellty, iDeals, Ansarada, Datasite; `rakda/.claude/skills/vdr-competitor-scan/`, `current-phase.md`) found no benchmark could truthfully copy:

- **Curated folder-template gallery per deal type.** Five built-in templates: M&A due diligence, fundraising, property transaction, audit & reporting, legal & litigation. No benchmark ships one.
- **Group-siloed Q&A with status and CSV export at a self-serve tier.** Ellty's Q&A sits at a higher tier and lacks silo, status, and export.
- **Append-only audit trail.** Deleting a question never erases its trace; the enterprise benchmarks destroy it.
- **Security on every plan, forever.** Privacy mode, viewer hardening, and view watermarking are never plan-gated. Stated rule: "a plan gate must not reduce anyone's security."
- **Transparent flat pricing and setup without training** are core positioning, not interim constraints (`rakda/CLAUDE.md`).

Datasite and Intralinks are named anti-references for clutter (`rakda/web/PRODUCT.md`). Ansarada is cited approvingly for publishing pricing instead of requiring a demo.

## Operating Context

Room lifecycle: **prepare → active → archive**.

1. An owner creates a room. It is born in *prepare*: internal only, guests get 403.
2. Owner and admins build the folder index (optionally applying a template, which *adds* folders and never replaces), upload documents, create groups, and set per-group per-folder permissions: view, watermark, download, download original.
3. The owner flips the room to *active* and invites guests by email. Each guest belongs to exactly one group and may carry an access-expiry date.
4. Guests read in a secure raster viewer: pages are rendered server-side and the watermark is burned per request with a minute-precision timestamp and client IP. Every view logs document and per-page events with dwell time. Guests ask questions in Q&A siloed to their group; owner and admins answer from one queue and can promote answers to an anonymous FAQ.
5. Owner and admins review the Activity timeline and per-reader Engagement, export CSVs, and at deal close generate an archive package ZIP.
6. The room moves to *archive*: frozen, still readable, guest downloads forced off, pages force-watermarked. Reversible.

**Deployment:** SaaS only. Single VPS, managed PostgreSQL, S3-compatible object storage in Jakarta (Biznet Gio NEO), behind Cloudflare. No self-hosted or on-prem offering exists or is planned.

## Capabilities and Constraints

**Shipped (in code at `rakda/`):** email + password auth with OTP verification; Google and GitHub sign-in; rooms with the prepare/active/archive lifecycle; 3-room owner cap; folder tree with a non-deletable General folder; document versioning with restore; Trash with 30-day retention; resumable multipart uploads; secure raster viewer; per-group per-folder permissions; watermarked flattened-PDF downloads; append-only activity log and content events with CSV export; per-reader engagement; name search plus full-text search with OCR (Indonesian and English), permission-filtered; group-siloed Q&A and FAQ with per-group toggle and quota; five built-in folder templates; bulk delete; archive export ZIP with 30-day TTL; owner-uploaded room logo and hero preset; "Mode privasi" and viewer hardening; email invitations with group and expiry; Indonesian and English UI; rate limiting.

**Planned, not built:** NDA gate, operational email notifications, room duplication, custom folder templates, priority support, billing. Do not present these as available.

**Rejected (never advertise):** fence view as a permission, vector PDF watermark, a fully closed room state, Q&A roles/assignment/categories/priorities, per-seat / per-GB / per-guest pricing, a permanent free plan, watermarking or privacy mode as a plan gate.

**Pricing: undecided (confirmed by user: "pricing not fix yet").** A tier hypothesis exists (Dasar / Deal / Portofolio, scaled by concurrently active rooms, managers, guests per room, and storage; prepare and archive rooms free and unlimited; all plans paid; 30-day trial to the Deal tier; 14-day trial rejected). Every number is an unverified assumption. The landing page must not publish prices or quotas until the user confirms them.

**Roles: fixed three.** Owner, Admin, Guest. Do not invent others.

**Honest limits the page must not paper over:**
- Screenshots cannot be blocked. The phrase "screenshot protection" is banned; the feature is "Mode privasi".
- The viewer is not served below 768×480, so guests do not read on phones.
- Pages cached in a guest's browser cannot be recalled. Never promise "access revoked instantly".
- Watermarked downloads are lossy raster PDFs with no text layer, capped at 750 pages.

**Security facts that may be stated truthfully** (`rakda/CLAUDE.md`, `rakda/web/PRODUCT.md`):
- Object storage is encrypted at rest with AES-256 (SSE-S3), verified at boot. The key is held by the storage provider. Never say "encrypted in the database", never mention BYOK or per-room keys, never imply "only you can read this".
- Uploaded original bytes never leave the server for anyone, owner and admin included. "Original" means the unmarked rendition.
- The watermark is burned into pixels per request and cannot be removed by a PDF tool.
- Audit rows are append-only with actors snapshotted at write time, visible to owner and admin only. Guests never see any activity, including their own.
- Data is stored in Jakarta, Indonesia.
- Say "archive package" / "paket arsip", never "backup". Templates are "added", never "replace".

**Landing page facts:**
- Language (confirmed by user): Indonesian default with an English toggle. Both locales carry equivalent content.
- Stack (this repo): SvelteKit 5 in runes mode, Tailwind v4, Bun.
- Domain: none committed. Deploy artifacts in `rakda/` use `app.<domain>` placeholders.
- Sign-up destination: undecided until production exists.

## Brand Commitments

**Name:** Rakda (formerly Wadi, then Riksa; rebranded 2026-08-23).

**Binding for this landing page (confirmed by user): the mark, the fonts, and the palette all bind.** The page must read as the same product as the app.

- **Mark:** the official 4-line vector mark in `rakda/web/src/lib/components/common/Brand.svelte` (stroke 1.4, `currentColor`). Raster sources in `rakda/web/src/lib/assets/rakda.{png,webp,jpeg}`, ink `#14697D`, transparent background. Favicon `rakda/web/src/lib/assets/favicon.svg` (with a 3-line small-size variant). Apple touch icon `rakda/web/static/apple-touch-icon.png`.
- **Fonts:** Inter Variable (sans) and JetBrains Mono Variable (mono), via `@fontsource-variable/*`.
- **Palette:** the DaisyUI v5 theme `rakda` in `rakda/web/src/routes/layout.css`. Primary `oklch(0.48 0.105 215)` slate-teal; cool near-white bases; base-content `oklch(0.22 0.02 235)`; accent `oklch(0.52 0.11 155)`; light-only; theme-color `#f7fbfc`; radii 6–8px.
- **App design system:** `rakda/web/DESIGN.md`, north star "The Clean Room". It is the reference for the app; how much of its component system the landing page reuses is a later design decision.

**Existing copy (both locales, `rakda/web/src/lib/i18n/{id,en}.ts`):**
- Tagline: id "Ruang data aman untuk dokumen deal Anda." / en "A secure data room for your deal documents."
- Reassurance pair: id "Dibangun untuk dokumen rahasia" / en "Built for confidential documents", with a body about controlled and audited access.

**Voice** (`rakda/web/PRODUCT.md`): modern, sharp, efficient. Calm and factual. Sounds like professional tooling people use every day, not a sales brochure.

**Terminology:** "ruang data" / "data room" (never "workspace" in copy); Owner / Admin / Guest; Group; Folder access; Activity; Engagement; Q&A / FAQ; Trash (Sampah); Archive package (paket arsip); Mode privasi; Watermark; Invitation (undangan); Versions.

## Evidence on Hand

**Exists:**
- The running app on dev (`rakda/web`, `rakda/server`) as the source for real screens, once captured.
- The brand assets listed above.
- Five real folder templates with real folder names (`rakda/server/internal/content/service/folder_templates.go`).
- Real product copy in the i18n dictionaries (`rakda/web/src/lib/i18n/id.ts`, `en.ts`).
- Internal dev-laptop measurements only (watermarked page size, import and OCR timings). Not benchmarks for public claims.

**Does not exist. The landing page must not fabricate:**
- Customers, testimonials, case studies, customer logos, user counts, press.
- SOC 2, ISO 27001, GDPR, or Indonesian PDP-law compliance claims.
- Public benchmarks, uptime figures, or SLAs.
- Marketing screenshots or demo data (none committed yet).
- A production deployment or a domain.

## Product Principles

1. **Trust over features.** Every claim on the page must be true of the code today. The honest limits are part of the pitch.
2. **Security is never a plan gate.** Privacy mode, viewer hardening, and view watermarking belong to every tier.
3. **Setup without training.** A small deal team opens a room and is ready in minutes. Templates and fixed roles are the mechanism.
4. **Transparent, flat, self-serve.** No sales call, no per-guest metering. The counterparty is never billed.
5. **Indonesian first, English equal.** Both locales get the same care.

## Accessibility & Inclusion

WCAG AA baseline carried over from the app (`rakda/CLAUDE.md`, `rakda/web/DESIGN.md`): body text contrast at least 4.5:1, large text at least 3:1; honor `prefers-reduced-motion`; keyboard-first navigation; color never the sole carrier of meaning. Every aria-label and alt text must be localized in both locales (the app has known debt here).
