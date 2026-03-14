import { useTranslation } from "react-i18next";
import { QUOTES } from "../../data/Constants";
import { motion } from "framer-motion";
import { Rocket, GitBranch, TrendingUp, Clock, Star } from "lucide-react";

/* ─── Per-quote config ─── */
const QUOTE_META = [
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    Icon: Rocket,
    from: "#0f3d22",
    to: "#1a6b3c",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    Icon: GitBranch,
    from: "#1a3d2b",
    to: "#2e7d32",
  },
  {
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    Icon: TrendingUp,
    from: "#0d2e1a",
    to: "#388e3c",
  },
  {
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80",
    Icon: Clock,
    from: "#14321f",
    to: "#43a047",
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    Icon: Star,
    from: "#071a0e",
    to: "#1b5e20",
  },
];

/* ─── Grid slot sizes — bento shape ─── */
const GRID_SPANS = [
  { col: "lg:col-span-2", minH: 380 }, /* wide hero   */
  { col: "lg:col-span-1", minH: 380 }, /* tall right  */
  { col: "lg:col-span-1", minH: 300 }, /* row 2 left  */
  { col: "lg:col-span-1", minH: 300 }, /* row 2 mid   */
  { col: "lg:col-span-1", minH: 300 }, /* row 2 right */
];

function BentoCard({ number, translationKey, meta, span, delay }) {
  const { t } = useTranslation("quotes");
  const { url, Icon, from, to } = meta;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-default ${span.col}`}
      style={{ minHeight: span.minH }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${url})` }}
      />

      {/* Dark gradient overlay bottom-up */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            to top,
            ${from}f2 0%,
            ${from}cc 35%,
            ${to}66 70%,
            transparent 100%
          )`,
        }}
      />

      {/* Step number — top left */}
      <div className="absolute top-5 left-5 flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white border border-white/30 backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          {number}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
          Step
        </span>
      </div>

      {/* Icon — top right */}
      <div
        className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <Icon size={18} color="#fff" strokeWidth={1.8} />
      </div>

      {/* Content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-10">
        {/* Accent line */}
        <div
          className="w-8 h-[2px] rounded-full mb-3 transition-all duration-300 group-hover:w-14"
          style={{ background: "linear-gradient(90deg,#86efac,transparent)" }}
        />

        <h3
          className="font-black text-white leading-snug mb-2 transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{
            fontSize: "clamp(20px, 2.2vw, 26px)",
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}
        >
          {t(`${translationKey}.title`)}
        </h3>

        <p
          className="text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90"
          style={{ fontSize: "clamp(13px, 1.3vw, 15px)", maxWidth: 400 }}
        >
          {t(`${translationKey}.body`)}
        </p>
      </div>

      {/* Giant faint number watermark */}
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500 text-white"
        style={{
          fontSize: "clamp(90px, 14vw, 160px)",
          fontFamily: "'Playfair Display', Georgia, serif",
        }}
      >
        {number}
      </span>
    </motion.div>
  );
}

export default function QuotesSection() {
  const { t } = useTranslation("quotes");

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');`}</style>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f0fdf4 0%,#ecfdf5 50%,#f0fdf4 100%)" }}
      >
        {/* Dot grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#1a6b3c 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
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
                fontSize: "clamp(28px,5vw,42px)",
                color: "#1a3d2b",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {t("heading1")}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#1a6b3c 0%,#43a047 60%,#86efac 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("heading2")}
              </span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {QUOTES.map((q, i) => (
              <BentoCard
                key={q.translationKey}
                number={i + 1}
                translationKey={q.translationKey}
                meta={QUOTE_META[i] ?? QUOTE_META[0]}
                span={GRID_SPANS[i]}
                delay={i * 0.08}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}