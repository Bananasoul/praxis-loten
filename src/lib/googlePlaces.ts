export interface GooglePlaceData {
  rating: number;
  reviewCount: number;
}

/** Fiche Google « Praxis Loten Kinésithérapie & more... » (Loten 1, Eupen). */
const PLACE_ID = "ChIJwVa0rTSEwEcRJC82kAPG_CI";

/**
 * Note et nombre d'avis de la fiche Google, rafraîchis une fois par jour.
 *
 * Places API (New), interrogée par identifiant de fiche (14/10/2026) : l'ancien appel
 * « Find Place from Text » (Places API legacy) renvoyait toujours null en production,
 * sans trace. Un échec est désormais écrit dans les logs Vercel (statut + message Google,
 * jamais la clé) ; le site s'affiche quand même, sans la note.
 */
export async function fetchGooglePlaceData(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn("[googlePlaces] GOOGLE_PLACES_API_KEY absente : note Google non affichée");
    return null;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
      next: { revalidate: 86400 }, // une fois par jour
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[googlePlaces] HTTP ${res.status} : ${body.slice(0, 300)}`);
      return null;
    }

    const data: { rating?: number; userRatingCount?: number } = await res.json();
    if (!data.rating) {
      console.error("[googlePlaces] réponse sans note", JSON.stringify(data).slice(0, 200));
      return null;
    }

    return { rating: data.rating, reviewCount: data.userRatingCount ?? 0 };
  } catch (err) {
    console.error("[googlePlaces] appel impossible :", err instanceof Error ? err.message : err);
    return null;
  }
}
