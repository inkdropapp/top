import * as React from 'react'
import OutboundLink from './outbound-link'
import { SecondaryButton } from './secondary-button'

const DemoButton = () => {
  const platformName = detectDesktopPlatform()

  return (
    <SecondaryButton
      as={OutboundLink}
      href="https://my.inkdrop.app/download"
      className="ui button demo"
    >
      Download{platformName ? ` for ${platformName}` : ''}
    </SecondaryButton>
  )
}

export default DemoButton

function detectDesktopPlatform() {
  const ua = navigator.userAgent
  if (ua.indexOf('Mac OS X') !== -1) {
    return 'macOS'
  } else if (ua.indexOf('Windows') !== -1) {
    return 'Windows'
  } else if (ua.indexOf('Linux') !== -1) {
    return 'Linux'
  } else {
    return null
  }
}
