import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmbeddedPlayer from '../embedded-player'
import SupportingPlatform from './supporting-platform'
import './desktop-description.scss'

export default class DesktopDescription extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool.isRequired
  }

  componentDidMount () {
    $('.ui.embed').embed()
  }

  render () {
    const { active, className } = this.props
    return (
      <div className={`description-desktop ${className} ${active ? 'active' : ''}`}>
        <div className='description'>
          <SupportingPlatform
            image='/top/apple-logo-small.png'
            platform='macOS'
            versions='(El Capitan)'
          />
          <SupportingPlatform
            image='/top/windows-logo-small.png'
            platform='Windows'
            versions='7+ (64bit)'
          />
          <SupportingPlatform
            image='/top/linux-logo-small.png'
            platform='Linux'
            versions='(Ubuntu, 64bit)'
          />
          <div className='link-demo'>
            <a href='https://app.inkdrop.info/demo'>
              Try the Demo
              <i className='angle right icon' />
            </a>
          </div>
        </div>
        <EmbeddedPlayer
          source='vimeo'
          videoId='186246591'
          imageSrc='/top/desktop@2x.png'
        />
      </div>
    )
  }
}
