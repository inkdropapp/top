import './section-testimonials.less'
import { Script } from 'gatsby'
import React from 'react'

const SenjaTestimonialCarousel = () => {
  return (
    <div className="ui container">
      <div
        className="senja-embed"
        data-id="a94c253b-3a23-426e-97cc-0a200e4ea00b"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      <Script
        async
        type="text/javascript"
        src="https://widget.senja.io/widget/a94c253b-3a23-426e-97cc-0a200e4ea00b/platform.js"
      ></Script>
    </div>
  )
}

export default SenjaTestimonialCarousel
