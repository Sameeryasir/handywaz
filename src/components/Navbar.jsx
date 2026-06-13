import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__accent" />
      <div className="container navbar__inner">
        <motion.a
          href="#home"
          className="navbar__brand"
          onClick={handleNavClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src="/handywayz-logo.png"
            alt="Handywayz Home Service and Repair"
            className="navbar__logo"
          />
        </motion.a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            className="btn btn--primary navbar__cta"
            onClick={handleNavClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Quote
          </motion.a>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNavClick}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
