import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RetinaImage from '../retina-image'
import ga from 'ga-react-router'
import './download-platform.scss'

export default class DownloadPlatform extends Component {
  static propTypes = {
    platform: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
  }

  render () {
    const { platform, image, version, links } = this.props

    const linkNodes = links.map((link) => {
      return (
        <div key={link.id}>
          <a href={link.href}
            onClick={::this.handleDownloadLinkClick}
            id={link.id}>
            <i className='download icon' />
            {link.fileType}
          </a>
        </div>
      )
    })

    return (
      <div className='column download-platform'>
        <RetinaImage
          src={image}
          alt={platform}
          width='128'
          height='128' />
        <h3>for {platform}</h3>
        <div>{ version }</div>
        {linkNodes}
      </div>
    )
  }

  handleDownloadLinkClick (e) {
    const target = e.currentTarget
    ga('send', 'event', {
      eventCategory: 'Download Demo Link',
      eventAction: 'click',
      eventLabel: target.href
    })
    /*
    const params = {
      Type: target.id,
      URL: target.href
    }
    metrics.track('Download demo', params)
    */
  }
}
