"use client";

import { useEffect } from "react";

/**
 * GA4 custom event tracking for conversion actions.
 *
 * Every contact event (phone, WhatsApp, email, booking) includes
 * a `therapist` dimension so GA4 can break down conversions per therapist.
 *
 * Therapist identification uses phone numbers (unique per therapist)
 * and booking platform URLs.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/* ── Therapist lookup by phone number ── */
const PHONE_TO_THERAPIST: Record<string, string> = {
  "+3287555670": "Cabinet (standard)",
  "+32478218186": "Philippe Banaszak",
  "+32493122336": "Felix Esser",
  "+32471765683": "Fabienne Dormann",
  "+32471869024": "Thom Petit",
  "+32474296326": "Loic Meunier",
  // Variants without +
  "3287555670": "Cabinet (standard)",
  "32478218186": "Philippe Banaszak",
  "32493122336": "Felix Esser",
  "32471765683": "Fabienne Dormann",
  "32471869024": "Thom Petit",
  "32474296326": "Loic Meunier",
};

/* ── Booking URL to therapist ── */
const BOOKING_TO_THERAPIST: Record<string, string> = {
  crossuite: "Philippe Banaszak",
  "kq43933": "Thom Petit",
};

function identifyTherapist(href: string): string {
  // Extract phone number from tel: or wa.me links
  const phoneMatch = href.match(/(?:tel:|wa\.me\/)[\+]?(\d+)/);
  if (phoneMatch) {
    const num = phoneMatch[1];
    return PHONE_TO_THERAPIST[num] || "Inconnu";
  }

  // Check booking URLs
  for (const [key, name] of Object.entries(BOOKING_TO_THERAPIST)) {
    if (href.includes(key)) return name;
  }

  return "Non identifié";
}

function sendEvent(eventName: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export default function GA4Events() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const page = window.location.pathname;

      // Phone call
      if (href.startsWith("tel:")) {
        const therapist = identifyTherapist(href);
        sendEvent("phone_call", {
          therapist,
          phone_number: href.replace("tel:", ""),
          page_location: page,
          contact_method: "phone",
        });
        return;
      }

      // WhatsApp
      if (href.includes("wa.me")) {
        const therapist = identifyTherapist(href);
        sendEvent("whatsapp_click", {
          therapist,
          whatsapp_url: href,
          page_location: page,
          contact_method: "whatsapp",
        });
        return;
      }

      // Email
      if (href.startsWith("mailto:")) {
        sendEvent("email_click", {
          therapist: "Cabinet (général)",
          email_target: href.replace("mailto:", "").split("?")[0],
          page_location: page,
          contact_method: "email",
        });
        return;
      }

      // Online booking (Crossuite, Q-top)
      if (
        href.includes("crossuite") ||
        href.includes("q-top") ||
        href.includes("doctoranytime")
      ) {
        const therapist = identifyTherapist(href);
        const platform = href.includes("crossuite")
          ? "crossuite"
          : href.includes("q-top")
            ? "qtop"
            : "doctoranytime";
        sendEvent("online_booking", {
          therapist,
          booking_platform: platform,
          booking_url: href,
          page_location: page,
          contact_method: "online_booking",
        });
        return;
      }

      // Termin page navigation (= "Prendre rendez-vous" button)
      if (href.includes("/termin")) {
        sendEvent("termin_page", {
          page_location: page,
          contact_method: "termin_button",
        });
        return;
      }

      // Blog article click
      if (href.includes("/blog/") && !href.endsWith("/blog")) {
        sendEvent("blog_read", {
          article_url: href,
          page_location: page,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
