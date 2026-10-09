# Content and sources

The audience is **plant managers, operators and plant engineers** at industrial facilities. Messaging for utilities, aggregators, suppliers, developers and investors is intentionally removed.

**Core message:** Cut your plant's power bill. Not its output.
**Support:** An energy digital twin finds schedules, setpoints and storage moves that lower electricity cost inside your process limits, with the rigor of an engineering study at software speed.
**Primary CTA:** Request a site assessment.

## Sources for each section

| Section | Copy / claim | Source |
|---|---|---|
| Hero | "energy digital twin", "unlock flexibility" | Deck slide 7 |
| Hero | "inside the limits your process already runs on" | Current site: "without disrupting product delivery or quality" |
| Hero chart | Load-shift profile | **Illustrative**, not real data, and labelled as such on the page |
| Results | 10% / 50% / 18% / 23%, footnote | Deck slide 10, "Results from academic pilots with California facilities" |
| 01 Problem | "many months and hundreds of thousands of dollars" | Current industrial.html |
| 01 Problem | "Enrolling in programs doesn't guarantee results" | Current industrial.html |
| 01 Problem | TOU, demand charges | Current industrial.html (TOU, demand response) |
| 02 How it works | Heading: "A digital twin of your plant, so you focus on production, not worrying about energy costs." | Your canvas edit |
| 02 How it works | 10× speed, thousands of configurations, re-optimizes on change | Deck slide 8 |
| 02 How it works | "co-pilot" | Deck slide 10 footnote |
| 02 Step 01 data inputs | bills, interval data, SCADA/historian, "no new hardware to start" | **Assumption.** SCADA is from deck slide 10, but confirm what you actually ask for and whether hardware is ever needed |
| 03 Process first | quality and delivery are fixed | Current site; deck slide 5 ("deep understanding of operating constraints") |
| 03 "Your operators decide" | recommendations, not autonomous control | **Assumption.** Confirm this matches your product |
| 04 Industries | 11 verticals, demonstrated vs next. Wording: "our technology has been demonstrated in..." (the technology was demonstrated, not necessarily by the company itself) | Deck slide 13 (TRL 6–7 = Demonstrated; TRL 4–5 = Now partnering) |
| 04 Evidence chart | **Removed** at your request until there is more supporting data. The CSS (`.evidence`, `.ev-*`) is still in styles.css for later | Deck slide 12 |
| Team section | **Removed** at your request (bios, traction stats, affiliations) | |
| Contact | "small number of facilities", pilot framing | Deck slide 15, current industrial.html |
| Contact | 3-step process (call → 2 months of data → first estimate) | **Assumption.** Edit to match how you actually run assessments |
| Footer | Palo Alto coordinates | Current homepage |
| Contact | 2 months of bills and interval data; info@coherencepower.com; footer contact trimmed to the assessment link | Your canvas edits. The same footer trim is applied to how-it-works.html for consistency |

Content deliberately **left out** for this audience:
- Market sizing (SAM/TAM, slides 13–14)
- Grid trends and data-center framing (slides 3–4)
- The utility/aggregator ecosystem diagram (slide 6)
- Monetization through aggregators and utilities (slide 14)
- "Advisory contracts in negotiation" and "channel partner discussions" (slide 9), which are investor metrics

## How it works page (how-it-works.html)

| Section | Copy / claim | Source |
|---|---|---|
| Hero, 01 | Risk-aware optimization; decisions robust "no matter what happens" | Your brief |
| Hero fan chart, 01 distribution chart | Price scenarios; savings distributions | **Illustrative** shapes, labelled as such |
| 02 | "Millions of scenarios" | Your brief. The homepage also says "Millions of scenarios scanned" (it used to say "1,000s of configurations"; both now appear, as scenarios × configurations) |
| 02 | 10× faster | Deck slide 8 |
| 03 | Security: fully offline or fully on-prem on the IT/business network; human in the loop always | Your comment on the canvas |
| 04 | Three uncertainties: short-term, long-term, execution | Your brief, written up with a **hypothetical** seawater RO plant as the example. Have an RO process engineer check the chemistry details (antiscalant, pretreatment, membrane cycling) |
| 04 | "often a smaller battery paired with operational flexibility" | Ties to deck slide 10 (50% CapEx savings on storage) |
| 05 | Developed over decades at Stanford and the U.S. DOE; WE3 Lab | Your brief; deck slide 11 ("A decade of WE3 research") |
| 05 | $3M grant funding | **Removed** at your request |
| 05 | Timeline stages | No dates invented except 2026 (founding year, from the current site) |
| 06 | Deliverables: operating plan, investment case, risk profile, living model | **Assumption** based on deck slides 8 and 10. Confirm these match what you deliver |
| 01 | "Your risk tolerance, your call" | **Assumption.** Confirm customers can set how conservative the plan is |

Your canvas edits are carried into the code: the eyebrow reads "Energy intelligence designed for you" and the hero lead was rewritten around operator value (bill, production targets, quality, delivery) at your request.

## Open items

Resolved:
- Formspree form ID: stored as the `FORMSPREE_FORM_ID` GitHub secret and injected at deploy by `.github/workflows/pages.yml`.
- og:image: `assets/og-image.png`.
- "Read the research" links to https://we3lab.stanford.edu/research/flexibility.html.
- Assumptions flagged above: confirmed by the owner.

Still open:
- `tests.html` and `words.js` are no longer referenced. Kept for now; delete once the deployed site is confirmed working.

## Voice

- Plain, confident, operator-to-operator. Short sentences.
- Use the reader's words: *plant, bill, demand charges, setpoints, SCADA, output, spec, downtime*.
- Avoid *grid services, VPP, aggregation, DER, monetize, TAM*.
- Back claims with numbers and footnotes. Never round up a pilot result.
