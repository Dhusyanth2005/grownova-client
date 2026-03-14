import { useState, useRef } from "react";
import {
  BookOpen, Users, TrendingUp, Star, ChevronRight, Play,
  CheckCircle, Globe, Smartphone, MessageCircle, Award,
  ArrowRight, Menu, X, Leaf, Zap, Target, BarChart2,
  Heart, Home, Clock, Shield,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

/* ─────────────────────────── DATA ─────────────────────────── */
const NAV_ITEMS = [
  { name: "Home",     link: "#home" },
  { name: "About",    link: "#about" },
  { name: "Training", link: "#training" },
  { name: "Products", link: "#products" },
  { name: "Webinar",  link: "#webinar" },
  { name: "Contact",  link: "#contact" },
];

const STATS = [
  { value: "5000+", label: "Active Members",   icon: Users },
  { value: "30+",   label: "Training Modules", icon: BookOpen },
  { value: "95%",   label: "Success Rate",     icon: TrendingUp },
  { value: "4.9★",  label: "Member Rating",    icon: Star },
];

const FEATURES = [
  { icon: Globe,         title: "Digital Marketing",   desc: "Master SEO, social media ads, content marketing, and online brand building techniques.",        color: "from-emerald-400 to-green-600" },
  { icon: TrendingUp,    title: "Direct Selling",       desc: "Learn proven direct selling strategies to build a loyal customer base and grow your network.",   color: "from-green-500 to-teal-600" },
  { icon: Smartphone,    title: "Social Media Growth",  desc: "Leverage Instagram, Facebook, and TikTok to drive traffic and generate consistent income.",      color: "from-teal-400 to-emerald-600" },
  { icon: MessageCircle, title: "Sales Communication",  desc: "Develop persuasive communication skills that convert leads into long-term customers.",           color: "from-lime-500 to-green-600" },
  { icon: BarChart2,     title: "Business Analytics",   desc: "Track your performance with data-driven insights and optimize your digital business.",           color: "from-emerald-500 to-lime-600" },
  { icon: Shield,        title: "Mentorship Support",   desc: "Get guided step-by-step by experienced mentors who have built successful online businesses.",    color: "from-green-400 to-emerald-700" },
];

const PRODUCTS = [
  { icon: Heart, name: "Healthcare Supplements", desc: "Premium wellness products for a healthier lifestyle",  bg: "bg-emerald-50", border: "border-emerald-200", iconBg: "bg-emerald-100", iconColor: "text-emerald-700" },
  { icon: Star,  name: "Cosmetic Products",       desc: "Beauty and skincare solutions loved by thousands",     bg: "bg-green-50",   border: "border-green-200",   iconBg: "bg-green-100",   iconColor: "text-green-700" },
  { icon: Home,  name: "Home Cleaning Products",  desc: "Eco-friendly cleaning solutions for every home",      bg: "bg-teal-50",    border: "border-teal-200",    iconBg: "bg-teal-100",    iconColor: "text-teal-700" },
];

const WHO_FOR = [
  { icon: BookOpen, label: "Students",            desc: "Earn while you learn" },
  { icon: Target,   label: "Job Seekers",          desc: "Build income now"    },
  { icon: Clock,    label: "Part-Timers",          desc: "Flexible schedule"   },
  { icon: Zap,      label: "Entrepreneurs",        desc: "Scale your business" },
];

const WEBINAR_RULES = [
  "This webinar will be only 30 minutes long. Please watch the entire video without skipping.",
  "Avoid phone calls or distractions — stay fully focused during the session.",
  "A business system will be explained. Do not make conclusions mid-way. Watch completely.",
  "Complete details and company information will be revealed only at the end.",
  "After watching, you can send a message if you have questions or opinions.",
];

/* ════════════════════ ANIMATED NAVBAR ════════════════════ */

function GrowNovaNavbar() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 80));

  return (
    <div ref={ref} className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 pointer-events-none">

      {/* ── DESKTOP NAV ── */}
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
        <a href="#home" className="relative z-20 flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1a6b3c,#4caf50)" }}>
            <Leaf size={16} className="text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a5c2a" }}>
            Grow <span style={{ color: "#4caf50" }}>Nova</span>
          </span>
        </a>

        {/* Nav links — centered absolutely */}
        <div
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 flex items-center justify-center gap-0.5"
        >
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
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
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="relative z-20 flex items-center gap-2 shrink-0">
          <a href="#" className="btn-join px-5 py-2">
  Join Free
