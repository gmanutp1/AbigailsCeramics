import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";

const principles = [
  "Thrown and finished in small, closely watched batches",
  "Designed to age gracefully with use, light, and touch",
  "Glazes chosen for warmth, calm, and everyday longevity",
];

export function BrandPhilosophy() {
  return (
    <section className="site-frame section-space px-4">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[color:var(--line)]">
          <Image
            src="/images/editorial/our-offering.svg"
            alt="Close-up editorial arrangement of handcrafted ceramics."
            width={1100}
            height={1300}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Our offering"
            title="Made with a slower hand and intended for a long life at home."
            body="Each piece begins in quiet repetition: centering, pulling, trimming, drying, glazing. What emerges is never perfectly identical, and that is part of the beauty."
          />

          <div className="mt-8 grid gap-4">
            {principles.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 border-t border-[color:var(--line)] py-4 first:border-t-0 first:pt-0"
              >
                <span className="font-serif text-3xl tracking-[-0.06em] text-[var(--accent)]">
                  0{index + 1}
                </span>
                <p className="pt-1 text-base leading-8 text-[var(--ink-soft)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
