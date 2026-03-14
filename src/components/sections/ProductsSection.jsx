import { Sparkles, ShieldCheck, Leaf } from "lucide-react";

const BENTO_PRODUCTS = [
  {
    id: "health",
    label: "Category 01",
    name: "Healthcare Supplements",
    tagline: "Fuel your body. Transform your life.",
    desc: "Scientifically backed wellness supplements designed for peak performance, immunity, and long-term vitality.",
    icon: ShieldCheck,
    badge: "Best Seller",
    badgeColor: "bg-emerald-500",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",
    accent: "from-emerald-950/85 via-emerald-900/50 to-transparent",
    tag: "#wellness",
    isLarge: true,
  },
  {
    id: "cosmetics",
    label: "Category 02",
    name: "Cosmetic Products",
    tagline: "Beauty, redefined.",
    desc: "Premium skincare and beauty products crafted with natural ingredients.",
    icon: Sparkles,
    badge: "Trending",
    badgeColor: "bg-pink-500",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    accent: "from-rose-950/85 via-rose-900/40 to-transparent",
    tag: "#beauty",
    isLarge: false,
  },
  {
    id: "cleaning",
    label: "Category 03",
    name: "Home Cleaning",
    tagline: "Clean home. Clear mind.",
    desc: "Eco-friendly cleaning solutions that protect your family and the planet.",
    icon: Leaf,
    badge: "Eco-Friendly",
    badgeColor: "bg-teal-500",
    img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
    accent: "from-teal-950/85 via-teal-900/40 to-transparent",
    tag: "#ecoclean",
    isLarge: false,
  },
];

function BentoCard({ label, name, tagline, desc, icon: Icon, badge, badgeColor, img, accent, tag, isLarge }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer w-full h-full">

      {/* BG image */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${accent}`} />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3.5">
        <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">{label}</span>
        <span className={`${badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
          {badge}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block text-white/45 text-xs font-medium mb-2 tracking-wide">{tag}</span>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
            <Icon size={15} className="text-white" />
          </div>
          <h3 className={`font-extrabold text-white leading-tight ${isLarge ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
            {name}
          </h3>
        </div>

        <p className="text-white/75 text-sm font-medium leading-snug">{tagline}</p>

        {/* Desc only on large card, hidden on mobile */}
        {isLarge && (
          <p className="hidden md:block text-white/55 text-sm leading-relaxed mt-2 max-w-sm">{desc}</p>
        )}
      </div>

      {/* Shine */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 55%)" }}
      />
    </div>
  );
}

export default function ProductsSection() {
  const [large, ...small] = BENTO_PRODUCTS;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>
            Products You Will{" "}
            <span style={{ color: "#2e7d32" }}>Promote and Sell</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            High-quality, in-demand products with excellent margins and a passionate, growing customer base.
          </p>
        </div>

        {/*
          ── BENTO GRID LAYOUT ──
          Mobile:  single column, stacked cards
          Desktop: 3-col grid — large card takes left 2 cols × 2 rows,
                   two small cards fill the right column
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Large card — full width mobile, 2×2 on desktop */}
          <div className="md:col-span-2 md:row-span-2 h-72 md:h-[460px]">
            <BentoCard {...large} />
          </div>

          {/* Small cards — full width mobile, 1×1 on desktop */}
          {small.map((product) => (
            <div key={product.id} className="h-52 md:h-[222px]">
              <BentoCard {...product} />
            </div>
          ))}

        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["100%", "Natural Ingredients"],
            ["50+",  "Product SKUs"],
            ["4.8★", "Customer Rating"],
            ["Fast", "Delivery Network"],
          ].map(([val, lbl]) => (
            <div key={lbl} className="text-center py-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-2xl font-extrabold" style={{ color: "#1a5c2a" }}>{val}</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}