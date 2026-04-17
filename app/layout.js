import { Cormorant_Garamond, Manrope } from "next/font/google";

import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StorefrontProvider } from "@/components/providers/storefront-provider";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Abigails Ceramics",
    template: "%s | Abigails Ceramics",
  },
  description:
    "An editorial storefront for handmade ceramics, small-batch home objects, and bespoke tableware.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-[var(--background)] font-sans text-[var(--ink)] antialiased">
        <StorefrontProvider>
          {/* Replace announcement messaging, brand name, and nav labels here when final content is ready. */}
          <AnnouncementBar />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </StorefrontProvider>
      </body>
    </html>
  );
}
