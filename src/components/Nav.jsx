import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HOME_SECTIONS = ['hero', 'about', 'skills', 'work', 'awards', 'education', 'contact']

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll spy — only on home
  useEffect(() => {
    if (!isHome) return
    function onScroll() {
      let current = 'hero'
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  function scrollTo(id) {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350)
    }
  }

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">Himanshu Suri</NavLink>
      <ul className="nav-links">
        {/* React Router page links */}
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link nav-link-router${isActive ? ' active' : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link nav-link-router${isActive ? ' active' : ''}`}
          >
            Projects
          </NavLink>
        </li>

        {/* Scroll-spy anchor links (always visible, scroll from anywhere) */}
        {[
          { id: 'about',     label: 'About' },
          { id: 'work',      label: 'Work' },
          { id: 'awards',    label: 'Awards' },
          { id: 'education', label: 'Education' },
          { id: 'contact',   label: 'Contact' },
        ].map(({ id, label }) => (
          <li key={id}>
            <button
              className={`nav-link${isHome && activeSection === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
