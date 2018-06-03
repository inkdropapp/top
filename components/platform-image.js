import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getPlatform from './utils/platform'

export default class PlatformImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    macOS: PropTypes.string,
    windows: PropTypes.string,
    linux: PropTypes.string,
    android: PropTypes.string,
    iOS: PropTypes.string,
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
    const {
      src: defaultSrc,
      macOS,
      windows,
      linux,
      iOS,
      android,
      className,
      width,
      height,
      alt
    } = this.props
    const { platform } = this.state
    let src = defaultSrc
    switch (platform) {
      case 'macos':
        src = macOS || src
        break
      case 'android':
        src = android || src
        break
      case 'ios':
        src = iOS || src
        break
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
