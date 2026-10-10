import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // '/termin' sans langue : lien du bouton « Réserver » de la fiche Google. next-intl le
  // redirige vers /<langue du navigateur>/termin en gardant les paramètres UTM.
  matcher: ['/', '/termin', '/(de|fr|en|nl|tr|ar|pl|uk|es|ku)/:path*'],
};
