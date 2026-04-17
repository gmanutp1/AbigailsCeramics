"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";

import { useStorefront } from "@/components/providers/storefront-provider";
import { formatPrice } from "@/lib/data";

export function CartDrawer() {
  const { cartItems, cartSubtotal, isCartOpen, closeCart, updateCartQuantity } = useStorefront();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isCartOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        onClick={closeCart}
        className={`absolute inset-0 bg-[rgba(27,20,16,0.34)] backdrop-blur-sm transition ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-[var(--surface)] shadow-2xl transition duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-[color:var(--line)] px-6 py-5">
          <div>
            <p className="eyebrow">Cart</p>
            <h2 className="mt-2 font-serif text-4xl tracking-[-0.04em] text-[var(--ink)]">
              Your selection
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length ? (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={item.slug} className="flex gap-4 rounded-[1.5rem] border border-[color:var(--line)] p-4">
                  <div className="h-28 w-24 overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={240}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link href={`/products/${item.slug}`} onClick={closeCart} className="font-serif text-3xl tracking-[-0.04em] text-[var(--ink)]">
                        {item.title}
                      </Link>
                      <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{item.summary}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                      <div className="inline-flex items-center rounded-full border border-[color:var(--line)] px-2 py-1">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.slug, item.quantity - 1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold uppercase tracking-[0.14em]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.slug, item.quantity + 1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[color:var(--line-strong)] px-6 py-16 text-center">
              <p className="font-serif text-4xl tracking-[-0.04em] text-[var(--ink)]">Your cart is still empty.</p>
              <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                Add a few small-batch pieces and they'll appear here.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                Continue shopping
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-[color:var(--line)] px-6 py-5">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            <span>Subtotal</span>
            <span>{formatPrice(cartSubtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-4 min-h-[3.25rem] w-full rounded-full bg-[var(--ink)] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
          >
            Checkout placeholder
          </button>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
            Connect this drawer to Shopify cart APIs, Stripe Checkout, or your preferred backend
            when commerce data is ready.
          </p>
        </div>
      </aside>
    </div>
  );
}
