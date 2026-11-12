# Coherence Power design system (web)

Light only. The look is a marked-up engineering drawing: drafting paper, ink lines, equipment tags, and a yellow highlighter over the numbers that matter. Tokens are CSS custom properties at the top of `styles.css`.

## Principles

1. **The drawing is the hero.** The cost map (a process line with a cost on each machine) is the one memorable element. Everything else stays quiet.
2. **Structure means something.** Numbers appear only on real sequences (the four steps, the contact steps). No eyebrow labels above headings, no icon grids.
3. **Yellow is a highlighter.** `--marker` only ever sits behind a cost figure or marks an engineer's note. Never use it for buttons, borders or decoration.
4. **Evidence over adjectives.** Tables with real units beat cards with claims. Label anything illustrative.

## Color

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#f2f4f1` | Page ground |
| `--paper-deep` | `#e6eae6` | Alternate bands (track record, contact) |
| `--sheet` | `#ffffff` | Drawing sheets, tables, form |
| `--ink` | `#14232d` | Headlines, borders, primary button |
| `--ink-soft` | `#43525b` | Body copy |
| `--ink-faint` | `#66747c` | Captions, table row labels |
| `--rule` / `--rule-strong` | `#c8d0d1` / `#8e9a9f` | Light and medium rules |
| `--blue` | `#1d5c8c` | Process lines, equipment tags, links, step numerals |
| `--marker` | `#ffd84a` | Highlighter behind cost figures |

The older names (`--cyan`, `--bg`, `--surface`, `--chart-*`) are still defined in `styles.css` and mapped onto this palette, because `how-it-works.css` uses them.

## Typography

One family in three widths, loaded from Google Fonts.

| Role | Face | Weight |
|---|---|---|
| Headlines, table heads, buttons, figures | Barlow Semi Condensed | 600 |
| Body | Barlow | 400, 500 |
| Equipment tags, title-block labels | Barlow Condensed | 500 |

Body is 18px. No all-caps, no letter-spaced labels, no monospace.

## Components

- **Sheet** (`.sheet`): white, 1.5px ink border, faint 24px grid, square corners. Holds the process line (`.pid`, `.unit`) and ends in a **title block** (`.titleblock`) like a real drawing.
- **Unit** (`.unit`): symbol, tag, name, rating, highlighted annual cost, share of bill, optional note. In-line units sit on the blue process line; utilities (`.unit--aux`) sit apart. Stacks vertically under 900px.
- **Table** (`.table`): white, ink border. Under 760px each row becomes a block and cells show their `data-label`.
- **Steps** (`.steps`): ink top rule, blue numeral, heading, paragraph.
- **Results** (`.results`): figure and description on a ruled row. Not tiles.
- **Buttons**: `.btn--primary` is solid ink; `.btn--ghost` is outlined. 3px radius. No arrows.

## Motion

None on load or scroll. Respect `prefers-reduced-motion` for smooth scrolling.

## Imagery

No stock photography. When photos are added, use real plant and team photos, uncropped and lightly graded, never darkened into a mood shot.

## Files

- `styles.css`: tokens, base, header, footer, buttons, homepage.
- `how-it-works.css`: components used only by `how-it-works.html`.
