---
title: "Cockpit acquisition patients — Praxis Loten"
date: 2026-09-05
status: draft-for-review
owner: Philippe Banaszak
---

# Cockpit acquisition patients — design

## Objectif

Créer dans Codex un tableau de bord unique, lisible et rafraîchissable à la demande qui explique comment les visiteurs découvrent praxisloten.be et quelles actions de contact ils déclenchent.

Le cockpit doit répondre en priorité à cinq questions :

1. Quels canaux amènent les visiteurs ?
2. Quelles requêtes et pages créent le plus de visibilité et de clics ?
3. Où les visiteurs passent-ils à l'action ?
4. Quelle part de l'acquisition provient directement de Google Business Profile/Maps ?
5. Quelles anomalies ou opportunités méritent une action immédiate ?

## Périmètre et définitions

Le KPI principal est l'**action de contact mesurable**, et non le rendez-vous confirmé.

- Site : `phone_call`, `whatsapp_click`, `online_booking` et, séparément, `email_click`.
- Navigation : `termin_page` reste une étape de parcours et ne compte pas comme conversion.
- Fiche Google : appels, demandes d'itinéraire, clics vers le site et réservations Google restent une famille distincte.
- SEO : clics, impressions, CTR et position moyenne de Search Console.

Les volumes GA4 et Google Business Profile ne sont jamais additionnés pour former un total de patients : une même personne peut apparaître dans plusieurs sources ou déclencher plusieurs actions. Le cockpit emploie les termes « actions », « clics » et « utilisateurs » avec leur sens exact. Il n'emploie « patients » que lorsqu'une donnée métier le prouve.

## Sources de données

### Google Analytics 4

- Compte : `a396525599`.
- Propriété : `p539934309`, « Praxis Loten ».
- Accès : interface Google Analytics dans le navigateur authentifié.
- Fenêtres standard : 7 jours pour le signal récent, 28 jours pour la décision et comparaison avec la période précédente.
- Données : utilisateurs, sessions, canaux, sources/supports, pages, appareils, pays, langues, événements de contact, page d'origine et thérapeute lorsque disponible.

Les documents locaux citent deux identifiants de mesure (`G-T94F58H1XV` et `G-F58GSSFKQ0`). Le cockpit s'appuie sur l'identité stable de la propriété GA4, affiche cette incohérence comme alerte de mesure et ne tente pas de fusionner des propriétés sans vérification.

### Google Search Console

- Propriété domaine : `sc-domain:praxisloten.be`.
- Accès : interface Search Console dans le navigateur authentifié.
- Fenêtres standard : 3 mois et comparaison avec les 3 mois précédents ; 16 mois pour la saisonnalité lorsqu'elle devient pertinente.
- Données : requêtes, pages, pays, appareils, clics, impressions, CTR, position, indexation et Core Web Vitals.

### Google Business Profile / Maps

- Fiche : « Praxis Loten Kinésithérapie & more... ».
- Accès : gestion de la fiche depuis la recherche Google et vue publique Google Maps.
- Données : vues, requêtes ayant affiché la fiche, appels, itinéraires, clics site, réservations, note, nombre d'avis, récence des avis, présence des liens UTM et état des informations publiques.

### Dossiers locaux et code du site

- Plan de mesure, anciens rapports et dashboard dans `The Compagny`, `Scheduled` et `Artifacts`.
- Code Next.js du site pour vérifier les métadonnées, événements GA4, sitemap, robots, consentement, données structurées et paramètres UTM.
- Les anciens rapports servent de référence historique, pas de vérité courante lorsqu'ils contredisent les interfaces Google.

Le compte de service et les fichiers de clés présents localement ne sont jamais lus par le cockpit, intégrés au Canvas ni exposés dans ses données.

## Livrable

Le livrable principal est un **Canvas Codex unique** avec les données incorporées. Il ne fait aucun appel réseau : chaque rafraîchissement met à jour son instantané interne après lecture des interfaces Google.

Le Canvas comporte cinq zones :

