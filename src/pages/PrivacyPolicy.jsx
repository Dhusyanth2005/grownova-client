import {
  Shield, Database, Lock, Share2, UserCheck,
  RefreshCw, Phone, Leaf, ChevronRight,
} from "lucide-react";
import Logo from "../assets/grownovabgless.png";
const SECTIONS = [
  {
    number: "01",
    icon: Database,
    title: "Information We Collect",
    titleTA: "நாங்கள் சேகரிக்கும் தகவல்கள்",
    body: "When you interact with our website, social media pages, or training programs, we may collect the following information:",
    points: [
      "Name / பெயர்",
      "Mobile number / மொபைல் எண்",
      "Email address / மின்னஞ்சல்",
      "City / Location / நகரம் / இடம்",
      "Any details submitted through forms, messages, or registrations",
    ],
  },
  {
    number: "02",
    icon: Shield,
    title: "Purpose of Collecting Information",
    titleTA: "தகவல் சேகரிப்பின் நோக்கம்",
    body: "We collect this information to:",
    points: [
      "Provide Digital Marketing and Direct Selling training",
      "Offer consultation and guidance",
      "Respond to enquiries and support requests",
      "Send updates related to programs, training sessions, and opportunities",
    ],
  },
  {
    number: "03",
    icon: Lock,
    title: "Data Protection",
    titleTA: "தரவு பாதுகாப்பு",
    body: "We take reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure. Your data is handled with care and stored securely.",
    points: [],
  },
  {
    number: "04",
    icon: Share2,
    title: "Information Sharing",
    titleTA: "தகவல் பகிர்வு",
    body: "GROW NOVA does not sell, trade, or rent users' personal information to third parties. Information will only be shared if required by law or for legitimate service purposes.",
    points: [],
  },
  {
    number: "05",
    icon: UserCheck,
    title: "User Consent",
    titleTA: "பயனர் ஒப்புதல்",
    body: "By submitting your details on our website or contacting us through our platforms, you agree to the collection and use of information as described in this policy.",
    points: [],
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Updates to This Policy",
    titleTA: "கொள்கை புதுப்பிப்புகள்",
    body: "GROW NOVA may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this policy periodically.",
    points: [],
  },
  {
    number: "07",
    icon: Phone,
    title: "Contact Information",
    titleTA: "தொடர்பு தகவல்",
    body: "For any questions regarding this Privacy Policy, you can contact us through our official social media pages or website. We are happy to assist you.",
    points: [],
  },
];

function PolicyCard({ section, index }) {
  const Icon = section.icon;
  return (
    <div className="relative grid grid-cols-[64px_1fr] group/card border-t border-green-200 first:border-t-0 hover:bg-green-50 transition-colors duration-200">

      {/* Hover bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-200"
        style={{ background: "linear-gradient(to bottom,#1a6b3c,#43a047)" }} />

      {/* Left — number */}
      <div className="flex flex-col items-center justify-start pt-8 pb-8 border-r border-green-200 relative">
        <span className="text-[10px] font-black text-green-300 tracking-widest">{section.number}</span>
      </div>

      {/* Right — content */}
      <div className="py-8 px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover/card:scale-105 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
          >
            <Icon size={16} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-green-950 leading-none group-hover/card:translate-x-1 transition-transform duration-200 inline-block">
              {section.title}
            </h3>
            <p className="text-[10px] text-green-500 mt-0.5">{section.titleTA}</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-3">{section.body}</p>

        {section.points.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {section.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <ChevronRight size={13} className="text-green-500 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">

      {/* Background dot grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle,#bbf7d0 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Logo */}
        <img 
                    src={Logo} 
                    alt="GrowNova Logo" 
                    size={30}
                    className="mb-8" // adjust height if needed
                />
                    

        {/* Hero header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-100 text-green-700 text-[11px] font-bold rounded-full uppercase tracking-widest mb-5">
            <Shield size={11} />
            Privacy Policy
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-green-950 leading-tight mb-3">
            Your Privacy Matters<br />
            <span style={{ color: "#2e7d32" }}>to Us</span>
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            உங்கள் தனியுரிமை எங்களுக்கு முக்கியம் — We are committed to protecting your personal information with full transparency.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-semibold text-green-800">Effective Date: 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <span className="text-xs font-semibold text-green-800">7 Sections</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <Lock size={11} className="text-green-600" />
              <span className="text-xs font-semibold text-green-800">Data Never Sold</span>
            </div>
          </div>
        </div>

        {/* Policy sections */}
        <div className="bg-white border-y border-green-200">
          {SECTIONS.map((section, index) => (
            <PolicyCard key={section.number} section={section} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 bg-white border border-green-200 rounded-2xl p-6 flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
          >
            <Leaf size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-green-950 mb-1">
              GROW NOVA – Digital Marketing & Direct Selling Training Platform
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              This privacy policy applies to all users who interact with our website, social media platforms, and training programs. By using our services, you acknowledge that you have read and understood this policy.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-8">
          © 2026 Grow Nova. All rights reserved.
        </p>
      </div>
    </div>
  );
}