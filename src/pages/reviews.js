import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Testimonials from '../components/reviews-section-testimonials'
import AlternativeToRatings from '../components/alternativeto-ratings'
import SectionGetStarted from '../components/section-get-started'

const ReviewsPage = () => (
  <Layout pageTitle="Pricing">
    <div className="main-content">
      <div className="section-get-now">
        <Testimonials />
        <AlternativeToRatings />
        <SectionGetStarted />
      </div>
    </div>
  </Layout>
)

export default ReviewsPage
