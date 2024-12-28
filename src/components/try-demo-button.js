import * as React from 'react'
import OutboundLink from './outbound-link'
import { SecondaryButton } from './secondary-button'
import getPlatform from '../utils/platform'

const DemoButton = () => {
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
    <SecondaryButton
      as={OutboundLink}
      href="https://my.inkdrop.app/download"
      className="ui button demo"
    >
      Try demo{platformName ? ` for ${platformName}` : ''}
    </SecondaryButton>
  )
}

export default DemoButton
