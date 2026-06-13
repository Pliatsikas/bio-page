function BioPage() {
  return (
    <>
      <section className="hero card reveal">
        <p className="eyebrow">About me</p>
        <h1>
          I build production-ready fullstack apps and intelligent software.
        </h1>
        <p className="lede">
          I work end-to-end — from PostgreSQL schemas and REST APIs to React frontends with real-time features. I also build AI integrations and RAG pipelines, bridging research with real engineering.
        </p>
        <ul className="chip-row" aria-label="Quick facts">
          <li>Based in Thessaloniki, GR</li>
          <li>Node.js · PostgreSQL · React</li>
          <li>Fullstack Developer</li>
          <li>Always learning</li>
        </ul>
      </section>

      <section className="split reveal">
        <article className="card">
          <h2>Current Focus</h2>
          <ul className="focus-list">
            <li>
              Building TaskFlow, a production Kanban SaaS with real-time collaboration, drag &amp; drop, JWT auth and Docker deployment
            </li>
            <li>
              Developing and evaluating RAG pipelines for my university thesis at UMacedonia
            </li>
            <li>
              Building AI copilots that synthesize context for enterprise tools
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Tech Stack</h2>
          <dl className="spec-grid">
            <div>
              <dt>AI &amp; Data</dt>
              <dd>LLMs, RAG, Prompt Eng.</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>React, Next.js, TypeScript, Tailwind CSS</dd>
            </div>
            <div>
              <dt>Backend &amp; DB</dt>
              <dd>Node.js, Express, PostgreSQL, Prisma, Redis, Socket.io</dd>
            </div>
            <div>
              <dt>DevOps</dt>
              <dd>Docker, Railway, Git, JWT Auth</dd>
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