1. **Aujourd'hui** — période, fraîcheur, utilisateurs, sessions, actions clés et variation.
2. **Acquisition** — canaux et sources, part Google organique, direct, réseaux sociaux et assistants IA.
3. **SEO et contenu** — requêtes Search Console, pages d'atterrissage, CTR, position et opportunités à fortes impressions.
4. **Passage à l'action** — téléphone, WhatsApp, réservation en ligne, pages d'origine et thérapeutes, sans confondre événements et utilisateurs.
5. **Google Maps** — visibilité de la fiche, appels, itinéraires, clics site, avis, requêtes locales et état du bouton de réservation.

Une bande « À faire maintenant » classe au maximum cinq recommandations par impact, confiance et effort. Les alertes de qualité de mesure sont séparées des recommandations SEO.

## Données initiales vérifiées le 5 septembre 2026

- GA4, 7 jours : 70 utilisateurs actifs, 86 sessions, 469 événements et 20 événements clés.
- Acquisition GA4, 7 jours : 68 sessions Organic Search, 13 Direct, 4 AI Assistant et 1 Organic Social.
- Search Console, 4 juin–3 septembre : 685 clics, 10,8 k impressions, CTR de 6,3 % et position moyenne de 5,8.
- Google Business Profile, avril–septembre : 846 interactions, 5 476 personnes ayant vu la fiche, 144 appels, 261 demandes d'itinéraire, 441 clics vers le site et 0 réservation attribuée par Google.
- Google Maps : note 4,8/5, 24 avis, lien de réservation actif et liens vers le site balisés par UTM.

Ces chiffres sont un point de départ. Les dates et périodes restent visibles près de chaque graphique afin d'éviter les comparaisons trompeuses.

## Rafraîchissement à la demande

Lorsque Philippe demande « rafraîchis le dashboard Praxis Loten » :

1. Lire GA4, Search Console, Google Business Profile et la fiche Maps dans le navigateur authentifié.
2. Relever les mêmes périodes et définitions que l'instantané précédent.
3. Contrôler les totaux, les variations, les dates et les changements de configuration.
4. Mettre à jour le Canvas et conserver les points historiques nécessaires aux tendances.
5. Résumer dans le chat uniquement les nouveaux signaux, anomalies et actions prioritaires.

Si une source est indisponible, le Canvas conserve la dernière valeur vérifiée, affiche sa date de fraîcheur et omet les comparaisons impossibles. Aucune valeur n'est inventée ou remplacée par zéro.

## Audit de qualité intégré

Le cockpit suit aussi les problèmes qui peuvent fausser l'analyse :

- identifiants GA4 contradictoires dans le code et la documentation ;
- événements ou libellés de thérapeutes incohérents ;
- absence de distinction entre clics et rendez-vous réels ;
- données anciennes présentées comme actuelles ;
- absence de consentement Analytics effectif malgré les textes juridiques ;
- absence de JSON-LD ;
- métadonnées génériques des pages dynamiques ;
- canonicals/hreflang à vérifier au niveau de chaque URL ;
- dates artificiellement renouvelées à chaque génération du sitemap ;
- absence de suivi régulier des Core Web Vitals.

Le premier livrable documente ces écarts. Il ne modifie ni le site, ni GA4, ni la fiche Google.

## Contrôles avant livraison

- Validation TypeScript du Canvas sans erreur.
- Vérification arithmétique des totaux et pourcentages affichés.
- Titre, unités, période et source visibles pour chaque graphique.
- Aucune donnée vide, secrète, personnelle ou patient dans le Canvas.
- Vérification visuelle en thème clair et sombre, sans débordement.
- Comparaisons uniquement entre périodes et métriques homogènes.
- Recommandations reliées à une observation datée et à un niveau de confiance.

## Hors périmètre initial

- Modifier le tracking, le site ou la configuration Google.
- Installer un système de call tracking.
- Relier Crossuite ou un dossier patient.
- Attribuer un rendez-vous confirmé à une source sans preuve métier.
- Créer une automatisation périodique : les mises à jour restent déclenchées à la demande.
