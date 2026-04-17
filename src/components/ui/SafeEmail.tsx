"use client";

/**
 * SafeEmail — anti-scraping email component.
 * The email is stored base64-encoded and decoded only on click (client-side JS).
 * Bots that parse static HTML never see the plain-text address.
 */

import { Mail } from "lucide-react";

function decode(encoded: string): string {
  if (typeof window === "undefined") return "";
  return atob(encoded);
}

type Props = {
  encoded: string;          // btoa("user@domain.com")
  label?: string;           // display text (optional, defaults to decoded address)
  className?: string;
  iconSize?: number;
  showIcon?: boolean;
};

export function SafeEmail({ encoded, label, className = "", iconSize = 16, showIcon = true }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = decode(encoded);
    if (email) window.location.href = `mailto:${email}`;
  };

  const displayLabel = label ?? (
    // Show a censored hint like "p••••@icloud.com" so humans understand what it is
    (() => {
      try {
        const addr = atob(encoded);
        const [user, domain] = addr.split("@");
        return `${user[0]}${"•".repeat(Math.min(user.length - 1, 4))}@${domain}`;
      } catch {
        return "Email";
      }
    })()
  );

  return (
    <a
      href="#"
      onClick={handleClick}
      className={className}
      aria-label="Send email"
      title="Click to send email"
    >
      {showIcon && <Mail style={{ width: iconSize, height: iconSize }} />}
      {displayLabel}
    </a>
  );
}

/** Helper to generate encoded values at build time — use in data arrays */
export function encodeEmail(email: string): string {
  if (typeof btoa !== "undefined") return btoa(email);
  return Buffer.from(email).toString("base64");
}
