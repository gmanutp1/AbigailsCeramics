import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/lib/data";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="A few helpful studio notes before you order."
        description="Simple answers around timelines, variation, custom work, and the handmade nature of the collection."
        image="/images/gallery/clay-process.svg"
        imageAlt="Hands shaping clay."
      />

      <section className="site-frame section-space px-4 pt-12">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="soft-panel rounded-[1.6rem] p-6">
              <summary className="cursor-pointer list-none font-serif text-3xl tracking-[-0.04em] text-[var(--ink)]">
                {item.question}
              </summary>
              <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-[color:var(--line)] px-6 py-8 text-center">
          <p className="text-base leading-8 text-[var(--ink-soft)]">
            Still need help with an order, glaze question, or custom request?
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            Contact the studio
          </Link>
        </div>
      </section>
    </>
  );
}
