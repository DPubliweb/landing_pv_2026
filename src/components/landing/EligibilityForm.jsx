import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

// -------------------- Helpers --------------------
const truncate = (v, max = 1000) => {
  if (v === null || v === undefined) return "";
  const s = String(v);
  return s.length > max ? s.slice(0, max) : s;
};

const getOrCreateNetworkId = () => {
  const k = "network_id";
  try {
    let v = localStorage.getItem(k);
    if (!v) {
      const hasCrypto = typeof crypto !== "undefined";
      const uuid =
        hasCrypto && typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : `nid_${Math.random().toString(16).slice(2)}_${Date.now()}`;
      v = uuid;
      localStorage.setItem(k, v);
    }
    return v;
  } catch {
    // si localStorage bloqué (Safari private, etc.)
    const hasCrypto = typeof crypto !== "undefined";
    return hasCrypto && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `nid_${Math.random().toString(16).slice(2)}_${Date.now()}`;
  }
};

const detectBrowser = () => {
  const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Chrome/") && !ua.includes("Edg/")) return "Chrome";
  if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Safari";
  if (ua.includes("Firefox/")) return "Firefox";
  return "Other";
};

const getPlatform = () => {
  const uaData = typeof navigator !== "undefined" ? navigator.userAgentData : undefined;
  const p = uaData?.platform;
  if (p) return p;
  return (typeof navigator !== "undefined" && navigator.platform) || "";
};

const getConnectionInfo = () => {
  const n = typeof navigator !== "undefined" ? navigator : undefined;
  const c = n?.connection || n?.mozConnection || n?.webkitConnection;
  if (!c) return {};
  return {
    effectiveType: c.effectiveType || "",
    downlink: typeof c.downlink === "number" ? c.downlink : "",
    rtt: typeof c.rtt === "number" ? c.rtt : "",
    saveData: !!c.saveData,
  };
};

// Construit une string JSON <= 1000 chars, en dégradant si nécessaire
const buildAnalyticsString = () => {
  if (typeof window === "undefined") return "";

  const urlParams = new URLSearchParams(window.location.search);

  const base = {
    href: window.location.href,
    path: window.location.pathname,
    query: window.location.search,
    ref: document.referrer || "",

    utm_source: urlParams.get("utm_source") || "",
    utm_campaign: urlParams.get("utm_campaign") || "",
    utm_medium: urlParams.get("utm_medium") || "",
    utm_term: urlParams.get("utm_term") || "",
    utm_content: urlParams.get("utm_content") || "",

    gclid: urlParams.get("gclid") || "",
    fbclid: urlParams.get("fbclid") || "",
    msclkid: urlParams.get("msclkid") || "",
    ttclid: urlParams.get("ttclid") || "",

    lang: (navigator && navigator.language) || "",
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen: `${window.screen?.width || ""}x${window.screen?.height || ""}`,
    viewport: `${window.innerWidth || ""}x${window.innerHeight || ""}`,
    cookieEnabled: !!navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack || window.doNotTrack || "",

    deviceMemory: navigator.deviceMemory || "",
    hardwareConcurrency: navigator.hardwareConcurrency || "",
    maxTouchPoints: navigator.maxTouchPoints || 0,

    connection: getConnectionInfo(),
  };

  // Essai 1 : complet
  let s = "";
  try {
    s = JSON.stringify(base);
  } catch {
    s = "";
  }
  if (s.length <= 1000) return s;

  // Essai 2 : enlever href (souvent très long)
  const v2 = { ...base };
  delete v2.href;
  try {
    s = JSON.stringify(v2);
  } catch {
    s = "";
  }
  if (s.length <= 1000) return s;

  // Essai 3 : enlever query
  const v3 = { ...v2 };
  delete v3.query;
  try {
    s = JSON.stringify(v3);
  } catch {
    s = "";
  }
  if (s.length <= 1000) return s;

  // Fallback : truncate brut
  return truncate(s, 1000);
};

// ---- LOG LOCAL (optionnel) ----
const logLead = (leadData) => {
  console.log("📨 LEAD ENVOYÉ :", leadData);

  // Optionnel : route interne si tu l’as
  fetch("/log-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadData),
  }).catch(() => {});
};

// ---- ENVOI AU BACKEND ----
const sendToServer = async (leadData) => {
  // Mets ton endpoint Qoddi
  const ENDPOINT =
    process.env.REACT_APP_LEADS_ENDPOINT ||
    "https://cjqmzgnxwo.eu08.qoddiapp.com/leads_pv";

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    console.log("📬 Réponse serveur :", response.status, payload);
  } catch (error) {
    console.error("❌ Erreur serveur :", error);
  }
};

