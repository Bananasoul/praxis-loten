---
title: "Deploiement"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/ops]
aliases: [deployment, deploiement, vercel]
related: ["[[02_STACK]]", "[[05_SEO]]"]
---

# Deploiement

## Hebergement

| Champ | Valeur |
|-------|--------|
| Plateforme | Vercel |
| Projet | `praxis-loten` |
| Team | `bananasouls-projects` |
| URL prod | https://www.praxisloten.be |

## DNS (GoDaddy)

| Type | Valeur |
|------|--------|
| A record | 76.76.21.21 |
| CNAME | cname.vercel-dns.com |
| Domaine | praxisloten.be |

## Workflow de deploiement

```bash
# 1. Verifier que le build compile
npx next build

# 2. Deployer en production
npx vercel deploy --prod --yes

# 3. Verifier le site live
# https://www.praxisloten.be
```

> [!warning] Etat reel
> Il n'y a **pas de CI/CD automatise**. Chaque deploiement est declenche manuellement via la CLI Vercel. Il n'y a pas non plus de preview automatique par branche.

## Variables d'environnement

Fichier `.env.local` (non commite). Contenu minimal — pas de secrets critiques, le site est 100% SSG.

## Git

Le repo est local. Il n'y a pas de remote GitHub/GitLab configure au moment de la redaction de cette note.
