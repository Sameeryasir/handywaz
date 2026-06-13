import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../utils/animations'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__glow" />
      <div className="container cta-banner__inner">
        <motion.div
          className="cta-banner__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="cta-banner__label">Free Estimates</span>
          <h2>Ready to Transform Your Home?</h2>
          <p>
            Get a free, no-obligation quote from Central Indiana&apos;s trusted
            home service experts. Fast response, honest pricing.
          </p>
        </motion.div>
        <motion.div
          className="cta-banner__actions"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            href="#contact"
            className="btn btn--white btn--lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Your Free Quote
          </motion.a>
          <motion.a
            href="tel:+13177789254"
            className="btn btn--ghost btn--lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Call Us Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
