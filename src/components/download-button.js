import React, { Component } from 'react'
import { GlowingPrimaryButton } from './glowing-primary-button'
import OutboundLink from './outbound-link'
import getPlatform from '../utils/platform'

export default class DownloadButton extends Component {
  render() {
    const platform = getPlatform()

    const platformName = (() => {
      switch (platform) {
        case 'macos':
          return 'macOS'
        case 'windows':
          return 'Windows'
        case 'linux':
          return 'Linux'
        default:
          return null
      }
    })()

    return (
      <GlowingPrimaryButton
        as={OutboundLink}
        href={`https://my.inkdrop.app/download`}
        className="download"
      >
        Download{platformName ? ` for ${platformName}` : ' now'}
      </GlowingPrimaryButton>
    )
  }
}
