import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CtaBanner from './components/CtaBanner'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
