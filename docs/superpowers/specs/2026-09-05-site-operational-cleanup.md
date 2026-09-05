# Site Operational Cleanup Specification

## Requested outcome

- Standardize every published opening-hours reference to Monday–Friday, 07:30–20:30, with the weekend closed.
- Keep the existing language coverage unchanged.
- Add `therapie-manuelle-mythes-mouvement` to the XML sitemap and `public/llms.txt`.
- Leave the current Google Analytics integration unchanged.
- Resolve the current ESLint errors and warnings, and examine/remediate dependency vulnerabilities.
- Revoke and remove the abandoned Google Analytics service-account key.
- Remove only clearly obsolete code or files encountered in this scope.
- Reauthenticate GitHub CLI and Vercel CLI when the available account flow permits it.

## Safety constraints

- Work from the latest GitHub `main` in an isolated checkout and a dedicated branch.
- Do not change language availability, therapist records, booking links, or GA4 runtime behavior.
- Do not expose secret values in logs or commits.
- Verify rendered output, lint, build, and dependency audit before publication.

