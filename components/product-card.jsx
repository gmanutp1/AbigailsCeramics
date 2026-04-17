"use client";

import Image from "next/image";
import Link from "next/link";

import { useStorefront } from "@/components/providers/storefront-provider";
import { formatPrice, getCollectionTitle } from "@/lib/data";

export function ProductCard({ product }) {
  const { addToCart, openQuickView } = useStorefront();

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.5)]">
        <Link href={`/products/${product.slug}`} className="block aspect-[0.86] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={1100}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[rgba(252,248,243,0.86)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
            {getCollectionTitle(product.collection)}
          </span>
          {product.badge ? (
            <span
              className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
                product.soldOut
                  ? "bg-[rgba(45,36,29,0.86)] text-white"
                  : "bg-[rgba(157,103,68,0.9)] text-white"
              }`}
            >
              {product.badge}
            </span>
          ) : null}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-100 transition duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <div className="soft-panel flex flex-wrap gap-3 rounded-[1.4rem] p-3">
            <button
              type="button"
              onClick={() => openQuickView(product.slug)}
              className="pointer-events-auto flex-1 rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.8)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition hover:-translate-y-0.5"
            >
              Quick view
            </button>
            <button
              type="button"
              onClick={() => addToCart(product.slug, 1)}
              disabled={product.soldOut}
              className="pointer-events-auto flex-1 rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[rgba(45,36,29,0.45)]"
            >
              {product.soldOut ? "Sold out" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="font-serif text-[1.7rem] leading-none tracking-[-0.04em] text-[var(--ink)]"
          >
            {product.title}
          </Link>
          <p className="mt-2 max-w-xs text-sm leading-7 text-[var(--ink-soft)]">
            {product.summary}
          </p>
        </div>
        <p className="pt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
