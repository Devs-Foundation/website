> [English](README.md) · 🌐 **Português** · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [中文](README.zh.md)

# Dev's Foundation — Website

![Dev's Foundation](preview.webp)

O site oficial do **Dev's Foundation Method** — o primeiro sistema
de **consenso multi-agente com um cérebro partilhado**.

**Ao vivo:** [devs.foundation](https://devs.foundation/) · **Método:** [multi-agent-consensus-method](https://github.com/Devs-Foundation/multi-agent-consensus-method)

Este repositório é um **espelho portátil e autónomo** do site. É 100%
estático — sem processo de build, sem código do lado do servidor, sem dependências para instalar. Se
o domínio principal alguma vez ficar em baixo, este repositório pode ser clonado e servido em qualquer lugar em segundos.

## O que está aqui dentro

| Ficheiro | Finalidade |
|------|---------|
| `index.html` | Página de entrada (a entrada do plexo — idêntica à que está ao vivo) |
| `inicio.html` | O site do método — página inicial, com separadores horizontais + grafo interativo |
| `problemas · solucoes · mentes · consenso · skills · etica · infra · resiliencia .html` | Uma página por pilar do método |
| `app.js` | O motor: conteúdo em 6 línguas (EN · PT · ES · FR · DE · ZH) + o grafo de forças direcionadas |
| `style.css` | Tema monocromático (cinzento → preto, texto branco) alinhado com o logótipo do cérebro |
| `js/particles.js` | Animação do plexo para a página de entrada |
| `assets/` | Logótipo do cérebro, a imagem do grafo cerebral de 7 dias, mapas mentais por língua |

O `index.html` liga ao `inicio.html` através do botão **Mirror 1**, exatamente como no site ao vivo.

## Executar localmente

Qualquer servidor estático funciona. Por exemplo:

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

## Alojar em qualquer lugar

Por ser totalmente estático, funciona em qualquer alojamento sem qualquer configuração:

- **GitHub Pages** — Settings → Pages → deploy a partir de `main`. Espelho ao vivo instantâneo e gratuito.
- **Netlify / Vercel / Cloudflare Pages** — arraste e largue a pasta, pronto.
- **Qualquer raiz web** — copie os ficheiros para junto de um servidor web. Os caminhos são relativos.

---

© 2026 Dev's Foundation · O método é público; o conteúdo é sempre privado.
