import './top-section-seamless-sync.less'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ReactComponent as SyncImage } from '../images/icons/sync-color.svg'
import { ReactComponent as SecureImage } from '../images/icons/secure-color.svg'
import { ReactComponent as SelfHostedImage } from '../images/icons/self-hosted-color.svg'

class SectionSeamlessSync extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section id="seamless-sync">
            <Container>
              <h2 className="ui icon header">
                <div className="content">
                  At work, at home, and everywhere in between
                </div>
              </h2>
              <Img
                className="masthead-image"
                fluid={data.sync.childImageSharp.fluid}
                alt="Sync across devices seamlessly"
              />
            </Container>
            <Container className="description">
              <div className="ui stackable three column grid">
                <div className="column">
                  <div className="image-container">
                    <SyncImage className="small svg-icon" />
                  </div>
                  <h3>Have it everywhere, securely</h3>
                  <p>
                    Capture a note once, and it’s instantly available on all
                    your devices. It syncs data securely with end-to-end
                    encryption.
                  </p>
                  <p>
                    <a
                      className="white link"
                      href="https://docs.inkdrop.app/security"
                    >
                      Learn more&nbsp;
                      <i className="angle double right icon" />
                    </a>
                  </p>
                </div>
                <div className="column">
                  <div className="image-container">
                    <SecureImage className="small svg-icon" />
                  </div>
                  <h3>Never lose your work</h3>
                  <p>
                    Accidentally deleted lines? You can restore them from the{' '}
                    <a
                      className="white bold underline link"
                      href="https://docs.inkdrop.app/manual/revision-history"
                    >
                      revision history
                    </a>
                    . A{' '}
                    <a
                      className="white bold underline link"
                      href="https://docs.inkdrop.app/manual/backing-up-your-data"
                    >
                      seamless backup
                    </a>{' '}
                    keeps your notes safely stored in your local filesystem.
                  </p>
                </div>
                <div className="column">
                  <div className="image-container">
                    <SelfHostedImage className="small svg-icon" />
                  </div>
                  <h3>Optional self-hosted database</h3>
                  <p>
                    If you don&apos;t trust anyone with your data, you can set
                    up your own CouchDB server to store your data instead of the
                    Inkdrop server.
                  </p>
                  <p>
                    <a
                      className="white link"
                      href="https://docs.inkdrop.app/manual/synchronizing-in-the-cloud"
                    >
                      Learn more&nbsp;
                      <i className="angle double right icon" />
                    </a>
                  </p>
                </div>
              </div>
            </Container>
          </section>
        )}
      />
    )
  }
}

export default SectionSeamlessSync

const query = graphql`
  query {
    sync: file(relativePath: { eq: "smooth-sync.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
