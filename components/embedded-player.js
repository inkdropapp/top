import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../semantic/dist/components/embed.js'
import '../semantic/dist/components/embed.css'

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.node,
    imageSrc: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  componentDidMount () {
    $('.ui.embed').embed()
  }

  render () {
    return (
      <div className={`ui image ${this.props.className}`}>
        <div
          className='ui embed'
          data-source={this.props.source}
          data-id={this.props.videoId}
          data-placeholder={this.props.imageSrc} />
      </div>
    )
  }
}
