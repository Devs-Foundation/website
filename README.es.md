> [English](README.md) · [Português](README.pt.md) · 🌐 **Español** · [Français](README.fr.md) · [Deutsch](README.de.md) · [中文](README.zh.md)

# Dev's Foundation — Sitio web

![Dev's Foundation](preview.webp)

El sitio web oficial del **Método Dev's Foundation** — el primer
**sistema de consenso multiagente con un cerebro compartido** del mundo.

**En vivo:** [devs.foundation](https://devs.foundation/) · **Método:** [multi-agent-consensus-method](https://github.com/Devs-Foundation/multi-agent-consensus-method)

Este repositorio es un **espejo portátil y autocontenido** del sitio. Es 100%
estático — sin proceso de compilación, sin código del lado del servidor, sin dependencias que instalar. Si el
dominio principal alguna vez cae, este repositorio se puede clonar y servir en cualquier lugar en segundos.

## Qué contiene

| Archivo | Propósito |
|------|---------|
| `index.html` | Página de aterrizaje (la entrada del plexo — idéntica a la que está en vivo) |
| `inicio.html` | El sitio del método — inicio, con pestañas horizontales + gráfico interactivo |
| `problemas · solucoes · mentes · consenso · skills · etica · infra · resiliencia .html` | Una página por cada pilar del método |
| `app.js` | El motor: contenido en 6 idiomas (EN · PT · ES · FR · DE · ZH) + el gráfico de fuerza dirigida |
| `style.css` | Tema monocromático (gris → negro, texto blanco) a juego con el logo del cerebro |
| `js/particles.js` | Animación de plexo para la página de aterrizaje |
| `assets/` | Logo del cerebro, la imagen del gráfico cerebral de 7 días, mapas mentales por idioma |

El `index.html` enlaza con `inicio.html` mediante el botón **Mirror 1**, exactamente igual que en el sitio en vivo.

## Ejecutarlo localmente

Cualquier servidor estático funciona. Por ejemplo:

```bash
python -m http.server 8000
# luego abre http://localhost:8000
```

## Alójalo en cualquier lugar

Al ser totalmente estático, se despliega en cualquier host sin ninguna configuración:

- **GitHub Pages** — Settings → Pages → deploy from `main`. Espejo en vivo gratuito e instantáneo.
- **Netlify / Vercel / Cloudflare Pages** — arrastra y suelta la carpeta, listo.
- **Cualquier raíz web** — copia los archivos junto a un servidor web. Las rutas son relativas.

---

© 2026 Dev's Foundation · El método es público; el contenido siempre es privado.
