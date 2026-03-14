import {
  BookOpen, Users, TrendingUp, Star,
  Globe, Smartphone, MessageCircle,
  BarChart2, Heart, Home, Clock,
  Shield, Target, Zap,
} from "lucide-react";

export const NAV_ITEMS = [
  { name: "Home",     link: "#home"     },
  { name: "About",    link: "#about"    },
  { name: "Training", link: "#training" },
  { name: "Webinar",  link: "#webinar"  },
];

export const STATS = [
  { value: "5000+", labelKey: "activeMembers", icon: Users },
  { value: "30+", labelKey: "trainingModules", icon: BookOpen },
  { value: "95%", labelKey: "successRate", icon: TrendingUp },
  { value: "4.9★", labelKey: "memberRating", icon: Star }
];

export const FEATURES = [
  { icon: Globe,         translationKey: "digital-marketing", color: "from-emerald-400 to-green-600"  },
  { icon: TrendingUp,    translationKey: "direct-selling",     color: "from-green-500 to-teal-600"     },
  { icon: Smartphone,    translationKey: "social-media",       color: "from-teal-400 to-emerald-600"   },
  { icon: MessageCircle, translationKey: "sales-comm",         color: "from-lime-500 to-green-600"     },
  { icon: BarChart2,     translationKey: "analytics",          color: "from-emerald-500 to-lime-600"   },
  { icon: Shield,        translationKey: "mentorship",         color: "from-green-400 to-emerald-700"  },
];

export const PRODUCTS = [
  { icon: Heart, name: "Healthcare Supplements", desc: "Premium wellness products for a healthier lifestyle", bg: "bg-emerald-50", border: "border-emerald-200", iconBg: "bg-emerald-100", iconColor: "text-emerald-700" },
  { icon: Star,  name: "Cosmetic Products",       desc: "Beauty and skincare solutions loved by thousands",    bg: "bg-green-50",   border: "border-green-200",   iconBg: "bg-green-100",   iconColor: "text-green-700"   },
  { icon: Home,  name: "Home Cleaning Products",  desc: "Eco-friendly cleaning solutions for every home",     bg: "bg-teal-50",    border: "border-teal-200",    iconBg: "bg-teal-100",    iconColor: "text-teal-700"    },
];

export const WHO_FOR = [
  {
    icon: BookOpen,
    labelKey: "students",                    // ← key for translation
    tagKey: "tag.zeroInvestment",
    descKey: "desc.students",
  },
  {
    icon: Target,
    labelKey: "jobSeekers",
    tagKey: "tag.startEarning",
    descKey: "desc.jobSeekers",
  },
  {
    icon: Clock,
    labelKey: "partTimers",
    tagKey: "tag.yourSchedule",
    descKey: "desc.partTimers",
  },
  {
    icon: Zap,
    labelKey: "entrepreneurs",
    tagKey: "tag.scaleFaster",
    descKey: "desc.entrepreneurs",
  },
];


export const WEBINAR_RULES = [
  { number: 1, translationKey: "rule1" },
  { number: 2, translationKey: "rule2" },
  { number: 3, translationKey: "rule3" },
  { number: 4, translationKey: "rule4" },
  { number: 5, translationKey: "rule5" },
];


export const QUOTES = [
  { translationKey: "q1" },
  { translationKey: "q2" },
  { translationKey: "q3" },
  { translationKey: "q4" },
  { translationKey: "q5" },
];

export const TESTIMONIALS = [
  { translationKey: "t1", initials: "RK", gradient: "from-[#1a6b3c] to-[#43a047]" },
  { translationKey: "t2", initials: "PS", gradient: "from-[#0f6e56] to-[#1d9e75]" },
  { translationKey: "t3", initials: "AM", gradient: "from-[#166534] to-[#16a34a]" },
];