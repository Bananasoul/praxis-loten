import { setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">Datenschutz / Confidentialité</h1>
        <p className="text-neutral-500">Coming soon...</p>
      </div>
    </div>
  );
}
