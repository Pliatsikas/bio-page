import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Screenshots live in /public/projects/repair-shop-app/ and are resolved
// through BASE_URL so they also work under the /bio-page/ GitHub Pages prefix.
const shot = (n) => `${import.meta.env.BASE_URL}projects/repair-shop-app/screenshot-${n}.png`

function RepairShopCaseStudy() {
  // Coming from the projects grid mid-scroll, start the case study at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="card reveal">
        <p className="eyebrow">Case study · Freelance delivery</p>
        <h1>Custom Desktop App for Repair Shop Management</h1>
        <p className="lede">
          An offline-first Electron application that replaced a legacy MS Access
          database at a small electronics repair business — one screen per
          repair, autosave, search, status tracking, Excel/Access import and
          a PIN-locked local SQLite database.
        </p>
        <ul className="chip-row">
          <li>React</li>
          <li>TypeScript</li>
          <li>Electron + electron-vite</li>
          <li>Prisma</li>
          <li>SQLite</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section className="split reveal">
        <article className="card">
          <p className="eyebrow">Problem</p>
          <h2>A legacy Access database</h2>
          <p className="case-text">
            A small electronics repair business managed its customers and
            repairs through an outdated MS Access database — slow, no modern
            UI, hard to maintain. Roughly 2,600 historical repair records
            lived in it, so any replacement had to bring the data along and
            feel familiar to a non-technical owner used to the old form.
          </p>
        </article>

        <article className="card">
          <p className="eyebrow">My role</p>
          <h2>Full lifecycle</h2>
          <p className="case-text">
            Requirements gathering with the owner, data model and UI
            design, development, testing, packaging a Windows installer, and
            delivery/installation on the client&rsquo;s machine — followed by
            a feedback round after the first week of real use.
          </p>
        </article>
      </section>

      <section className="card reveal">
        <p className="eyebrow">Solution</p>
        <h2>One record-card screen, built around how the shop already works</h2>
        <p className="case-text">
          Instead of a dashboard, the app keeps the mental model the owner
          already had: a single repair card with record-by-record navigation
          (first / previous / next / last), grouped into Customer, Device,
          Fault &amp; Work, and Status &amp; Accounting sections. Everything
          runs locally — no server, no account, no internet required.
        </p>
        <ul className="focus-list case-features">
          <li>
            <strong>Autosave</strong> — changes persist ~1 s after the last
            keystroke with a visible saved / unsaved / saving indicator; any
            navigation flushes pending edits first so nothing is lost.
          </li>
          <li>
            <strong>Smart dropdowns</strong> — brand, size, fault, accessories,
            spare parts and status are dynamic lists with autocomplete,
            multi-select, keyboard navigation and a <code>+</code> button to
            add a new option on the fly.
          </li>
          <li>
            <strong>Search &amp; status lists</strong> — <code>Ctrl+F</code>{' '}
            search across serial number, phone, name, brand and model; a
            status filter with live counters (e.g. &ldquo;READY (6)&rdquo;).
          </li>
          <li>
            <strong>Duplicate serial detection</strong> — entering a serial
            number that already exists shows every previous repair of that
            device, with one-click jump to each record.
          </li>
          <li>
            <strong>Copy record</strong> — start a new job for a returning
            device with all details pre-filled.
          </li>
          <li>
            <strong>Photo per repair</strong> — optional image with a caption,
            stored as a local file rather than a database blob.
          </li>
          <li>
            <strong>Print</strong> — a clean black-and-white A4 repair slip
            generated from the current record.
          </li>
          <li>
            <strong>Excel import / export</strong> with a validation preview,
            plus <strong>direct import of the old Access file</strong> — the
            legacy <code>.mdb</code> is read in-app, no manual conversion.
          </li>
          <li>
            <strong>PIN lock &amp; safety</strong> — PIN on every launch
            (scrypt-hashed, one-time recovery code, lockout after failed
            attempts), PIN confirmation before deleting a record, and automatic
            daily backups with 30-day rotation.
          </li>
        </ul>
      </section>

      <section className="card reveal">
        <p className="eyebrow">Tech stack</p>
        <h2>Under the hood</h2>
        <dl className="spec-grid case-spec">
          <div>
            <dt>Shell</dt>
            <dd>Electron + electron-vite, packaged as a Windows NSIS installer</dd>
          </div>
          <div>
            <dt>UI</dt>
            <dd>React 19, TypeScript, Tailwind CSS (dark, industrial theme)</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>Prisma ORM over a local SQLite file in the user&rsquo;s app data folder</dd>
          </div>
          <div>
            <dt>Security</dt>
            <dd>Context isolation, typed preload API, auth-gated IPC with error sanitisation</dd>
          </div>
          <div>
            <dt>Import / export</dt>
            <dd>ExcelJS for .xlsx, mdb-reader for the legacy Access database</dd>
          </div>
        </dl>
      </section>

      <section className="card reveal">
        <p className="eyebrow">Screenshots</p>
        <h2>The app in use</h2>
        <p className="case-text">
          Captured from the delivered build. Business name and contact
          details have been removed.
        </p>
        <div className="case-gallery">
          {/* Files live in /public/projects/repair-shop-app/ — swap the PNGs to update. */}
          <figure>
            <img src={shot(2)} alt="Repair card — customer and device sections" loading="lazy" />
            <figcaption>Repair card — customer &amp; device</figcaption>
          </figure>
          <figure>
            <img src={shot(3)} alt="Repair card — fault, work, status and accounting sections" loading="lazy" />
            <figcaption>Fault &amp; work, status &amp; accounting</figcaption>
          </figure>
          <figure>
            <img src={shot(4)} alt="Status filter dropdown with live record counters" loading="lazy" />
            <figcaption>Status list with live counters</figcaption>
          </figure>
          <figure>
            <img src={shot(5)} alt="Printed A4 repair slip in black and white" loading="lazy" />
            <figcaption>Printable A4 repair slip</figcaption>
          </figure>
          <figure className="wide">
            <img src={shot(1)} alt="PIN lock screen shown on every launch" loading="lazy" />
            <figcaption>PIN lock on launch</figcaption>
          </figure>
        </div>
      </section>

      <section className="card reveal case-note">
        <p className="eyebrow">Note</p>
        <p className="case-text">
          The full source code is private under a client agreement
          (work-for-hire), so there is no public repository for this project.
        </p>
        <Link className="btn cursor-target" to="/projects">
          &larr; Back to projects
        </Link>
      </section>
    </>
  )
}

export default RepairShopCaseStudy
