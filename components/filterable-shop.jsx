"use client";

import { startTransition, useDeferredValue, useState } from "react";

import { ProductGrid } from "@/components/product-grid";

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
  { value: "alphabetical", label: "Alphabetical" },
];

export function FilterableShop({ products, collections }) {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const featuredOrder = new Map(products.map((product, index) => [product.id, index]));

  const filteredProducts = products
    .filter((product) => {
      const matchesCollection =
        selectedCollection === "all" || product.collection === selectedCollection;
      const matchesQuery = `${product.title} ${product.summary}`
        .toLowerCase()
        .includes(deferredQuery.trim().toLowerCase());

      return matchesCollection && matchesQuery;
    })
    .toSorted((left, right) => {
      switch (selectedSort) {
        case "low-to-high":
          return left.price - right.price;
        case "high-to-low":
          return right.price - left.price;
        case "alphabetical":
          return left.title.localeCompare(right.title);
        default:
          return (featuredOrder.get(left.id) ?? 0) - (featuredOrder.get(right.id) ?? 0);
      }
    });

  return (
    <section className="site-frame section-space px-4 pt-10">
      <div className="grid gap-6 rounded-[2rem] border border-[color:var(--line)] bg-[rgba(255,252,247,0.62)] p-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow">Filter and sort</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => startTransition(() => setSelectedCollection("all"))}
              className={`rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                selectedCollection === "all"
                  ? "bg-[var(--ink)] text-white"
                  : "border border-[color:var(--line)] text-[var(--ink)]"
              }`}
            >
              All pieces
            </button>
            {collections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => startTransition(() => setSelectedCollection(collection.slug))}
                className={`rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                  selectedCollection === collection.slug
                    ? "bg-[var(--ink)] text-white"
                    : "border border-[color:var(--line)] text-[var(--ink)]"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => startTransition(() => setQuery(event.target.value))}
              placeholder="Search products"
              className="min-h-12 w-full rounded-full border border-[color:var(--line)] bg-white/70 px-5 outline-none transition focus:border-[color:var(--line-strong)]"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
              Sort
            </span>
            <select
              value={selectedSort}
              onChange={(event) => startTransition(() => setSelectedSort(event.target.value))}
              className="min-h-12 w-full rounded-full border border-[color:var(--line)] bg-white/70 px-5 outline-none transition focus:border-[color:var(--line-strong)]"
            >
              {sorts.map((sort) => (
                <option key={sort.value} value={sort.value}>
                  {sort.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8">
        {filteredProducts.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[color:var(--line-strong)] px-6 py-16 text-center">
            <p className="font-serif text-4xl text-[var(--ink)]">Nothing matched this search.</p>
            <p className="mt-3 text-base leading-8 text-[var(--ink-soft)]">
              Try a different collection or a simpler phrase.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
