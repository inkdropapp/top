import './top-section-seamless-sync.less'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import SectionFourth from './section-fourth'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import OutboundLink from './outbound-link'
import { ReactComponent as SyncImage } from '../images/icons/sync-color.svg'
import { ReactComponent as SecureImage } from '../images/icons/secure-color.svg'
import { ReactComponent as SelfHostedImage } from '../images/icons/self-hosted-color.svg'

const SectionSeamlessSync = () => {
  const data = useStaticQuery(query)
  return (
    <SectionFourth id="seamless-sync">
      <Container>
        <h2 className="ui icon header">
          <div className="content">Boost your engineering process</div>
        </h2>
        <div className="masthead-container">
          <div className="ui stackable grid">
            <div className="eight wide column">
              <div className="masthead-video">
                <iframe
                  className="video"
                  src="https://www.youtube.com/embed/-qBavwqc_mY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="caption">
                <OutboundLink
                  className="white link"
                  href="https://www.youtube.com/watch?v=-qBavwqc_mY"
                >
                  How to take notes in Markdown (Video)&nbsp;
                  <i className="angle double right icon" />
                </OutboundLink>
              </div>
            </div>
            <div className="eight wide column">
              <Link to="/note-taking-tips/">
                <GatsbyImage
                  alt={'Tips'}
                  className={`cover-image`}
                  image={data.tipsCover.childImageSharp.gatsbyImageData}
                />
              </Link>
              <div className="caption">
                <Link to="/note-taking-tips/" className="white link">
                  Effective note-taking in coding and learning&nbsp;
                  <i className="angle double right icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="ui icon header">
          <div className="content">
            At work, at home, and everywhere in between
          </div>
        </h2>
      </Container>
      <Container className="description">
        <div className="ui stackable three column grid">
          <div className="column">
            <div className="image-container">
              <SyncImage className="small svg-icon" />
            </div>
            <h3>Have it everywhere, securely</h3>
            <p>
              Capture a note once, and it’s instantly available on all your
              devices. It syncs data securely with end-to-end encryption.
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
              If you don&apos;t trust anyone with your data, you can set up your
              own CouchDB server to store your data instead of the Inkdrop
              server.
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
    </SectionFourth>
  )
}

export default SectionSeamlessSync

const query = graphql`
  query {
    tipsCover: file(relativePath: { eq: "tips/cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1800)
      }
    }
  }
`
