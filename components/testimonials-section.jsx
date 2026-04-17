import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="site-frame section-space px-4 pt-6">
      <SectionHeading
        eyebrow="Kind words"
        title="Pieces that become part of the daily ritual."
        body="A few notes from customers who have welcomed the work into their kitchens, shelves, and gift tables."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="border-t border-[color:var(--line)] pt-6"
          >
            <blockquote className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[var(--ink)]">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              {testimonial.name} - {testimonial.location}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
