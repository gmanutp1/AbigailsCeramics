import Image from "next/image";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="site-frame section-space px-4">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="soft-panel relative overflow-hidden rounded-[2rem] p-6">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_42%)]" />
          <Image
            src="/images/editorial/founder-portrait.svg"
            alt="Founder portrait illustration placeholder."
            width={1100}
            height={1300}
            className="relative h-full w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <p className="eyebrow">Our story</p>
          <h2 className="display-title mt-4 text-5xl text-[var(--ink)] sm:text-6xl">
            Started in a small studio with one wheel, a shelf of tests, and a love of useful objects.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
            Abigail's Ceramics began as an evening practice: a few mugs, then a few bowls,
            then the slow realization that everyday things can carry memory. The collection still
            follows that same rhythm, shaped in measured batches and released only when the pieces
            feel fully resolved.
          </p>
          <p className="mt-5 text-lg leading-8 text-[var(--ink-soft)]">
            The work leans toward grounded forms, soft mineral glazes, and silhouettes that feel
            timeless without feeling precious. Everything is made to be used, loved, and marked by
            real life.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition hover:-translate-y-0.5"
          >
            Meet the maker
          </Link>
        </div>
      </div>
    </section>
  );
}
