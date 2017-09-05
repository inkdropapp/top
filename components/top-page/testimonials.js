import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './testimonials.scss'
// import OutboundLink from '../outbound-link'

export default class TestimonialsSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <section className='white-bg light testimonials-section'>
        <h2>What Customers Say</h2>
        <div className='ui text container'>
          <i className='quote left icon' />
          <div className='testimonial-item'>
            <p>
              Your application is a life changer.
              I&apos;ve tried numerous markdown based applications over the years and I&apos;m so pleased to finally find a keeper!
              Awesome work!
            </p>
            <div className='testmonial-by'>
              — <strong>James Lilliott</strong>
              <img src='/testimonials/james.jpg' />
            </div>
          </div>
          <div className='right aligned'>
            <i className='quote right icon' />
          </div>
        </div>
      </section>
    )
  }
}
