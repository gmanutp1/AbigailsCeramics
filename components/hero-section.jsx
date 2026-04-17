import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[color:var(--line)]">
      <div className="absolute inset-0">
        <Image
          src="/images/editorial/hero-lifestyle.svg"
          alt="Editorial still life of handmade ceramics in warm natural light."
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,26,20,0.66)_0%,rgba(36,26,20,0.32)_38%,rgba(36,26,20,0.10)_72%,rgba(36,26,20,0.2)_100%)]" />
      </div>

      <div className="site-frame relative flex min-h-[calc(100svh-8rem)] items-end px-4 pb-16 pt-28 sm:pb-24 lg:pt-32">
        <div className="max-w-2xl text-white">
          <p className="eyebrow text-[rgba(255,246,236,0.82)] fade-up">New studio release</p>
          <h1 className="display-title mt-5 max-w-[10ch] text-6xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.8rem] fade-up fade-delay-1">
            Quiet objects for the ritual of home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(255,244,236,0.84)] fade-up fade-delay-2">
            Small-batch ceramics shaped by hand, glazed in soft mineral tones, and made to
            become part of daily life with ease.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up fade-delay-3">
            <Link
              href="/shop"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[rgba(255,246,236,0.95)] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition hover:-translate-y-0.5"
            >
              Shop the drop
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/18"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
