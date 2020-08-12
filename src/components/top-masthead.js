import { StaticQuery, graphql } from 'gatsby'
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './top-masthead.less'
import Img from 'gatsby-image'
import SupportedPlatformsMenu from './supported-platforms-menu'
import getPlatform from '../utils/platform'
import SignupButton from './signup-button'
import TryDemoButton from './try-demo-button'
import Masthead from './masthead'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import ThemeSwitch from './theme-switch'
import PerspectiveImage from './3d-perspective-image'

const TopMasthead = props => {
  const { children } = props
  const [selectedPlatform, setSelectedPlatform] = useState(getPlatform())
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false)
  const handlePlatformSelect = useCallback(platform => {
    setSelectedPlatform(platform)
  }, [])

  const isPC = ['macos', 'windows', 'linux'].indexOf(getPlatform()) >= 0
  const isBrowser = typeof window !== `undefined`
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Masthead className="top-masthead">
          {console.log('data:', data)}
          <Container>
            <h1>
              <span className="avoid-wrap">Organizing your</span>&nbsp;
              <span className="avoid-wrap">Markdown notes</span>&nbsp;
              <span className="avoid-wrap">made simple.</span>
            </h1>
            <p className="ui container sub-headline">
              With 100+ plugins, cross-platform and encrypted data sync support
            </p>

            <p className="ui text container">
              <SignupButton />
              {isPC && <TryDemoButton />}
            </p>

            {isBrowser ? (
              <>
                <SupportedPlatformsMenu
                  active={selectedPlatform}
                  onClick={handlePlatformSelect}
                />

                <div className="platform-screenshot">
                  <ThemeSwitch
                    enabled={darkThemeEnabled}
                    onChange={setDarkThemeEnabled}
                  />

                  <div className="screenshot-container">
                    {/*
                <div className="masthead-icons">
                  <span className="masthead-icon-item">
                    <i className="icon ion-ios-flask" />
                  </span>
                  <span className="masthead-icon-item">
                    <i className="icon ion-ios-bulb" />
                  </span>
                </div>
                */}
                    <PerspectiveImage>
                      {selectedPlatform === 'macos' && !darkThemeEnabled && (
                        <a
                          href={data.ss_macOS.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-macos"
                            fluid={data.ss_macOS.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'macos' && darkThemeEnabled && (
                        <a
                          href={data.ss_macOS_dark.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-macos"
                            fluid={data.ss_macOS_dark.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'windows' && !darkThemeEnabled && (
                        <a
                          href={data.ss_windows.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-windows"
                            fluid={data.ss_windows.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'windows' && darkThemeEnabled && (
                        <a
                          href={data.ss_windows_dark.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-windows"
                            fluid={data.ss_windows_dark.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'linux' && !darkThemeEnabled && (
                        <a
                          href={data.ss_linux.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-linux"
                            fluid={data.ss_linux.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'linux' && darkThemeEnabled && (
                        <a
                          href={data.ss_linux_dark.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-linux"
                            fluid={data.ss_linux_dark.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'ios' && !darkThemeEnabled && (
                        <a
                          href={data.ss_ios.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-ios"
                            fluid={data.ss_ios.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'ios' && darkThemeEnabled && (
                        <a
                          href={data.ss_ios_dark.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-ios"
                            fluid={data.ss_ios_dark.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'android' && !darkThemeEnabled && (
                        <a
                          href={data.ss_android.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-android"
                            fluid={data.ss_android.childImageSharp.fluid}
                          />
                        </a>
                      )}
                      {selectedPlatform === 'android' && darkThemeEnabled && (
                        <a
                          href={data.ss_android_dark.childImageSharp.fluid.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="screenshot screenshot-android"
                            fluid={data.ss_android_dark.childImageSharp.fluid}
                          />
                        </a>
                      )}
                    </PerspectiveImage>
                  </div>
                </div>
              </>
            ) : (
              <span className="masthead-spacer" />
            )}

            {children}
          </Container>
        </Masthead>
      )}
    />
  )
}

TopMasthead.propTypes = {
  children: PropTypes.node
}

const query = graphql`
  query {
    ss_macOS: file(relativePath: { eq: "ss-macos-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_macOS_dark: file(relativePath: { eq: "ss-macos-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_windows: file(relativePath: { eq: "ss-windows-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_windows_dark: file(relativePath: { eq: "ss-windows-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_linux: file(relativePath: { eq: "ss-linux-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_linux_dark: file(relativePath: { eq: "ss-linux-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_ios: file(relativePath: { eq: "ss-ios-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_ios_dark: file(relativePath: { eq: "ss-ios-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_android: file(relativePath: { eq: "ss-android-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ss_android_dark: file(relativePath: { eq: "ss-android-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TopMasthead
