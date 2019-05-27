import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Masthead from '../components/pricing-masthead'
import PricingWhySection from '../components/pricing-why-a-subscription'

const IndexPage = () => (
  <Layout pageTitle="Pricing">
    <div className="main-content">
      <Masthead />
      <PricingWhySection />
    </div>
  </Layout>
)

export default IndexPage
