// Public verification link printed on the certificate itself.
const IBM_CREDENTIAL_URL =
  'https://coursera.org/verify/professional-cert/G73KBPBS2UH6'

function CertificatesPage() {
  return (
    <>
      <section className="card reveal">
        <p className="eyebrow">Education</p>
        <h1>Certificates</h1>
        <p className="lede">
          A snapshot of recent certifications and upskilling milestones.
        </p>
      </section>

      <section className="card reveal cert-featured">
        <p className="eyebrow">Professional Certificate · Oct 2026</p>
        <h2>IBM Full Stack Software Developer</h2>
        <p className="cert-featured-sub">IBM · Coursera — 15 courses</p>
        <p className="cert-featured-text">
          A 15-course program across the full stack: HTML/CSS/JavaScript and
          React on the front end, Node.js, Express, Python, Flask and Django on
          the back end, SQL and NoSQL databases, containers with Docker,
          Kubernetes and OpenShift, microservices and serverless, plus CI/CD and
          application security — closing with a capstone project delivering a
          cloud-native SaaS application.
        </p>
        <ul className="chip-row">
          <li>React</li>
          <li>Node.js &amp; Express</li>
          <li>Python · Flask · Django</li>
          <li>SQL &amp; NoSQL</li>
          <li>Docker · Kubernetes · OpenShift</li>
          <li>Microservices &amp; Serverless</li>
          <li>CI/CD</li>
          <li>Capstone project</li>
        </ul>
        {IBM_CREDENTIAL_URL && (
          <a
            className="btn cursor-target"
            href={IBM_CREDENTIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View credential
          </a>
        )}
      </section>

      <section className="card reveal">
        <p className="eyebrow">Also completed</p>
        <ul className="cert-list">
          <li className="cert-item">
            <h2>Learn RAG</h2>
            <p>Scrimba · 2026</p>
          </li>
          <li className="cert-item">
            <h2>PHP Crash Course</h2>
            <p>Udemy · 2026</p>
          </li>
          <li className="cert-item">
            <h2>Learn React</h2>
            <p>Scrimba · 2025</p>
          </li>
          <li className="cert-item">
            <h2>HTML &amp; CSS Crash Course</h2>
            <p>Scrimba · 2025</p>
          </li>
          <li className="cert-item">
            <h2>Responsive Web Design</h2>
            <p>Scrimba · 2025</p>
          </li>
          <li className="cert-item">
            <h2>Learn SQL</h2>
            <p>Scrimba · 2025</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default CertificatesPage
