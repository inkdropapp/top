import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getPlatform from './utils/platform'

export default class PlatformImage extends Component {
  static propTypes = {
    macOS: PropTypes.string.isRequired,
    windows: PropTypes.string,
    linux: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = { platform: getPlatform() }
  }

  render() {
    const { macOS, windows, linux, className, width, height, alt } = this.props
    const { platform } = this.state
    let src = macOS
    switch (platform) {
      case 'windows':
        src = windows || src
        break
      case 'linux':
        src = linux || src
        break
      default:
        src = macOS || src
    }

    return (
      <img
        src={src}
        srcSet={`${src} 2x`}
        className={`platform-image ${className}`}
        width={width}
        height={height}
        alt={alt}
      />
    )
  }
}
