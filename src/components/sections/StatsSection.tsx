"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/ui/CountUp";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Users, Award, BookOpen, Heart, Star } from "lucide-react";
import type { GooglePlaceData } from "@/lib/googlePlaces";

// Graduation years → combined experience grows automatically each year
const THERAPIST_START_YEARS = [
  2012, // Philippe Banaszak
  2021, // Félix Esser
  2013, // Fabienne Dormann
  2015, // Thom Petit
  2025, // Loïc Meunier
];

function getCombinedExperience(): number {
  const currentYear = new Date().getFullYear();
  return THERAPIST_START_YEARS.reduce(
    (sum, y) => sum + Math.max(0, currentYear - y),
    0
  );
}

// Post-diploma formations count (excluding base degrees)
const FORMATIONS_COUNT = 20;

interface StatsSectionProps {
  googleData?: GooglePlaceData | null;
}

export function StatsSection({ googleData }: StatsSectionProps) {
  const t = useTranslations("stats");
  const combinedExperience = getCombinedExperience();

  return (
    <section className="relative py-20" style={{ background: "#f5fce8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-6 sm:gap-8 ${
            googleData
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              : "grid-cols-2 md:grid-cols-4"
          }`}
        >
          {/* ── Google rating (conditional) ── */}
          {googleData && (
            <AnimatedSection delay={0} className={`lg:col-span-1 ${googleData ? "col-span-2 sm:col-span-1" : ""}`}>
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                  style={{ background: "rgba(251,191,36,0.15)" }}
                >
                  <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                </div>
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-1"
                  style={{ color: "#2b3186" }}
                >
                  <CountUp
                    end={googleData.rating}
                    decimals={1}
                    duration={1.5}
                  />
                </div>
                <p
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: "#5c9120" }}
                >
                  {t("googleRating")}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  {googleData.reviewCount} {t("googleReviews")}
                </p>
              </div>
            </AnimatedSection>
          )}

          {/* ── Thérapeutes ── */}
          <AnimatedSection delay={googleData ? 0.05 : 0}>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ background: "rgba(118,184,42,0.12)" }}
              >
                <Users className="w-7 h-7" style={{ color: "#76b82a" }} />
              </div>
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color: "#2b3186" }}
              >
                <CountUp end={5} duration={2} />
              </div>
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "#5c9120" }}
              >
                {t("therapists")}
              </p>
            </div>
          </AnimatedSection>

          {/* ── Expérience cumulée ── */}
          <AnimatedSection delay={googleData ? 0.1 : 0.1}>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ background: "rgba(118,184,42,0.12)" }}
              >
                <Award className="w-7 h-7" style={{ color: "#76b82a" }} />
              </div>
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-1"
                style={{ color: "#2b3186" }}
              >
                <CountUp end={combinedExperience} suffix="+" duration={2} />
              </div>
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "#5c9120" }}
              >
                {t("experience")}
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                {t("experienceNote")}
              </p>
            </div>
          </AnimatedSection>

          {/* ── Formations ── */}
          <AnimatedSection delay={googleData ? 0.15 : 0.2}>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ background: "rgba(118,184,42,0.12)" }}
              >
                <BookOpen className="w-7 h-7" style={{ color: "#76b82a" }} />
              </div>
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color: "#2b3186" }}
              >
                <CountUp end={FORMATIONS_COUNT} duration={2} />
              </div>
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "#5c9120" }}
              >
                {t("formations")}
              </p>
            </div>
          </AnimatedSection>

          {/* ── Patients ── */}
          <AnimatedSection delay={googleData ? 0.2 : 0.3}>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                style={{ background: "rgba(118,184,42,0.12)" }}
              >
                <Heart className="w-7 h-7" style={{ color: "#76b82a" }} />
              </div>
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-2"
                style={{ color: "#2b3186" }}
              >
                <CountUp end={1000} suffix="+" duration={2.5} />
              </div>
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "#5c9120" }}
              >
                {t("patients")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
