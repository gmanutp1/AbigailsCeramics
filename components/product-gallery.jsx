"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-[6.5rem_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-[1.4rem] border transition ${
              activeImage === image
                ? "border-[color:var(--line-strong)]"
                : "border-[color:var(--line)]"
            }`}
          >
            <Image src={image} alt="" width={180} height={220} className="h-24 w-24 object-cover" />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/60">
        <Image
          src={activeImage}
          alt={product.title}
          width={1200}
          height={1400}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
