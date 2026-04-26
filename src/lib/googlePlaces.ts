export interface GooglePlaceData {
  rating: number;
  reviewCount: number;
}

export async function fetchGooglePlaceData(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json` +
        `?input=Praxis+Loten+Eupen` +
        `&inputtype=textquery` +
        `&fields=rating,user_ratings_total` +
        `&key=${apiKey}`,
      { next: { revalidate: 86400 } } // refresh once per day
    );

    if (!res.ok) return null;

    const data = await res.json();
    const candidate = data.candidates?.[0];
    if (!candidate?.rating) return null;

    return {
      rating: candidate.rating,
      reviewCount: candidate.user_ratings_total ?? 0,
    };
  } catch {
    return null;
  }
}
