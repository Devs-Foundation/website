> 🌐 **English** · [Português](README.pt.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [中文](README.zh.md)

# Dev's Foundation — Website

![Dev's Foundation](preview.webp)

The official website of the **Dev's Foundation Method** — the first
**multi-agent consensus system with a shared brain**.

**Live:** [devs.foundation](https://devs.foundation/) · **Method:** [multi-agent-consensus-method](https://github.com/Devs-Foundation/multi-agent-consensus-method)

This repository is a **portable, self-contained mirror** of the site. It is 100%
static — no build step, no server-side code, no dependencies to install. If the
main domain ever goes down, this repo can be cloned and served anywhere in seconds.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Landing page (the plexus entry — identical to what's live) |
| `inicio.html` | The method site — home, with horizontal tabs + interactive graph |
| `problemas · solucoes · mentes · consenso · skills · etica · infra · resiliencia .html` | One page per pillar of the method |
| `app.js` | The engine: 6-language content (EN · PT · ES · FR · DE · ZH) + the force-directed graph |
| `style.css` | Monochrome theme (grey → black, white text) matching the brain logo |
| `js/particles.js` | Plexus animation for the landing |
| `assets/` | Brain logo, the 7-day brain-graph image, mind maps per language |

The `index.html` links to `inicio.html` via the **Mirror 1** button, exactly as on the live site.

## Run it locally

Any static server works. For example:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Host it anywhere

Because it's fully static, it drops onto any host with zero configuration:

- **GitHub Pages** — Settings → Pages → deploy from `main`. Instant free live mirror.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, done.
- **Any web root** — copy the files next to a web server. Paths are relative.

---

© 2026 Dev's Foundation · The method is public; the content is always private.
