<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Publication du site

- Après toute amélioration demandée et validée par les contrôles adaptés (qualité, compilation, sécurité et test du résultat), enregistrer les changements et les pousser directement vers `origin/main` afin de déclencher le déploiement Vercel.
- Ne pas demander à l'utilisateur de choisir entre une branche et une Pull Request, sauf s'il demande explicitement une prévisualisation ou une révision avant publication.
- Ne jamais forcer une publication. Si la branche distante a évolué, si un conflit apparaît ou si un contrôle échoue, arrêter la publication et expliquer clairement le problème.
- Après chaque publication, vérifier que le déploiement est terminé et que les changements essentiels sont bien visibles sur le site en ligne.
