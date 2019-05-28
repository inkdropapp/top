import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Testimonials from '../components/reviews-section-testimonials'

const ReviewsPage = () => (
  <Layout pageTitle="Pricing">
    <div className="main-content">
      <Testimonials />
    </div>
  </Layout>
)

export default ReviewsPage
