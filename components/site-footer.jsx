import Link from "next/link";

import { contactDetails } from "@/lib/data";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/collections/latest-drop", label: "Latest Drop" },
      { href: "/collections/table-rituals", label: "Table Rituals" },
      { href: "/custom-orders", label: "Bespoke Requests" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/shipping-returns", label: "Shipping & Returns" },
      { href: "/about", label: "Our Story" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(255,249,242,0.76)]">
      <div className="site-frame section-space px-4 pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="eyebrow">Abigail's Ceramics</p>
            <h2 className="display-title mt-4 text-4xl text-[var(--ink)]">
              Handmade objects for grounded, lived-in spaces.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">
              Built to showcase small-batch ceramics now, and ready to connect to Shopify,
              Stripe, or another commerce backend when the catalog is finalized.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                {column.title}
              </h3>
              <div className="mt-5 flex flex-col gap-3 text-[var(--ink)]">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="link-underline w-fit">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              Connect
            </h3>
            <div className="mt-5 space-y-3 text-[var(--ink)]">
              <p>{contactDetails.email}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.studio}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--ink-soft)]">
              {contactDetails.socials.map((social) => (
                <a key={social.label} href={social.href} className="link-underline">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Abigail's Ceramics. All rights reserved.</p>
          <p>Placeholder storefront concept ready for content, product, and backend swaps.</p>
        </div>
      </div>
    </footer>
  );
}
