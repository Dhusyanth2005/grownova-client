import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { Menu, X, Languages } from "lucide-react";
import Logo from "../../assets/grownovabgless.png";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
];

export const scrollToSection = (href, delay = 0) => {
  const run = () => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };
  if (delay > 0) setTimeout(run, delay);
  else run();
};

/* ── Bouncing arrow pointing right toward the lang button ── */
function LangHintArrow({ isMobile = false, currentLang = "en" }) {
  // Show hint in the OTHER language so the user who can't read current lang understands
  const label = currentLang === "en"
    ? (isMobile ? "மொழி" : "மொழி மாற்று")
    : (isMobile ? "Lang" : "Change");

  return (
    <motion.div
      className="flex items-center gap-1 pointer-events-none select-none"
      animate={{ x: [0, -5, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span
        style={{
          fontSize: isMobile ? 10 : 11,
          fontWeight: 600,
          color: "#15803d",
          background: "#dcfce7",
          border: "1px solid #86efac",
          borderRadius: 999,
          padding: isMobile ? "2px 6px" : "2px 8px",
          whiteSpace: "nowrap",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      {/* Arrow SVG */}
      <svg
        width={isMobile ? 16 : 18}
        height={isMobile ? 12 : 14}
        viewBox="0 0 18 14"
        fill="none"
      >
        <path
          d="M1 7H13M8 2L13 7L8 12"
          stroke="#15803d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default function GrowNovaNavbar() {
  const { t, i18n } = useTranslation(["common", "navbar"]);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 80));

  const currentLang = i18n.resolvedLanguage || "en";

  const navItems = [
    { key: "home",     link: "#home"     },
    { key: "about",    link: "#about"    },
    { key: "training", link: "#training" },
    { key: "webinar",  link: "#webinar"  },
  ];

  return (
    <>
      <div className="block lg:hidden h-20 w-full" />

      <div ref={ref} className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 pointer-events-none">

        {/* ══════════════════════════════
            DESKTOP
        ══════════════════════════════ */}
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(16px)" : "blur(0px)",
            boxShadow: visible
              ? "0 0 0 1px rgba(34,197,94,0.18), 0 8px 40px rgba(21,128,61,0.14), 0 1px 0 rgba(255,255,255,0.7) inset"
              : "none",
            width: visible ? "60%" : "98%",
            borderRadius: visible ? "9999px" : "20px",
            paddingTop: visible ? "8px" : "10px",
            paddingBottom: visible ? "8px" : "10px",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 38 }}
          style={{ minWidth: 700 }}
          className={[
            "pointer-events-auto relative mx-auto hidden lg:flex flex-row items-center justify-between px-5 transition-colors",
            visible ? "bg-white/88" : "bg-white/65",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="relative z-20 flex items-center gap-2 shrink-0"
          >
            <img src={Logo} alt="logo" className="w-40" />
          </a>

          {/* Nav links */}
          <div
            onMouseLeave={() => setHovered(null)}
            className="absolute inset-0 flex items-center justify-center gap-0.5"
          >
            {navItems.map((item, idx) => (
              <a
                key={item.key}
                href={item.link}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.link); }}
                onMouseEnter={() => setHovered(idx)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-800 transition-colors rounded-full z-10"
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-green-100"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t(`navbar:${item.key}`)}</span>
              </a>
            ))}
          </div>

          {/* Right side: lang hint + lang button + join */}
          <div className="relative z-20 flex items-center gap-2 shrink-0">

            {/* Lang hint arrow + button grouped together */}
            <div className="flex items-center gap-1.5">
              <LangHintArrow currentLang={currentLang} />
              <div className="relative">
                <button
                  onClick={() => setLangOpen((p) => !p)}
                  className="btn-neu flex items-center gap-1.5"
                >
                  <Languages size={17} style={{ color: "#1a6b3c" }} />
                  <span className="uppercase text-xs tracking-wide" style={{ color: "#1a6b3c" }}>
                    {currentLang}
                  </span>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-36 rounded-xl bg-white shadow-lg border border-green-100 overflow-hidden"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={[
                            "w-full text-left px-4 py-2.5 text-sm transition-colors",
                            currentLang === lang.code
                              ? "bg-green-50 text-green-800 font-semibold"
                              : "text-gray-600 hover:bg-green-50 hover:text-green-700",
                          ].join(" ")}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <a href="join" className="btn-join px-5 py-2">
              {t("common:joinFree")}
            </a>
          </div>
        </motion.div>

        {/* ══════════════════════════════
            MOBILE
        ══════════════════════════════ */}
        <motion.div
          animate={{
            backdropFilter: visible && !mobileOpen ? "blur(16px)" : "blur(0px)",
            boxShadow: visible
              ? "0 0 0 1px rgba(34,197,94,0.18), 0 8px 32px rgba(21,128,61,0.12)"
              : "none",
            width: visible ? "92%" : "100%",
            borderRadius: visible ? "18px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 38 }}
          className={[
            "pointer-events-auto relative mx-auto flex lg:hidden flex-col px-4 py-3 transition-colors",
            mobileOpen ? "bg-white" : visible ? "bg-white/90" : "bg-white/70",
          ].join(" ")}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                scrollToSection("#home", mobileOpen ? 260 : 0);
              }}
              className="flex items-center gap-2"
            >
              <img src={Logo} alt="logo" className="w-30" />
            </a>

            {/* Right: hint + lang button + hamburger */}
            <div className="flex items-center gap-1">

              {/* Hint arrow + lang button */}
              <div className="flex items-center gap-1">
                <LangHintArrow isMobile currentLang={currentLang} />
                <div className="relative">
                  <button
                    onClick={() => setLangOpen((p) => !p)}
                    className="btn-neu-sm flex items-center gap-1"
                  >
                    <Languages size={19} />
                    <span className="uppercase text-[11px] font-semibold tracking-wide">{currentLang}</span>
                  </button>

                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-36 rounded-xl bg-white shadow-lg border border-green-100 overflow-hidden z-50"
                      >
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              i18n.changeLanguage(lang.code);
                              setLangOpen(false);
                            }}
                            className={[
                              "w-full text-left px-4 py-2.5 text-sm transition-colors",
                              currentLang === lang.code
                                ? "bg-green-50 text-green-800 font-semibold"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-700",
                            ].join(" ")}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-1.5 rounded-lg text-green-800 hover:bg-green-50 transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                <div className="pt-4 pb-2 flex flex-col gap-1 border-t border-green-100 mt-3">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        scrollToSection(item.link, 260);
                      }}
                      className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {t(`navbar:${item.key}`)}
                    </a>
                  ))}
                  <div className="mt-3 pt-3 border-t border-green-100">
                    <a href="join" className="btn-join py-2.5 w-full text-center block">
                      {t("common:joinFree")}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </>
  );
}