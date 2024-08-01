import './section-testimonials.less'
import React from 'react'
import { Link } from 'gatsby'
import SectionFifth from './section-fifth'
import SenjaTestimonialCarousel from './senja-carousel-widget'

const TestimonialsSection = () => {
  return (
    <SectionFifth id="testimonials">
      <div className="ui text container">
        <h2 className="ui header">
          <div className="content">
            Trusted by developers around the world
            <Link
              className="ui rounded tiny button"
              to="https://love.inkdrop.app/"
            >
              See all
              <i className="angle double right icon" />
            </Link>
          </div>
        </h2>
      </div>
      <SenjaTestimonialCarousel />
    </SectionFifth>
  )
}

export default TestimonialsSection
