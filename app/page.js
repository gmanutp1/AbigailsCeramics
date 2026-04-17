import Link from "next/link";

import { BrandPhilosophy } from "@/components/brand-philosophy";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { StorySection } from "@/components/story-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { getFeaturedProducts } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />

      <section className="site-frame section-space px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Latest drop"
            title="A considered edit of mugs, vessels, and serving forms."
            body="The current release leans warm and tactile, with quiet silhouettes intended to live easily on open shelves and working tables."
          />
          <Link
            href="/shop"
            className="w-fit rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition hover:-translate-y-0.5"
          >
            Shop all products
          </Link>
        </div>
        <div className="mt-12">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <BrandPhilosophy />
      <GallerySection />
      <StorySection />
      <NewsletterSection />
      <TestimonialsSection />
    </>
  );
}
