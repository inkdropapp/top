import React, { Component } from 'react'
import PricingMasthead from '../components/pricing-page/masthead'
import FaqSection from '../components/pricing-page/faq-section'

export default class Pricing extends Component {
  static title = 'Pricing'

  render () {
    return (
      <article className='app--top'>
        <PricingMasthead />
        <FaqSection />
      </article>
    )
  }
}
