import { PageHero } from "@/components/page-hero";

const policyBlocks = [
  {
    title: "Shipping",
    body: "Ready-to-ship pieces leave the studio within 3 to 5 business days. Made-to-order or custom work lists a longer lead time directly on the product page.",
  },
  {
    title: "Packaging",
    body: "Orders are wrapped with recycled cushioning and boxed with care to protect each piece in transit.",
  },
  {
    title: "Returns",
    body: "Because the work is handmade in small batches, returns are accepted only on unused ready-to-ship pieces within 7 days of delivery.",
  },
  {
    title: "Damage in transit",
    body: "If something arrives damaged, reach out within 48 hours with photos and we will make it right whenever possible.",
  },
];

export const metadata = {
  title: "Shipping & Returns",
};

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shipping & Returns"
        title="Simple policies, shared clearly."
        description="A calm place for logistics, timelines, return rules, and packaging notes. Update with real studio policies when operations are finalized."
        image="/images/editorial/shop-hero.svg"
        imageAlt="Shipping and returns placeholder image."
      />

      <section className="site-frame section-space grid gap-6 px-4 pt-12 md:grid-cols-2">
        {policyBlocks.map((block) => (
          <article key={block.title} className="soft-panel rounded-[1.8rem] p-6">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-[var(--ink)]">{block.title}</h2>
            <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">{block.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
