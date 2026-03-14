import { useTranslation } from "react-i18next";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "../ui/BlurText";
import tutorialImage from "../../assets/undraw_business-decisions_7vkl.svg";
import { scrollToSection } from "../navbar/GrowNovaNavbar";
/* ── Tiny fade-up wrapper for non-text elements ── */
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const { t, i18n } = useTranslation(["common", "hero"]);

  // Detect Tamil to apply special mobile handling
  const isTamil = i18n.language.startsWith("ta");

  return (
    <section
      id="home"
      lang={isTamil ? "ta" : "en"} // Helps browser apply correct hyphenation/word-break
      className={`relative min-h-[95vh] flex items-center overflow-hidden ${isTamil ? "overflow-x-hidden" : ""}`}
      style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#dcfce7 45%,#f0fdf4 100%)" }}
    >
      {/* Background decorations – unchanged */}
      <div
        className="absolute top-24 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle,#4caf50,transparent)" }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle,#1a6b3c,transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#86efac 1px,transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* ══ LEFT: Text ══ */}
        <div className={`space-y-7 ${isTamil ? "space-y-6" : "space-y-7"}`}>

          {/* Badge */}
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-200 rounded-full shadow-sm text-sm font-medium text-green-700 break-words">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t("hero:badge")}
            </div>
          </FadeUp>

          {/* Headline — word-by-word blur in */}
          <div>
            {/* Line 1 */}
            <BlurText
              text={t("hero:headline.line1")}
              delay={90}
              direction="top"
              stepDuration={0.38}
              className={`text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight ${isTamil ? "break-words hyphens-auto" : ""}`}
              style={{ color: "#1a3d2b" }}
            />

            {/* Line 2 — gradient "Digitally" + "with Nova" */}
            <FadeUp delay={0.55} className="flex flex-wrap items-baseline gap-x-3 mt-1">
              <span
                className={`text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold break-words ${isTamil ? "hyphens-auto" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #1a6b3c 0%, #4caf50 50%, #86efac 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  paddingBottom: "0.1em",
                  lineHeight: "1.15",
                  display: "inline-block",
                }}
              >
                {t("hero:digitally")}
              </span>
              <span
                className={`text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold break-words ${isTamil ? "hyphens-auto" : ""}`}
                style={{ color: "#1a3d2b" }}
              >
                {t("hero:withNova")}
              </span>
            </FadeUp>
          </div>

          {/* Sub-text — word-by-word blur in */}
          <BlurText
            text={t("hero:subtitle")}
            delay={55}
            direction="bottom"
            stepDuration={0.30}
            animationFrom={{ filter: "blur(8px)", opacity: 0, y: 30 }}
            className={`text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl break-words ${isTamil ? "hyphens-auto text-[1.05rem] leading-7" : ""}`}
          />

          {/* Buttons */}
          <FadeUp delay={1.05}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="join"
                className="btn-join btn-join-rounded flex items-center gap-2 px-7 py-3.5 font-semibold hover:-translate-y-0.5 transition-all"
              >
                {t("hero:watchWebinar")} <ArrowRight size={16} />
              </a>
              <button 
              onClick={(e) => { e.preventDefault(); scrollToSection("#webinar"); }}
              className="flex items-center gap-2 px-7 py-3.5 font-semibold text-green-800 bg-white border-2 border-green-200 rounded-xl hover:bg-green-50 hover:border-green-400 transition-all">
                <Play size={16} className="text-green-600" /> {t("hero:seeHowItWorks")}
              </button>
            </div>
          </FadeUp>

          {/* Trust badges */}
          <FadeUp delay={1.2}>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                [t("hero:trust.1.count"), t("hero:trust.1.label")],
                [t("hero:trust.2.count"), t("hero:trust.2.label")],
                [t("hero:trust.3.count"), t("hero:trust.3.label")],
              ].map(([v, l], i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600 break-words">
                    <strong className="text-green-800">{v}</strong> {l}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>

        {/* ══ RIGHT: Mac Liquid Glass Window ══ */}
        <FadeUp delay={0.3} className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Ambient glow – unchanged */}
            <div
              className="absolute -inset-6 rounded-[40px] opacity-60 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 40%, #86efac, transparent 60%), radial-gradient(ellipse at 80% 70%, #4ade80, transparent 55%)" }}
            />
            <div
              className="absolute -inset-3 rounded-[36px] opacity-30 blur-xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 60% 20%, #bbf7d0, transparent 50%)" }}
            />

            {/* Glass window – unchanged */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                backdropFilter: "blur(40px) saturate(180%) brightness(1.08)",
                WebkitBackdropFilter: "blur(40px) saturate(180%) brightness(1.08)",
                background: "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(220,252,231,0.35) 40%, rgba(255,255,255,0.20) 100%)",
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.6) inset,
                  0 2px 0 rgba(255,255,255,0.9) inset,
                  0 -1px 0 rgba(255,255,255,0.2) inset,
                  0 32px 64px -12px rgba(21,128,61,0.25),
                  0 16px 32px -8px rgba(0,0,0,0.12),
                  0 4px 8px rgba(0,0,0,0.06)
                `,
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              {/* Title bar */}
              <div
                className="relative flex items-center gap-2 px-4 py-3 overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.30) 100%)",
                  borderBottom: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-px opacity-80 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
                />
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {[
                    ["#ff5f57","#ff8c87","#c0392b"],
                    ["#febc2e","#ffd27a","#c8920a"],
                    ["#28c840","#6ee680","#1a8a2e"],
                  ].map(([bg, shine, shadow], i) => (
                    <div key={i} className="w-3 h-3 rounded-full relative" style={{ background: bg, boxShadow: `0 1px 2px ${shadow}80` }}>
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1 rounded-full opacity-60"
                        style={{ background: `radial-gradient(ellipse, ${shine}, transparent)` }} />
                    </div>
                  ))}
                </div>
                {/* URL bar */}
                <div
                  className="flex-1 mx-2 flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium break-words"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
                    color: "#166534",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 opacity-60">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
                  </svg>
                  <span className="opacity-70">{t("hero:url.domain")}</span>
                  <span className="font-semibold opacity-90">{t("hero:url.path")}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute top-0 left-6 right-6 h-px z-10 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)" }} />
                <img
                  src={tutorialImage}
                  alt={t("hero:image.alt")}
                  className="w-full block"
                  style={{ display: "block", padding: "30px" }}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, transparent 40%)" }} />
              </div>

              {/* Status bar */}
              <div
                className="relative flex items-center justify-between px-5 py-2 text-xs font-medium overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.45) 100%)",
                  borderTop: "1px solid rgba(255,255,255,0.45)",
                  color: "#15803d",
                }}
              >
                <span className="flex items-center gap-1.5 break-words">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm animate-pulse" />
                  {t("hero:status.live")}
                </span>
                <span className="flex items-center gap-1 opacity-60 break-words">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  {t("hero:status.secure")}
                </span>
              </div>

              <div className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)" }} />
            </div>
          </div>
        </FadeUp>

      </div>

      {/* Wave divider – unchanged */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}