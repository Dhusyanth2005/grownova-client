import { useState, useRef, useEffect } from "react";
import Logo from "../assets/grownovabgless.png";
import {
  Play,
  CheckCircle,
  MessageCircle,
  ChevronRight,
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Briefcase,
  AlertTriangle,
  Clock,
  Search,
  ChevronDown,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ALL_STATES, JOB_TYPES, PROFESSIONS } from "../data/Constants";

import {
  createCustomer,
  getCurrentWebinar,
  markWebinarCompleted,
} from "../services/api";

// ─── Config ───────────────────────────────────────────────────
const REQUIRED_SECONDS = 20 * 60; // change to 30 * 60 for production

// ─── ComboBox ─────────────────────────────────────────────────
function ComboBox({ value, onChange, options, placeholder, disabled }) {
  const [query, setQuery] = useState(value || "");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes((query || "").toLowerCase())
  );

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { if (!value) setQuery(""); }, [value]);

  const select = (opt) => { onChange(opt); setQuery(opt); setOpen(false); };
  const clear = (e) => { e.stopPropagation(); setQuery(""); onChange(""); };

  return (
    <div ref={ref} className="relative">
      <div
        className={
          "flex items-center w-full rounded-xl border bg-white transition-all " +
          (disabled ? "opacity-50 " : "") +
          (open ? "border-green-400 ring-2 ring-green-100" : "border-green-200")
        }
      >
        <Search size={13} className="ml-3 text-gray-400 shrink-0" />
        <input
          className="flex-1 px-2 py-3 text-sm text-green-900 placeholder-gray-300 outline-none bg-transparent"
          placeholder={placeholder}
          value={query}
          disabled={disabled}
          onChange={(e) => { setQuery(e.target.value); onChange(e.target.value); setOpen(true); }}
          onFocus={() => { if (!disabled) setOpen(true); }}
        />
        {query && !disabled && (
          <button type="button" onClick={clear} className="mr-1 p-1 text-gray-300 hover:text-gray-500">
            <X size={12} />
          </button>
        )}
        <ChevronDown size={13} className={"mr-3 text-gray-400 transition-transform " + (open ? "rotate-180" : "")} />
      </div>

      <AnimatePresence>
        {open && filtered.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full bg-white border border-green-200 rounded-xl shadow-xl max-h-52 overflow-y-auto"
          >
            {filtered.map((opt) => (
              <li
                key={opt}
                onMouseDown={() => select(opt)}
                className={
                  "px-4 py-2.5 text-sm cursor-pointer transition-colors " +
                  (opt === value
                    ? "bg-green-600 text-white font-semibold"
                    : "text-green-900 hover:bg-green-50")
                }
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Field ────────────────────────────────────────────────────
function Field({ labelEN, labelTA, icon: Icon, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-green-900">
        {Icon && <Icon size={12} className="text-green-500 shrink-0" />}
        <span>{labelEN}</span>
        {labelTA && <span className="text-green-500 font-normal text-[11px]">/ {labelTA}</span>}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-[11px] text-red-500 flex items-center gap-1">
          <X size={10} /> {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 text-sm rounded-xl border border-green-200 bg-white text-green-900 placeholder-gray-300 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all";

const textareaCls =
  "w-full px-4 py-3 text-sm rounded-xl border border-green-200 bg-white text-green-900 placeholder-gray-300 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all resize-none";

// ─── Section Header ───────────────────────────────────────────
function SectionHeader({ icon: Icon, en, ta }) {
  return (
    <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-green-100">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
      >
        <Icon size={13} className="text-white" />
      </div>
      <div>
        <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest leading-none">
          {en}
        </p>
        <p className="text-[10px] text-green-500 mt-0.5">{ta}</p>
      </div>
    </div>
  );
}

// ─── Step Bar ─────────────────────────────────────────────────
function StepBar({ step }) {
  const steps = [
    { n: 1, en: "Details", ta: "விவரங்கள்" },
    { n: 2, en: "Webinar", ta: "வெபினார்" },
    { n: 3, en: "Done",    ta: "முடிந்தது" },
  ];
  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex flex-col items-center gap-1">
            <div
              className={
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 " +
                (step > s.n
                  ? "bg-green-600 text-white"
                  : step === s.n
                  ? "text-white shadow-lg"
                  : "bg-green-100 text-green-400")
              }
              style={step === s.n ? { background: "linear-gradient(135deg,#1a6b3c,#43a047)" } : {}}
            >
              {step > s.n ? <CheckCircle size={15} /> : s.n}
            </div>
            <p className={"text-[10px] font-bold uppercase tracking-wider " + (step >= s.n ? "text-green-700" : "text-gray-400")}>
              {s.en}
            </p>
            <p className={"text-[9px] -mt-0.5 " + (step >= s.n ? "text-green-500" : "text-gray-300")}>
              {s.ta}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className={
              "w-12 sm:w-20 h-0.5 mx-2 mb-8 rounded-full transition-all duration-500 " +
              (step > s.n ? "bg-green-500" : "bg-green-100")
            } />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── STEP 1 — Form ────────────────────────────────────────────
function FormStep({ onNext }) {
  const [form, setForm] = useState({
    fullName: "", mobile: "", email: "",
    dob: "", city: "", district: "",
    state: "", pincode: "", jobType: "", profession: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set    = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const setVal = (k) => (v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim())          e.fullName   = "Full name is required";
    if (!/^\d{10}$/.test(form.mobile))  e.mobile     = "Enter a valid 10-digit number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.city.trim())              e.city       = "City is required";
    if (!form.district.trim())          e.district   = "District is required";
    if (!form.state)                    e.state      = "State is required";
    if (!form.jobType)                  e.jobType    = "Select job type";
    if (!form.profession)               e.profession = "Select your profession";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    try {
      await onNext(form);
    } catch (err) {
      alert(err.message || "Failed to save details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-green-950 mb-1">
          Personal Details
        </h2>
        <p className="text-sm text-gray-400">
          தனிப்பட்ட விவரங்கள் — Fill in your information below
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* ── Basic ── */}
        <div className="bg-white rounded-2xl p-5 border border-green-100">
          <SectionHeader icon={User} en="Basic Personal Details" ta="அடிப்படை விவரங்கள்" />
          <div className="flex flex-col gap-4">
            <Field labelEN="Full Name" labelTA="முழு பெயர்" icon={User} error={errors.fullName} required>
              <input className={inputCls} placeholder="Enter your full name" value={form.fullName} onChange={set("fullName")} />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field labelEN="Mobile Number" labelTA="மொபைல் எண்" icon={Phone} error={errors.mobile} required>
                <input
                  className={inputCls}
                  placeholder="10-digit WhatsApp number"
                  value={form.mobile}
                  onChange={set("mobile")}
                  maxLength={10}
                  inputMode="numeric"
                />
              </Field>
              <Field labelEN="Email ID" labelTA="மின்னஞ்சல்" icon={Mail} error={errors.email}>
                <input
                  className={inputCls}
                  type="email"
                  placeholder="your@email.com (optional)"
                  value={form.email}
                  onChange={set("email")}
                />
              </Field>
            </div>

            <Field labelEN="Date of Birth" labelTA="பிறந்த தேதி" icon={Calendar}>
              <input className={inputCls} type="date" value={form.dob} onChange={set("dob")} />
            </Field>
          </div>
        </div>

        {/* ── Location ── */}
        <div className="bg-white rounded-2xl p-5 border border-green-100">
          <SectionHeader icon={MapPin} en="Location Details" ta="இடம் விவரங்கள்" />
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field labelEN="City / Town" labelTA="நகரம்" icon={MapPin} error={errors.city} required>
                <input className={inputCls} placeholder="Your city or town" value={form.city} onChange={set("city")} />
              </Field>
              <Field labelEN="District" labelTA="மாவட்டம்" error={errors.district} required>
                <input className={inputCls} placeholder="Enter your district" value={form.district} onChange={set("district")} />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field labelEN="State" labelTA="மாநிலம்" icon={MapPin} error={errors.state} required>
                <ComboBox
                  value={form.state}
                  onChange={setVal("state")}
                  options={ALL_STATES}
                  placeholder="Search or select state"
                />
              </Field>
              <Field labelEN="Pin Code" labelTA="அஞ்சல் குறியீடு">
                <input
                  className={inputCls}
                  placeholder="6-digit pin code"
                  value={form.pincode}
                  onChange={set("pincode")}
                  maxLength={6}
                  inputMode="numeric"
                />
              </Field>
            </div>
          </div>
        </div>

        {/* ── Work ── */}
        <div className="bg-white rounded-2xl p-5 border border-green-100">
          <SectionHeader icon={Briefcase} en="Work / Income Details" ta="வேலை விவரங்கள்" />
          <div className="flex flex-col gap-5">
            <Field labelEN="Job Title / Type" labelTA="வேலை வகை" icon={Briefcase} error={errors.jobType} required>
              <div className="grid grid-cols-2 gap-3 mt-1">
                {JOB_TYPES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, jobType: t.value }))}
                    className={
                      "relative px-4 py-3.5 rounded-xl border-2 transition-all text-left overflow-hidden " +
                      (form.jobType === t.value
                        ? "border-green-600 bg-green-600 text-white shadow-md"
                        : "border-green-100 bg-green-50 text-green-900 hover:border-green-300")
                    }
                  >
                    {form.jobType === t.value && (
                      <span className="absolute top-2 right-2">
                        <CheckCircle size={13} className="text-green-200" />
                      </span>
                    )}
                    <span className="block font-extrabold text-sm">{t.labelEN}</span>
                    <span className={
                      "block text-[11px] mt-0.5 " +
                      (form.jobType === t.value ? "text-green-200" : "text-green-500")
                    }>
                      {t.labelTA}
                    </span>
                  </button>
                ))}
              </div>
            </Field>

            <div className="h-px bg-green-100" />

            <Field labelEN="Current Profession" labelTA="தொழில்" icon={Briefcase} error={errors.profession} required>
              <div className="grid grid-cols-2 gap-3 mt-1">
                {PROFESSIONS.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, profession: p.value }))}
                    className={
                      "relative px-4 py-3.5 rounded-xl border-2 transition-all text-left overflow-hidden " +
                      (form.profession === p.value
                        ? "border-green-600 bg-green-600 text-white shadow-md"
                        : "border-green-100 bg-green-50 text-green-900 hover:border-green-300")
                    }
                  >
                    {form.profession === p.value && (
                      <span className="absolute top-2 right-2">
                        <CheckCircle size={13} className="text-green-200" />
                      </span>
                    )}
                    <span className="block font-extrabold text-sm">{p.labelEN}</span>
                    <span className={
                      "block text-[11px] mt-0.5 " +
                      (form.profession === p.value ? "text-green-200" : "text-green-500")
                    }>
                      {p.labelTA}
                    </span>
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </div>

        <p className="text-[11px] text-gray-400 flex items-center gap-1">
          <span className="text-red-400 font-bold">*</span>
          Required fields / கட்டாய தகவல்கள்
        </p>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          {loading ? "Saving..." : "Continue to Webinar"}
          {!loading && <ChevronRight size={16} />}
        </button>
      </div>
    </motion.div>
  );
}

// ─── STEP 2 — Video ───────────────────────────────────────────
function VideoStep({ onNext, customerId, userMobile, userName }) {
  const [agreed, setAgreed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);

  const [webinar, setWebinar] = useState(null);
  const [loadingWebinar, setLoadingWebinar] = useState(true);
  const [errorWebinar, setErrorWebinar] = useState(null);

  useEffect(() => {
    getCurrentWebinar()
      .then((res) => {
        if (res.data?.success && res.data.data) {
          setWebinar(res.data.data);
        } else {
          setErrorWebinar("Could not load webinar information");
        }
      })
      .catch((err) => {
        setErrorWebinar(err.message || "Failed to load webinar");
      })
      .finally(() => setLoadingWebinar(false));
  }, []);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= REQUIRED_SECONDS) {
          clearInterval(timerRef.current);
          setCompleted(true);
          return REQUIRED_SECONDS;
        }
        return prev + 1;
      });
    }, 1000);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const pct = Math.min((elapsed / REQUIRED_SECONDS) * 100, 100);
  const remaining = REQUIRED_SECONDS - elapsed;
  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleComplete = async () => {
    if (customerId) {
      try {
        await markWebinarCompleted(customerId);
      } catch (err) {
        console.warn("Failed to mark webinar completed:", err.message);
      }
    }
    onNext();
  };

  if (loadingWebinar) {
    return <div className="text-center py-20 text-green-700">Loading webinar...</div>;
  }

  if (errorWebinar || !webinar) {
    return <div className="text-center py-10 text-red-600">{errorWebinar || "No webinar configured"}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-green-950 mb-1">Watch the Webinar</h2>
        <p className="text-sm text-gray-400">வெபினார் பார்க்கவும் — Watch the full 30 minutes</p>
      </div>

      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5">
        <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-amber-800 mb-1.5">முக்கியமான அறிவிப்பு — Important Notice</p>
          <ul className="text-xs text-amber-700 leading-relaxed space-y-1">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-400 shrink-0 mt-0.5">•</span>
              <span>This video is <strong>30 minutes</strong> long — watch completely. <span className="text-amber-600">இந்த வீடியோ <strong>30 நிமிடம்</strong> — முழுவதும் பாருங்கள்.</span></span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-400 shrink-0 mt-0.5">•</span>
              <span>Do not pause or skip. <span className="text-amber-600">முடிக்காமல் நிறுத்தாதீர்கள், தவிர்க்காதீர்கள்.</span></span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-400 shrink-0 mt-0.5">•</span>
              <span>Full company details are revealed only at the end. <span className="text-amber-600">நிறுவனத்தின் முழு விவரங்கள் கடைசியில் மட்டுமே தெரியும்.</span></span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-400 shrink-0 mt-0.5">•</span>
              <span>After watching, connect via WhatsApp to get started. <span className="text-amber-600">பார்த்த பிறகு, தொடங்க WhatsApp-ல் தொடர்பு கொள்ளுங்கள்.</span></span>
            </li>
          </ul>

          {/* Contact button — only renders once webinar is loaded (webinar is guaranteed non-null here) */}
          <div className="mt-4 pt-3 border-t border-amber-200">
            <p className="text-[11px] text-amber-700 mb-2">
              Video expired or not working? / வீடியோ காண முடியவில்லையா?
            </p>
            <a
              href={`https://wa.me/91${webinar.whatsappNo}?text=${encodeURIComponent(
                `Hi! I am not able to see the video on the Grow Nova webinar page.\n\nName: ${userName || "(not provided)"}\nMobile: ${userMobile || "(not provided)"}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}
            >
              <MessageCircle size={13} />
              Contact Us on WhatsApp / தொடர்பு கொள்ளுங்கள்
            </a>
          </div>
        </div>
      </div>

      {!playing && (
        <label className="flex items-start gap-3 cursor-pointer mb-5 p-4 bg-green-50 rounded-xl border-2 border-green-100 hover:border-green-300 transition-colors">
          <div className={"w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all " + (agreed ? "border-green-600 bg-green-600" : "border-green-300 bg-white")}>
            {agreed && <CheckCircle size={12} className="text-white" />}
          </div>
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="hidden" />
          <span className="text-sm text-green-900 font-medium leading-snug">
            I agree to watch the full 30-minute webinar without pausing or skipping.{" "}
            <span className="text-green-600 text-xs">நான் முழு வீடியோவையும் பார்ப்பேன் என்று உறுதியளிக்கிறேன்.</span>
          </span>
        </label>
      )}

      {!playing ? (
        <button
          disabled={!agreed}
          onClick={() => { setPlaying(true); startTimer(); }}
          className={"relative w-full rounded-2xl overflow-hidden group transition-all " + (!agreed ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:ring-4 hover:ring-green-200")}
          style={{ aspectRatio: "16/9", minHeight: "240px" }}
        >
          <div className="absolute inset-0 bg-green-950 flex items-center justify-center">
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all">
                <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl" style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}>
                  <Play size={22} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-white font-bold text-base sm:text-lg">Grow Nova Webinar</p>
                <p className="text-green-400 text-sm flex items-center gap-1.5 justify-center mt-1">
                  <Clock size={13} /> 30 minutes full presentation
                </p>
              </div>
            </div>
          </div>
        </button>
      ) : (
        <div className="w-full rounded-2xl overflow-hidden border-2 border-green-200" style={{ position: "relative", paddingBottom: "56.25%" }}>
          <iframe
            src={webinar.webinarLink}
            title="Grow Nova Webinar"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      )}

      {playing && (
        <div className="mt-5 bg-green-50 rounded-2xl p-4 border border-green-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-green-700 flex items-center gap-1.5">
              <Clock size={12} />
              {completed ? "Webinar Completed!" : `Time remaining: ${fmt(remaining)}`}
            </span>
            <span className="text-xs font-bold text-green-600">{Math.round(pct)}%</span>
          </div>
          <div className="h-2.5 bg-green-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#1a6b3c,#43a047)" }} />
          </div>
          <p className="text-[11px] text-gray-400 mt-2 text-center">
            {completed ? "வெபினார் முடிந்தது! You can now proceed." : "Please watch completely — skip செய்யாதீர்கள்"}
          </p>
        </div>
      )}

      {completed && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleComplete}
          className="mt-5 w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          Continue to Next Step
          <ChevronRight size={16} />
        </motion.button>
      )}
    </motion.div>
  );
}

