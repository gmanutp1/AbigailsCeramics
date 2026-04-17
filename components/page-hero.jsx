import Image from "next/image";

export function PageHero({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="site-frame section-space grid gap-10 px-4 pb-14 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div className="max-w-2xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="display-title mt-4 text-6xl text-[var(--ink)] sm:text-7xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">{description}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)]">
          <Image
            src={image}
            alt={imageAlt}
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
