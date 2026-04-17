export const collections = [
  {
    slug: "latest-drop",
    title: "Latest Drop",
    description:
      "A quiet release of softly glazed vessels shaped for morning rituals, easy gifting, and shelves that feel collected over time.",
    image: "/images/gallery/table-setting.svg",
  },
  {
    slug: "table-rituals",
    title: "Table Rituals",
    description:
      "Serving bowls, platters, and cups that make the everyday table feel gently ceremonial.",
    image: "/images/gallery/studio-shelf.svg",
  },
  {
    slug: "sculptural-accents",
    title: "Sculptural Accents",
    description:
      "Bud vases and decorative forms made to introduce texture, curve, and calm to interior corners.",
    image: "/images/gallery/clay-process.svg",
  },
  {
    slug: "for-gifting",
    title: "For Gifting",
    description:
      "Ready-to-wrap pieces chosen for thoughtful gestures, milestone tables, and housewarming shelves.",
    image: "/images/gallery/founder-table.svg",
  },
];

export const products = [
  {
    id: "prod_001",
    slug: "dune-serving-bowl",
    title: "Dune Serving Bowl",
    price: 84,
    badge: "New",
    soldOut: false,
    collection: "table-rituals",
    summary: "Hand-thrown serving bowl with a warm sand glaze and softly flared rim.",
    description:
      "A generous centerpiece bowl for fruit, bread, or slow weekend meals. Each one carries subtle shifts in tone where the glaze pools at the foot and lifts at the edge.",
    materials: "Stoneware, matte mineral glaze",
    dimensions: "11 in diameter x 4 in height",
    care: "Dishwasher safe on a gentle cycle. Hand wash recommended for longest life.",
    leadTime: "Ships in 3 to 5 business days",
    customizable: false,
    image: "/images/products/dune-serving-bowl.svg",
    images: [
      "/images/products/dune-serving-bowl.svg",
      "/images/gallery/table-setting.svg",
      "/images/gallery/studio-shelf.svg",
    ],
  },
  {
    id: "prod_002",
    slug: "riverstone-mug",
    title: "Riverstone Mug",
    price: 46,
    badge: "Studio Favorite",
    soldOut: false,
    collection: "latest-drop",
    summary: "A quietly sculpted mug with a rounded handle and speckled oatmeal glaze.",
    description:
      "Made for the first pour of the day, the Riverstone Mug sits comfortably in the hand with a balanced weight and a softly beveled lip.",
    materials: "Stoneware, satin glaze",
    dimensions: "12 oz capacity",
    care: "Microwave and dishwasher safe.",
    leadTime: "Ships in 3 to 5 business days",
    customizable: true,
    image: "/images/products/riverstone-mug.svg",
    images: [
      "/images/products/riverstone-mug.svg",
      "/images/gallery/founder-table.svg",
      "/images/gallery/clay-process.svg",
    ],
  },
  {
    id: "prod_003",
    slug: "sandline-vase",
    title: "Sandline Vase",
    price: 92,
    badge: "Limited",
    soldOut: false,
    collection: "sculptural-accents",
    summary: "Tall ceramic vase with a narrow neck and raw clay edge.",
    description:
      "A sculptural vessel intended for a single branch, seasonal stems, or a shelf left mostly empty. The silhouette changes gently from piece to piece.",
    materials: "Wheel-thrown stoneware, brushed glaze",
    dimensions: "10.5 in height",
    care: "Rinse by hand and dry fully between uses.",
    leadTime: "Ships in 5 to 7 business days",
    customizable: false,
    image: "/images/products/sandline-vase.svg",
    images: [
      "/images/products/sandline-vase.svg",
      "/images/gallery/studio-shelf.svg",
      "/images/gallery/founder-table.svg",
    ],
  },
  {
    id: "prod_004",
    slug: "quiet-morning-cup",
    title: "Quiet Morning Cup",
    price: 38,
    badge: null,
    soldOut: false,
    collection: "latest-drop",
    summary: "Small-batch cup designed for tea, cortados, and bedside water.",
    description:
      "A low, tactile cup with a thumb-set profile and a soft blush wash that deepens near the base.",
    materials: "Porcelain blend, hand-brushed glaze",
    dimensions: "8 oz capacity",
    care: "Dishwasher safe. Avoid sudden temperature shifts.",
    leadTime: "Ships in 2 to 4 business days",
    customizable: true,
    image: "/images/products/quiet-morning-cup.svg",
    images: [
      "/images/products/quiet-morning-cup.svg",
      "/images/gallery/table-setting.svg",
      "/images/gallery/clay-process.svg",
    ],
  },
  {
    id: "prod_005",
    slug: "hearth-platter",
    title: "Hearth Platter",
    price: 108,
    badge: "New",
    soldOut: false,
    collection: "table-rituals",
    summary: "Oval serving platter with a warm clay body and softly glossy center.",
    description:
      "Made for citrus, shared pastries, and slow dinners. The hand-finished rim leaves each platter with its own gently irregular outline.",
    materials: "Stoneware, transparent glaze",
    dimensions: "15 in x 10 in",
    care: "Dishwasher safe on top rack. Hand wash preferred.",
    leadTime: "Ships in 5 to 7 business days",
    customizable: false,
    image: "/images/products/hearth-platter.svg",
    images: [
      "/images/products/hearth-platter.svg",
      "/images/gallery/table-setting.svg",
      "/images/gallery/founder-table.svg",
    ],
  },
  {
    id: "prod_006",
    slug: "oatmilk-bud-vase",
    title: "Oatmilk Bud Vase",
    price: 54,
    badge: null,
    soldOut: false,
    collection: "for-gifting",
    summary: "Petite bud vase with a creamy matte finish and rounded shoulder.",
    description:
      "An easy keepsake for bedside tables, desks, and host gifts. It holds a single stem beautifully and catches light with a soft, chalky surface.",
    materials: "Stoneware, matte glaze",
    dimensions: "5.75 in height",
    care: "Hand wash recommended.",
    leadTime: "Ships in 2 to 4 business days",
    customizable: true,
    image: "/images/products/oatmilk-bud-vase.svg",
    images: [
      "/images/products/oatmilk-bud-vase.svg",
      "/images/gallery/studio-shelf.svg",
      "/images/gallery/founder-table.svg",
    ],
  },
  {
    id: "prod_007",
    slug: "pebble-espresso-set",
    title: "Pebble Espresso Set",
    price: 72,
    badge: "Sold Out",
    soldOut: true,
    collection: "for-gifting",
    summary: "Set of two espresso cups with matching saucers in a mineral grey glaze.",
    description:
      "A petite pair made for after-dinner pours and early studio starts. This drop has sold through, but the form returns often in new glaze tests.",
    materials: "Stoneware, satin glaze",
    dimensions: "4 oz cups, set of 2",
    care: "Dishwasher safe.",
    leadTime: "Restock date to be announced",
    customizable: false,
    image: "/images/products/pebble-espresso-set.svg",
    images: [
      "/images/products/pebble-espresso-set.svg",
      "/images/gallery/table-setting.svg",
      "/images/gallery/clay-process.svg",
    ],
  },
  {
    id: "prod_008",
    slug: "flint-candle-vessel",
    title: "Flint Candle Vessel",
    price: 64,
    badge: "Giftable",
    soldOut: false,
    collection: "sculptural-accents",
    summary: "Reusable ceramic vessel poured with a subtle cedar and tea fragrance.",
    description:
      "Designed to live twice: once as a candle and again as a catchall or cup after the wax has been warmed and cleared.",
    materials: "Ceramic vessel, soy wax blend",
    dimensions: "9 oz candle",
    care: "Keep wick trimmed to 1/4 in. Wash gently before reusing vessel.",
    leadTime: "Ships in 3 to 5 business days",
    customizable: true,
    image: "/images/products/flint-candle-vessel.svg",
    images: [
      "/images/products/flint-candle-vessel.svg",
      "/images/gallery/studio-shelf.svg",
      "/images/gallery/founder-table.svg",
    ],
  },
];