export default function EligibilityForm() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    propertyType: "",
    ownershipStatus: "",
  });

  const [hiddenFields, setHiddenFields] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    code: "",
    code_postal: "",
    utm_source: "",
    cohort: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // ---- Hidden Fields depuis URL ----
  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    setHiddenFields({
      civilite: urlParams.get("civilite") || "",
      nom: urlParams.get("nom") || "",
      prenom: urlParams.get("prenom") || "",
      email: urlParams.get("email") || "",
      telephone: urlParams.get("telephone") || "",
      code: urlParams.get("code") || "",
      code_postal: urlParams.get("code_postal") || "",
      utm_source: urlParams.get("utm_source") || "",
      cohort: urlParams.get("cohort") || "",
    });
  }, []);

  const questions = [
    {
      id: 1,
      question: "Quel est votre type de logement ?",
      options: [
        { value: "house", label: "Maison", emoji: "✅" },
        { value: "apartment", label: "Appartement", emoji: "❌" },
      ],
      key: "propertyType",
    },
    {
      id: 2,
      question: "Vous êtes ?",
      options: [
        { value: "owner", label: "Propriétaire", emoji: "✅" },
        { value: "tenant", label: "Locataire", emoji: "❌" },
      ],
      key: "ownershipStatus",
    },
  ];

  const currentQuestion = questions[step - 1];

  const handleAnswer = async (value) => {
    const updated = { ...answers, [currentQuestion.key]: value };
    setAnswers(updated);

    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 250);
      return;
    }

    // Dernière question → envoi
    setIsSubmitting(true);

    const submittedAt = new Date().toISOString();
    const analytics = buildAnalyticsString();

    // Construction payload EXACT Redshift
    const leadData = {
      // VARCHAR(1000)
      analytics: truncate(analytics, 1000),

      // hidden fields (VARCHAR(1000))
      civilite: truncate(hiddenFields.civilite, 1000),
      nom: truncate(hiddenFields.nom, 1000),
      prenom: truncate(hiddenFields.prenom, 1000),
      email: truncate(hiddenFields.email, 1000),
      telephone: truncate(hiddenFields.telephone, 1000),
      code: truncate(hiddenFields.code, 1000),
      code_postal: truncate(hiddenFields.code_postal, 1000),
      utm_source: truncate(hiddenFields.utm_source, 1000),
      cohort: truncate(hiddenFields.cohort, 1000),

      // metadata (VARCHAR(1000))
      user_agent: truncate(navigator.userAgent || "", 1000),
      platform: truncate(getPlatform(), 1000),
      referer: truncate(document.referrer || "", 1000),
      network_id: truncate(getOrCreateNetworkId(), 1000),
      browser: truncate(detectBrowser(), 1000),

      // dates (VARCHAR(1000))
      submitted_at: truncate(submittedAt, 1000),
      date_import: truncate(submittedAt, 1000),

      // réponses (VARCHAR(50))
      reponse_1: truncate(updated.propertyType || "", 50),
      reponse_2: truncate(updated.ownershipStatus || "", 50),
      reponse_3: truncate("", 50),
    };

    logLead(leadData);
    await sendToServer(leadData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 600);
  };

  return (
    <Card
      className="bg-white border-2 shadow-xl max-w-3xl mx-auto"
      style={{ borderColor: "#5CB000", borderRadius: 15 }}
    >
      <CardHeader
        className="text-center p-4 md:p-6"
        style={{ backgroundColor: "#F8F9FA", borderRadius: "13px 13px 0 0" }}
      >
        <div className="flex justify-center gap-3 mt-3">
          {questions.map((q, idx) => {
            const n = idx + 1;
            const done = n < step || isComplete;
            const activeOrDone = n <= step || isComplete;

            return (
              <div
                key={q.id}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: activeOrDone ? "#5CB000" : "#E0E0E0" }}
              >
                {done ? <CheckCircle2 className="w-5 h-5" /> : n}
              </div>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="p-4 md:p-8">
        {!isComplete ? (
          isSubmitting ? (
            <div className="text-center py-10">
              <Loader2
                className="w-14 h-14 mx-auto animate-spin"
                style={{ color: "#5CB000" }}
              />
              <p className="text-lg font-semibold mt-4" style={{ color: "#094386" }}>
                Traitement de votre demande...
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-center mb-6" style={{ color: "#094386" }}>
                {currentQuestion.question}
              </h3>

              <div className="grid gap-4">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="p-4 border-2 rounded-lg text-left hover:shadow-lg transition"
                    style={{
                      borderColor:
                        answers[currentQuestion.key] === opt.value ? "#5CB000" : "#E0E0E0",
                      backgroundColor:
                        answers[currentQuestion.key] === opt.value ? "#F0F9E8" : "white",
                    }}
                  >
                    <span className="text-lg font-semibold" style={{ color: "#094386" }}>
                      {opt.label} {opt.emoji}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )
        ) : (
          <div className="text-center py-10">
            <CheckCircle2 className="w-20 h-20 mx-auto mb-4" style={{ color: "#5CB000" }} />
            <h3 className="text-3xl font-bold mb-3" style={{ color: "#5CB000" }}>
              Félicitations !
            </h3>
            <p className="text-xl" style={{ color: "#094386" }}>
              Vous êtes éligible aux aides de l'État pour votre installation.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Un conseiller vous contactera dans les 24h
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
