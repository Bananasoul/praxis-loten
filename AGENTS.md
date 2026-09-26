<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Publication du site — circuit branche → aperçu → validation (règle du 26/09/2026)

`main` = production (chaque push déploie praxisloten.be). **Aucun agent ne pousse directement sur `main`.** La publication passe toujours par une Pull Request fusionnée **sur validation explicite de Philippe**.

1. Partir de `origin/main` à jour, dans une branche dédiée : `feat/…`, `fix/…`, `content/…`, `chore/…`. Jamais de travail sur une copie locale périmée.
2. Faire les contrôles adaptés (compilation `npm run build`, rendu des pages touchées, 10 langues).
3. Pousser la branche, puis ouvrir une Pull Request vers `main` (`gh pr create`) : titre clair, description en français avec ce qui change, les pages à vérifier et le lien d'aperçu Vercel.
4. Vercel publie un aperçu automatique de la branche. Vérifier que l'aperçu est prêt et que les changements y sont visibles.
5. **Philippe valide** : soit il fusionne lui-même (GitHub, y compris depuis son téléphone), soit il dit à l'agent de fusionner dans la conversation (« go », « fusionne », « publie »). L'agent fusionne alors avec `gh pr merge <n> --squash --delete-branch`. La fusion déclenche la mise en production ; vérifier ensuite que le déploiement Vercel est terminé et que le site en ligne montre les changements.

- Ne jamais forcer une publication (`--force`). Ne jamais fusionner sans une validation explicite de Philippe pour **cette** Pull Request (une validation ne vaut pas pour les suivantes).
- Si `main` a évolué pendant le travail : mettre la branche à jour (rebase/merge) et relancer les contrôles avant de demander la validation.
- Une branche = un sujet. Supprimer la branche après fusion.
