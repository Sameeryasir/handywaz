import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport } from '../utils/animations'

const FEATURES = [
  'Free estimates on all projects',
  'Licensed, bonded & insured professionals',
  'On-time arrival & clean job sites',
  'Satisfaction guaranteed on every job',
]

export default function About() {
  return (
    <section id="about" className="about section section--accent">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="section-label">Who We Are</span>
          <h2>Your Trusted Partner for Every Home Project</h2>
        </motion.div>

        <div className="about__layout">
          <motion.div
            className="about__image-col"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="about__image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src="/images/home-repair.jpg" alt="Beautiful renovated home exterior" />
              <div className="about__image-frame" />
            </motion.div>
            <motion.div
              className="about__stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="about__stat-num">10+</span>
              <div>
                <strong>Years of Excellence</strong>
                <span>Serving Central Indiana</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about__content"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="about__intro">
              Handywayz Home Service and Repair is a locally owned company
              dedicated to keeping Indiana homes safe, beautiful, and functional.
              We treat every project — big or small — with the same attention to
              detail and respect for your home.
            </p>
            <p>
              From plumbing emergencies to kitchen upgrades, our skilled team
              brings honest pricing, clear communication, and workmanship you
              can count on.
            </p>

            <motion.div
              className="about__features"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {FEATURES.map((item) => (
                <motion.div key={item} className="about__feature" variants={fadeUp}>
                  <span className="about__feature-num" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              className="btn btn--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
