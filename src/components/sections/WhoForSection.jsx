import { useTranslation } from "react-i18next";
import { WHO_FOR } from "../../data/constants";

/* ─────────────────────────────────────────────────────────────
   WhoCard — Aceternity "Feature" grid card, Grow Nova theme
───────────────────────────────────────────────────────────── */

function WhoCard({ icon: Icon, labelKey, tagKey, descKey, index }) {
  const { t, i18n } = useTranslation("whoFor");

  const isTamil = i18n.language.startsWith("ta");
  const isTopRow = index < 4;

  return (
    <div className={`flex flex-col py-10 relative group/feature ${isTamil ? "overflow-x-hidden" : ""}`}>

      {/* ── Hover gradient — fills the FULL cell ── */}
      {isTopRow ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-100 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-100 to-transparent pointer-events-none" />
      )}

      {/* ── Icon ── */}
      <div className="mb-5 relative z-10 px-8">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center group-hover/feature:scale-105 transition-transform duration-200"
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          <Icon size={22} className="text-white" />
        </div>
      </div>

      {/* ── Tag pill ── */}
      <div className="mb-3 relative z-10 px-8">
        <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-100 text-green-700 break-words ${isTamil ? "hyphens-auto" : ""}`}>
          {t(tagKey)}
        </span>
      </div>

      {/* ── Title with animated left bar ── */}
      <div className="text-lg font-extrabold mb-3 relative z-10 px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-green-200 group-hover/feature:bg-green-600 transition-all duration-200 origin-center" />
        <span className={`group-hover/feature:translate-x-2 transition-transform duration-200 inline-block text-green-900 break-words ${isTamil ? "hyphens-auto" : ""}`}>
          {t(labelKey)}
        </span>
      </div>

      {/* ── Description ── */}
      <p className={`text-sm text-gray-500 leading-relaxed relative z-10 px-8 break-words ${isTamil ? "hyphens-auto leading-6" : ""}`}>
        {t(descKey)}
      </p>
    </div>
  );
}

/* ─── Section ─── */
export default function WhoForSection() {
  const { t, i18n } = useTranslation(["common", "whoFor"]);

  const isTamil = i18n.language.startsWith("ta");

  return (
    <section
      id="about"
      lang={isTamil ? "ta" : "en"} // Helps browser apply correct hyphenation/word-break
      className={`py-20 bg-gradient-to-br from-green-50 to-emerald-50 ${isTamil ? "overflow-x-hidden" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className={`inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4 break-words ${isTamil ? "hyphens-auto" : ""}`}>
            {t("common:whoIsItFor")}
          </span>
          <h2 className={`text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold ${isTamil ? "leading-tight break-words hyphens-auto" : ""}`} style={{ color: "#1a3d2b" }}>
            {t("common:builtFor")}{" "}
            <span style={{ color: "#2e7d32" }} className={`${isTamil ? "break-words hyphens-auto" : ""}`}>
              {t("common:ambitiousBeginners")}
            </span>
          </h2>
          <p className={`text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg ${isTamil ? "break-words hyphens-auto leading-7" : ""}`}>
            {t("common:noExperience")}
          </p>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-y-0 divide-x-0 md:divide-x lg:divide-x divide-green-200 bg-white border-y border-green-200 relative z-10">
          {WHO_FOR.map((item, index) => (
            <WhoCard
              key={item.labelKey}
              icon={item.icon}
              labelKey={item.labelKey}
              tagKey={item.tagKey}
              descKey={item.descKey}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}