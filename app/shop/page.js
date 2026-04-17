import { FilterableShop } from "@/components/filterable-shop";
import { NewsletterSection } from "@/components/newsletter-section";
import { PageHero } from "@/components/page-hero";
import { collections, products } from "@/lib/data";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="A full collection of handmade forms."
        description="Browse the complete assortment with filters for collection, search, and simple sorting. The layout is ready to map to a live catalog later."
        image="/images/editorial/shop-hero.svg"
        imageAlt="Editorial pottery display for the shop hero."
      />
      <FilterableShop products={products} collections={collections} />
      <NewsletterSection />
    </>
  );
}
