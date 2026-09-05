"use client";

import { useEffect } from "react";

const RTL_LOCALES = new Set(["ar"]);

/** Met à jour <html lang> et <html dir> côté client selon la locale active.
 *  (Le layout racine rend lang="de" par défaut ; ce composant le corrige.) */
export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
  }, [locale]);
  return null;
}
