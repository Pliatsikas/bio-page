import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import DotGrid from './DotGrid'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    document.body.classList.add('js')

    const yearNode = document.getElementById('current-year')
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear())
    }

    const revealNodes = Array.from(document.querySelectorAll('.reveal'))
    let observer = null

    if (revealNodes.length > 0 && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.16, rootMargin: '0px 0px -20px 0px' },
      )

      revealNodes.forEach((node, index) => {
        node.classList.remove('in')
        node.style.transitionDelay = `${Math.min(index * 60, 220)}ms`
        observer.observe(node)
      })
    } else {
      revealNodes.forEach((node) => {
        node.classList.add('in')
      })
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [location.pathname])

  const navClassName = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <>
      <div className="page-bg" aria-hidden="true">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#4A415D"
          activeColor="#8F74FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          returnDuration={1.5}
        />
      </div>

      <div className="page-shell">
        <header className="site-header reveal">
          <NavLink className="brand" to="/" aria-label="Home">
            <span className="logo" aria-hidden="true">
              AP
            </span>
            <span className="brand-copy">
              <strong>Alex Pliatsikas</strong>
              <small>Fullstack · AI · Systems · Tooling</small>
            </span>
          </NavLink>

          <nav className="site-nav" aria-label="Main navigation">
            <NavLink className={navClassName} to="/" end>
              Bio
            </NavLink>
            <NavLink className={navClassName} to="/projects">
              Projects
            </NavLink>
            <NavLink className={navClassName} to="/certificates">
              Certificates
            </NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="site-footer reveal">
          <p>
            Contact:{' '}
            <a href="mailto:alexandrospliatsikas8@gmail.com">
              alexandrospliatsikas8@gmail.com
            </a>
          </p>
          <p>
            &copy; <span id="current-year"></span> Alex Pliatsikas
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
