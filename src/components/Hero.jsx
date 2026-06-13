import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/animations'

const STATS = [
  { num: '100%', label: 'Licensed & Insured' },
  { num: 'Local', label: 'Edinburgh, Indiana' },
  { num: '5★', label: 'Rated Service' },
  { num: '24hr', label: 'Quote Response' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />

      <div className="hero__split">
        <div className="hero__left">
          <motion.div
            className="container hero__content"
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__badge" variants={fadeUp}>
              <span className="hero__badge-dot" />
              Trusted Local Home Experts
            </motion.div>
            <motion.h1 variants={fadeUp}>
              Expert Home Service
              <span className="hero__highlight">&amp; Repair</span>
            </motion.h1>
            <motion.p className="hero__lead" variants={fadeUp}>
              Handywayz delivers reliable craftsmanship for homeowners across
              Edinburgh and Central Indiana — from quick fixes to full remodels.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeUp}>
              <motion.a
                href="#contact"
                className="btn btn--primary btn--lg"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Request a Free Quote
              </motion.a>
              <motion.a
                href="#services"
                className="btn btn--navy btn--lg"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Our Services
              </motion.a>
            </motion.div>
            <motion.div className="hero__chips" variants={fadeUp}>
              {['Free Estimates', 'Same-Week Service', 'Satisfaction Guaranteed'].map((chip) => (
                <span key={chip} className="hero__chip">{chip}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-wrap">
            <motion.img
              src="/images/hero-craftsman.jpeg"
              alt="Skilled craftsman measuring wood in a professional workshop"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="hero__image-overlay" />
            <motion.div
              className="hero__image-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <strong>10+ Years</strong>
              <span>of Trusted Service</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="container hero__stats-inner"
          variants={staggerContainer(0.1, 0.9)}
          initial="hidden"
          animate="visible"
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} className="hero__stat-group" variants={fadeUp}>
              {i > 0 && <div className="hero__stat-divider" />}
              <div className="hero__stat">
                <span className="hero__stat-num">{stat.num}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
