import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { Menu, X, Languages } from "lucide-react";
import Logo from "../../assets/grownovabgless.png";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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

export default function GrowNovaNavbar() {
  const { t, i18n } = useTranslation(["common", "navbar"]);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 80));

  const currentLang = i18n.resolvedLanguage || "en";

  // Determine the other language to display on the button
  const otherLang = currentLang === "en" ? "ta" : "en";
  const otherLangLabel = currentLang === "en" ? "தமிழ்" : "English";

  const switchLanguage = () => {
    i18n.changeLanguage(otherLang);
  };

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

          {/* Right side: language switch button + join */}
          <div className="relative z-20 flex items-center gap-3 shrink-0">

            <button
              onClick={switchLanguage}
              className="btn-neu flex items-center gap-1.5 px-4 py-2"
              title={currentLang === "en" ? "Switch to Tamil" : "Switch to English"}
            >
              <Languages size={17} style={{ color: "#1a6b3c" }} />
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "#1a6b3c" }}
              >
                {otherLangLabel}
              </span>
            </button>

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

            {/* Right: language switch button + hamburger */}
            <div className="flex items-center gap-2">

              <button
                onClick={switchLanguage}
                className="btn-neu-sm flex items-center gap-1 px-3 py-1.5"
                title={currentLang === "en" ? "தமிழ்" : "English"}
              >
                <Languages size={18} style={{ color: "#1a6b3c" }} />
                <span className="text-[12px] font-semibold tracking-wide" style={{ color: "#1a6b3c" }}>
                  {otherLangLabel}
                </span>
              </button>

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