import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './top-masthead.less'
import getPlatform from '../utils/platform'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { MastheadHalo } from './masthead-halo'
import PerspectiveImage from './3d-perspective-image'
import { FrostedBackgroundScreenshot } from './frosted-background-screenshot'
import { screenshotThemes } from '../utils/screenshots'
import { Dots } from './dots'
import { AppleIcon } from './icons/apple'
import { EncryptionIcon } from './icons/encryption'
import { WindowsIcon } from './icons/windows'
import { LinuxIcon } from './icons/linux'
import { AndroidIcon } from './icons/android'
import { PluginIcon } from './icons/plugin'
import { ThemeIcon } from './icons/theme'
import { HackableIcon } from './icons/hackable'
import { GetStartedButton } from './get-started-button'

const TopMasthead = props => {
  const { children } = props
  const [themeIndex, setThemeIndex] = useState(0)
  const refScreenshotContainer = useRef(null)
  const [minScreenshotContainerHeight, setMinScreenshotContainerHeight] =
    useState(100)

  const theme = screenshotThemes[themeIndex]

  const isDesktop = ['macos', 'windows', 'linux'].indexOf(getPlatform()) >= 0

  const handleDotClick = index => {
    setThemeIndex(index)
  }

  useEffect(() => {
    if (!refScreenshotContainer.current) return
    const resizeObserver = new ResizeObserver(() => {
      const width = refScreenshotContainer.current.offsetWidth
      const height = refScreenshotContainer.current.offsetHeight
      if (width < height) return
      if (minScreenshotContainerHeight < height) {
        setMinScreenshotContainerHeight(height)
      }
    })
    resizeObserver.observe(refScreenshotContainer.current)
    return () => resizeObserver.disconnect() // clean up
  }, [])

  return (
    <MastheadHalo className="top-masthead" theme={theme}>
      <Container>
        <div className="headline">
          <h1>
            <span className="avoid-wrap">Cleaner space</span>&nbsp;
            <span className="avoid-wrap">
              for your tech
            </span>&nbsp;
            <span className="avoid-wrap">journey.</span>
          </h1>

          <p className="ui text container">
            <GetStartedButton />{' '}
            <span className="no-signup-required">
              — No signup required for demo
            </span>
          </p>
        </div>

        <div
          ref={refScreenshotContainer}
          className="screenshot-container"
          style={{ minHeight: minScreenshotContainerHeight }}
        >
          <PerspectiveImage>
            <FrostedBackgroundScreenshot
              src={theme.imageSrc}
              isDark={theme.isDark}
              alt="screenshot macos"
              className="screenshot screenshot-macos"
            />
          </PerspectiveImage>
        </div>

        <Dots
          numOfDots={screenshotThemes.length}
          selectedIndex={themeIndex}
          onClick={handleDotClick}
        />

        {children}

        <div className="ui text container">
          <div className="spec-grid-container">
            <div className="spec-grid">
              <div className="item">
                <div className="icons">
                  <EncryptionIcon />
                </div>
                Encrypted data sync
              </div>
              <div className="item">
                <div className="icons">
                  <AppleIcon />
                  <WindowsIcon />
                  <LinuxIcon />
                </div>
                Cross platform
              </div>
              <div className="item">
                <div className="icons">
                  <AppleIcon />
                  <AndroidIcon />
                </div>
                Mobile apps
              </div>
              <div className="item">
                <div className="icons">
                  <PluginIcon />
                </div>
                100+ plugins
              </div>
              <div className="item">
                <div className="icons">
                  <ThemeIcon />
                </div>
                Beautiful themes
              </div>
              <div className="item">
                <div className="icons">
                  <HackableIcon />
                </div>
                Hackable
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MastheadHalo>
  )
}

TopMasthead.propTypes = {
  children: PropTypes.node
}

export default TopMasthead
