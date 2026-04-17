import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-frame section-space px-4 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="display-title mt-4 text-6xl text-[var(--ink)]">This page has slipped from the shelf.</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
        The link may have changed, or the piece may have sold through. Head back to the shop and we
        can start again.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        Return to shop
      </Link>
    </section>
  );
}
