import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'fr', 'en', 'nl', 'tr', 'ar', 'pl', 'uk', 'es', 'ku'],
  defaultLocale: 'de',
  localePrefix: 'always',
});
