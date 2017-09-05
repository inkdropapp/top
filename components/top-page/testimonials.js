import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './testimonials.scss'
import OutboundLink from '../outbound-link'

export default class TestimonialsSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <section className='white-bg light testimonials-section'>
        <div className='ui container'>
          <h1>Inkdrop is made for developers like you</h1>
          <div className='ui stackable grid three columns'>
            <div className='column'>
              <div className='testimonial-item'>
                <p>
                  Your application is a life changer.
                  I&apos;ve tried numerous markdown based applications over the years and I&apos;m so pleased to finally find a keeper!
                  Awesome work!
                </p>
                <div className='testmonial-by'>
                  <img src='/testimonials/james.jpg' />
                  — <strong>James Lilliott</strong>.
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='testimonial-item'>
                <p>
                  Inkdrop is all very user-friendly and looks absolutely fantastic.
                </p>
                <div className='testmonial-by'>
                  <img src='/testimonials/john.png' />
                  — <strong>
                    <OutboundLink href='http://alternativeto.net/software/inkdrop/reviews/'>
                      John Fastman
                    </OutboundLink>
                  </strong>.
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='testimonial-item'>
                <p>
                  The search for the perfect note-taking app is finally over.
                  It&apos;s elegant, well designed, simple, and functional.
                </p>
                <div className='testmonial-by'>
                  — <strong>
                    <OutboundLink href='http://alternativeto.net/software/inkdrop/reviews/'>
                      fletcher
                    </OutboundLink>
                  </strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
