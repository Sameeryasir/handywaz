import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../utils/animations'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        className="container footer__inner"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="footer__brand" variants={fadeUp}>
          <img src="/handywayz-logo.png" alt="Handywayz" className="footer__logo" />
          <p>
            Professional home service and repair for Central Indiana
            homeowners. Quality work, honest pricing.
          </p>
        </motion.div>

        <motion.nav className="footer__nav" variants={fadeUp}>
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div className="footer__contact" variants={fadeUp}>
          <h4>Contact</h4>
          <p><strong>Sameer</strong></p>
          <p>
            <a href="mailto:admin@handywaz.com" className="footer__email">
              admin@handywaz.com
            </a>
          </p>
          <p>
            <a href="tel:+13177789254" className="footer__phone">
              (317) 778-9254
            </a>
          </p>
          <p>207 S Walnut St</p>
          <p>Edinburgh, IN 46124</p>
          <p>United States</p>
          <motion.a
            href="#contact"
            className="btn btn--primary btn--sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Quote
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Handywayz Home Service and Repair. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
