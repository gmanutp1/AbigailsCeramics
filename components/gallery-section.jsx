import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { lookbookFrames } from "@/lib/data";

export function GallerySection() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[rgba(255,250,244,0.52)]">
      <div className="site-frame section-space px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Studio gallery"
            title="A softer, lived-in world around the objects."
            body="The pieces are made for shelves, tables, and morning corners that already have a story. The gallery keeps the atmosphere open and tactile."
          />
          <Link
            href="/gallery"
            className="w-fit rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition hover:-translate-y-0.5"
          >
            View lookbook
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)]">
              <Image
                src={lookbookFrames[0].image}
                alt={lookbookFrames[0].title}
                width={1600}
                height={1040}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {lookbookFrames.slice(1, 3).map((frame) => (
                <div key={frame.title} className="overflow-hidden rounded-[2rem] border border-[color:var(--line)]">
                  <Image
                    src={frame.image}
                    alt={frame.title}
                    width={960}
                    height={1120}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="soft-panel rounded-[2rem] p-7 sm:p-10">
            <p className="eyebrow">Atmosphere</p>
            <h3 className="display-title mt-4 text-4xl text-[var(--ink)]">
              Objects meant to be touched, turned, and kept close.
            </h3>
            <div className="mt-8 space-y-8">
              {lookbookFrames.slice(0, 4).map((frame) => (
                <div key={frame.title} className="border-t border-[color:var(--line)] pt-5 first:border-t-0 first:pt-0">
                  <h4 className="font-serif text-3xl tracking-[-0.04em] text-[var(--ink)]">
                    {frame.title}
                  </h4>
                  <p className="mt-2 text-base leading-8 text-[var(--ink-soft)]">{frame.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
