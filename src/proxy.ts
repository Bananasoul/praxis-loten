import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Toute adresse sans langue (/termin, /praxis, /team/…) est redirigée par next-intl vers
  // /<langue du visiteur>/… en gardant les paramètres (UTM). Search Console relevait 15 pages
  // en 404 de ce type (11/10/2026). Exclus : API, fichiers Next/Vercel, page relais /go/…,
  // et tout chemin avec un point (sitemap.xml, robots.txt, images).
  matcher: ['/((?!api|_next|_vercel|go/|.*\\..*).*)'],
};
