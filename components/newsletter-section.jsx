export function NewsletterSection() {
  return (
    <section className="site-frame px-4 pb-16">
      <div className="soft-panel grain-overlay relative overflow-hidden rounded-[2.2rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[rgba(157,103,68,0.1)] blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Notes from the studio</p>
          <h2 className="display-title mt-4 text-5xl text-[var(--ink)] sm:text-6xl">
            Rare pieces never linger for long.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            Join the list for kiln openings, first access to new work, and the occasional note on
            process, glaze tests, and custom commissions.
          </p>
        </div>

        <form className="relative mt-10 grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-h-14 rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.82)] px-6 text-[var(--ink)] outline-none transition focus:border-[color:var(--line-strong)]"
          />
          <button
            type="submit"
            className="min-h-14 rounded-full bg-[var(--ink)] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
