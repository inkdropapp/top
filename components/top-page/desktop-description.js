import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SupportingPlatform from './supporting-platform'
import PlatformImage from '../platform-image'
import './desktop-description.scss'

export default class DesktopDescription extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool.isRequired
  }

  render() {
    const { active, className } = this.props
    return (
      <div
        className={`description-desktop ${className} ${active ? 'active' : ''}`}
      >
        <div className="description">
          <SupportingPlatform
            image="/top/apple-logo-small.png"
            platform="macOS"
          />
          <SupportingPlatform
            image="/top/windows-logo-small.png"
            platform="Windows"
          />
          <SupportingPlatform
            image="/top/linux-logo-small.png"
            platform="Linux"
          />
          <div className="link-demo">
            <a href="https://my.inkdrop.app/demo">
              Try the Demo
              <i className="angle right icon" />
            </a>
          </div>
        </div>
        <div className="screenshot">
          <PlatformImage
            className="ui image"
            src="/top/desktop-macos.png"
            windows="/top/desktop-windows.png"
            linux="/top/desktop-linux.png"
          />
        </div>
      </div>
    )
  }
}
