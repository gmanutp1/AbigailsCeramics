"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { startTransition, useDeferredValue, useState } from "react";

import { useStorefront } from "@/components/providers/storefront-provider";
import { formatPrice } from "@/lib/data";

export function SearchModal() {
  const { isSearchOpen, closeSearch, products } = useStorefront();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const results = deferredQuery
    ? products.filter((product) =>
        `${product.title} ${product.summary}`.toLowerCase().includes(deferredQuery.toLowerCase())
      )
    : products.slice(0, 4);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isSearchOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isSearchOpen}
    >
      <button
        type="button"
        onClick={closeSearch}
        className={`absolute inset-0 bg-[rgba(27,20,16,0.34)] backdrop-blur-sm transition ${
          isSearchOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`site-frame absolute left-1/2 top-[5.5rem] w-[calc(100vw-1rem)] -translate-x-1/2 transition duration-300 ${
          isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="soft-panel rounded-[2rem] px-5 py-5 sm:px-7 sm:py-7">
          <div className="flex items-center gap-3 border-b border-[color:var(--line)] pb-4">
            <Search size={18} className="text-[var(--ink-soft)]" />
            <input
              type="search"
              value={query}
              onChange={(event) => startTransition(() => setQuery(event.target.value))}
              placeholder="Search the collection"
              className="h-12 flex-1 bg-transparent text-lg text-[var(--ink)] outline-none"
            />
            <button
              type="button"
              onClick={closeSearch}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-5 grid gap-4">
            {results.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                onClick={closeSearch}
                className="flex items-center gap-4 rounded-[1.4rem] border border-[color:var(--line)] p-3 transition hover:-translate-y-0.5"
              >
                <div className="h-20 w-20 overflow-hidden rounded-[1rem]">
                  <Image src={product.image} alt={product.title} width={180} height={220} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl tracking-[-0.04em] text-[var(--ink)]">{product.title}</h3>
                  <p className="text-sm leading-7 text-[var(--ink-soft)]">{product.summary}</p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                  {formatPrice(product.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
