import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { FEATURES } from "../../data/constants";

/* ─── Hover Effect Wrapper ─── */
function HoverEffect({ items }) {
  const { t } = useTranslation("features");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <div
          key={item.translationKey}
          className="relative group block p-3 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* ── Animated green background highlight ── */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-100 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          {/* ── Card ── */}
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-gray-100 group-hover:border-green-300 group-hover:shadow-lg relative z-20 transition-all duration-300">
            <div className="relative z-50">

              {/* Gradient glow on hover */}
              <div
                className={`absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 bg-gradient-to-br ${item.color}`}
              />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                <item.icon size={22} className="text-white" />
              </div>

              {/* Title */}
              <h4 className="text-green-900 font-bold text-lg tracking-wide mb-2">
                {t(`${item.translationKey}.title`)}
              </h4>

              {/* Description */}
              <p className="text-gray-500 tracking-wide leading-relaxed text-sm">
                {t(`${item.translationKey}.desc`)}
              </p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Features Section ─── */
export default function FeaturesSection() {
  const { t } = useTranslation("features");

  return (
    <section id="training" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>
            {t("heading1")}{" "}
            <span style={{ color: "#2e7d32" }}>{t("heading2")}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards with hover effect */}
        <HoverEffect items={FEATURES} />

      </div>
    </section>
  );
}