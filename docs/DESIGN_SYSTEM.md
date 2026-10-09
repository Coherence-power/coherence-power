# Coherence Power design system (web, dark default + light)

Derived from the Coherence Power overview deck. All tokens live as CSS custom properties at the top of `styles.css`.

## Principles

1. **Speak to the plant manager.** Lead with their bill and their process, never with grid or market language. No utility, aggregator or investor framing.
2. **Evidence over adjectives.** Every claim should trace to a pilot, a paper or the deck. Mark simulated or illustrative content as such.
3. **Instrument-panel calm.** Dark ground, one electric accent, mono labels for data. Cyan means *Coherence* or *the result*. Use it sparingly.
4. **Process first.** Visually and verbally, constraints (quality, production, equipment) are shown as fixed and protected.

## Color

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#1b1c1d` | Page ground (deck slides are #1F1F1F) |
| `--bg-deep` | `#141516` | Alternate bands (results, contact, footer), chart wells, inputs |
| `--surface` | `#252728` | Cards |
| `--surface-2` | `#2d3031` | Raised elements |
| `--surface-teal` | `#1d2b32` | The "process first" band (echoes the deck's ecosystem panels) |
| `--line` | `#36393b` | Hairlines and card borders |
| `--line-strong` | `#4a4e51` | Ghost buttons, inputs, step rail |
| `--text` | `#f3f5f6` | Headlines, primary text |
| `--text-muted` | `#b0b7bb` | Body copy on dark |
| `--text-dim` | `#8b9398` | Captions, mono labels, footnotes (≥ 4.5:1 on `--bg`) |
| `--cyan` | `#33e3ff` | Brand accent: key words, stats, primary button, Coherence line in charts |
| `--steel` | `#2f7aa3` | Secondary data color (peak band, second logo stroke) |
| `--steel-deep` | `#255c7c` | Deep data blue, as for the deck's big numbers |
| `--on-cyan` | `#071a20` | Text on cyan buttons |

Rules:
- Use cyan for at most one phrase per headline (e.g. "*Not its output.*").
- Comparison data is grey, and Coherence or the result is cyan, as in the deck's charts.
- Gradients: only a soft radial "corner light" behind the hero and contact block, echoing the deck's title slide. No other gradient washes.

## Light theme

Dark is the default. A sun/moon button in the nav switches to light. The choice is saved per visitor in `localStorage` (`cp-theme`), and an inline script in `<head>` applies it before first paint, so the page doesn't flash.

All light values live in the `[data-theme="light"]` block in `styles.css`. Every color, including the SVG chart strokes and fills, goes through a CSS variable, so nothing else changes between themes.

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#1b1c1d` | `#f6f7f7` |
| `--bg-deep` | `#141516` | `#eceeef` |
| `--surface` | `#252728` | `#ffffff` |
| `--surface-teal` | `#1d2b32` | `#e4f0f3` |
| `--line` | `#36393b` | `#dde1e3` |
| `--text` | `#f3f5f6` | `#141516` |
| `--text-muted` | `#b0b7bb` | `#4a5257` |
| `--text-dim` | `#8b9398` | `#5f676c` |
| `--cyan` (accent text, buttons) | `#33e3ff` | `#056d89` |
| `--on-cyan` (button text) | `#071a20` | `#ffffff` |
| `--chart-accent` (Coherence line) | `#33e3ff` | `#0891b2` |

On light, electric cyan fails contrast as text, so the accent deepens to `#056d89` (at least 4.6:1 on every light surface). Chart lines can stay brighter (`#0891b2`) because they only need 3:1. Primary buttons flip to white text on deep teal.

Rules for new work:
- Never hard-code a color in markup or CSS. Use a token, and add a light value for any new one.
- In SVG, set colors with `style="stroke: var(--token)"`, not `stroke="#hex"`. Presentation attributes can't read CSS variables.

## Typography

| Role | Family | Weight | Size |
|---|---|---|---|
| Display / H1 | Jost (Futura-like, matches deck) | 600 | `clamp(2.6rem → 4.75rem)`, line-height 1.02 |
| H2 | Jost | 600 | `clamp(2rem → 3.4rem)`, line-height 1.08 |
| H3 | Jost | 600 | `clamp(1.25rem → 1.5rem)` |
| Lead | Jost | 400 | `clamp(1.125rem → 1.3rem)`, muted |
| Body | Jost | 400 | 17px, line-height 1.6 |
| Label / eyebrow / data | IBM Plex Mono | 500 | 12px, uppercase, letter-spacing .14em |
| Big stats | Jost | 600 | `clamp(2.6rem → 4rem)`, cyan |

Load both families from Google Fonts in one `<link>`. If the brand moves to licensed Futura PT, swap `--font-display` only.

## Layout & spacing

- Container max width is 1240px, with a gutter of `clamp(16px, 4vw, 48px)`.
- Section padding is `clamp(88px, 10vw, 152px)`, and each section starts with a 1px `--line` top border.
- Section head pattern: mono label `NN / Name` → H2 → lead (max 680px).
- Radii are 10px for cards and 16px for feature panels and forms. Buttons are pill-shaped.
- Breakpoints: 960px (hero, two-column blocks stack), 900px (nav collapses, 3-up grids stack), 720 and 560px (2-up grids go to 1).

## Components

- **Buttons:** `.btn--primary` (cyan pill, dark text) is for the single main action, "Request a site assessment". `.btn--ghost` is for secondary actions. Minimum height is 48px (44px in the nav).
- **Card:** surface, 1px line border, letter or number tag in mono cyan, H3, muted body.
- **Stat:** big cyan number, then a muted caption. Divide stats with 1px vertical lines rather than boxes.
- **Steps rail:** a horizontal hairline with a cyan glowing node per step. It becomes a vertical rail on mobile.
- **Diff list:** a big cyan figure on the left and a bold lead-in plus muted sentence on the right, separated by hairlines.
- **Guard grid:** a 2×2 grid on the teal band with stroke icons (1.5px, cyan).
- **Industry tile:** "Demonstrated" tiles get a cyan border, a filled cyan dot and a faint cyan top tint. Other tiles have a hollow dot and "Now partnering".
- **Evidence chart:** name, method tag (mono) and a 0–40% track with dots or ranges, plus a cyan vertical line for the 15% target. Water rows are highlighted cyan.
- **Chart card (hero):** mono title, "Illustrative" pill, SVG with a dashed grey baseline and a solid cyan Coherence line, a steel peak band, and a 3-up readout.

## Motion

- Elements fade and rise 16px into view (`.reveal`, 0.7s), once.
- The hero's cyan line draws in over 2.4s.
- Everything respects `prefers-reduced-motion`.

## Accessibility

- Text meets 4.5:1 contrast, and large text meets 3:1.
- Focus rings are visible (2px cyan).
- The page has a skip link, real `<button>` and `<a>` elements, and labelled inputs.
- The hero chart has a text description in `aria-label`. Decorative SVGs are `aria-hidden`.
- Touch targets are at least 44px.

## Iconography

Inline stroke SVGs on a 24px grid with a 1.5px stroke, rounded caps, `currentColor`. No emoji and no filled icon sets.

## Imagery

No stock photography for now. The product chart is the hero image. If photography is added later, use real plant or site photos (pumps, membranes, control rooms), desaturated and darkened to sit on the dark ground, never bright lifestyle shots.
