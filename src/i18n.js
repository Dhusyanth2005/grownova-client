// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,                      // ← keep this in dev
    saveMissing: true,                // ← logs missing keys to console
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`[i18next] Missing: ${ns}:${key}  (language=${lng})`);
    },

    interpolation: {
      escapeValue: false,
    },

    ns: ["common", "navbar", "whoFor", "stats", "hero","features","quotes","webinar", "testimonials"],
    defaultNS: "common",

    resources: {
      en: {
        common: {
          joinFree: "Join Free",
          whoIsItFor: "Who Is It For?",
          builtFor: "Built for",
          ambitiousBeginners: "Ambitious Beginners",
          noExperience: "No experience required. Just the desire to learn, grow, and create a better financial future."
        },
        navbar: {
          home: "Home",
          about: "About",
          training: "Training",
          webinar: "Webinar"
        },
        whoFor: {
          students: "Students",
          jobSeekers: "Job Seekers",
          partTimers: "Part-Timers",
          entrepreneurs: "Entrepreneurs",

          "tag.zeroInvestment": "Zero investment needed",
          "tag.startEarning": "Start earning in weeks",
          "tag.yourSchedule": "Work on your schedule",
          "tag.scaleFaster": "Scale faster with us",

          "desc.students": "Still studying? No problem. Learn digital marketing and direct selling alongside your studies. Build real income streams before you even graduate — no experience or capital required.",
          "desc.jobSeekers": "Tired of waiting for callbacks? Grow Nova gives you a proven system to generate income on your own terms. Build skills that employers value and clients pay for — starting today.",
          "desc.partTimers": "Already employed but want more? Our flexible training fits around your existing commitments. Dedicate just a few hours a week and build a side income that grows month after month.",
          "desc.entrepreneurs": "Ready to go all in? Grow Nova equips you with digital tools, a proven product line, and a growing network to launch and scale your own online business with confidence."
        },
        hero: {
          badge: "Training & Mentorship Platform",
          headline: {
            line1: "Grow Your Income"
          },
          digitally: "Digitally",
          withNova: "with Nova",
          subtitle: "Learn Digital Marketing and Direct Selling skills to build real online income — even with zero experience.",
          watchWebinar: "Watch Free Webinar",
          seeHowItWorks: "See How It Works",
          trust: {
            "1": { count: "5000+", label: "Members" },
            "2": { count: "Free", label: "To Join" },
            "3": { count: "30 min", label: "Webinar" }
          },
          url: {
            domain: "nova-mentorship.com",
            path: "/free-webinar"
          },
          image: {
            alt: "Grow Nova webinar"
          },
          status: {
            live: "Live Session Available",
            secure: "Secure"
          }
        },
        stats: {
          activeMembers:    "Active Members",
          trainingModules:  "Training Modules",
          successRate:      "Success Rate",
          memberRating:     "Member Rating"
        },
        features: {
          badge: "What You Will Learn",
          heading1: "Skills That",
          heading2: "Build Real Income",
          subtitle: "Practical, market-relevant skills for the modern digital economy.",
          "digital-marketing.title": "Digital Marketing",
          "digital-marketing.desc": "Master SEO, social media ads, content marketing, and online brand building techniques.",
          "direct-selling.title": "Direct Selling",
          "direct-selling.desc": "Learn proven direct selling strategies to build a loyal customer base and grow your network.",
          "social-media.title": "Social Media Growth",
          "social-media.desc": "Leverage Instagram, Facebook, and TikTok to drive traffic and generate consistent income.",
          "sales-comm.title": "Sales Communication",
          "sales-comm.desc": "Develop persuasive communication skills that convert leads into long-term customers.",
          "analytics.title": "Business Analytics",
          "analytics.desc": "Track your performance with data-driven insights and optimize your digital business.",
          "mentorship.title": "Mentorship Support",
          "mentorship.desc": "Get guided step-by-step by experienced mentors who have built successful online businesses.",
        },
        quotes: {
          badge: "Words That Move",
          heading1: "Think Bigger.",
          heading2: "Start Smarter.",
          "q1.title": "Start Something of Your Own",
          "q1.body": "Your job pays your bills... but a smart business can build your future.",
          "q2.title": "One Decision Can Change Everything",
          "q2.body": "The step you take today can create financial freedom for tomorrow.",
          "q3.title": "Don't Depend on One Income",
          "q3.body": "Successful people build multiple sources of income.",
          "q4.title": "Turn Your Time Into an Asset",
          "q4.body": "Instead of only working for money, build a system that works for you.",
          "q5.title": "Your Future Is in Your Hands",
          "q5.body": "A simple opportunity today can create a powerful life tomorrow.",
        },
        webinar: {
          badge: "Webinar Guidelines",
          heading1: "Before You",
          heading2: "Press Play",
          subtitle: "Five simple rules for the best experience and the clearest picture of the opportunity.",
          "rule1.tag": "Attention",
          "rule1.label": "Watch fully",
          "rule1.desc": "Only 30 minutes long. Watch the entire video without skipping — every part matters.",
          "rule2.tag": "Focus",
          "rule2.label": "No distractions",
          "rule2.desc": "Avoid phone calls and interruptions. Stay fully present during the session.",
          "rule3.tag": "Patience",
          "rule3.label": "Reserve judgment",
          "rule3.desc": "A business system will be explained. Do not draw conclusions mid-way — watch it completely.",
          "rule4.tag": "Reveal",
          "rule4.label": "Wait for the end",
          "rule4.desc": "Full company details are revealed only at the end. Stay until the very last minute.",
          "rule5.tag": "Connect",
          "rule5.label": "Message us after",
          "rule5.desc": "After watching, send us a message with your questions or thoughts. We respond personally.",
        },
        testimonials: {
          badge: "Success Stories",
          heading1: "Real Results from",
          heading2: "Real People",
          subtitle: "Everyday beginners building extraordinary financial futures with Grow Nova.",
          "t1.name": "Ravi Kumar",
          "t1.role": "Former IT Employee, Bengaluru",
          "t1.text": "I had zero experience in business. After watching the webinar and following the system, I generated my first income within three weeks. Grow Nova is the real deal.",
          "t2.name": "Priya Sharma",
          "t2.role": "Homemaker, Chennai",
          "t2.text": "I was skeptical at first, but the system is transparent and step-by-step. Within a month I had a team and a steady side income. Best decision I have made this year.",
          "t3.name": "Arjun Menon",
          "t3.role": "College Student, Kochi",
          "t3.text": "No degree, no savings — just the willingness to learn. Grow Nova gave me a clear path and a supportive team. My financial life looks completely different today.",
        },
        cta: {
          badge: "Open Enrollment",
          heading1: "Start Your",
          heading2: "Digital Journey",
          heading3: "Today",
          subtitle: "Join thousands of ambitious beginners already building real income through Grow Nova — no experience, no investment, no risk.",
          joinFree: "Join for Free",
          "stat1.value": "5,000+",
          "stat1.label": "Active Members",
          "stat2.value": "30 min",
          "stat2.label": "To Get Started",
          "stat3.value": "100%",
          "stat3.label": "Free to Join",
        },
        footer: {
          tagline: "A training and mentorship platform empowering individuals to build real online income through digital marketing and direct selling.",
          platform: "Platform",
          support: "Support",
          contact: "Contact",
          "platform.about": "About Us",
          "platform.training": "Training",
          "platform.webinar": "Webinar",
          "platform.stories": "Success Stories",
          "support.title": "Support",
          "support.privacy": "Privacy Policy",
          "support.customerSecurity": "Customer Security Policy",
          "support.businessDescription": "Business Description",
          "contact.email": "Email",
          "contact.location": "Location",
          "contact.whatsapp": "WhatsApp",
          copyright: "© 2025 Grow Nova. All rights reserved.",
          builtWith: "Built with",
          builtFor: "for",
          builtForAudience: "digital entrepreneurs",
        },
      },
      ta: {
        common: {
          joinFree: "சேருங்கள்",
          whoIsItFor: "யாருக்காக?", // Shorter: "For whom?"
          builtFor: "வடிவமைக்கப்பட்டது:", // Shorter: "Designed for:"
          ambitiousBeginners: "ஆர்வமுள்ள புதியவர்களுக்கு", // "Newcomers" is shorter than "Beginners"
          noExperience: "முன்அனுபவம் தேவையில்லை. கற்கும் ஆர்வம் இருந்தால் போதும்." // Tightened
        },
        navbar: {
          home: "முகப்பு",
          about: "பற்றி",
          training: "பயிற்சி",
          webinar: "வெபினார்"
        },
        whoFor: {
          students: "மாணவர்கள்",
          jobSeekers: "வேலை தேடுபவர்கள்",
          partTimers: "பகுதிநேர ஊழியர்கள்",
          entrepreneurs: "தொழில்முனைவோர்",

          "tag.zeroInvestment": "முதலீடு இல்லை", 
          "tag.startEarning": "விரைவான வருமானம்", 
          "tag.yourSchedule": "உங்கள் நேரத்தில்", 
          "tag.scaleFaster": "வேகமான வளர்ச்சி",

          "desc.students": "படித்துக்கொண்டே டிஜிட்டல் மார்க்கெட்டிங் மூலம் வருமானம் ஈட்டலாம். பட்டம் பெறும் முன்பே உங்கள் கரியரைத் தொடங்குங்கள்.",
          "desc.jobSeekers": "வேலைக்காக காத்திருக்காமல், சொந்தமாக வருமானம் ஈட்டும் திறன்களை வளர்த்துக் கொள்ளுங்கள். இன்று முதல் சம்பாதிக்கலாம்.",
          "desc.partTimers": "தற்போதைய வேலையுடன், வாரத்திற்குச் சில மணிநேரம் மட்டும் ஒதுக்கி கூடுதல் வருமானத்தை உருவாக்குங்கள்.",
          "desc.entrepreneurs": "சொந்த ஆன்லைன் வணிகத்தைத் தொடங்கத் தேவையான டிஜிட்டல் கருவிகள் மற்றும் வழிகாட்டுதலைப் பெறுங்கள்."
        },
        hero: {
          badge: "பயிற்சி மற்றும் வழிகாட்டுதல்", // Removed "தளம்" (platform) to save space
          headline: {
            line1: "வருமானத்தைப் பெருக்குங்கள்" // "Grow your income" (more direct)
          },
          digitally: "டிஜிட்டல் முறையில்",
          withNova: "நோவாவுடன்",
          subtitle: "டிஜிட்டல் மார்க்கெட்டிங் மற்றும் நேரடி விற்பனை மூலம் ஆன்லைனில் வருமானம் ஈட்ட கற்றுக்கொள்ளுங்கள்.", // Tightened phrasing
          watchWebinar: "வெபினாரைக் காண்க", // "Watch Webinar" (shorter than "free webinar")
          seeHowItWorks: "செயல்முறை", // "Process/How it works" (significantly shorter)
          trust: {
            "1": { count: "5000+", label: "உறுப்பினர்கள்" },
            "2": { count: "இலவசம்", label: "கட்டணமில்லை" }, // "No fee" is often shorter in UI
            "3": { count: "30 நிமி", label: "கால அளவு" } // "30 min | Duration"
          },
          url: {
            domain: "nova-mentorship.com",
            path: "/free-webinar"
          },
          image: {
            alt: "நோவா வெபினார்"
          },
          status: {
            live: "நேரலை", // "Live" (much shorter than "Live session available")
            secure: "பாதுகாப்பானது"
          }
        },
        stats: {
          activeMembers: "உறுப்பினர்கள்",
          trainingModules: "பயிற்சி வகுப்புகள்",
          successRate: "வெற்றி விகிதம்", 
          memberRating: "தர மதிப்பீடு" 
        },
        features: {
            badge: "பாடத்திட்டம்", // "Syllabus/Curriculum" - much shorter than "What you will learn"
            heading1: "வருமானம் ஈட்டும்",
            heading2: "திறன்கள்", // Combined, this reads "Income-earning skills"
            subtitle: "நவீன டிஜிட்டல் காலத்திற்குத் தேவையான நடைமுறைப் பயிற்சிகள்.",
            "digital-marketing.title": "டிஜிட்டல் மார்க்கெட்டிங்",
            "digital-marketing.desc": "SEO, விளம்பரங்கள் மற்றும் பிராண்ட் உருவாக்கும் முறைகளைக் கற்றுக்கொள்ளுங்கள்.",
            "direct-selling.title": "நேரடி விற்பனை",
            "direct-selling.desc": "வாடிக்கையாளர் தளத்தை உருவாக்கத் தேவையான சிறந்த விற்பனை உத்திகள்.",
            "social-media.title": "சமூக ஊடக வளர்ச்சி", // Shorter than "சோஷியல் மீடியா"
            "social-media.desc": "Instagram, Facebook மூலம் டிராஃபிக் மற்றும் வருவாயை உருவாக்குங்கள்.",
            "sales-comm.title": "பேச்சுத்திறன்", // "Speaking/Comm skill" - Much shorter than "Sales Communication"
            "sales-comm.desc": "வாடிக்கையாளர்களைக் கவரும் வகையில் பேசவும் பழகவும் கற்றுக்கொள்ளுங்கள்.",
            "analytics.title": "வணிகப் பகுப்பாய்வு",
            "analytics.desc": "தரவுகள் மூலம் உங்கள் வணிக வளர்ச்சியைத் துல்லியமாகக் கண்காணியுங்கள்.",
            "mentorship.title": "நேரடி வழிகாட்டுதல்", // "Direct Mentorship"
            "mentorship.desc": "நிபுணர்களின் வழிகாட்டுதலுடன் உங்கள் வணிகத்தைப் படிப்படியாக வளர்க்கவும்.",
          },
        quotes: {
          badge: "பொன்மொழிகள்",
          heading1: "பெரிதாகச் சிந்தியுங்கள்.",
          heading2: "சாமர்த்தியமாகத் தொடங்குங்கள்.",
          "q1.title": "சுயதொழிலைத் தொடங்குங்கள்", 
          "q1.body": "வேலை உங்கள் செலவுகளைக் கவனிக்கும்... தொழில் உங்கள் எதிர்காலத்தை அமைக்கும்.", 
          "q2.title": "ஒரு மாற்றம், ஒரு முடிவு", 
          "q2.body": "இன்று நீங்கள் எடுக்கும் ஒரு சிறு முடிவு, நாளை நிதி சுதந்திரத்தை அளிக்கும்.",
          "q3.title": "மாற்று வருமானம் அவசியம்", 
          "q3.body": "வெற்றியாளர்கள் எப்போதும் ஒன்றுக்கு மேற்பட்ட வருமான வழிகளை வைத்திருப்பர்.",
          "q4.title": "நேரம் ஒரு சொத்து", 
          "q4.body": "பணத்திற்காக மட்டும் உழைக்காதீர்கள்; உங்களுக்காக உழைக்கும் அமைப்பை உருவாக்குங்கள்.",
          "q5.title": "எதிர்காலம் உங்கள் கையில்", 
          "q5.body": "இன்றைய சிறு வாய்ப்பு, நாளை உன்னதமான வாழ்க்கையை உருவாக்கும்.",
        },
        webinar: {
          badge: "வெபினார் வழிமுறைகள்",
          heading1: "தொடங்குவதற்கு முன்",
          heading2: "கவனமாக படியுங்கள்",
          subtitle: "சிறந்த அனுபவத்திற்கும் தெளிவான புரிதலுக்கும் ஐந்து எளிய விதிகள்.",
          "rule1.tag": "கவனம்",
          "rule1.label": "முழுவதும் பாருங்கள்",
          "rule1.desc": "வெறும் 30 நிமிடங்கள். ஒரு பகுதியையும் தவிர்க்காமல் முழு வீடியோவையும் பாருங்கள்.",
          "rule2.tag": "கவனச்சிதறல்",
          "rule2.label": "இடையூறு வேண்டாம்",
          "rule2.desc": "தொலைபேசி அழைப்புகள் மற்றும் இடையூறுகளை தவிர்க்கவும். முழு கவனத்துடன் இருங்கள்.",
          "rule3.tag": "பொறுமை",
          "rule3.label": "முடிவுகளை தள்ளி வையுங்கள்",
          "rule3.desc": "ஒரு வணிக அமைப்பு விளக்கப்படும். நடுவிலேயே முடிவெடுக்காமல் முழுவதும் பாருங்கள்.",
          "rule4.tag": "வெளிப்பாடு",
          "rule4.label": "இறுதிவரை காத்திருங்கள்",
          "rule4.desc": "நிறுவன விவரங்கள் இறுதியில் மட்டுமே வெளிப்படுத்தப்படும். கடைசி நிமிடம் வரை இருங்கள்.",
          "rule5.tag": "தொடர்பு",
          "rule5.label": "பின்னர் தொடர்பு கொள்ளுங்கள்",
          "rule5.desc": "பார்த்த பின், உங்கள் கேள்விகள் அல்லது எண்ணங்களுடன் எங்களுக்கு செய்தி அனுப்புங்கள்.",
        },
        testimonials: {
          badge: "வெற்றிக் கதைகள்",
          heading1: "உண்மையான மனிதர்களின்",
          heading2: "உண்மையான முடிவுகள்",
          subtitle: "Grow Nova மூலம் சாதாரண மனிதர்களும் அசாதாரண நிதி எதிர்காலத்தை உருவாக்குகிறார்கள்.",

          // Testimonial 1
          "t1.name": "ரவி குமார்",
          "t1.role": "முன்னாள் IT ஊழியர், பெங்களூரு",
          "t1.text": "வணிக அனுபவம் ஏதுமின்றி, வெபினார் பார்த்த மூன்றே வாரங்களில் எனது முதல் வருமானத்தைப் பெற்றேன். Grow Nova உண்மையிலேயே ஒரு வரப்பிரசாதம்.",

          // Testimonial 2
          "t2.name": "பிரியா சர்மா",
          "t2.role": "இல்லத்தரசி, சென்னை",
          "t2.text": "ஆரம்பத்தில் தயக்கம் இருந்தது, ஆனால் இந்த முறை மிகவும் எளிதானது. ஒரு மாதத்திலேயே நிலையான வருமானம் கிடைக்கத் தொடங்கியது. இதுவே எனது சிறந்த முடிவு.",

          // Testimonial 3
          "t3.name": "அர்ஜுன் மேனன்",
          "t3.role": "மாணவர், கொச்சி", // Shorter than "கல்லூரி மாணவர்"
          "t3.text": "பட்டமோ சேமிப்போ தேவையில்லை; கற்கும் ஆர்வம் இருந்தால் போதும். Grow Nova மூலம் கிடைத்த தெளிவான வழிகாட்டுதல் என் நிதி வாழ்க்கையையே மாற்றிவிட்டது.",
        }, 
        cta: {
          badge: "சேர்க்கை திறந்துள்ளது",
          heading1: "உங்கள்",
          heading2: "டிஜிட்டல் பயணத்தை",
          heading3: "இன்றே தொடங்குங்கள்",
          subtitle: "அனுபவமோ முதலீடோ தேவையில்லை — ஆயிரக்கணக்கானோர் Grow Nova மூலம் வருமானம் ஈட்டுகிறார்கள்.",
          joinFree: "இலவசமாக சேரவும்",
          "stat1.value": "5,000+",
          "stat1.label": "உறுப்பினர்கள்",
          "stat2.value": "30 நிமி",
          "stat2.label": "தொடங்க மட்டுமே",
          "stat3.value": "100%",
          "stat3.label": "இலவசம்",
        },
        footer: {
          tagline: "டிஜிட்டல் மார்க்கெட்டிங் மற்றும் நேரடி விற்பனை மூலம் ஆன்லைன் வருமானம் ஈட்ட உதவும் பயிற்சி மற்றும் வழிகாட்டுதல் தளம்.",
          platform: "தளம்",
          support: "ஆதரவு",
          contact: "தொடர்பு",
          "platform.about": "எங்களைப் பற்றி",
          "platform.training": "பயிற்சி",
          "platform.webinar": "வெபினார்",
          "platform.stories": "வெற்றிக் கதைகள்",
          "support.title": "உதவி", // "Help/Support" (Shortest)
          "support.privacy": "தனியுரிமைக் கொள்கை", // "Privacy Policy"
          "support.customerSecurity": "வாடிக்கையாளர் பாதுகாப்பு", // "Customer Security"
          "support.businessDescription": "வணிக விவரம்",
          "contact.email": "மின்னஞ்சல்",
          "contact.location": "இருப்பிடம்",
          "contact.whatsapp": "வாட்ஸ்அப்",
          copyright: "© 2025 Grow Nova. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
          builtWith: "உருவாக்கப்பட்டது",
          builtFor: "க்காக",
          builtForAudience: "டிஜிட்டல் தொழில்முனைவோர்",
        },
      }
    }
  });

export default i18n;