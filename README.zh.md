> [English](README.md) · [Português](README.pt.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · 🌐 **中文**

# Dev's Foundation — 网站

![Dev's Foundation](preview.webp)

**Dev's Foundation Method** 的官方网站——第一个
**具有共享大脑的多智能体共识系统**。

**在线地址：** [devs.foundation](https://devs.foundation/) · **方法论：** [multi-agent-consensus-method](https://github.com/Devs-Foundation/multi-agent-consensus-method)

本仓库是该网站的**便携式、自包含镜像**。它是 100%
静态的——无需构建步骤，无服务器端代码，无需安装任何依赖。如果
主域名出现故障，本仓库可以随时被克隆并部署到任何地方。

## 目录内容

| 文件 | 用途 |
|------|---------|
| `index.html` | 落地页（plexus 入口——与线上版本完全一致） |
| `inicio.html` | 方法论网站——首页，带有水平标签页 + 交互式图谱 |
| `problemas · solucoes · mentes · consenso · skills · etica · infra · resiliencia .html` | 方法论每个支柱对应一个页面 |
| `app.js` | 引擎：6 种语言内容（EN · PT · ES · FR · DE · ZH）+ 力导向图 |
| `style.css` | 单色主题（灰 → 黑，白色文字），与大脑徽标相配 |
| `js/particles.js` | 落地页的 plexus 动画 |
| `assets/` | 大脑徽标、7 天大脑图谱图像、各语言的思维导图 |

`index.html` 通过 **Mirror 1** 按钮链接到 `inicio.html`，与线上网站完全一致。

## 本地运行

任何静态服务器均可使用。例如：

```bash
python -m http.server 8000
# 然后打开 http://localhost:8000
```

## 部署到任何地方

由于它完全是静态的，可以零配置地部署到任何主机上：

- **GitHub Pages** — 设置 → Pages → 从 `main` 分支部署。即时获得免费的在线镜像。
- **Netlify / Vercel / Cloudflare Pages** — 拖放文件夹即可完成。
- **任意 Web 根目录** — 将文件复制到 Web 服务器旁边。路径均为相对路径。

---

© 2026 Dev's Foundation · 方法论是公开的；内容始终保持私密。
