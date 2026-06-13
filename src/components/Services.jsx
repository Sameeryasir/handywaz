import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../utils/animations'

const SERVICES = [
  {
    title: 'General Home Repairs',
    description:
      'Drywall patching, door adjustments, trim work, and all the small fixes that keep your home running smoothly.',
    image: '/images/home-repair.jpg',
  },
  {
    title: 'Kitchen Remodeling',
    description:
      'Transform your kitchen with custom cabinetry, countertops, backsplash, and modern fixtures.',
    image: '/images/kitchen.jpg',
  },
  {
    title: 'Bathroom Remodeling',
    description:
      'Complete bathroom renovations including tile, vanities, showers, and plumbing upgrades.',
    image: '/images/bathroom.jpg',
  },
  {
    title: 'Plumbing Services',
    description:
      'Leak repairs, faucet replacement, toilet installs, water heater service, and pipe fixes.',
    image: '/images/plumbing.jpg',
  },
  {
    title: 'Electrical Work',
    description:
      'Outlet upgrades, ceiling fan installs, light fixtures, GFCI protection, and wiring repairs.',
    image: '/images/electrical.jpg',
  },
  {
    title: 'Painting & Finishing',
    description:
      'Interior and exterior painting, staining, caulking, and surface prep for a flawless finish.',
    image: '/images/painting.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="section-label section-label--light">What We Do</span>
          <h2>Complete Home Service Solutions</h2>
          <p>
            One trusted team for every repair and renovation — no need to
            coordinate multiple contractors.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <span className="service-card__num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-card__image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-card__link">
                  Get a Quote
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
