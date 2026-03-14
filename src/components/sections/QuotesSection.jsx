import { useTranslation } from "react-i18next";
import { QUOTES } from "../../data/Constants";
import { motion } from "framer-motion";
import { Rocket, GitBranch, TrendingUp, Clock, Star } from "lucide-react";

/* ─── Image map — one Unsplash photo per quote theme ─── */
const QUOTE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    accent: "#1a6b3c",
    Icon: Rocket,
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    accent: "#2e7d32",
    Icon: GitBranch,
  },
  {
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    accent: "#388e3c",
    Icon: TrendingUp,
  },
  {
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    accent: "#43a047",
    Icon: Clock,
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    accent: "#1b5e20",
    Icon: Star,
  },
];

/* ─── Roman numerals for decoration ─── */
const ROMAN = ["I", "II", "III", "IV", "V"];

function QuoteCard({ number, translationKey, imageData, reverse }) {
  const { t } = useTranslation("quotes");
  const roman = ROMAN[number - 1];
  const isEven = reverse;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1.1fr" : "1.1fr 1fr",
        minHeight: 260,
      }}
    >
      {/* ── IMAGE PANEL ── */}
      <div
        style={{ order: isEven ? 2 : 1 }}
        className="relative overflow-hidden"
      >
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${imageData.url})` }}
        />
        {/* Green tint overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              ${isEven ? "270deg" : "90deg"},
              ${imageData.accent}cc 0%,
              ${imageData.accent}55 45%,
              transparent 100%
            )`,
          }}
        />
        {/* Roman numeral watermark on image */}
        <span
          className="absolute select-none pointer-events-none font-black leading-none opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            fontSize: "clamp(80px, 12vw, 140px)",
            color: "#fff",
            bottom: "-10px",
            [isEven ? "right" : "left"]: "12px",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          {roman}
        </span>
        {/* Icon badge */}
        <div
          className="absolute top-5 flex items-center justify-center w-11 h-11 rounded-xl shadow-lg backdrop-blur-sm"
          style={{
            [isEven ? "right" : "left"]: "20px",
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          <imageData.Icon size={20} color="#fff" strokeWidth={1.8} />
        </div>
      </div>

      {/* ── CONTENT PANEL ── */}
      <div
        style={{
          order: isEven ? 1 : 2,
          background: number % 2 === 0 ? "#f9fdf9" : "#ffffff",
          borderLeft: isEven ? "none" : `4px solid ${imageData.accent}`,
          borderRight: isEven ? `4px solid ${imageData.accent}` : "none",
        }}
        className="relative flex flex-col justify-center px-10 py-10 overflow-hidden"
      >
        {/* Faint giant quote mark */}
        <span
          className="absolute pointer-events-none select-none leading-none font-serif opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500"
          style={{
            fontSize: 180,
            color: imageData.accent,
            top: "-20px",
            right: "10px",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          "
        </span>

        {/* Step label */}
        <span
          className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block"
          style={{ color: imageData.accent }}
        >
          Step {number}
        </span>

        {/* Title */}
        <h3
          className="font-black leading-tight mb-3 transition-transform duration-300 group-hover:translate-x-1"
          style={{
            fontSize: "clamp(17px, 2.2vw, 22px)",
            color: "#1a3d2b",
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: "-0.01em",
          }}
        >
          {t(`${translationKey}.title`)}
        </h3>

        {/* Divider */}
        <div
          className="w-10 h-[2px] rounded-full mb-3 transition-all duration-300 group-hover:w-16"
          style={{ background: `linear-gradient(90deg, ${imageData.accent}, transparent)` }}
        />

        {/* Body */}
        <p
          className="leading-relaxed transition-transform duration-300 group-hover:translate-x-1"
          style={{
            fontSize: "clamp(12px, 1.3vw, 14px)",
            color: "#4b5563",
            maxWidth: 340,
          }}
        >
          {t(`${translationKey}.body`)}
        </p>

        {/* Number badge bottom-right */}
        <div
          className="absolute bottom-5 right-6 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md"
          style={{ background: `linear-gradient(135deg, #1a6b3c, ${imageData.accent})` }}
        >
          {number}
        </div>
      </div>
    </motion.div>
  );
}

export default function QuotesSection() {
  const { t } = useTranslation("quotes");

  return (
    <>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');`}</style>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdf4 100%)" }}
      >
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #1a6b3c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-full mb-5"
              style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #86efac" }}
            >
              {t("badge")}
            </span>
            <h2
              className="font-black leading-tight"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: "#1a3d2b",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {t("heading1")}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1a6b3c 0%, #43a047 60%, #86efac 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("heading2")}
              </span>
            </h2>
          </motion.div>

          {/* ── Cards ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 4px 40px rgba(21,128,61,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
              border: "1px solid rgba(134,239,172,0.4)",
            }}
          >
            {QUOTES.map((q, i) => (
              <div key={q.translationKey} style={{ borderTop: i === 0 ? "none" : "1px solid #d1fae5" }}>
                <QuoteCard
                  number={i + 1}
                  translationKey={q.translationKey}
                  imageData={QUOTE_IMAGES[i] ?? QUOTE_IMAGES[0]}
                  reverse={i % 2 !== 0}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}