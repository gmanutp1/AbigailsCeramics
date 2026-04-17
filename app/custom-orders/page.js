import { BespokeForm } from "@/components/bespoke-form";
import { PageHero } from "@/components/page-hero";

const processSteps = [
  "Share your idea, quantity, timing, and any references.",
  "Review a proposed direction with form, glaze, and budget guidance.",
  "Approve the final scope and move into studio production.",
];

export const metadata = {
  title: "Custom Orders",
};

export default function CustomOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke"
        title="Custom work for thoughtful tables, events, and spaces."
        description="A polished landing place for one-off commissions, event gifting, hospitality projects, or made-to-order forms."
        image="/images/gallery/founder-table.svg"
        imageAlt="Editorial table scene for custom orders."
      />

      <section className="site-frame section-space grid gap-8 px-4 pt-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">How it works</p>
          <div className="mt-6 space-y-6">
            {processSteps.map((step, index) => (
              <div key={step} className="border-t border-[color:var(--line)] pt-5 first:border-t-0 first:pt-0">
                <p className="font-serif text-4xl tracking-[-0.05em] text-[var(--accent)]">0{index + 1}</p>
                <p className="mt-2 text-base leading-8 text-[var(--ink-soft)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <BespokeForm />
      </section>
    </>
  );
}
