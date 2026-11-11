# Content and sources

The audience is **plant managers, operators and plant engineers** at industrial facilities.

**Core message:** See what every machine in your plant costs to run, without installing a single meter.
**Support:** We scan the process (drawings, nameplates, bills, one walkthrough), build a physics-based model of the plant, and deliver a running cost per machine plus a ranked list of fixes. Load shifting and storage sizing are now some of the fixes the model finds, not the headline.
**Primary CTA:** Request a cost map. Use this exact wording everywhere (nav, hero, form button, footer).

## Alternate headlines to test

1. (live) See what every machine in your plant costs to run, without installing a single meter.
2. Sub-metering answers, without the sub-metering budget.
3. We model your plant from the physics up and show you where the energy money is going.

## Homepage (index.html): where each claim comes from

| Section | Copy / claim | Source |
|---|---|---|
| Hero | Cost per machine without meters; scan, model, ranked fixes | Owner's brief, Nov 2026 |
| Cost map drawing | Seawater RO plant, tags, kW, dollar figures, the two notes | **Illustrative**, invented for the page and labelled as such in the title block. The six costs add up to $1.84M. Have a process engineer check that the kW and cost split look right for an RO plant |
| Comparison table | Sub-metering needs hardware, electricians, often a shutdown | General industry knowledge, stated qualitatively. No sub-metering prices are quoted |
| Comparison table | "If we find no savings, you pay nothing" | Previous site contact section |
| Comparison table | First answers "in weeks" | Previous site ("You get answers in weeks") |
| How it works, step 1 | Drawings, equipment list, 2 months of bills and interval data, a walkthrough | Owner: docs plus walkthrough today. A physical scan is the long-run plan and is **not** claimed on the page |
| How it works, step 2 | Model tuned until its total tracks the utility meter | **Assumption.** Confirm this is how you calibrate |
| How it works, steps 3 and 4 | Finds inefficiencies; helps target or implement fixes | Owner's brief |
| Fix list table | Four fixes, savings, costs, paybacks, 10% total | **Illustrative**, tied to the drawing and labelled in the caption |
| "A model you can ask again" | Reruns when equipment, production or tariff changes | Previous site ("Always up to date") |
| Track record | 10–15% / 38% / 18% / 23% and footnote | Deck slide 10, academic pilots with California facilities. The storage CapEx figure was 50% in the deck; the owner corrected it to 38%, and the power-cost figure from 10% to 10–15%, on 11 Nov 2026 |
| Track record | "The cost map is a newer service... small number of plants" | **Added for honesty**: the pilots tested scheduling and storage sizing, not the cost map. Remove or reword if you disagree |
| Track record | Open-source line and link to github.com/flex-pse/flex-pse | Owner's comment, 11 Nov 2026 |
| Track record | Three research cards (Nature Water 2024, ACS Sust. Chem. Eng. 2024, ES&T 2025) | Titles, authors and DOIs from we3lab.stanford.edu/research/flexibility.html. Chosen by Claude as a first pick; swap for case studies when you have them |
| Limits | Quality, production, equipment, operators decide | Previous site section 03, wording kept |
| Limits | Runs offline or on your network | how-it-works.html security section |
| Industries | Demonstrated in four water sectors; partnering in seven others | Deck slide 13, wording kept ("our technology has been demonstrated in") |
| Contact | Three steps; step 2 now also asks for drawings and an equipment list | Previous site plus the new scan. Confirm |

## The planning method (how-it-works.html)

Content is unchanged from the previous version except: numbered eyebrow labels and the hero tag row are removed, the CTA reads "Request a cost map", and one sentence at the top of the lead ties the page to the cost map. Sources for its claims are as before (owner's brief, deck slides 8, 10, 11). The worked example (seawater RO plant) was labelled "hypothetical"; the owner changed the label to "Based on anonymized pilot studies" on 11 Nov 2026. Check that the specific events in it (the heat-wave price spike, the pump trip, the battery decision) match what the pilots saw.

## Open items

- **Photos.** The page has none. One real photo of your team on a plant floor, or of a pilot site, would do more for credibility than any further design work.
- **A named customer or quote.** Every reference site leads with these.
- `assets/og-image.png` still shows the old dark design and tagline. Replace it.
- `tests.html` and `words.js` are unreferenced and can be deleted.

## Voice

- Write the way you would explain it to a plant manager across a table. Full sentences.
- Use the reader's words: *plant, bill, demand charges, setpoints, pump curve, nameplate, P&ID, spec, payback*.
- Say "model of your plant" first; "digital twin" is fine later but is not the pitch.
- Avoid *grid services, VPP, aggregation, DER, monetize, unlock, leverage*.
- No paired slogans ("X. Not Y."), no strings of fragments ("No sensors. No hardware.").
- Every illustrative number is labelled as illustrative. Never round up a pilot result.
