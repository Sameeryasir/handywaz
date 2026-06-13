import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewport } from '../utils/animations'

const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Edinburgh, IN',
    rating: 5,
    text: 'Handywayz fixed our leaking pipes and repainted the entire living room in one visit. Professional, on time, and the price was exactly what they quoted. Highly recommend!',
  },
  {
    name: 'James T.',
    location: 'Columbus, IN',
    rating: 5,
    text: 'We hired them for a full bathroom remodel and couldn\'t be happier. They communicated every step, kept the workspace clean, and the finished result looks amazing.',
  },
  {
    name: 'Linda K.',
    location: 'Franklin, IN',
    rating: 5,
    text: 'Finally found a handyman who actually shows up when they say they will. Fixed our ceiling fan, patched drywall, and installed new kitchen hardware — all in one afternoon.',
  },
]

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials section">
      <div className="container">
        <div className="testimonials__top">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="section-label">Client Reviews</span>
            <h2>What Our Customers Say</h2>
          </motion.div>
          <motion.div
            className="testimonials__rating-badge"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="testimonials__rating-num">5.0</span>
            <Stars count={5} />
            <span>Google Rated</span>
          </motion.div>
        </div>

        <motion.div
          className="testimonials__grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {REVIEWS.map((review) => (
            <motion.blockquote
              key={review.name}
              className="review-card"
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <span className="review-card__quote" aria-hidden="true">&ldquo;</span>
              <Stars count={review.rating} />
              <p>{review.text}</p>
              <footer>
                <div className="review-card__avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
