import type { MetadataRoute } from "next";

/**
 * Robots IA explicitement autorisés pour une visibilité GEO maximale
 * (Generative Engine Optimization). Voir aussi /llms.txt.
 * Politique : tout autoriser — robots de recherche/citation ET d'entraînement.
 */
const AI_BOTS = [
  // OpenAI / ChatGPT
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Claude-Web",
  // Google (Gemini, AI Overviews)
  "Google-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple, Amazon, Meta, Microsoft Copilot, others
  "Applebot-Extended",
  "Amazonbot",
  "Meta-ExternalAgent",
  "DuckAssistBot",
  "cohere-ai",
  "CCBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: "https://www.praxisloten.be/sitemap.xml",
    host: "https://www.praxisloten.be",
  };
}
