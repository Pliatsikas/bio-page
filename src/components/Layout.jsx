import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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

    const orbs = Array.from(document.querySelectorAll('.orb'))
    let frame = null

    const onMove = (event) => {
      if (frame) {
        cancelAnimationFrame(frame)
      }

      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5

        orbs[0].style.transform = `translate(${x * -26}px, ${y * -18}px)`
        orbs[1].style.transform = `translate(${x * 22}px, ${y * 14}px)`
      })
    }

    if (orbs.length === 2) {
      window.addEventListener('pointermove', onMove, { passive: true })
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
      if (frame) {
        cancelAnimationFrame(frame)
      }
      if (orbs.length === 2) {
        window.removeEventListener('pointermove', onMove)
      }
    }
  }, [location.pathname])

  const navClassName = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <>
      <div className="page-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="page-shell">
        <header className="site-header reveal">
          <NavLink className="brand" to="/" aria-label="Home">
            <span className="logo" aria-hidden="true">
              AP
            </span>
            <span className="brand-copy">
              <strong>Alex Pliatsikas</strong>
              <small>Systems, Web, AI, Tooling</small>
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
