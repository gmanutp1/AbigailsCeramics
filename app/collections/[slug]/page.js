import { notFound } from "next/navigation";

import { NewsletterSection } from "@/components/newsletter-section";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { collections, getCollectionBySlug, getProductsByCollection } from "@/lib/data";

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default function CollectionPage({ params }) {
  const collection = getCollectionBySlug(params.slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={collection.title}
        description={collection.description}
        image={collection.image}
        imageAlt={collection.title}
      />
      <section className="site-frame section-space px-4 pt-10">
        <ProductGrid products={collectionProducts} />
      </section>
      <NewsletterSection />
    </>
  );
}
