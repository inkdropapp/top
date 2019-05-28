import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Masthead from '../components/pricing-masthead'
import PricingWhySection from '../components/pricing-why-a-subscription'
import SectionGetStarted from '../components/section-get-started'
import SectionTestimonials from '../components/section-testimonials'

const IndexPage = () => (
  <Layout pageTitle="Pricing">
    <div className="main-content">
      <Masthead />
      <PricingWhySection />
      <div className="section-get-now">
        <SectionTestimonials />
        <SectionGetStarted />
      </div>
    </div>
  </Layout>
)

export default IndexPage
