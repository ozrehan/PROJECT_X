export interface Product {
  id: number;
  name: string;
  store: string;
  subtitle?: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  labels: string[];
  image: string;
  sizes: string[];
  colors: string[];
  deliveryEstimate: string;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  category: "Men" | "Women" | "Kids" | "Ethnic Wear" | "Brands" | "Offers" | "New Arrivals";
  subcategory?: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  galleryImages: string[];
}

export const masterProducts: Product[] = [
  {
    id: 1,
    name: "Black Formal Shirt",
    store: "Fashion Hub",
    subtitle: "Premium Formalwear",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.6,
    reviews: 1200,
    labels: ["Best Seller"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Stone"],
    deliveryEstimate: "Delivery Today, 2-4 hours",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Upgrade your formal attire with this premium slim-fit black shirt. Meticulously crafted from high-grade cotton, it offers exceptional breathability and a wrinkle-resistant finish that keeps you looking sharp from morning meetings to evening dinners.",
    highlights: [
      "100% premium long-staple cotton",
      "Wrinkle-resistant and easy-iron technology",
      "Tailored slim-fit silhouette with semi-spread collar",
      "Reinforced cuffs and seams for premium durability"
    ],
    specs: [
      { label: "Fabric", value: "100% Cotton" },
      { label: "Care Instructions", value: "Machine wash warm, tumble dry low" },
      { label: "Fit Type", value: "Slim Fit" },
      { label: "Occasion", value: "Formal / Office Wear" },
      { label: "Origin", value: "Made in India" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 2,
    name: "Black Premium Shirt",
    store: "Urban Tribe",
    subtitle: "Modern Fit",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    reviews: 890,
    labels: ["30% OFF"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "Low Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Designed for the modern urban trendsetter, this premium shirt features a sleek minimalist aesthetic. Built with soft, stretchable cotton-lycra blend fabric, it moves with you for unmatched style and versatility.",
    highlights: [
      "Cotton-Lycra blend for ultimate comfort stretch",
      "Durable double-stitched flat seams",
      "Concealed button-down collar",
      "Deep black matte shade that resists fading"
    ],
    specs: [
      { label: "Fabric", value: "95% Cotton, 5% Lycra" },
      { label: "Care Instructions", value: "Cold machine wash, wash inside out" },
      { label: "Fit Type", value: "Modern Regular Fit" },
      { label: "Occasion", value: "Smart Casual / Night Out" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 3,
    name: "Black Slim Fit Shirt",
    store: "Street Style",
    subtitle: "Tailored Style",
    price: 749,
    oldPrice: 1199,
    discount: "37% OFF",
    rating: 4.7,
    reviews: 2100,
    labels: ["Fast Delivery"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    deliveryEstimate: "Delivery in 2 Hours",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "A versatile wardrobe classic. This slim-fit shirt is carefully tailored to hug the contours of your shoulders and chest, tapering elegantly at the waist to offer a custom-made look at an off-the-rack price.",
    highlights: [
      "Tapered fit for an athletic profile",
      "Lightweight, breathable cotton blend",
      "Stiff collar stand that stays upright",
      "Convertible cuffs can be worn with cufflinks"
    ],
    specs: [
      { label: "Fabric", value: "80% Cotton, 20% Polyester" },
      { label: "Care Instructions", value: "Machine wash cold, warm iron if needed" },
      { label: "Fit Type", value: "Slim Fit" },
      { label: "Occasion", value: "Formal / Semi-Formal" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 4,
    name: "Black Casual Shirt",
    store: "Ethnic Villa",
    subtitle: "Relaxed Fit",
    price: 649,
    oldPrice: 999,
    discount: "35% OFF",
    rating: 4.4,
    reviews: 760,
    labels: ["New"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Beige", "Olive"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Unwind in style with our relaxed casual shirt. Boasting a softer, pre-washed texture, it is ideal for laid-back weekend gatherings or cozy coffee dates. Style it open over a white tee or buttoned up.",
    highlights: [
      "Pre-washed fabric for ultimate softness",
      "Relaxed design with utility front pocket",
      "Hanger loop on back yoke",
      "Durable tortoiseshell buttons"
    ],
    specs: [
      { label: "Fabric", value: "100% Washed Cotton" },
      { label: "Care Instructions", value: "Machine wash cold, air dry in shade" },
      { label: "Fit Type", value: "Relaxed / Casual Fit" },
      { label: "Occasion", value: "Casual Weekend / Travel" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 5,
    name: "Black Cotton Shirt",
    store: "Fashion Hub",
    subtitle: "100% Organic Cotton",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.6,
    reviews: 1130,
    labels: ["Best Seller"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Sustainably sourced organic cotton makes this shirt a smart choice for your wardrobe and the environment. Extremely gentle on skin, hypoallergenic, and structured to hold its shape over time.",
    highlights: [
      "100% GOTS certified organic cotton",
      "Natural plant-based eco-dyes",
      "Classic spread collar with removable collar stays",
      "Luxurious feel with mid-weight weave"
    ],
    specs: [
      { label: "Fabric", value: "100% Organic Cotton" },
      { label: "Care Instructions", value: "Gentle machine wash, do not bleach" },
      { label: "Fit Type", value: "Regular Fit" },
      { label: "Occasion", value: "Office / Evening Smart" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 6,
    name: "Black Linen Shirt",
    store: "Urban Tribe",
    subtitle: "Breathable Summer Wear",
    price: 899,
    oldPrice: 1299,
    discount: "31% OFF",
    rating: 4.5,
    reviews: 680,
    labels: ["Fast Delivery"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Be summer-ready with this breathable pure linen shirt. Featuring a relaxed feel, standard collar, and rollup button sleeves, it keeps you dry, cool, and effortless under the sun.",
    highlights: [
      "100% Irish linen flax",
      "Naturally cooling and moisture-wicking",
      "Roll-up sleeve buttons for styling",
      "Relaxed chest and arms for summer comfort"
    ],
    specs: [
      { label: "Fabric", value: "100% Pure Linen" },
      { label: "Care Instructions", value: "Hand wash or dry clean recommended" },
      { label: "Fit Type", value: "Relaxed Fit" },
      { label: "Occasion", value: "Resort / Summer Casual" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 7,
    name: "Black Striped Shirt",
    store: "Street Style",
    subtitle: "Retro Stripes",
    price: 599,
    oldPrice: 799,
    discount: "25% OFF",
    rating: 4.4,
    reviews: 650,
    labels: ["25% OFF"],
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black & White", "Blue & White"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Bring a touch of vintage flair to your outfit with our striped vertical shirt. The vertical pattern visually elongates the frame for a tall, trim look. Made with cotton-poly blend for wrinkle resistance.",
    highlights: [
      "Symmetrical vertical stripe print",
      "Resistant to shrinking and stretching",
      "Button-down collar for clean styling",
      "Soft inner neck lining"
    ],
    specs: [
      { label: "Fabric", value: "65% Cotton, 35% Polyester" },
      { label: "Care Instructions", value: "Machine wash cold, iron medium" },
      { label: "Fit Type", value: "Regular Fit" },
      { label: "Occasion", value: "Casual Party / Clubwear" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 8,
    name: "Black Oversized Shirt",
    store: "Urban Tribe",
    subtitle: "Streetwear Essential",
    price: 549,
    oldPrice: 899,
    discount: "39% OFF",
    rating: 4.3,
    reviews: 920,
    labels: ["Best Seller"],
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Stone"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "Low Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Embrace the streetwear aesthetic with this drop-shoulder oversized shirt. Generous cut through the torso and arms, giving you a laid-back, baggy look that pairs perfectly with baggy cargo pants.",
    highlights: [
      "Drop-shoulder boxy streetwear cut",
      "Heavyweight cotton weave for structured fall",
      "Extra room in chest and shoulders",
      "Minimalist chest branding details"
    ],
    specs: [
      { label: "Fabric", value: "100% Heavyweight Cotton" },
      { label: "Care Instructions", value: "Machine wash cold, lay flat to dry" },
      { label: "Fit Type", value: "Oversized / Drop Shoulder" },
      { label: "Occasion", value: "Casual / Hip-hop / Streetwear" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 9,
    name: "Black Mandarin Shirt",
    store: "Ethnic Villa",
    subtitle: "Mandarin Collar / Kurta Style",
    price: 699,
    oldPrice: 1099,
    discount: "36% OFF",
    rating: 4.6,
    reviews: 480,
    labels: ["New"],
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Mustard"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Ethnic Wear",
    subcategory: "Kurtas",
    description: "Blend modern minimalism with ethnic tradition. Featuring a sleek Chinese mandarin collar, this shirt is crafted in premium khadi cotton, offering a rich organic texture for festive and everyday ethnic look.",
    highlights: [
      "Ethnic Mandarin collar band design",
      "Pure textured slub cotton weave",
      "Mid-length side slits for free movement",
      "Handmade loop-button details"
    ],
    specs: [
      { label: "Fabric", value: "100% Slub Cotton" },
      { label: "Care Instructions", value: "Hand wash separate in cold water" },
      { label: "Fit Type", value: "Straight Fit" },
      { label: "Occasion", value: "Festive / Semi-Formal Ethnic" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 10,
    name: "Black Printed Shirt",
    store: "Street Style",
    subtitle: "Allover Print",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    rating: 4.5,
    reviews: 720,
    labels: ["Fast Delivery"],
    image: "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=800",
    sizes: ["M", "L", "XL"],
    colors: ["Black Printed", "Navy Printed"],
    deliveryEstimate: "Delivery in 2 Hours",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Shirts",
    description: "Make a bold statement with our geometric allover print shirt. Made from ultra-soft viscose silk-feel fabric, it drapes beautifully and flows gently, giving you a sleek modern fit.",
    highlights: [
      "Silky viscose material with rich drape",
      "Allover high-definition geometric print",
      "Camp collar for a relaxed resort feel",
      "Ultra lightweight and smooth on skin"
    ],
    specs: [
      { label: "Fabric", value: "100% Rayon Viscose" },
      { label: "Care Instructions", value: "Cold machine wash, line dry in shade" },
      { label: "Fit Type", value: "Regular Camp Fit" },
      { label: "Occasion", value: "Beach Wear / Party Night" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 11,
    name: "Floral Dress",
    store: "Miss Boutique",
    subtitle: "Elegant Floral Prints",
    price: 1199,
    oldPrice: 1999,
    discount: "40% OFF",
    rating: 4.8,
    reviews: 1350,
    labels: ["Hot Buy"],
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Cream", "Floral Pink"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "In Stock",
    category: "Women",
    subcategory: "Dresses",
    description: "Grace any sunny day or outdoor brunch with this gorgeous flowy floral dress. Adorned with delicate vintage roses print, features a flared hem, puff sleeves, and adjustable waist tie.",
    highlights: [
      "Premium georgette fabric with lining",
      "Charming puff sleeves and flared hemline",
      "Adjustable wrap waist tie for a custom fit",
      "Vibrant fade-resistant colors"
    ],
    specs: [
      { label: "Fabric", value: "100% Polyester Georgette" },
      { label: "Care Instructions", value: "Gentle machine wash with laundry bag" },
      { label: "Fit Type", value: "Regular Fit / Flared Hem" },
      { label: "Occasion", value: "Brunch / Day Wear / Garden Party" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 12,
    name: "Denim Jacket",
    store: "Urban Tribe",
    subtitle: "Classic Rugged Wear",
    price: 1299,
    oldPrice: 1999,
    discount: "35% OFF",
    rating: 4.6,
    reviews: 1900,
    labels: ["Trending"],
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue Denim", "Black Denim"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "Jackets",
    description: "Every wardrobe needs a denim jacket. Engineered from heavy-duty raw denim, it breaks in beautifully over time to fit your body shape uniquely. Features double-entry chest pockets and adjustable buttons.",
    highlights: [
      "100% thick rigid cotton denim",
      "Heavy-duty metal button closures",
      "Buttoned flap chest pockets and slash hand pockets",
      "Adjustable button tabs at the waist"
    ],
    specs: [
      { label: "Fabric", value: "100% Cotton Denim" },
      { label: "Care Instructions", value: "Wash cold separate, color may bleed initially" },
      { label: "Fit Type", value: "Regular Structured Fit" },
      { label: "Occasion", value: "Outerwear / Casual Layering" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 13,
    name: "Printed Kurta",
    store: "Ethnic Villa",
    subtitle: "Festival & Traditional Wear",
    price: 999,
    oldPrice: 1599,
    discount: "37% OFF",
    rating: 4.7,
    reviews: 1100,
    labels: ["Ethnic Choice"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Maroon", "Navy"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "In Stock",
    category: "Ethnic Wear",
    subcategory: "Kurtas",
    description: "Make a splash in traditional events. This elegant long kurta features classic hand block prints on luxury cotton fabric. Features a band collar and side pocket convenience.",
    highlights: [
      "Premium long-staple slub cotton",
      "Authentic hand block prints",
      "Convenient deep side pocket",
      "Clean collar band detailing"
    ],
    specs: [
      { label: "Fabric", value: "100% Cotton" },
      { label: "Care Instructions", value: "Gentle wash cold, iron inside out" },
      { label: "Fit Type", value: "Straight Fit Kurta" },
      { label: "Occasion", value: "Festival / Wedding Guest" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 14,
    name: "Oversized T-Shirt",
    store: "Street Style",
    subtitle: "Heavyweight Boxy Tee",
    price: 549,
    oldPrice: 799,
    discount: "31% OFF",
    rating: 4.5,
    reviews: 950,
    labels: ["Best Seller"],
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Stone"],
    deliveryEstimate: "Delivery Today",
    stockStatus: "In Stock",
    category: "Men",
    subcategory: "T-Shirts",
    description: "Constructed with massive 240GSM cotton, this tee has an incredible structure, drop shoulder detailing, and a thick ribbed mock-neck collar that maintains its shape wash after wash.",
    highlights: [
      "Heavyweight 240 GSM combed cotton",
      "Thick ribbed mock neck collar",
      "Modern boxy drop shoulder design",
      "Bio-washed for lint-free surface smoothness"
    ],
    specs: [
      { label: "Fabric", value: "100% Combed Cotton" },
      { label: "Care Instructions", value: "Machine wash cold inside out, line dry" },
      { label: "Fit Type", value: "Streetwear Boxy Fit" },
      { label: "Occasion", value: "Everyday Casual / Lounge" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 15,
    name: "Sneakers White",
    store: "Urban Tribe",
    subtitle: "Classic Street Sneakers",
    price: 1999,
    oldPrice: 2999,
    discount: "33% OFF",
    rating: 4.8,
    reviews: 2400,
    labels: ["Popular"],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["White", "Black"],
    deliveryEstimate: "Delivery Tomorrow",
    stockStatus: "In Stock",
    category: "Brands",
    subcategory: "Footwear",
    description: "Step into clean, minimal style. Crafted with premium vegan leather and extra-cushioned memory foam insoles, these white sneakers keep you looking crisp while offering clouds-like comfort all day.",
    highlights: [
      "High-grade scuff-resistant vegan leather",
      "Orthopedic memory foam insoles for foot arch support",
      "Flexible slip-resistant vulcanized rubber outsole",
      "Minimalist branding for versatile styling"
    ],
    specs: [
      { label: "Material", value: "Premium Vegan Leather" },
      { label: "Sole Material", value: "Vulcanized Rubber" },
      { label: "Care Instructions", value: "Wipe with damp cloth, do not wash" },
      { label: "Fit Type", value: "Comfort True to Size" },
      { label: "Occasion", value: "Smart Casual / Casual Wear" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
    ]
  }
];
