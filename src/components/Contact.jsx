import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, viewport } from '../utils/animations'

export default function Contact() {
  return (
    <section id="contact" className="contact section section--gray">
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="section-label">Get In Touch</span>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact us today for a free, no-obligation estimate. We respond
            within 24 hours.
          </p>
        </motion.div>

        <div className="contact__wrapper">
          <motion.div
            className="contact__sidebar"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3>Contact Information</h3>

            <div className="contact__item">
              <span className="contact__item-label">Contact</span>
              <p>Sameer</p>
            </div>

            <div className="contact__item">
              <span className="contact__item-label">Email</span>
              <p>
                <a href="mailto:sameeryasir02@gmail.com" className="contact__phone">
                  sameeryasir02@gmail.com
                </a>
              </p>
            </div>

            <div className="contact__item">
              <span className="contact__item-label">Phone</span>
              <p>
                <a href="tel:+13177789254" className="contact__phone">
                  (317) 778-9254
                </a>
              </p>
            </div>

            <div className="contact__item">
              <span className="contact__item-label">Location</span>
              <p>207 S Walnut St<br />Edinburgh, IN 46124<br />United States</p>
            </div>

            <div className="contact__item">
              <span className="contact__item-label">Hours</span>
              <p>
                Mon – Fri: 8:00 AM – 6:00 PM<br />
                Sat: 9:00 AM – 2:00 PM<br />
                Sun: Closed
              </p>
            </div>

            <div className="contact__item">
              <span className="contact__item-label">Service Area</span>
              <p>
                Edinburgh, Columbus, Franklin, Greenwood &amp; surrounding
                Central Indiana communities.
              </p>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! We will contact you within 24 hours.')
            }}
          >
            <h3>Request a Free Quote</h3>
            <div className="form-row">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="(317) 778-9254" required />
              </label>
            </div>
            <label>
              Email Address
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label>
              Service Needed
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service...
                </option>
                <option>General Home Repairs</option>
                <option>Kitchen Remodeling</option>
                <option>Bathroom Remodeling</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Painting & Finishing</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Project Details
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                required
              />
            </label>
            <motion.button
              type="submit"
              className="btn btn--primary btn--lg btn--full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Request
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
