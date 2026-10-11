"use client";

import { useSyncExternalStore } from "react";

/**
 * Bannière de consentement (Consent Mode v2, mode avancé).
 * Par défaut tout est refusé (script CONSENT_DEFAULT_SCRIPT dans le layout racine) :
 * GA envoie des signaux sans cookie. « Accepter » passe analytics_storage à granted.
 * Le choix est gardé dans localStorage ; il est réappliqué au chargement par le script par défaut.
 * Pas de publicité sur le site : ad_* restent toujours refusés.
 */

export const CONSENT_KEY = "pl_consent_v1";

/** Exécuté avant gtag config : consentement refusé par défaut, puis choix mémorisé s'il existe. */
export const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
try { if (localStorage.getItem('${CONSENT_KEY}') === 'granted') gtag('consent','update',{analytics_storage:'granted'}); } catch (e) {}
`;

type Lang = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

const TEXT: Record<Lang, { msg: string; accept: string; refuse: string; more: string; settings: string }> = {
  de: { msg: "Wir verwenden Cookies nur für anonyme Besuchsstatistiken (Google Analytics), um die Website zu verbessern.", accept: "Akzeptieren", refuse: "Ablehnen", more: "Mehr erfahren", settings: "Cookie-Einstellungen" },
  fr: { msg: "Nous utilisons des cookies uniquement pour des statistiques de visite anonymes (Google Analytics), afin d'améliorer le site.", accept: "Accepter", refuse: "Refuser", more: "En savoir plus", settings: "Paramètres cookies" },
  en: { msg: "We use cookies only for anonymous visit statistics (Google Analytics) to improve the website.", accept: "Accept", refuse: "Decline", more: "Learn more", settings: "Cookie settings" },
  nl: { msg: "We gebruiken cookies alleen voor anonieme bezoekstatistieken (Google Analytics) om de website te verbeteren.", accept: "Accepteren", refuse: "Weigeren", more: "Meer info", settings: "Cookie-instellingen" },
  tr: { msg: "Çerezleri yalnızca web sitesini iyileştirmek için anonim ziyaret istatistikleri (Google Analytics) amacıyla kullanıyoruz.", accept: "Kabul et", refuse: "Reddet", more: "Daha fazla bilgi", settings: "Çerez ayarları" },
  ar: { msg: "نستخدم ملفات تعريف الارتباط فقط لإحصاءات زيارات مجهولة الهوية (Google Analytics) بهدف تحسين الموقع.", accept: "قبول", refuse: "رفض", more: "اعرف المزيد", settings: "إعدادات ملفات تعريف الارتباط" },
  pl: { msg: "Używamy plików cookie wyłącznie do anonimowych statystyk odwiedzin (Google Analytics), aby ulepszać stronę.", accept: "Akceptuję", refuse: "Odrzucam", more: "Więcej informacji", settings: "Ustawienia plików cookie" },
  uk: { msg: "Ми використовуємо файли cookie лише для анонімної статистики відвідувань (Google Analytics), щоб покращувати сайт.", accept: "Прийняти", refuse: "Відхилити", more: "Докладніше", settings: "Налаштування cookie" },
  es: { msg: "Utilizamos cookies únicamente para estadísticas de visitas anónimas (Google Analytics), con el fin de mejorar el sitio.", accept: "Aceptar", refuse: "Rechazar", more: "Más información", settings: "Configuración de cookies" },
  ku: { msg: "Em cookie-yan tenê ji bo statîstîkên serdanê yên bênav (Google Analytics) bikar tînin, da ku malperê baştir bikin.", accept: "Qebûl bike", refuse: "Red bike", more: "Bêtir agahî", settings: "Mîhengên cookie" },
};

/** Événement émis à chaque changement de choix (bannière ou lien « Paramètres cookies »). */
const CONSENT_EVENT = "pl-consent-change";
const subscribeConsent = (cb: () => void) => {
  window.addEventListener(CONSENT_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CONSENT_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};
const noopSubscribe = () => () => {};

/** Supprime les cookies GA déjà déposés (retrait du consentement). */
function deleteGaCookies() {
  const host = window.location.hostname.replace(/^www\./, "");
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", `; domain=.${host}`, `; domain=${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}
const readStored = () => {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? "";
  } catch {
    return "";
  }
};
const readLang = (): Lang => {
  const seg = window.location.pathname.split("/")[1] as Lang;
  return seg in TEXT ? seg : "de";
};

export default function ConsentBanner() {
  // Lecture du navigateur sans setState dans un effet ; côté serveur : rien d'affiché.
  const stored = useSyncExternalStore(subscribeConsent, readStored, () => "server");
  const lang = useSyncExternalStore(noopSubscribe, readLang, (): Lang => "de");
  const visible = stored === "";

  const choose = (choice: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {}
    window.gtag?.("consent", "update", { analytics_storage: choice });
    if (choice === "denied") deleteGaCookies();
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  if (!visible) return null;
  const t = TEXT[lang];

  return (
    <div
      role="dialog"
      aria-live="polite"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-xl border border-neutral-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <p className="text-sm text-neutral-700 flex-1">
          {t.msg}{" "}
          <a href={`/${lang}/cookies`} className="underline text-[#2b3186]">
            {t.more}
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="px-4 py-2 rounded-xl border border-neutral-300 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
          >
            {t.refuse}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="px-4 py-2 rounded-xl bg-[#2b3186] text-sm font-semibold text-white hover:bg-[#1e2260]"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Lien de pied de page : efface le choix et rouvre la bannière (retrait du consentement, RGPD art. 7.3). */
export function CookieSettingsLink({ className }: { className?: string }) {
  const lang = useSyncExternalStore(noopSubscribe, readLang, (): Lang => "de");
  const reopen = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {}
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };
  return (
    <button type="button" onClick={reopen} className={className}>
      {TEXT[lang].settings}
    </button>
  );
}
