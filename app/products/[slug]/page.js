import { notFound } from "next/navigation";

import { NewsletterSection } from "@/components/newsletter-section";
import { ProductGallery } from "@/components/product-gallery";
import { ProductGrid } from "@/components/product-grid";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import { SectionHeading } from "@/components/section-heading";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.collection);

  return (
    <>
      <section className="site-frame section-space px-4 pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery product={product} />
          <ProductPurchasePanel product={product} />
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="site-frame section-space px-4 pt-0">
          <SectionHeading
            eyebrow="Related pieces"
            title="A few more forms from the same studio mood."
            body="Suggested products are placeholder logic based on collection grouping and can later be swapped for live recommendations."
          />
          <div className="mt-12">
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      ) : null}

      <NewsletterSection />
    </>
  );
}
