import { motion } from 'framer-motion'
import { scaleIn, fadeUp, staggerContainer, viewport } from '../utils/animations'

const PROJECTS = [
  {
    title: 'Kitchen Transformation',
    category: 'Remodeling',
    image: '/images/kitchen.jpg',
    size: 'large',
  },
  {
    title: 'Spa-Style Bathroom',
    category: 'Bathroom',
    image: '/images/bathroom.jpg',
    size: 'small',
  },
  {
    title: 'Whole-Home Painting',
    category: 'Painting',
    image: '/images/painting.jpg',
    size: 'small',
  },
  {
    title: 'Plumbing Upgrade',
    category: 'Plumbing',
    image: '/images/plumbing.jpg',
    size: 'large',
  },
  {
    title: 'Drywall Patch & Repair',
    category: 'Home Fixes',
    image: '/images/drywall-repair.jpg',
    size: 'small',
  },
  {
    title: 'Door Installation',
    category: 'Carpentry',
    image: '/images/door-install.jpg',
    size: 'small',
  },
  {
    title: 'Deck Restoration',
    category: 'Outdoor',
    image: '/images/deck-repair.jpg',
    size: 'large',
  },
  {
    title: 'Flooring Replacement',
    category: 'Flooring',
    image: '/images/flooring-fix.jpg',
    size: 'small',
  },
  {
    title: 'Electrical Upgrade',
    category: 'Electrical',
    image: '/images/electrical.jpg',
    size: 'small',
  },
  {
    title: 'Ceiling Fan Install',
    category: 'Electrical',
    image: '/images/ceiling-fan.jpg',
    size: 'large',
  },
  {
    title: 'Fence Repair',
    category: 'Outdoor',
    image: '/images/fence-repair.jpg',
    size: 'small',
  },
  {
    title: 'Window & Trim Work',
    category: 'Home Fixes',
    image: '/images/window-repair.jpg',
    size: 'small',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section section--dark">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="section-label section-label--light">Our Work</span>
          <h2>Projects That Speak for Themselves</h2>
          <p>
            Quality craftsmanship on every job — from kitchen remodels to
            everyday home fixes across Central Indiana.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {PROJECTS.map((project) => (
            <motion.figure
              key={project.title}
              className={`project-card project-card--${project.size}`}
              variants={scaleIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
            >
              <img src={project.image} alt={project.title} />
              <figcaption>
                <span className="project-card__category">{project.category}</span>
                <h3>{project.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          className="projects__cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            href="#contact"
            className="btn btn--primary btn--lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
