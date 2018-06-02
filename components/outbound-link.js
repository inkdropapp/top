import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ga from 'ga-react-router'

export default class OutboundLink extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={this.handleOutboundLinkClick}
        {...this.props}
      >
        {this.props.children}
      </a>
    )
  }

  handleOutboundLinkClick(e) {
    const target = e.currentTarget
    ga('send', 'event', {
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      eventLabel: target.href
    })
  }
}
