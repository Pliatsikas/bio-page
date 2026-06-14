function ProjectsPage() {
  return (
    <>
      <section className="card reveal">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected Projects</h1>
        <p className="lede">
          A focused set of projects around web interfaces, tooling, and
          automation.
        </p>
      </section>

      <section className="projects-grid reveal">
        <article className="card project-card">
          <p className="eyebrow">Fullstack</p>
          <h2>TaskFlow — Task Management SaaS</h2>
          <p>
            A production-ready Kanban app built from scratch. Features a monorepo architecture, REST API with JWT auth and refresh tokens, real-time drag-and-drop boards via WebSockets, PostgreSQL with Prisma ORM, and Docker deployment on Railway.
          </p>
          <div className="tag-row" style={{ alignItems: 'center' }}>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Socket.io</span>
            <span>Docker</span>
            <span>TypeScript</span>
            <a className="btn cursor-target" href="https://client-production-8121.up.railway.app" style={{ margin: 0, alignSelf: 'center' }}>
              Live Demo
            </a>
            <a className="btn cursor-target" href="https://github.com/Pliatsikas/TaskFlow" style={{ margin: 0, alignSelf: 'center' }}>
              Source Code
            </a>
          </div>
        </article>

        <article className="card project-card">
          <p className="eyebrow">Automation</p>
          <h2>Rentalbook OCR Engine</h2>
          <p>
            Engineered a high-precision Optical Character Recognition (OCR)
            pipeline for the Rentalbook platform. It instantly scans and
            extracts critical data points from passports and national ID cards,
            dynamically automating user verification.
          </p>
          <div className="tag-row" style={{ alignItems: 'center' }}>
            <span>OCR</span>
            <span>Computer Vision</span>
            <span>Automation</span>
            {/* <a className="btn" href="#" style={{ margin: 0, alignSelf: 'center' }}>
              Project details
            </a> */}
          </div>
        </article>

        <article className="card project-card">
          <p className="eyebrow">AI</p>
          <h2>E-Avenue Jira AI Copilot</h2>
          <p>
            An intelligent workspace assistant leveraging cutting-edge
            Retrieval-Augmented Generation (RAG). It synthesizes vast knowledge
            bases and historical Jira tickets to provide instant, accurate
            answers and accelerate issue resolution.
          </p>
          <div className="tag-row" style={{ alignItems: 'center' }}>
            <span>Generative AI</span>
            <span>RAG</span>
            <span>NLP</span>
            {/* <a className="btn" href="#" style={{ margin: 0, alignSelf: 'center' }}>
              Project details
            </a> */}
          </div>
        </article>

        <article className="card project-card">
          <p className="eyebrow">WebGL</p>
          <h2>Aura Immersive Web Experience</h2>
          <p>
            A next-generation architectural portfolio built with Next.js and React Three Fiber. Features real-time WebGL fluid simulations and custom shaders for a deeply tactile digital experience.
          </p>
          <div className="tag-row" style={{ alignItems: 'center' }}>
            <span>WebGL</span>
            <span>Framer Motion</span>
            <span>Next.js</span>
            <a className="btn cursor-target" href="https://aura-sand-pi.vercel.app/" style={{ margin: 0, alignSelf: 'center' }}>
              Project details
            </a>
          </div>
        </article>

        <article className="card project-card">
          <p className="eyebrow">Documentation</p>
          <h2>Markdown, MkDocs, and Material for MkDocs</h2>
          <p>
            I build clear, structured documentation that turns notes into
            maintainable knowledge bases and polished docs sites.
          </p>
          <div className="tag-row" style={{ alignItems: 'center' }}>
            <span>Markdown</span>
            <span>MkDocs</span>
            <span>Material</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default ProjectsPage
