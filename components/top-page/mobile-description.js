import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './supporting-platform.scss'
import SupportingPlatform from './supporting-platform'
import './mobile-description.scss'

export default class MobileDescription extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired
  }

  render() {
    const { active } = this.props
    return (
      <div className={`description-mobile ${active ? 'active' : ''}`}>
        <div className="description">
          <SupportingPlatform
            image="/top/apple-logo-small.png"
            platform="iOS"
            versions="10+"
          />
          <SupportingPlatform
            image="/top/android-logo-small.png"
            platform="Android"
            versions="7.0+"
          />
        </div>
        <div className="ui image">
          <img
            className="screenshot"
            src="/top/mobile.png"
            srcSet="/top/mobile.png 2x"
            width="1000"
            height="700"
          />
        </div>
      </div>
    )
  }
}