export const testimonials = [
  {
    name: "Mara L.",
    location: "Austin, Texas",
    quote:
      "The glaze feels even softer in person. Every piece has that rare balance of being useful and quietly beautiful.",
  },
  {
    name: "Tessa R.",
    location: "Brooklyn, New York",
    quote:
      "It arrived wrapped with so much care, and the mug has already become the one I reach for every single morning.",
  },
  {
    name: "Jordan + Elle",
    location: "Nashville, Tennessee",
    quote:
      "We ordered a custom set for our dining table and the whole process felt intimate, thoughtful, and deeply personal.",
  },
];

export const faqItems = [
  {
    question: "Are all pieces one of one?",
    answer:
      "Every piece is made by hand in small batches, so no two are exactly alike. Expect gentle variation in shape, glaze movement, and speckling.",
  },
  {
    question: "When will my order ship?",
    answer:
      "Ready-to-ship work typically leaves the studio within 3 to 5 business days. Pre-order and made-to-order pieces list their own lead time on the product page.",
  },
  {
    question: "Do you accept custom orders?",
    answer:
      "Yes. We offer bespoke cups, vessels, event gifting, and small hospitality runs in limited quantities.",
  },
  {
    question: "Can I place a wholesale inquiry?",
    answer:
      "Absolutely. Use the contact page with a brief note about your shop, project scope, and preferred timeline.",
  },
];

export const contactDetails = {
  email: "hello@abigailsceramics.com",
  phone: "(555) 210-1987",
  studio: "By appointment in Nashville, Tennessee",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export const lookbookFrames = [
  {
    title: "Shelf study",
    image: "/images/gallery/studio-shelf.svg",
    note: "Matte surfaces, lifted edges, and shadows that change with the afternoon light.",
  },
  {
    title: "Table setting",
    image: "/images/gallery/table-setting.svg",
    note: "Pieces layered with linen, stone fruit, and warm wood for a quietly gathered table.",
  },
  {
    title: "Hands at work",
    image: "/images/gallery/clay-process.svg",
    note: "A glimpse of trimming, shaping, and the slow tempo of the studio.",
  },
  {
    title: "Founder table",
    image: "/images/gallery/founder-table.svg",
    note: "The personal ritual behind the collection: tea, sketchbook, and one vessel still drying.",
  },
];

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function getFeaturedProducts() {
  return products.slice(0, 4);
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductsByCollection(slug) {
  return products.filter((product) => product.collection === slug);
}

export function getRelatedProducts(slug, collection) {
  return products
    .filter((product) => product.slug !== slug && product.collection === collection)
    .slice(0, 4);
}

export function getCollectionTitle(slug) {
  return getCollectionBySlug(slug)?.title ?? "Collection";
}
