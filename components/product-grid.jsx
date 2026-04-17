"use client";

import { ProductCard } from "@/components/product-card";

export function ProductGrid({ products }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
