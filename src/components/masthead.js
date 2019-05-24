import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './masthead.less'
import Img from 'gatsby-image'
import SupportedPlatformsMenu from './supported-platforms-menu'
import getPlatform from '../utils/platform'
import Container from 'semantic-ui-react/dist/es/elements/Container'

export default class Masthead extends Component {
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
    return (
      <StaticQuery
        query={query}
        render={data => (
          <div className="ui vertical masthead segment">
            <Container>
              <h1>Jot down your daily hacking endeavors.</h1>
              <p className="ui text container sub-headline">
                The cross-platform note-taking app with robust Markdown editor,
                designed with simplicity, beautiful UI and extensibility in mind
              </p>

              <p className="ui text container">
                <a
                  href="https://my.inkdrop.app/signup"
                  className="ui button signup"
                >
                  Start your 60-day free trial
                </a>

                {isPC && (
                  <a
                    href="https://my.inkdrop.app/demo"
                    className="ui button demo"
                  >
                    Try the Demo
                  </a>
                )}
              </p>

              <SupportedPlatformsMenu
                active={selectedPlatform}
                onClick={this.handlePlatformSelect}
              />

              <div>
                {selectedPlatform === 'macos' && (
                  <Img fluid={data.ss_macOS.childImageSharp.fluid} />
                )}
                {selectedPlatform === 'windows' && (
                  <Img fluid={data.ss_windows.childImageSharp.fluid} />
                )}
                {selectedPlatform === 'linux' && (
                  <Img fluid={data.ss_linux.childImageSharp.fluid} />
                )}
              </div>

              {this.props.children}
            </Container>
          </div>
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
  }
`
