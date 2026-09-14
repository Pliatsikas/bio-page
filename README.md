<div align="center">

```
 █████╗ ██╗     ███████╗██╗  ██╗    ██████╗ ██╗     ██╗ █████╗ ████████╗███████╗██╗██╗  ██╗ █████╗ ███████╗
██╔══██╗██║     ██╔════╝╚██╗██╔╝    ██╔══██╗██║     ██║██╔══██╗╚══██╔══╝██╔════╝██║██║ ██╔╝██╔══██╗██╔════╝
███████║██║     █████╗   ╚███╔╝     ██████╔╝██║     ██║███████║   ██║   ███████╗██║█████╔╝ ███████║███████╗
██╔══██║██║     ██╔══╝   ██╔██╗     ██╔═══╝ ██║     ██║██╔══██║   ██║   ╚════██║██║██╔═██╗ ██╔══██║╚════██║
██║  ██║███████╗███████╗██╔╝ ██╗    ██║     ███████╗██║██║  ██║   ██║   ███████║██║██║  ██╗██║  ██║███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
```

### `Fullstack engineer. Building real products from database to UI.`

**Portfolio & bio site → [pliatsikas.github.io/bio-page](https://pliatsikas.github.io/bio-page/)**

[![Live](https://img.shields.io/badge/Live-pliatsikas.github.io-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://pliatsikas.github.io/bio-page/)
[![Email](https://img.shields.io/badge/Email-alexandrospliatsikas8@gmail.com-0d1117?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alexandrospliatsikas8@gmail.com)
[![GitHub](https://img.shields.io/badge/@Pliatsikas-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pliatsikas)

</div>

---

### 🌐 About this site

The source of my portfolio. Three pages plus one case study, built with **React 19 + Vite 8 + React Router 7**, plain CSS with a dark industrial theme, a GSAP-driven interactive dot grid and a custom cursor. Deployed to GitHub Pages.

| Route | What's there |
|---|---|
| [`/`](https://pliatsikas.github.io/bio-page/) | Bio, focus areas, skill levels |
| [`/projects`](https://pliatsikas.github.io/bio-page/projects) | Selected projects with live/source links |
| [`/projects/repair-shop-app`](https://pliatsikas.github.io/bio-page/projects/repair-shop-app) | Case study — freelance Electron desktop app for a repair shop |
| [`/certificates`](https://pliatsikas.github.io/bio-page/certificates) | Certifications |

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/ (also writes 404.html for SPA deep links)
npm run deploy    # build + publish dist/ to the gh-pages branch
```

---

### 👾 About Me

```yaml
name:       Alex Pliatsikas
location:   Thessaloniki, GR
education:  Applied Informatics @ University of Macedonia
year:       4th (Final Year)
thesis:     RAG Pipelines & LLM Evaluation
focus:
  - Fullstack web engineering (Next.js, Node.js, PostgreSQL)
  - LLM products with grounding, evals & usage budgets
  - Desktop apps for real clients (Electron, SQLite)
  - Real-time systems & production deployments (Docker, Vercel, Render)
status:     Always learning
```

---

### 🚀 Selected Projects

| Project | Description | Tags |
|---|---|---|
| **[Job Hunt Copilot](https://github.com/Pliatsikas/job-hunt-copilot)** · [🔗 Live](https://job-hunt-copilot-gamma.vercel.app) | Paste a job ad, get a grounded match score against your CV (every match quotes the CV verbatim), the gaps worth preparing for, and a streamed cover letter. Multi-provider LLM layer with Zod validation + repair, fabrication detector, per-user usage budgets, eval suite | `Next.js 15` `TypeScript` `Prisma 7` `PostgreSQL` `Auth.js` `Groq` `Gemini` `Vitest` |
| **[Repair Shop Management App](https://pliatsikas.github.io/bio-page/projects/repair-shop-app)** · freelance | Offline-first Electron desktop app for a small electronics repair business — replaced a legacy MS Access DB. Autosave, search, status lists, duplicate-serial detection, photo per repair, A4 print, Excel + direct `.mdb` import, PIN lock, daily backups. Delivered & installed for the client (private source) | `Electron` `React` `TypeScript` `Prisma` `SQLite` `Tailwind` |
| **[Aura Immersive Web Experience](https://github.com/Pliatsikas/aura-site-demo)** · [🔗 Live](https://aura-sand-pi.vercel.app/) | Next-gen architectural portfolio with WebGL fluid simulations & custom shaders via Next.js + React Three Fiber | `WebGL` `Next.js` `Framer Motion` |
| **[TaskFlow](https://github.com/Pliatsikas/TaskFlow)** · [🔗 Live](https://taskflow-client-lake.vercel.app) | Production Kanban SaaS — monorepo, REST API, JWT auth with refresh tokens, real-time drag & drop via WebSockets, Docker deployment on Vercel + Render | `Next.js` `Node.js` `PostgreSQL` `Socket.io` `Docker` `TypeScript` |
| **E-Avenue Jira AI Copilot** | Intelligent workspace assistant using RAG to synthesize knowledge bases and historical Jira tickets for instant issue resolution | `Generative AI` `RAG` `NLP` |
| **Rentalbook OCR Engine** | High-precision OCR pipeline that extracts data from passports & national IDs to automate user verification in real time | `OCR` `Computer Vision` `Automation` |

<div align="center">
<a href="https://pliatsikas.github.io/bio-page/projects/repair-shop-app"><img width="720" src="public/projects/repair-shop-app/screenshot-2.png" alt="Repair Shop Management App — repair record card (case study)"></a>
<br/><sub>Repair Shop Management App — <a href="https://pliatsikas.github.io/bio-page/projects/repair-shop-app">read the case study</a></sub>
</div>

---

### 🛠️ Tech Stack

<div align="center">

**Frontend & Desktop**

![React](https://img.shields.io/badge/React-0d1117?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-0d1117?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-0d1117?style=flat-square&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-0d1117?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript-0d1117?style=flat-square&logo=javascript&logoColor=F7DF1E)
![Electron](https://img.shields.io/badge/Electron-0d1117?style=flat-square&logo=electron&logoColor=47848F)

**Backend & Database**

![Node.js](https://img.shields.io/badge/Node.js-0d1117?style=flat-square&logo=nodedotjs&logoColor=339933)
![Express](https://img.shields.io/badge/Express-0d1117?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-0d1117?style=flat-square&logo=postgresql&logoColor=336791)
![SQLite](https://img.shields.io/badge/SQLite-0d1117?style=flat-square&logo=sqlite&logoColor=003B57)
![Prisma](https://img.shields.io/badge/Prisma-0d1117?style=flat-square&logo=prisma&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-0d1117?style=flat-square&logo=redis&logoColor=DC382D)
![Socket.io](https://img.shields.io/badge/Socket.io-0d1117?style=flat-square&logo=socketdotio&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-0d1117?style=flat-square&logo=php&logoColor=777BB4)

**DevOps, Testing & Tooling**

![Docker](https://img.shields.io/badge/Docker-0d1117?style=flat-square&logo=docker&logoColor=2496ED)
![Vercel](https://img.shields.io/badge/Vercel-0d1117?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-0d1117?style=flat-square&logo=render&logoColor=46E3B7)
![Vitest](https://img.shields.io/badge/Vitest-0d1117?style=flat-square&logo=vitest&logoColor=6E9F18)
![Playwright](https://img.shields.io/badge/Playwright-0d1117?style=flat-square&logo=playwright&logoColor=2EAD33)
![Git](https://img.shields.io/badge/Git-0d1117?style=flat-square&logo=git&logoColor=F05032)
![VS Code](https://img.shields.io/badge/VS%20Code-0d1117?style=flat-square&logo=visualstudiocode&logoColor=007ACC)
![Unix/zsh](https://img.shields.io/badge/Unix%20%2F%20zsh-0d1117?style=flat-square&logo=gnubash&logoColor=white)

**AI & Data**

![LLMs](https://img.shields.io/badge/LLMs-0d1117?style=flat-square&logo=openai&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-0d1117?style=flat-square&logo=databricks&logoColor=white)
![Prompt Engineering](https://img.shields.io/badge/Prompt%20Engineering-0d1117?style=flat-square&logo=anthropic&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-0d1117?style=flat-square&logo=zod&logoColor=3E67B1)
![Python](https://img.shields.io/badge/Python-0d1117?style=flat-square&logo=python&logoColor=3776AB)

</div>

---

### 📜 Certifications

```
✦ HTML & CSS Crash Course     —  Scrimba   · 2025
✦ Responsive Web Design       —  Scrimba   · 2025
✦ Learn SQL                   —  Scrimba   · 2025
✦ Learn RAG                   —  Scrimba   · 2026
✦ PHP Crash Course            —  Udemy     · 2026
```

---

<div align="center">

**→ [pliatsikas.github.io/bio-page](https://pliatsikas.github.io/bio-page/) ←**

`Fullstack · AI · Desktop · Real-time · Production`

</div>
