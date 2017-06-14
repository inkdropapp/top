import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './keep-in-touch-section.scss'
import OutboundLink from '../outbound-link'

export default class KeepInTouchSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <section className='white-bg light keep-in-touch-section'>
        <h2>Keep in touch on social media</h2>
        <OutboundLink
          className='ui twitter button'
          href='https://twitter.com/inkdrop_app'>
          <i className='twitter icon' />
          @inkdrop_app
        </OutboundLink>
        <OutboundLink
          className='ui twitter button'
          href='https://twitter.com/craftzdog'>
          <i className='twitter icon' />
          @craftzdog
        </OutboundLink>
      </section>
    )
  }
}
