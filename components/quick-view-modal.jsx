"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import { useStorefront } from "@/components/providers/storefront-provider";
import { formatPrice } from "@/lib/data";

export function QuickViewModal() {
  const { addToCart, closeQuickView, quickViewProduct } = useStorefront();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        quickViewProduct ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!quickViewProduct}
    >
      <button
        type="button"
        onClick={closeQuickView}
        className={`absolute inset-0 bg-[rgba(27,20,16,0.34)] backdrop-blur-sm transition ${
          quickViewProduct ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`site-frame absolute left-1/2 top-1/2 w-[calc(100vw-1rem)] -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
          quickViewProduct ? "opacity-100" : "opacity-0"
        }`}
      >
        {quickViewProduct ? (
          <div className="soft-panel grid gap-6 rounded-[2rem] p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[1.6rem] border border-[color:var(--line)]">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.title}
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Quick view</p>
                  <h2 className="display-title mt-4 text-5xl text-[var(--ink)]">
                    {quickViewProduct.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeQuickView}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)]"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                {formatPrice(quickViewProduct.price)}
              </p>
              <p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">
                {quickViewProduct.description}
              </p>
              <dl className="mt-6 grid gap-4 text-sm leading-7 text-[var(--ink-soft)]">
                <div>
                  <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Material</dt>
                  <dd>{quickViewProduct.materials}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Care</dt>
                  <dd>{quickViewProduct.care}</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={() => addToCart(quickViewProduct.slug, 1)}
                  disabled={quickViewProduct.soldOut}
                  className="min-h-[3.25rem] flex-1 rounded-full bg-[var(--ink)] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[rgba(45,36,29,0.5)]"
                >
                  {quickViewProduct.soldOut ? "Sold out" : "Add to cart"}
                </button>
                <Link
                  href={`/products/${quickViewProduct.slug}`}
                  onClick={closeQuickView}
                  className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center rounded-full border border-[color:var(--line)] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)] transition hover:-translate-y-0.5"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
