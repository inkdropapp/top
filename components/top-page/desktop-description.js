import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmbeddedPlayer from '../embedded-player'
import SupportingPlatform from './supporting-platform'
import './desktop-description.scss'
const isBrowser = typeof window !== 'undefined'

export default class DesktopDescription extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    const isWin32 = isBrowser ? window.navigator.platform === 'Win32' : false
    this.state = { isWin32 }
  }

  componentDidMount() {
    $('.ui.embed').embed()
  }

  render() {
    const { active, className } = this.props
    const { isWin32 } = this.state
    const topImage = isWin32 ? '/top/desktop-win32.png' : '/top/desktop@2x.png'
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
            <a href="https://app.inkdrop.info/demo">
              Try the Demo
              <i className="angle right icon" />
            </a>
          </div>
        </div>
        <EmbeddedPlayer
          source="vimeo"
          videoId="186246591"
          imageSrc={topImage}
        />
      </div>
    )
  }
}
