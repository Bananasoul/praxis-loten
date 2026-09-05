import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

type Dict = { [k: string]: string | Dict };

function deepMerge(base: Dict, over: Dict): Dict {
  const out: Dict = { ...base };
  for (const k of Object.keys(over)) {
    const b = out[k];
    const o = over[k];
    out[k] =
      b && o && typeof b === 'object' && typeof o === 'object'
        ? deepMerge(b as Dict, o as Dict)
        : o;
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const en = (await import(`../../messages/en.json`)).default as Dict;
  let current: Dict = en;
  if (locale !== 'en') {
    try {
      current = (await import(`../../messages/${locale}.json`)).default as Dict;
    } catch {
      current = en;
    }
  }

  return { locale, messages: deepMerge(en, current) };
});
