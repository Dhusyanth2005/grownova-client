import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TESTIMONIALS } from "../../data/Constants";

function TestimonialCard({ translationKey, initials, gradient }) {
  const { t } = useTranslation("testimonials");

  const name = t(`${translationKey}.name`);
  const role = t(`${translationKey}.role`);
  const text = t(`${translationKey}.text`);

  return (
    <div className="flex flex-col py-10 px-8 relative group/feature">

      {/* Hover gradient */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-100 to-transparent pointer-events-none" />

      {/* Opening quote mark */}
      <div className="text-[72px] leading-none font-serif text-green-200 group-hover/feature:text-green-300 transition-colors duration-200 mb-2 relative z-10 select-none">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-sm text-gray-500 leading-relaxed italic mb-6 relative z-10 flex-1">
        {text}
      </p>

      {/* Divider */}
      <div className="h-px bg-green-200 mb-5 relative z-10" />

      {/* Author */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-extrabold shrink-0 group-hover/feature:scale-105 transition-transform duration-200`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-extrabold text-green-900">{name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{role}</p>
        </div>
      </div>

    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation("testimonials");

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>
            {t("heading1")} <span style={{ color: "#2e7d32" }}>{t("heading2")}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-green-200 bg-white border-y border-green-200">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.translationKey} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}