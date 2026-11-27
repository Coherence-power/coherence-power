# Coherence Power

Landing page for Coherence Power: one page with a "Book a demo" button.

- The live site is the files at the repo root: `index.html`, `styles.css`, `main.js`, `404.html`, `assets/`, `CNAME`. Only these are published. `_config.yml` keeps `archive/`, `docs/` and this README out of a branch-based Pages build, and `.github/workflows/pages.yml` uploads only these files.
- `archive/` is the previous multi-page site (cost map, how it works, planning method, research). It is kept for reference and is **not** deployed, so none of its pages are reachable from coherencepower.com. To bring a page back, copy it to the repo root.
- `docs/` holds the design system and content notes.

## Book a demo

The button opens a short form (name, work email, company) that posts to Formspree. The form ID comes from the `FORMSPREE_FORM_ID` repo secret and is injected into `index.html` by the deploy workflow. Without JavaScript, or when previewing locally, the button falls back to an email to info@coherencepower.com.

To send people to a scheduling link (Calendly, Cal.com, HubSpot) instead, change the `href` marked `data-demo` in `index.html` to the booking URL and remove the `data-demo` attribute.

## Preview locally

```sh
python3 -m http.server 8000
```