</a>
        </div>
      </motion.div>

      {/* ── MOBILE NAV ── */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(16px)" : "blur(0px)",
          boxShadow: visible
            ? "0 0 0 1px rgba(34,197,94,0.18), 0 8px 32px rgba(21,128,61,0.12)"
            : "none",
          width: visible ? "92%" : "100%",
          borderRadius: visible ? "18px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 38 }}
        className={[
          "pointer-events-auto relative mx-auto flex lg:hidden flex-col px-4 py-3 transition-colors",
          visible ? "bg-white/90" : "bg-white/70",
        ].join(" ")}
      >
        <div className="flex items-center justify-between w-full">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#1a6b3c,#4caf50)" }}>
              <Leaf size={16} className="text-white" />
            </div>
            <span className="font-bold text-[15px]" style={{ color: "#1a5c2a" }}>
              Grow <span style={{ color: "#4caf50" }}>Nova</span>
            </span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg text-green-800 hover:bg-green-50 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

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
                {NAV_ITEMS.map((item) => (
                  <a key={item.name} href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                    {item.name}
                  </a>
                ))}
                <div className="flex gap-2 mt-3 pt-3 border-t border-green-100">
                  <a href="#" className="flex-1 text-center py-2.5 text-sm font-medium text-green-700 border border-green-300 rounded-lg hover:bg-green-50">
                    Sign In
                  </a>
                  <a href="#" className="btn-join px-5 py-2">
  Join Free
</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}

