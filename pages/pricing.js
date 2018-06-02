import React, { Component } from 'react'
import PricingMasthead from '../components/pricing-page/masthead'
import ReasonSection from '../components/pricing-page/reason-section'
import TestimonialsSection from '../components/top-page/testimonials'
import GetNowSection from '../components/features-page/getnow-section'

export default class Pricing extends Component {
  static title = 'Pricing'

  render() {
    return (
      <article className="app--top">
        <PricingMasthead />
        <ReasonSection />
        <TestimonialsSection />
        <GetNowSection />
      </article>
    )
  }
}
