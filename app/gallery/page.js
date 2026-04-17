import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { lookbookFrames } from "@/lib/data";

export const metadata = {
  title: "Lookbook",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A lookbook of texture, light, and lived-in stillness."
        description="Use this page for editorial imagery, campaign moments, studio process photography, or a seasonal visual journal."
        image="/images/gallery/studio-shelf.svg"
        imageAlt="Ceramics arranged on a shelf."
      />

      <section className="site-frame section-space px-4 pt-12">
        <div className="columns-1 gap-6 md:columns-2">
          {lookbookFrames.map((frame) => (
            <figure key={frame.title} className="mb-6 break-inside-avoid overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/55">
              <Image src={frame.image} alt={frame.title} width={1200} height={1400} className="h-full w-full object-cover" />
              <figcaption className="p-5">
                <h2 className="font-serif text-4xl tracking-[-0.04em] text-[var(--ink)]">{frame.title}</h2>
                <p className="mt-2 text-base leading-8 text-[var(--ink-soft)]">{frame.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
