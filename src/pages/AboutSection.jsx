// components/sections/AboutSection.jsx  (or pages/AboutPage.jsx)
import { Monitor, TrendingUp, Users, Clock, BookOpen, Leaf } from "lucide-react";
import Logo from "../assets/grownovabgless.png";
const ROWS = [
  {
    icon: Monitor,
    title: "What is Grow Nova?",
    en: "GROW NOVA is a training platform specializing in Digital Marketing and Direct Selling. We offer online practical training from beginner to advanced level.",
    ta: "GROW NOVA என்பது Digital Marketing மற்றும் Direct Selling துறைகளில் பயிற்சி வழங்கும் ஒரு training platform ஆகும். ஆரம்ப நிலை முதல் மேம்பட்ட நிலை வரை ஆன்லைன் மூலம் practical training வழங்கப்படுகிறது.",
  },
  {
    icon: TrendingUp,
    title: "What You Will Learn",
    en: "Through our training, people can master Digital Marketing skills and understand how to generate income through online platforms.",
    ta: "நாங்கள் வழங்கும் training மூலம் மக்கள் Digital Marketing திறன்களை கற்றுக்கொண்டு, online platforms மூலம் income உருவாக்கும் வழிகளை புரிந்து கொள்ளலாம்.",
  },
  {
    icon: Users,
    title: "Direct Selling Guidance",
    en: "We provide guidance on communication skills, marketing strategies, and business development methods needed to succeed in Direct Selling.",
    ta: "Direct Selling துறையில் வெற்றி பெற தேவையான communication skills, marketing strategies மற்றும் business development முறைகள் பற்றி வழிகாட்டுதல் வழங்கப்படுகிறது.",
  },
  {
    icon: Clock,
    title: "Our Main Goal",
    en: "GROW NOVA's primary goal is to teach new skills to youth and job seekers and help them create additional income opportunities.",
    ta: "GROW NOVA இன் முக்கிய நோக்கம், இளைஞர்கள் மற்றும் வேலை தேடும் நபர்களுக்கு புதிய திறன்களை கற்றுத்தருவது மற்றும் அவர்களுக்கு ஒரு additional income opportunity உருவாக்க உதவுவது ஆகும்.",
  },
  {
    icon: BookOpen,
    title: "How We Train",
    en: "Our training sessions are designed around practical learning, step-by-step guidance, and real-time support to ensure every learner succeeds.",
    ta: "நாங்கள் வழங்கும் training sessions practical learning, step-by-step guidance மற்றும் real-time support ஆகியவற்றை அடிப்படையாகக் கொண்டு வடிவமைக்கப்பட்டுள்ளது.",
  },
];

const PILLARS = [
  { num: "01", en: "Learn Skills",   ta: "திறன்களை கற்றுக்கொள்ளுங்கள்" },
  { num: "02", en: "Build Network",  ta: "நெட்வொர்க்கை உருவாக்குங்கள்" },
  { num: "03", en: "Grow Income",    ta: "வருமானத்தை வளர்த்துக்கொள்ளுங்கள்" },
];

function AboutRow({ icon: Icon, title, en, ta }) {
  return (
    <div className="relative grid grid-cols-[56px_1fr] group/row border-t border-green-200 first:border-t-0 hover:bg-[#fafffe] transition-colors duration-200">

      {/* Hover accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full origin-top scale-y-0 group-hover/row:scale-y-100 transition-transform duration-200"
        style={{ background: "linear-gradient(to bottom,#1a6b3c,#43a047)" }}
      />

      {/* Icon column */}
      <div className="flex items-start justify-center pt-7 border-r border-green-200">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover/row:scale-105 transition-transform duration-200"
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          <Icon size={15} className="text-white" />
        </div>
      </div>

      {/* Content column */}
      <div className="py-7 px-6 sm:px-8">
        <span className="inline-block text-[11px] font-extrabold text-green-700 uppercase tracking-widest mb-2 group-hover/row:translate-x-1 transition-transform duration-200">
          {title}
        </span>
        <p className="text-sm text-gray-500 leading-relaxed mb-2">{en}</p>
        <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-green-200 pl-3">
          {ta}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Logo */}

        <img 
            src={Logo} 
            alt="GrowNova Logo" 
            size={30}
            className="mb-8" // adjust height if needed
        />
                  

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-100 text-green-700 text-[11px] font-bold rounded-full uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            About Us
          </span>
          <h1 className="text-4xl font-black leading-tight mb-2" style={{ color: "#1a3d2b" }}>
            Learn Skills.<br />
            <span style={{ color: "#2e7d32" }}>Build Network. Grow Income.</span>
          </h1>
          <p className="text-sm text-gray-400 italic">
            GROW NOVA – Digital Marketing & Direct Selling Training Platform
          </p>
        </div>

        {/* Content rows — flush border-y */}
        <div className="bg-white border-y border-green-200 mb-0">
          {ROWS.map((row) => (
            <AboutRow key={row.title} {...row} />
          ))}
        </div>

        {/* Three pillars — same flush style, no gap */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-green-200 bg-white border-b border-green-200">
          {PILLARS.map((p) => (
            <div key={p.num} className="flex flex-col py-8 px-7 relative group/pillar">
              <div className="opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-200 absolute inset-0 bg-gradient-to-b from-green-100 to-transparent pointer-events-none" />
              <span className="text-[32px] font-black text-green-100 group-hover/pillar:text-green-200 transition-colors duration-200 leading-none mb-2 relative z-10 select-none">
                {p.num}
              </span>
              <p className="text-base font-extrabold text-green-900 relative z-10 mb-0.5">{p.en}</p>
              <p className="text-xs text-green-500 relative z-10">{p.ta}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}