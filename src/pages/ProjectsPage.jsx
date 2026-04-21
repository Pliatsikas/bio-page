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
          <h2>Meatllab Concept Brand</h2>
          <p>
            Built a visual system and landing concept for an industrial-style
            brand identity with reusable style tokens.
          </p>
          <div className="tag-row">
            <span>Branding</span>
            <span>UI System</span>
            <span>Prototype</span>
          </div>
          <a className="btn" href="#">
            Project details
          </a>
        </article>

        <article className="card project-card">
          <h2>Rentalbook OCR Engine</h2>
          <p>
            Engineered a high-precision Optical Character Recognition (OCR)
            pipeline for the Rentalbook platform. It instantly scans and
            extracts critical data points from passports and national ID cards,
            dynamically automating user verification.
          </p>
          <div className="tag-row">
            <span>OCR</span>
            <span>Computer Vision</span>
            <span>Automation</span>
          </div>
        </article>

        <article className="card project-card">
          <h2>E-Avenue Jira AI Copilot</h2>
          <p>
            An intelligent workspace assistant leveraging cutting-edge
            Retrieval-Augmented Generation (RAG). It synthesizes vast knowledge
            bases and historical Jira tickets to provide instant, accurate
            answers and accelerate issue resolution.
          </p>
          <div className="tag-row">
            <span>Generative AI</span>
            <span>RAG</span>
            <span>NLP</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default ProjectsPage
