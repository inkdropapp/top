import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RetinaImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  render () {
    const { src, ...props } = this.props
    const retinaSrc = src.replace(/(\.\w+$)/, '@2x$1')
    return (
      <img
        src={src}
        srcSet={`${src} 1x, ${retinaSrc} 2x`}
        {...props} />
    )
  }
}
