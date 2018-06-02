import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './supporting-platform.scss'
import RetinaImage from '../retina-image'

export default class SupportingPlatform extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    versions: PropTypes.string
  }

  render() {
    const { image, platform, versions } = this.props
    return (
      <span className="supporting-platform">
        <RetinaImage
          className="platform-icon"
          src={image}
          width="24"
          height="24"
        />
        <strong>{platform}</strong> {versions}
      </span>
    )
  }
}
