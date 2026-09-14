function BioPage() {
  return (
    <>
      <section className="hero card reveal">
        <p className="eyebrow">About me</p>
        <h1>
          I build production-ready fullstack apps and intelligent software.
        </h1>
        <p className="lede">
          I work end-to-end — from database schemas and APIs to React frontends, whether that&rsquo;s a web SaaS, an LLM product or a desktop app delivered to a real client. I also build RAG pipelines and AI integrations, bridging research with real engineering.
        </p>
        <ul className="chip-row" aria-label="Quick facts">
          <li>Based in Thessaloniki, GR</li>
          <li>Next.js · Node.js · PostgreSQL</li>
          <li>Fullstack Developer</li>
          <li>Always learning</li>
        </ul>
      </section>

      <section className="split reveal">
        <article className="card">
          <h2>Current Focus</h2>
          <ul className="focus-list">
            <li>
              Building Job Hunt Copilot — an LLM app that scores job ads against your CV with verbatim evidence, flags gaps and writes cover letters that don&rsquo;t oversell
            </li>
            <li>
              Developing and evaluating RAG pipelines for my university thesis at UMacedonia
            </li>
            <li>
              Delivering software to real clients — most recently an offline-first Electron app that replaced a repair shop&rsquo;s MS Access database
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Tech Stack</h2>
          <dl className="spec-grid">
            <div>
              <dt>AI &amp; Data</dt>
              <dd>LLMs, RAG, Prompt Eng., Zod</dd>
            </div>
            <div>
              <dt>Frontend &amp; Desktop</dt>
              <dd>React, Next.js, TypeScript, Tailwind CSS, Electron</dd>
            </div>
            <div>
              <dt>Backend &amp; DB</dt>
              <dd>Node.js, Express, PostgreSQL, SQLite, Prisma, Redis, Socket.io</dd>
            </div>
            <div>
              <dt>DevOps &amp; Testing</dt>
              <dd>Docker, Vercel, Render, Vitest, Playwright, Git</dd>
            </div>
            <div>
              <dt>Design</dt>
              <dd>Photoshop, Premiere</dd>
            </div>
            <div>
              <dt>Dev Tools</dt>
              <dd>VS Code, Unix (zsh)</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="card reveal">
        <h2>Skill Snapshot</h2>
        <ul className="meter-list">
          <li>
            <div className="meter-head">
              <span>AI Integration &amp; RAG</span>
              <span>85%</span>
            </div>
            <div className="meter">
              <i style={{ width: '85%' }}></i>
            </div>
          </li>
          <li>
            <div className="meter-head">
              <span>Fullstack Development</span>
              <span>90%</span>
            </div>
            <div className="meter">
              <i style={{ width: '90%' }}></i>
            </div>
          </li>
          <li>
            <div className="meter-head">
              <span>Backend &amp; DevOps</span>
              <span>80%</span>
            </div>
            <div className="meter">
              <i style={{ width: '80%' }}></i>
            </div>
          </li>
          <li>
            <div className="meter-head">
              <span>Programming Foundations</span>
              <span>85%</span>
            </div>
            <div className="meter">
              <i style={{ width: '85%' }}></i>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default BioPage
