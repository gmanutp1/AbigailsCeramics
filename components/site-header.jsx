"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";

import { useStorefront } from "@/components/providers/storefront-provider";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections/latest-drop", label: "Collection" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Lookbook" },
  { href: "/custom-orders", label: "Custom Orders" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, openCart, openSearch } = useStorefront();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[rgba(245,240,232,0.78)] backdrop-blur-xl">
      <div className="site-frame flex min-h-[5rem] items-center justify-between gap-4 px-4">
        <Link href="/" className="min-w-fit">
          <span className="block font-serif text-[1.75rem] leading-none tracking-[-0.05em] text-[var(--ink)]">
            Abigail's
          </span>
          <span className="mt-1 block text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Ceramics
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium tracking-[0.08em] text-[var(--ink-soft)] transition hover:text-[var(--ink)] ${
                  isActive ? "text-[var(--ink)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            onClick={openSearch}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)]"
          >
            <Search size={18} />
          </button>
          <Link
            href="/contact"
            aria-label="Account"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] sm:inline-flex"
          >
            <UserRound size={18} />
          </Link>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)]"
          >
            <ShoppingBag size={18} />
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-[var(--ink)] px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[color:var(--line)] bg-[rgba(251,248,242,0.94)] transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="site-frame flex flex-col gap-4 px-4 py-6" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
