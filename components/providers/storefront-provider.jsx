"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { CartDrawer } from "@/components/cart-drawer";
import { QuickViewModal } from "@/components/quick-view-modal";
import { SearchModal } from "@/components/search-modal";
import { getProductBySlug, products } from "@/lib/data";

const StorefrontContext = createContext(null);

export function StorefrontProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewSlug, setQuickViewSlug] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      setQuickViewSlug(null);
      setIsSearchOpen(false);
      setIsCartOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const cartLines = cartItems
    .map((item) => {
      const product = getProductBySlug(item.slug);

      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter(Boolean);

  const cartCount = cartLines.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartLines.reduce((total, item) => total + item.lineTotal, 0);
  const quickViewProduct = quickViewSlug ? getProductBySlug(quickViewSlug) : null;

  const addToCart = (slug, quantity = 1) => {
    const product = getProductBySlug(slug);

    if (!product || product.soldOut) {
      return;
    }

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.slug === slug);

      if (existingItem) {
        return currentItems.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...currentItems, { slug, quantity }];
    });
    setQuickViewSlug(null);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (slug, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.slug === slug ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const value = {
    products,
    cartItems: cartLines,
    cartCount,
    cartSubtotal,
    quickViewProduct,
    isCartOpen,
    isSearchOpen,
    addToCart,
    closeCart: () => setIsCartOpen(false),
    closeQuickView: () => setQuickViewSlug(null),
    closeSearch: () => setIsSearchOpen(false),
    openCart: () => setIsCartOpen(true),
    openQuickView: (slug) => setQuickViewSlug(slug),
    openSearch: () => setIsSearchOpen(true),
    updateCartQuantity,
  };

  return (
    <StorefrontContext.Provider value={value}>
      {children}
      <SearchModal />
      <QuickViewModal />
      <CartDrawer />
    </StorefrontContext.Provider>
  );
}

export function useStorefront() {
  const context = useContext(StorefrontContext);

  if (!context) {
    throw new Error("useStorefront must be used inside StorefrontProvider");
  }

  return context;
}
