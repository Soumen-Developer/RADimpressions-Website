# CONTENT-GAPS.md (project log)

Mirror of `C:\Users\YOGSHI\Downloads\CONTENTGAPS.md` — every `TK:` that touches a
rendered route on this site, with the suppression flag that ships until it is
filled. Rule 4 of the source file is enforced by `next build`: any `TK:`
reaching a rendered route fails the production build (verified clean, 65/65
routes).

## Open — with shipping suppression

| ID | Gap | Route(s) | Shipping behaviour |
|---|---|---|---|
| TK-08 | Case studies: client, permission, verified metrics | `/work`, `/work/[slug]` | `/work` renders the filter + honest empty state (`content/workEmptyState`). The `[slug]` route 404s — `content/case-studies.ts` is empty, no fake cards |
| TK-12 | Founding story | `/about` | S2 suppresses the narrative; page renders the operating model only (`content/about.ts`, `story.suppressed`) |
| TK-11 | Team names, roles, bios, photos | `/about/team` | Route not created; unlinked until filled |
| TK-19 | Office address | `/contact` | Email and phone only (`content/misc.ts >> contact`) |
| TK-28 | Author bylines | `/insights/[...]` | No byline rendered; articles publish under the practice name |
| TK-15/16/17 | Privacy / terms / refund copy | `/privacy-policy`, `/terms`, `/refund-policy` | Structured headings with pending lines (SITEMAP D.17); no legal text drafted as final |

## Filled while building (delete rows when filled)

- Sprint pricing → `Price on request` (screenshot of TK-23): `lib/brand.ts >> sprintPrice: null`
- Sprint slots → 2 (`TK-25`): `lib/brand.ts >> sprintSlots: 2`
- Sprint credit → in full within 30 days (`TK-26`): `content/misc.ts >> submitted.reframe`

## Rules

1. Never fabricate a number — a missing metric suppresses the block, never estimates it.
2. Never fabricate a client — matrix pages carry labelled worked scenarios; `proofType` drives the label.
3. A gap marked *suppress* must degrade cleanly — no empty heading, no orphaned column, no visible `TK`.
4. When a gap is filled, delete its row here and remove the suppression flag in the same commit.