// ─── STEP 3 — Success ─────────────────────────────────────────
function SuccessStep({ formData }) {
  const [whatsappNo, setWhatsappNo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentWebinar()
      .then((res) => {
        if (res.data?.success && res.data.data?.whatsappNo) {
          setWhatsappNo(res.data.data.whatsappNo);
        }
      })
      .catch(() => {
        console.warn("Could not fetch whatsapp number in success step");
      })
      .finally(() => setLoading(false));
  }, []);

  const message = encodeURIComponent(
    `Hi! I just completed the Grow Nova webinar.\n\n` +
    `Name: ${formData.fullName}\n` +
    `Mobile: ${formData.mobile}\n` +
    `City: ${formData.city}\n` +
    `District: ${formData.district}\n` +
    `State: ${formData.state}\n` +
    `Job Type: ${formData.jobType}\n` +
    `Profession: ${formData.profession}\n\n` +
    `I am interested in joining Grow Nova!`
  );

  // Use fetched number, fallback to a default if still null
  const waUrl = whatsappNo
    ? `https://wa.me/91${whatsappNo}?text=${message}`
    : `https://wa.me/916382612951?text=${message}`; // fallback

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
        className="flex justify-center mb-6"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
          style={{ background: "linear-gradient(135deg,#1a6b3c,#43a047)" }}
        >
          <CheckCircle size={44} className="text-white" />
        </div>
      </motion.div>

      <h2 className="text-2xl sm:text-3xl font-black text-green-950 mb-1">வாழ்த்துகள்!</h2>
      <p className="text-lg sm:text-xl font-bold text-green-700 mb-3">
        Congratulations, {formData.fullName}!
      </p>
      <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
        You have successfully completed the Grow Nova webinar. Connect with us
        on WhatsApp to take the next step.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6 text-left">
        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-4">
          Your Submitted Details / உங்கள் விவரங்கள்
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Name / பெயர்", formData.fullName],
            ["Mobile / மொபைல்", formData.mobile],
            ["City / நகரம்", formData.city],
            ["District / மாவட்டம்", formData.district],
            ["State / மாநிலம்", formData.state],
            ["Pin Code", formData.pincode || "—"],
            ["Job Type / வேலை வகை", formData.jobType],
            ["Profession / தொழில்", formData.profession],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-0.5">
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">{k}</span>
              <span className="text-sm text-green-900 font-semibold capitalize">{v || "—"}</span>
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="w-full py-4 text-center text-gray-500">Loading WhatsApp link...</div>
      ) : (
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-extrabold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)" }}
        >
          <MessageCircle size={20} />
          Join via WhatsApp Now
        </a>
      )}

      <p className="text-xs text-gray-400 mt-4">
        WhatsApp இல் நேரடியாக தொடர்பு கொள்ளுங்கள்
      </p>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [customerId, setCustomerId] = useState(null);

  const handleFormNext = async (data) => {
    try {
      const payload = {
        fullName: data.fullName.trim(),
        mobileNo: data.mobile,
        email: data.email?.trim() || undefined,
        dateOfBirth: data.dob ? new Date(data.dob).toISOString() : undefined,
        city: data.city.trim(),
        district: data.district.trim(),
        state: data.state,
        pincode: data.pincode?.trim() || undefined,
        jobTitle: data.jobType,
        currentProfession: data.profession,
        isWebinarCompleted: false,
      };

      const res = await createCustomer(payload);

      if (res.data?.success) {
        setCustomerId(res.data.data._id);
        setFormData(data);
        setStep(2);
      } else {
        alert(res.data?.message || "Failed to register");
      }
    } catch (err) {
      alert(err.message || "Cannot connect to server");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-start justify-center px-4 py-12">
      <div
        className="fixed inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle,#bbf7d0 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className={"relative z-10 w-full transition-all duration-300 " + (step === 2 ? "max-w-5xl" : "max-w-3xl")}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <img src={Logo} alt="logo" className="w-60" />
          </div>
          <p className="text-sm text-gray-400">
            உங்கள் எதிர்கால பயணம் இங்கே தொடங்குகிறது — Your journey starts here
          </p>
        </div>

        <div className="bg-white border border-green-100 rounded-3xl shadow-sm px-5 sm:px-8 py-8 sm:py-10">
          <StepBar step={step} />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1">
                <FormStep onNext={handleFormNext} />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2">
                <VideoStep
                  onNext={() => setStep(3)}
                  customerId={customerId}
                  userMobile={formData?.mobile}
                  userName={formData?.fullName}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3">
                <SuccessStep formData={formData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-6">
          © 2026 Grow Nova. All rights reserved.
        </p>
      </div>
    </div>
  );
}