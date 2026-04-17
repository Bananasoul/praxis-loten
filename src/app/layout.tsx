import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Praxis Loten",
  description: "Physiotherapy & Rehabilitation in Eupen",
  icons: {
    icon: "/logos/logo-favicon.png",
    apple: "/apple-touch-icon.png",
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
      </body>
    </html>
  );
}
