import { useStaticQuery, graphql, Link } from 'gatsby'
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './top-masthead.less'
import { GatsbyImage } from 'gatsby-plugin-image'
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

  const isDesktop = ['macos', 'windows', 'linux'].indexOf(getPlatform()) >= 0
  const isBrowser = typeof window !== `undefined`
  const isPCSelected = ['windows', 'linux'].indexOf(selectedPlatform) >= 0
  const data = useStaticQuery(query)
  return (
    <Masthead className="top-masthead">
      <Container>
        <h1>
          <span className="avoid-wrap">Organizing your</span>&nbsp;
          <span className="avoid-wrap">Markdown notes</span>&nbsp;
          <span className="avoid-wrap">made simple.</span>
        </h1>
        <div className="ui container sub-headline">
          With 100+ plugins, cross-platform and encrypted data sync support
        </div>

        <p className="ui text container">
          <SignupButton />
          {isDesktop && <TryDemoButton />}
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
                  <Link to="/gallery">
                    {selectedPlatform === 'macos' && !darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-macos"
                        alt="screenshot macos"
                        image={data.ss_macOS.childImageSharp.gatsbyImageData}
                      />
                    )}
                    {selectedPlatform === 'macos' && darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-macos"
                        alt="screenshot macos"
                        image={
                          data.ss_macOS_dark.childImageSharp.gatsbyImageData
                        }
                      />
                    )}
                    {isPCSelected && !darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-windows"
                        alt="screenshot windows"
                        image={data.ss_windows.childImageSharp.gatsbyImageData}
                      />
                    )}
                    {isPCSelected && darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-windows"
                        alt="screenshot windows"
                        image={
                          data.ss_windows_dark.childImageSharp.gatsbyImageData
                        }
                      />
                    )}
                    {selectedPlatform === 'ios' && !darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-ios"
                        alt="screenshot ios"
                        image={data.ss_ios.childImageSharp.gatsbyImageData}
                      />
                    )}
                    {selectedPlatform === 'ios' && darkThemeEnabled && (
                      <GatsbyImage
                        className="screenshot screenshot-ios"
                        alt="screenshot ios"
                        image={data.ss_ios_dark.childImageSharp.gatsbyImageData}
                      />
                    )}
                    {selectedPlatform === 'android' && !darkThemeEnabled && (
                      <GatsbyImage
                        alt="screenshot android"
                        className="screenshot screenshot-android"
                        image={data.ss_android.childImageSharp.gatsbyImageData}
                      />
                    )}
                    {selectedPlatform === 'android' && darkThemeEnabled && (
                      <GatsbyImage
                        alt="screenshot android"
                        className="screenshot screenshot-android"
                        image={
                          data.ss_android_dark.childImageSharp.gatsbyImageData
                        }
                      />
                    )}
                  </Link>
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
  )
}

TopMasthead.propTypes = {
  children: PropTypes.node
}

const query = graphql`
  query {
    ss_macOS: file(relativePath: { eq: "ss-macos-01.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_macOS_dark: file(relativePath: { eq: "ss-macos-02.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_windows: file(relativePath: { eq: "ss-windows-01.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_windows_dark: file(relativePath: { eq: "ss-windows-02.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_ios: file(relativePath: { eq: "ss-ios-01.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_ios_dark: file(relativePath: { eq: "ss-ios-02.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_android: file(relativePath: { eq: "ss-android-01.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
    ss_android_dark: file(relativePath: { eq: "ss-android-02.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1024)
      }
    }
  }
`

export default TopMasthead
