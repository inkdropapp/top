import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './top-masthead.less'
import Img from 'gatsby-image'
import SupportedPlatformsMenu from './supported-platforms-menu'
import getPlatform from '../utils/platform'
import SignupButton from './signup-button'
import TryDemoButton from './try-demo-button'
import Masthead from './masthead'
import Container from 'semantic-ui-react/dist/es/elements/Container'

export default class TopMasthead extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props)
    this.state = { selectedPlatform: getPlatform() }
  }

  render() {
    const isPC = ['macos', 'windows', 'linux'].indexOf(getPlatform()) >= 0
    const { selectedPlatform } = this.state
    const isBrowser = typeof window !== `undefined`
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Masthead className="top-masthead">
            <Container>
              <h1>
                <span className="avoid-wrap">Organizing your</span>&nbsp;
                <span className="avoid-wrap">Markdown notes</span>&nbsp;
                <span className="avoid-wrap">made simple.</span>
              </h1>
              <p className="ui container sub-headline">
                With 100+ plugins, cross-platform and seamless data sync support
              </p>

              <p className="ui text container">
                <SignupButton />
                {isPC && <TryDemoButton />}
              </p>

              {isBrowser ? (
                <>
                  <SupportedPlatformsMenu
                    active={selectedPlatform}
                    onClick={this.handlePlatformSelect}
                  />

                  <div className="platform-screenshot">
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
                    {selectedPlatform === 'macos' && (
                      <Img
                        className="screenshot screenshot-macos"
                        fluid={data.ss_macOS.childImageSharp.fluid}
                      />
                    )}
                    {selectedPlatform === 'windows' && (
                      <Img
                        className="screenshot screenshot-windows"
                        fluid={data.ss_windows.childImageSharp.fluid}
                      />
                    )}
                    {selectedPlatform === 'linux' && (
                      <Img
                        className="screenshot screenshot-linux"
                        fluid={data.ss_linux.childImageSharp.fluid}
                      />
                    )}
                    {selectedPlatform === 'ios' && (
                      <Img
                        className="screenshot screenshot-ios"
                        fluid={data.ss_ios.childImageSharp.fluid}
                      />
                    )}
                    {selectedPlatform === 'android' && (
                      <Img
                        className="screenshot screenshot-android"
                        fluid={data.ss_android.childImageSharp.fluid}
                      />
                    )}
                  </div>
                </>
              ) : (
                <span className="masthead-spacer" />
              )}

              {this.props.children}
            </Container>
          </Masthead>
        )}
      />
    )
  }

  handlePlatformSelect = platform => {
    this.setState({ selectedPlatform: platform })
  }
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
    ss_windows: file(relativePath: { eq: "ss-windows-01.png" }) {
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
    ss_ios: file(relativePath: { eq: "ss-ios-01.png" }) {
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
  }
`
