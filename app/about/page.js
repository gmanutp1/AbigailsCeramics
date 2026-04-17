import { PageHero } from "@/components/page-hero";

const values = [
  {
    title: "Small batch by nature",
    body: "The studio works in measured runs so every glaze, curve, and foot can be checked closely before release.",
  },
  {
    title: "Designed for use",
    body: "Pieces are shaped to live on the table and in the sink, not only on a styled shelf.",
  },
  {
    title: "Variation is welcome",
    body: "Subtle differences in tone and finish are treated as evidence of the hand rather than imperfections to erase.",
  },
];

export const metadata = {
  title: "Our Story",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio practice rooted in quiet craft."
        description="Abigail's Ceramics is imagined as a warm, story-led artisan brand with room for founder content, process photography, and future studio updates."
        image="/images/editorial/founder-portrait.svg"
        imageAlt="Founder portrait placeholder illustration."
      />

      <section className="site-frame section-space grid gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Founder note</p>
          <h2 className="display-title mt-4 text-5xl text-[var(--ink)]">
            The work begins with a desire for objects that feel gentle, grounding, and enduring.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[var(--ink-soft)]">
          <p>
            This placeholder brand story is written to feel intimate and elevated while staying easy
            to replace later with real founder details. It gives the site enough emotional shape to
            feel complete in the meantime.
          </p>
          <p>
            Use this page to introduce the maker, the studio location, early influences, and the
            materials or firing methods that define the work. The structure is intentionally clean so
            it can flex with a longer narrative, a journal format, or a shorter founder note.
          </p>
        </div>
      </section>

      <section className="site-frame grid gap-8 px-4 pb-20 lg:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="soft-panel rounded-[1.8rem] p-6">
            <h3 className="font-serif text-4xl tracking-[-0.04em] text-[var(--ink)]">{value.title}</h3>
            <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">{value.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
