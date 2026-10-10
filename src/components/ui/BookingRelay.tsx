"use client";

import { useEffect } from "react";

/** Enregistre la réservation dans GA4 puis redirige ; si GA est bloqué, redirige quand même. */
export default function BookingRelay({
  slug,
  to,
  therapist,
  platform,
}: {
  slug: string;
  to: string;
  therapist: string;
  platform: string;
}) {
  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.replace(to);
    };
    // Un événement envoyé avant l'initialisation de gtag (config) est perdu : on attend
    // que window.gtag existe (≤ 2 s ; < 1 s en usage normal), puis on redirige au retour de GA ou au plus tard à 2,5 s.
    const started = Date.now();
    const send = () => {
      if (window.gtag) {
        window.gtag("event", "online_booking", {
          therapist,
          booking_platform: platform,
          booking_url: to,
          contact_method: "online_booking",
          relay: slug,
          event_callback: go,
          event_timeout: 800,
        });
      } else if (Date.now() - started < 2000) {
        poll = setTimeout(send, 100);
      } else {
        go();
      }
    };
    let poll = setTimeout(send, 0);
    const fallback = setTimeout(go, 2500);
    return () => {
      clearTimeout(poll);
      clearTimeout(fallback);
    };
  }, [slug, to, therapist, platform]);

  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <p className="text-neutral-600">
        Weiterleitung zum Terminkalender… / Redirection vers l&apos;agenda…
        <br />
        <a href={to} className="underline text-[#2A2C6D]">
          {to.replace(/^https:\/\//, "")}
        </a>
      </p>
    </main>
  );
}
