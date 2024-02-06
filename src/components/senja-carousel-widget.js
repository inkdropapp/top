import './section-testimonials.less'
import { Script } from 'gatsby'
import React from 'react'

const SenjaTestimonialCarousel = () => {
  return (
    <div>
      <div
        className="senja-embed"
        data-id="cdf731cd-a39c-4cb7-a6bd-6d1652799e09"
        data-lazyload="false"
      ></div>

      <Script
        async
        type="text/javascript"
        src="https://static.senja.io/dist/platform.js"
      ></Script>
    </div>
  )
}

export default SenjaTestimonialCarousel
