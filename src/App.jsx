import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (mainRef.current) {
      mainRef.current.classList.remove('page-enter', 'page-enter-active')
      void mainRef.current.offsetHeight
      mainRef.current.classList.add('page-enter')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mainRef.current?.classList.add('page-enter-active')
        })
      })
    }
  }, [location.pathname])

  return (
    <>
      <Nav />
      <main ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  )
}
