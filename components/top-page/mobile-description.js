import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './supporting-platform.scss'
import SupportingPlatform from './supporting-platform'
import RetinaImage from '../retina-image'
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
          <RetinaImage
            className="screenshot"
            src="/top/mobile.png"
            width="1500"
            height="1000"
          />
        </div>
      </div>
    )
  }
}
