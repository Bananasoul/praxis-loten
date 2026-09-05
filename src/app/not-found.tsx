"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag("event", "page_404", {
        page_location: window.location.pathname,
        referrer: document.referrer || "(direct)",
      });
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#2A2C6D" }}>404</h1>
      <p style={{ color: "#475569", maxWidth: "32rem" }}>
        Diese Seite existiert nicht (mehr). / Cette page n&apos;existe plus.
      </p>
      <Link
        href="/de"
        style={{
          background: "#2A2C6D",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          textDecoration: "none",
        }}
      >
        Zur Startseite / Vers l&apos;accueil
      </Link>
    </main>
  );
}
