> [English](README.md) · [Português](README.pt.md) · [Español](README.es.md) · 🌐 **Français** · [Deutsch](README.de.md) · [中文](README.zh.md)

# Dev's Foundation — Site web

![Dev's Foundation](preview.webp)

Le site officiel de la **Dev's Foundation Method** — le premier système de
**consensus multi-agents avec un cerveau partagé** au monde.

**En ligne :** [devs.foundation](https://devs.foundation/) · **Méthode :** [multi-agent-consensus-method](https://github.com/Devs-Foundation/multi-agent-consensus-method)

Ce dépôt est un **miroir portable et autonome** du site. Il est 100 %
statique — aucune étape de build, aucun code côté serveur, aucune dépendance à installer. Si le
domaine principal venait à tomber, ce dépôt peut être cloné et servi n'importe où en quelques secondes.

## Contenu

| Fichier | Objectif |
|------|---------|
| `index.html` | Page d'atterrissage (l'entrée plexus — identique à la version en ligne) |
| `inicio.html` | Le site de la méthode — accueil, avec onglets horizontaux + graphe interactif |
| `problemas · solucoes · mentes · consenso · skills · etica · infra · resiliencia .html` | Une page par pilier de la méthode |
| `app.js` | Le moteur : contenu en 6 langues (EN · PT · ES · FR · DE · ZH) + le graphe à disposition dynamique (force-directed) |
| `style.css` | Thème monochrome (gris → noir, texte blanc) assorti au logo du cerveau |
| `js/particles.js` | Animation plexus pour la page d'atterrissage |
| `assets/` | Logo du cerveau, image du graphe cérébral sur 7 jours, cartes mentales par langue |

La page `index.html` renvoie vers `inicio.html` via le bouton **Mirror 1**, exactement comme sur le site en ligne.

## Exécuter en local

N'importe quel serveur statique fonctionne. Par exemple :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## L'héberger n'importe où

Étant entièrement statique, il s'installe sur n'importe quel hébergeur sans aucune configuration :

- **GitHub Pages** — Settings → Pages → déployer depuis `main`. Miroir gratuit instantané.
- **Netlify / Vercel / Cloudflare Pages** — glisser-déposer le dossier, et c'est fait.
- **N'importe quelle racine web** — copier les fichiers à côté d'un serveur web. Les chemins sont relatifs.

---

© 2026 Dev's Foundation · La méthode est publique ; le contenu est toujours privé.
