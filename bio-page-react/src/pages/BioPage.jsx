function BioPage() {
  return (
    <>
      <section className="hero card reveal">
        <p className="eyebrow">About me</p>
        <h1>
          I build intelligent software, AI integrations, and creative digital
          experiences.
        </h1>
        <p className="lede">
          I focus on clean architecture, context-aware workflows, and practical
          problem-solving. Currently, my university thesis drives my research
          deep into Large Language Models (LLMs) and Retrieval-Augmented
          Generation (RAG), bridging AI with my full-stack web and reliable
          tooling background.
        </p>
        <ul className="chip-row" aria-label="Quick facts">
          <li>Based in Thessaloniki, GR</li>
          <li>LLM &amp; RAG Researcher</li>
          <li>Always learning</li>
        </ul>
      </section>

      <section className="split reveal">
        <article className="card">
          <h2>Current Focus</h2>
          <ul className="focus-list">
            <li>
              Developing RAG pipelines and evaluating LLMs for my university
              thesis
            </li>
            <li>
              Building AI copilots that synthesize context for enterprise tools
            </li>
            <li>
              Delivering modern responsive frontends with clean component
              architecture
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
              <dt>Languages</dt>
              <dd>JavaScript, Python, PHP, SQL, React</dd>
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
              <span>Frontend Development</span>
              <span>90%</span>
            </div>
            <div className="meter">
              <i style={{ width: '90%' }}></i>
            </div>
          </li>
          <li>
            <div className="meter-head">
              <span>Creative Suite</span>
              <span>80%</span>
            </div>
            <div className="meter">
              <i style={{ width: '80%' }}></i>
            </div>
          </li>
          <li>
            <div className="meter-head">
              <span>Programming Foundations</span>
              <span>75%</span>
            </div>
            <div className="meter">
              <i style={{ width: '75%' }}></i>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default BioPage
