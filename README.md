# Abigail's Ceramics

Original Next.js storefront concept for a handmade ceramics brand with a calm editorial feel.

## Run locally

```bash
npm install
npm run dev
```

## Notes

- Core product, collection, testimonial, FAQ, and contact content lives in `lib/data.js`.
- Placeholder SVG imagery lives in `public/images/` and is ready to be replaced with real photography.
- Shared storefront UI lives in `components/`, including the sticky header, cart drawer, quick view modal, and search modal.
- The current cart and forms are frontend placeholders designed to be swapped later for Shopify, Stripe, or another commerce backend.
- The repo is configured for GitHub Pages deployment through GitHub Actions.
- This implementation assumes you wanted a custom Next.js frontend prototype even though the brief also mentioned Squarespace.
