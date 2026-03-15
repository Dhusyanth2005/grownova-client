import { 
  Leaf, Monitor, BookOpen, Video, Heart as HeartIcon,
  Info, Mail, MapPin, MessageCircle, Phone,
  Lock, Shield, FileText   // ← added these
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/grownovabgless.png";

export default function FooterSection() {
  const { t } = useTranslation("footer");

  const PLATFORM_LINKS = [
    { labelKey: "platform.about",    icon: Info,     link: "about"    },
    { labelKey: "platform.training", icon: BookOpen, link: "training" },
    { labelKey: "platform.webinar",  icon: Video,    link: "webinar"  },
  ];

  const SUPPORT_LINKS = [
    { labelKey: "support.privacy",          icon: Lock,     link: "privacy"          },
    { labelKey: "support.customerSecurity", icon: Shield,   link: "security"         }, // or "customer-security"
    { labelKey: "support.businessDescription", icon: FileText, link: "business"   },
  ];

  const CONTACT_ITEMS = [
    { icon: Mail,          labelKey: "contact.email",    value: "grownova96@gmail.com" },
    { icon: MapPin,        labelKey: "contact.location", value: "Tamil Nadu, India"    },
    { icon: MessageCircle, labelKey: "contact.whatsapp", value: "+91 99403 53504"     },
  ];

  return (
    <footer id="contact" className="bg-[#0a1f13] text-green-100">

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 
                      grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.3fr] 
                      gap-10 lg:gap-16">

        {/* ── Brand / About ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src={Logo} 
              alt="GrowNova Logo" 
              className="h-15 w-auto"  // adjust height if needed
            />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            {t("tagline")}
          </p>

          {/* Social / Quick contact icons */}
          <div className="flex gap-3">
            {/* Mail */}
            <a
              href="mailto:grownova96@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}
              title="Email us: grownova96@gmail.com"
            >
              <Mail size={18} className="text-green-400" />
            </a>

            {/* Phone */}
            <a
              href="tel:+919940353504"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(74,222,128,0.18)";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(74,222,128,0.08)";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.2)";
              }}
              title="Call us"
            >
              <Phone size={18} className="text-green-400" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919940353504"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(74,222,128,0.18)";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(74,222,128,0.08)";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.2)";
              }}
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} className="text-green-400" />
            </a>
          </div>
        </div>

        {/* ── Platform ── */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-semibold text-green-400 uppercase tracking-wider mb-6">
            <Monitor size={14} /> {t("platform")}
          </h4>
          <ul className="space-y-3.5">
            {PLATFORM_LINKS.map(({ labelKey, icon: Icon, link }) => (
              <li key={labelKey}>
                <a
                  href={`#${link}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-200 transition-colors group"
                >
                  <Icon 
                    size={14} 
                    className="text-gray-500 group-hover:text-green-400 transition-colors" 
                  />
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Support ── (newly added) */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-semibold text-green-400 uppercase tracking-wider mb-6">
            <Shield size={14} /> {t("support.title") || "Support"}
          </h4>
          <ul className="space-y-3.5">
            {SUPPORT_LINKS.map(({ labelKey, icon: Icon, link }) => (
              <li key={labelKey}>
                <a
                  href={`${link}`}           // ← change to full path if needed, e.g. `/privacy-policy`
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-200 transition-colors group"
                >
                  <Icon 
                    size={14} 
                    className="text-gray-500 group-hover:text-green-400 transition-colors" 
                  />
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-semibold text-green-400 uppercase tracking-wider mb-6">
            <Phone size={14} /> {t("contact")}
          </h4>
          <div className="space-y-5">
            {CONTACT_ITEMS.map(({ icon: Icon, labelKey, value }) => (
              <div key={labelKey} className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ 
                    background: "rgba(74,222,128,0.09)", 
                    border: "1px solid rgba(74,222,128,0.18)" 
                  }}
                >
                  <Icon size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {t(labelKey)}
                  </p>
                  <p className="text-sm text-green-50 font-medium">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900/20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row 
                        items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-gray-500">
            {t("copyright")}
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500">
            {t("builtWith")} 
            <HeartIcon size={12} className="text-green-400 fill-green-400" /> 
            {t("builtFor")}{" "}
            <span className="text-gray-400">{t("builtForAudience")}</span>
          </p>
        </div>
      </div>

    </footer>
  );
}