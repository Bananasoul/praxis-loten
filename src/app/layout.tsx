import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import GA4Events from "@/components/ui/GA4Events";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/** Pas de GA sur les aperçus Vercel ni en développement local (ils polluaient les statistiques).
 *  Si VERCEL_ENV est absent, GA reste actif : mieux vaut trop mesurer que plus du tout. */
const IS_PRODUCTION = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  title: "Praxis Loten",
  description: "Physiotherapy & Rehabilitation in Eupen",
  verification: {
    google: "EOgkUmoMdDS7N1s6dK4NdxrAmvzX38HcnBkVi7ljGi8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#fafafa] text-neutral-900">
        {children}
        {IS_PRODUCTION && <GA4Events />}
      </body>
      {IS_PRODUCTION && <GoogleAnalytics gaId="G-F58GSSFKQ0" />}
    </html>
  );
}
