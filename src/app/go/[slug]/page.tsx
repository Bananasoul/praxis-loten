import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingRelay from "@/components/ui/BookingRelay";

/**
 * Pages relais de réservation : la fiche Google pointe ici (avec ses UTM), la page
 * enregistre un événement online_booking dans GA4 puis renvoie vers l'agenda externe.
 * Liste fermée : aucune redirection vers une adresse non listée.
 */
const RELAYS: Record<string, { to: string; therapist: string; platform: string }> = {
  philippe: {
    to: "https://agenda.crossuite.com/PB/fr_BE",
    therapist: "Philippe Banaszak",
    platform: "crossuite",
  },
};

export const metadata: Metadata = {
  title: "Praxis Loten",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(RELAYS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function RelayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const relay = RELAYS[slug];
  if (!relay) notFound();
  return <BookingRelay slug={slug} {...relay} />;
}
