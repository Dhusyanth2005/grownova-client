import { useTranslation } from "react-i18next";
import { QUOTES } from "../../data/constants";

function QuoteItem({ number, translationKey }) {
  const { t } = useTranslation("quotes");

  return (
    <div className="grid grid-cols-[80px_1fr] relative group/feature border-b border-green-200 last:border-b-0 overflow-hidden min-h-[110px] hover:bg-[#fafffe] transition-colors duration-200">

      {/* Left — number column */}
      <div className="flex items-center justify-center border-r border-green-200 relative overflow-hidden">
        {/* Giant faint background number */}
        <span className="absolute text-[100px] font-black text-green-50 group-hover/feature:text-green-100 transition-colors duration-200 leading-none select-none pointer-events-none">
          {number}
        </span>
        {/* Small badge */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-extrabold relative z-10 group-hover/feature:scale-105 transition-transform duration-200 shrink-0"
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          {number}
        </div>
      </div>

      {/* Right — content */}
      <div className="relative flex flex-col justify-center px-8 py-7">

        {/* Sliding left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full origin-top scale-y-0 group-hover/feature:scale-y-100 transition-transform duration-200"
          style={{ background: "linear-gradient(to bottom,#1a6b3c,#43a047)" }}
        />

        {/* Faint quote mark floated right */}
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[80px] leading-none font-serif text-green-50 group-hover/feature:text-green-100 transition-colors duration-200 select-none pointer-events-none">
          "
        </span>

        <p className="text-[15px] font-extrabold text-green-900 mb-1.5 leading-snug group-hover/feature:translate-x-1 transition-transform duration-200">
          {t(`${translationKey}.title`)}
        </p>
        <p className="text-[12.5px] text-gray-500 leading-relaxed group-hover/feature:translate-x-1 transition-transform duration-200">
          {t(`${translationKey}.body`)}
        </p>

      </div>
    </div>
  );
}

export default function QuotesSection() {
  const { t } = useTranslation("quotes");

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>
            {t("heading1")}{" "}
            <span style={{ color: "#2e7d32" }}>{t("heading2")}</span>
          </h2>
        </div>

        <div className="bg-white border-y border-green-200">
          {QUOTES.map((q, i) => (
            <QuoteItem key={q.translationKey} number={i + 1} translationKey={q.translationKey} />
          ))}
        </div>

      </div>
    </section>
  );
}