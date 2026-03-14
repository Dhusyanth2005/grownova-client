import { Leaf, Monitor, BookOpen, Video, Heart as HeartIcon,
         Info, Lock, FileText, Mail, MapPin, MessageCircle,
         Phone, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/grownovabgless.png";

export default function FooterSection() {
  const { t } = useTranslation("footer");

  const PLATFORM_LINKS = [
    { labelKey: "platform.about",    icon: Info      },
    { labelKey: "platform.training", icon: BookOpen  },
    { labelKey: "platform.webinar",  icon: Video     },
    { labelKey: "platform.stories",  icon: HeartIcon },
  ];

  const SUPPORT_LINKS = [
    { labelKey: "support.privacy", icon: Lock     },
    { labelKey: "support.terms",   icon: FileText },
  ];

  const CONTACT_ITEMS = [
    { icon: Mail,          labelKey: "contact.email",    value: "hello@grownova.in"  },
    { icon: MapPin,        labelKey: "contact.location", value: "Tamil Nadu, India"  },
    { icon: MessageCircle, labelKey: "contact.whatsapp", value: "+91 98765 43210"    },
  ];

  return (
    <footer id="contact" className="bg-[#0a1f13] text-green-100">

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-12">

        {/* ── Brand ── */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={Logo} alt="logo" className="w-50" />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mb-6">
            {t("tagline")}
          </p>

          {/* Socials */}
          <div className="flex gap-2">
            {[Mail, Phone, MessageCircle, Monitor].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all"
                style={{ background: "rgba(74,222,128,.07)", border: "1px solid rgba(74,222,128,.15)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(74,222,128,.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(74,222,128,.07)"}
              >
                <Icon size={14} className="text-green-400" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Platform ── */}
        <div>
          <h4 className="flex items-center gap-2 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-5">
            <Monitor size={12} /> {t("platform")}
          </h4>
          <ul className="space-y-3">
            {PLATFORM_LINKS.map(({ labelKey, icon: Icon }) => (
              <li key={labelKey}>
                <a href="#" className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-green-100 transition-colors group">
                  <Icon size={12} className="text-gray-600 group-hover:text-green-400 transition-colors" />
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Support ── */}
        <div>
          <h4 className="flex items-center gap-2 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-5">
            <Shield size={12} /> {t("support")}
          </h4>
          <ul className="space-y-3">
            {SUPPORT_LINKS.map(({ labelKey, icon: Icon }) => (
              <li key={labelKey}>
                <a href="#" className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-green-100 transition-colors group">
                  <Icon size={12} className="text-gray-600 group-hover:text-green-400 transition-colors" />
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4 className="flex items-center gap-2 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-5">
            <Phone size={12} /> {t("contact")}
          </h4>
          <div className="space-y-4">
            {CONTACT_ITEMS.map(({ icon: Icon, labelKey, value }) => (
              <div key={labelKey} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(74,222,128,.08)", border: "1px solid rgba(74,222,128,.12)" }}
                >
                  <Icon size={13} className="text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">{t(labelKey)}</p>
                  <p className="text-[12.5px] text-green-100 font-medium">{value}</p>{/* ← value intentionally not translated */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(74,222,128,.1)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-gray-600">
            {t("copyright")}
          </p>
          <p className="flex items-center gap-1.5 text-[11.5px] text-gray-600">
            {t("builtWith")} <HeartIcon size={11} className="text-green-400 fill-green-400" /> {t("builtFor")}{" "}
            <span className="text-gray-500">{t("builtForAudience")}</span>
          </p>
        </div>
      </div>

    </footer>
  );
}