/* ════════════════════ MAIN PAGE ════════════════════ */
export default function GrowNovaHome() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      <GrowNovaNavbar />

      {/* ══ HERO ══ */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24"
        style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#dcfce7 45%,#f0fdf4 100%)" }}>
        <div className="absolute top-24 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle,#4caf50,transparent)" }} />
        <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle,#1a6b3c,transparent)" }} />
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#86efac 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-200 rounded-full shadow-sm text-sm font-medium text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Training & Mentorship Platform
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: "#1a3d2b" }}>
              Grow Your Income{" "}
              <span className="relative inline-block">
                <span style={{ color: "#2e7d32" }}>Digitally</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9 Q75 2 150 7 Q225 12 298 5" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              with Nova
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Learn <strong className="text-green-700">Digital Marketing</strong> and{" "}
              <strong className="text-green-700">Direct Selling</strong> skills to build real online income — even with zero experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}>
                Watch Free Webinar <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 font-semibold text-green-800 bg-white border-2 border-green-200 rounded-xl hover:bg-green-50 hover:border-green-400 transition-all">
                <Play size={16} className="text-green-600" /> See How It Works
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[["5000+","Members"],["Free","To Join"],["30 min","Webinar"]].map(([v,l]) => (
                <div key={l} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600"><strong className="text-green-800">{v}</strong> {l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration slot */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl shadow-green-900/15 p-8 border border-green-100">
                <div className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)" }}>
                    <Leaf size={40} style={{ color: "#2e7d32" }} />
                  </div>
                  <p className="text-sm font-medium text-green-600 text-center px-4">
                    Place your Undraw illustration here<br />
                    <span className="text-xs text-gray-400 font-normal">undraw.co — set color #2e7d32</span>
                  </p>
                </div>
              </div>
              <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp size={18} className="text-green-700" />
                </div>
                <div><p className="text-xs text-gray-500">This Month</p><p className="text-sm font-bold text-green-800">+32% Growth</p></div>
              </div>
              <div className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Users size={18} className="text-emerald-700" />
                </div>
                <div><p className="text-xs text-gray-500">New Members</p><p className="text-sm font-bold text-emerald-800">+120 Today</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z" fill="white" /></svg>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center group">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)" }}>
                <Icon size={24} style={{ color: "#2e7d32" }} />
              </div>
              <p className="text-3xl font-extrabold" style={{ color: "#1a5c2a" }}>{value}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHO IS IT FOR ══ */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">Who Is It For?</span>
            <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>Built for <span style={{ color: "#2e7d32" }}>Ambitious Beginners</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No experience required. Just the desire to learn, grow, and create a better financial future.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHO_FOR.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border border-green-100 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}>
                  <Icon size={26} className="text-white" />
                </div>
                <p className="font-bold text-green-900 text-lg">{label}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="training" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">What You Will Learn</span>
            <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>Skills That <span style={{ color: "#2e7d32" }}>Build Real Income</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Practical, market-relevant skills for the modern digital economy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {FEATURES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden cursor-pointer">
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 bg-gradient-to-br ${color}`} />
                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${color}`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">Our Products</span>
            <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>Products You Will <span style={{ color: "#2e7d32" }}>Promote and Sell</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">High-quality, in-demand products with excellent margins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map(({ icon: Icon, name, desc, bg, border, iconBg, iconColor }) => (
              <div key={name}
                className={`${bg} border-2 ${border} rounded-3xl p-8 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer`}>
                <div className={`w-20 h-20 ${iconBg} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={34} className={iconColor} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <button className={`mt-6 text-xs font-semibold ${iconColor} flex items-center gap-1 mx-auto hover:gap-2 transition-all`}>
                  Explore products <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WEBINAR ══ */}
      <section id="webinar" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/30">
            <div className="grid md:grid-cols-2">
              <div className="p-10 lg:p-12 text-white space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full text-xs font-semibold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Live Webinar
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                  Watch Our Free<br /><span className="text-green-300">30-Minute</span> Webinar
                </h2>
                <p className="text-green-100 text-sm leading-relaxed">
                  Discover our complete business system, income opportunity, and how Grow Nova can transform your financial future — in just 30 minutes.
                </p>
                <button className="flex items-center gap-3 bg-white text-green-800 px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                  <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                    <Play size={16} className="text-white ml-0.5" />
                  </div>
                  Watch Now — It is Free
                </button>
              </div>
              <div className="bg-white/10 p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Webinar Rules</h3>
                </div>
                <ul className="space-y-4">
                  {WEBINAR_RULES.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-green-400/30 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <p className="text-green-100 text-xs leading-relaxed">{rule}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">Success Stories</span>
            <h2 className="text-4xl font-extrabold" style={{ color: "#1a3d2b" }}>Real Results from <span style={{ color: "#2e7d32" }}>Real People</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { name: "Aisha R.",  role: "Student, Age 21", text: "Grow Nova helped me earn my first income online while still in college. The training is practical and the mentors are incredibly supportive.", initials: "AR", bg: "from-green-400 to-emerald-600" },
              { name: "Ravi K.",   role: "Job Seeker",       text: "After months of job hunting, I found Grow Nova and started earning within 3 weeks. Now I have more income than most salaried positions.", initials: "RK", bg: "from-emerald-500 to-teal-600" },
              { name: "Meera S.", role: "Homemaker",         text: "I was skeptical at first, but after the 30-minute webinar everything was clear. I am now running my own small digital business from home.", initials: "MS", bg: "from-teal-400 to-green-600" },
            ].map(({ name, role, text, initials, bg }) => (
              <div key={name} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_,i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center text-white text-xs font-bold`}>{initials}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{name}</p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative bg-gradient-to-br from-green-700 to-emerald-500 rounded-3xl p-14 shadow-2xl shadow-green-900/25 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                <Award size={30} className="text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">Ready to Start Your<br />Digital Journey?</h2>
              <p className="text-green-100 text-base max-w-lg mx-auto leading-relaxed">
                Join 5,000+ members already building income through digital marketing and direct selling with Grow Nova.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button className="flex items-center gap-2 bg-white text-green-800 px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Join for Free <ArrowRight size={16} />
                </button>
                <button className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  <Play size={15} /> Watch Webinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer id="contact" className="bg-green-950 text-green-100 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-green-700 flex items-center justify-center"><Leaf size={18} className="text-white" /></div>
                <span className="text-xl font-bold text-white">Grow <span className="text-green-400">Nova</span></span>
              </div>
              <p className="text-sm text-green-300 leading-relaxed max-w-xs">
                A training and mentorship platform empowering individuals to build online income through digital marketing and direct selling.
              </p>
              <div className="flex gap-3 pt-2">
                {["FB","IG","YT","WA"].map(s => (
                  <div key={s} className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors text-xs font-bold text-green-300">{s}</div>
                ))}
              </div>
            </div>
            {[
              { title: "Platform", links: ["About Us","Training","Webinar","Success Stories"] },
              { title: "Support",  links: ["Contact Us","FAQ","Privacy Policy","Terms"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-bold mb-4 text-sm">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map(l => <li key={l}><a href="#" className="text-sm text-green-400 hover:text-white transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-green-500">
            <p>© 2025 Grow Nova. All rights reserved.</p>
            <p className="flex items-center gap-1.5">Built with <Heart size={11} className="text-green-400 fill-green-400" /> for digital entrepreneurs</p>
          </div>
        </div>
      </footer>

    </div>
  );
}