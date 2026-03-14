import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function CtaSection() {
  const { t } = useTranslation("cta");
  const navigate = useNavigate();
  const stats = [
    { value: t("stat1.value"), label: t("stat1.label") },
    { value: t("stat2.value"), label: t("stat2.label") },
    { value: t("stat3.value"), label: t("stat3.label") },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="relative bg-white border-y border-green-200 py-20 px-8 text-center overflow-hidden">

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #bbf7d0 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Faint background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] font-black text-green-50 leading-none pointer-events-none select-none whitespace-nowrap z-0">
            5K
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-widest mb-7">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t("badge")}
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: "#1a3d2b" }}>
              {t("heading1")}<br />
              <span style={{ color: "#2e7d32" }}>{t("heading2")}</span> {t("heading3")}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-10">
              {t("subtitle")}
            </p>

            <button
              onClick={() => navigate("/join")}
                className="btn-join inline-flex items-center gap-3 font-bold text-sm px-8 py-4 group hover:-translate-y-0.5 transition-all"
              >
                {t("joinFree")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-10 mt-12 pt-8 border-t border-green-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-extrabold" style={{ color: "#14532d" }}>{stat.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}