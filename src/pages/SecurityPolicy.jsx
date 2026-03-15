import {
  Shield, Lock, Eye, AlertTriangle, UserCheck,
  Globe, RefreshCw, Phone, Leaf, ChevronRight,
} from "lucide-react";
import Logo from "../assets/grownovabgless.png";
const SECTIONS = [
  {
    number: "01",
    icon: Shield,
    title: "Commitment to Security",
    titleTA: "பாதுகாப்பிற்கான உறுதிமொழி",
    body: "GROW NOVA takes appropriate technical and organizational measures to protect customer information from unauthorized access, misuse, loss, or alteration.",
    points: [],
  },
  {
    number: "02",
    icon: Lock,
    title: "Data Protection Measures",
    titleTA: "தரவு பாதுகாப்பு நடவடிக்கைகள்",
    body: "To maintain strong security standards, we implement the following practices:",
    points: [
      "Secure storage of customer information",
      "Restricted access to personal data",
      "Use of password-protected systems and secure communication platforms",
      "Regular monitoring of our systems to detect potential security risks",
    ],
  },
  {
    number: "03",
    icon: Eye,
    title: "Confidentiality of Information",
    titleTA: "தகவல் இரகசியத்தன்மை",
    body: "All personal information shared by customers will be treated as confidential. Only authorized personnel involved in providing services, training, or support will have access to this information.",
    points: [],
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Protection Against Unauthorized Access",
    titleTA: "அனுமதியற்ற அணுகலுக்கு எதிரான பாதுகாப்பு",
    body: "We continuously take steps to protect our website, social media platforms, and digital systems from unauthorized access, hacking attempts, or misuse.",
    points: [],
  },
  {
    number: "05",
    icon: UserCheck,
    title: "Customer Responsibility",
    titleTA: "வாடிக்கையாளர் பொறுப்பு",
    body: "Customers are encouraged to keep their personal login details, passwords, and personal information secure. GROW NOVA will not be responsible for any loss caused by sharing personal credentials with others.",
    points: [],
  },
  {
    number: "06",
    icon: Globe,
    title: "Third-Party Platforms",
    titleTA: "மூன்றாம் தரப்பு தளங்கள்",
    body: "Our services may use third-party platforms such as social media or communication tools. While we strive to maintain security, users are advised to review the security policies of those platforms as well.",
    points: [],
  },
  {
    number: "07",
    icon: RefreshCw,
    title: "Security Updates",
    titleTA: "பாதுகாப்பு புதுப்பிப்புகள்",
    body: "GROW NOVA may update this Security Policy from time to time to improve protection and adapt to new security standards. We encourage you to review this page periodically.",
    points: [],
  },
  {
    number: "08",
    icon: Phone,
    title: "Contact for Security Concerns",
    titleTA: "பாதுகாப்பு கவலைகளுக்கு தொடர்பு",
    body: "If you believe your information has been compromised or have any security concerns, please contact us through our official communication channels. We will respond promptly.",
    points: [],
  },
];

function PolicyCard({ section }) {
  const Icon = section.icon;
  return (
    <div className="relative grid grid-cols-[64px_1fr] group/card border-t border-green-200 first:border-t-0 hover:bg-green-50 transition-colors duration-200">

      {/* Hover accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-200"
        style={{ background: "linear-gradient(to bottom,#1a6b3c,#43a047)" }}
      />

      {/* Left — number */}
      <div className="flex flex-col items-center justify-start pt-8 border-r border-green-200">
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

export default function SecurityPolicy() {
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
            <Lock size={11} />
            Customer Security Policy
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-green-950 leading-tight mb-3">
            Your Security Is Our<br />
            <span style={{ color: "#2e7d32" }}>Top Priority</span>
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            உங்கள் பாதுகாப்பு எங்களுக்கு முக்கியம் — We are committed to maintaining a safe and secure environment for all our customers.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-semibold text-green-800">Effective Date: 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <span className="text-xs font-semibold text-green-800">8 Sections</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-4 py-2">
              <Shield size={11} className="text-green-600" />
              <span className="text-xs font-semibold text-green-800">Data Always Protected</span>
            </div>
          </div>
        </div>

        {/* Policy sections */}
        <div className="bg-white border-y border-green-200">
          {SECTIONS.map((section) => (
            <PolicyCard key={section.number} section={section} />
          ))}
        </div>

        {/* Footer card */}
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
              This security policy applies to all customers who interact with our website, social media platforms, and training programs. By using our services, you acknowledge that you have read and understood this policy.
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