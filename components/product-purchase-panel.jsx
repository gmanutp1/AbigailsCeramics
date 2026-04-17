"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { useStorefront } from "@/components/providers/storefront-provider";
import { formatPrice, getCollectionTitle } from "@/lib/data";

export function ProductPurchasePanel({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStorefront();

  return (
    <div className="soft-panel rounded-[2rem] p-6 sm:p-8">
      <p className="eyebrow">{getCollectionTitle(product.collection)}</p>
      <h1 className="display-title mt-4 text-5xl text-[var(--ink)] sm:text-6xl">{product.title}</h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
        {formatPrice(product.price)}
      </p>
      <p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">{product.description}</p>

      <dl className="mt-8 grid gap-5 border-t border-[color:var(--line)] pt-6 text-sm leading-7 text-[var(--ink-soft)]">
        <div>
          <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Materials</dt>
          <dd>{product.materials}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Size</dt>
          <dd>{product.dimensions}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Care</dt>
          <dd>{product.care}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">Lead time</dt>
          <dd>{product.leadTime}</dd>
        </div>
      </dl>

      {product.customizable ? (
        <div className="mt-8 rounded-[1.5rem] border border-[color:var(--line)] bg-white/55 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
            Customization
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            Available for subtle monogramming, glaze tone requests, or gifting notes. Connect this
            field to a future Shopify line item property or Stripe metadata later.
          </p>
          <textarea
            rows={4}
            placeholder="Add a note for personalization or gifting"
            className="mt-4 w-full rounded-[1.25rem] border border-[color:var(--line)] bg-white/75 p-4 outline-none transition focus:border-[color:var(--line-strong)]"
          />
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <div className="inline-flex min-h-[3.25rem] items-center justify-between rounded-full border border-[color:var(--line)] bg-white/60 px-3">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] transition hover:bg-[rgba(45,36,29,0.06)]"
          >
            <Minus size={16} />
          </button>
          <span className="min-w-12 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] transition hover:bg-[rgba(45,36,29,0.06)]"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          type="button"
          disabled={product.soldOut}
          onClick={() => addToCart(product.slug, quantity)}
          className="min-h-[3.25rem] flex-1 rounded-full bg-[var(--ink)] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[rgba(45,36,29,0.5)]"
        >
          {product.soldOut ? "Sold out" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
