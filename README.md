# Coherence Power

Landing page for Coherence Power: one page with a "Book a demo" button.

- `site/` is the live site. Only this folder is deployed to GitHub Pages (see `.github/workflows/pages.yml`).
- `archive/` is the previous multi-page site (cost map, how it works, planning method, research). It is kept for reference and is **not** deployed, so none of its pages are reachable from coherencepower.com. To bring a page back, copy it into `site/`.
- `docs/` holds the design system and content notes.

## Book a demo

The button opens a short form (name, work email, company) that posts to Formspree. The form ID comes from the `FORMSPREE_FORM_ID` repo secret and is injected into `site/index.html` at deploy. Without JavaScript, or when previewing locally, the button falls back to an email to info@coherencepower.com.

To send people to a scheduling link (Calendly, Cal.com, HubSpot) instead, change the two `href`s marked `data-demo` in `site/index.html` to the booking URL and remove the `data-demo` attribute.

## Preview locally

```sh
python3 -m http.server -d site 8000
```
