import { useTranslation } from "react-i18next";
import { WEBINAR_RULES } from "../../data/Constants";

function RuleCard({ number, translationKey }) {
  const { t } = useTranslation("webinar");

  const tag   = t(`${translationKey}.tag`);
  const label = t(`${translationKey}.label`);
  const desc  = t(`${translationKey}.desc`);

  return (
    <>
      {/* ── Mobile layout ── */}
      <div className="flex flex-col py-10 relative group/feature md:hidden">

        <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-100 to-transparent pointer-events-none" />

        <div className="mb-5 relative z-10 px-8">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-extrabold group-hover/feature:scale-105 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
          >
            {number}
          </div>
        </div>

        <div className="mb-3 relative z-10 px-8">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-100 text-green-700">
            {tag}
          </span>
        </div>

        <div className="text-base font-extrabold mb-3 relative z-10 px-8">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-green-200 group-hover/feature:bg-green-600 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition-transform duration-200 inline-block text-green-900">
            {label}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed relative z-10 px-8">
          {desc}
        </p>
      </div>

      {/* ── Desktop layout ── */}
      <div className="relative hidden md:grid grid-cols-[72px_200px_1fr] items-center group/feature border-t border-green-200 first:border-t-0">

        <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 absolute inset-0 bg-gradient-to-r from-green-100 to-transparent pointer-events-none" />

        {/* Col 1 — Number */}
        <div className="flex items-center justify-center py-7 border-r border-green-200 relative z-10">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-extrabold group-hover/feature:scale-105 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
          >
            {number}
          </div>
        </div>

        {/* Col 2 — Tag + Title */}
        <div className="py-7 px-6 border-r border-green-200 relative z-10">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 mb-2">
            {tag}
          </span>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 my-auto -translate-x-6 w-1 h-5 group-hover/feature:h-7 rounded-tr-full rounded-br-full bg-green-200 group-hover/feature:bg-green-600 transition-all duration-200" />
            <span className="inline-block text-base font-extrabold text-green-900 group-hover/feature:translate-x-1.5 transition-transform duration-200">
              {label}
            </span>
          </div>
        </div>

        {/* Col 3 — Description */}
        <div className="py-7 px-8 relative z-10">
          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>

      </div>
    </>
  );
}

export default function WebinarRulesSection() {
  const { t } = useTranslation("webinar");

  return (
    <section id="webinar" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>
            {t("heading1")} <span style={{ color: "#2e7d32" }}>{t("heading2")}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 divide-y md:divide-y-0 divide-green-200 bg-white border-y border-green-200">
          {WEBINAR_RULES.map((rule) => (
            <RuleCard key={rule.translationKey} number={rule.number} translationKey={rule.translationKey} />
          ))}
        </div>

      </div>
    </section>
  );
}