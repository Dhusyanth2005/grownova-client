import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { STATS } from "../../data/Constants";

// Parses "10K+", "98%", "500+" → { number: 10000, suffix: "K+" } etc.
function parseValue(value) {
  const str = String(value);
  const match = str.match(/^([\d.]+)([^\d.]*)$/);
  if (!match) return { number: 0, suffix: str };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({ value, labelKey, icon: Icon, started, index }) {
  const { t, i18n } = useTranslation("stats");

  const isTamil = i18n.language.startsWith("ta");

  const { number, suffix } = parseValue(value);
  const count = useCountUp(number, 1600 + index * 100, started);

  const display = number >= 1000
    ? Math.floor(count).toLocaleString()
    : number % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count);

  return (
    <div
      className="text-center group"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
        style={{ background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)" }}
      >
        <Icon size={24} style={{ color: "#2e7d32" }} />
      </div>
      <p className="text-3xl font-extrabold" style={{ color: "#1a5c2a" }}>
        {display}
        <span className="text-2xl align-baseline">{suffix}</span>
      </p>
      <p
        className={`text-sm text-gray-500 mt-1 font-medium break-words ${
          isTamil ? "hyphens-auto leading-6" : ""
        }`}
      >
        {t(labelKey)}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { t, i18n } = useTranslation("stats");
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const isTamil = i18n.language.startsWith("ta");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      lang={isTamil ? "ta" : "en"} // ← important for proper rendering
      className={`py-16 bg-white ${isTamil ? "overflow-x-hidden" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ value, labelKey, icon }, index) => (
          <StatCard
            key={labelKey}
            value={value}
            labelKey={labelKey}
            icon={icon}
            started={started}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}