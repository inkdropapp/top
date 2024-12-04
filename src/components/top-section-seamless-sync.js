import './top-section-seamless-sync.less'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import SectionFourth from './section-fourth'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import OutboundLink from './outbound-link'
import { YouTubeVideo } from './youtube-embed'
// import { ReactComponent as SyncImage } from '../images/icons/sync-color.svg'
// import { ReactComponent as SecureImage } from '../images/icons/secure-color.svg'
// import { ReactComponent as SelfHostedImage } from '../images/icons/self-hosted-color.svg'

const SectionSeamlessSync = () => {
  const data = useStaticQuery(query)
  return (
    <SectionFourth id="seamless-sync">
      <Container>
        <h2 className="ui header">
          <div className="content">
            It includes comprehensive guides to boost your productivity with
            tech notes
          </div>
        </h2>
        <div className="masthead-container">
          <div className="ui stackable grid">
            <div className="eight wide column">
              <YouTubeVideo
                className="masthead-video"
                videoId="k0NbSPIOX54"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className="caption">
                <OutboundLink
                  className="white link"
                  href="https://www.youtube.com/watch?v=k0NbSPIOX54"
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
                  How to maximize your productivity with tech note-taking&nbsp;
                  <i className="angle double right icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="ui stackable grid">
          <div className="six wide column left aligned">
            <h2>Stay inspired and motivated with fellow tech note takers</h2>
            <p>
              Connect with like-minded individuals who share your passion for
              learning, coding, and tech note-taking.
            </p>
            <p>
              <a
                className="ui white rounded button"
                href="https://docs.inkdrop.app/start-guide/join-discord-server"
              >
                Learn more&nbsp;
                <i className="angle double right icon" />
              </a>
            </p>
          </div>
          <div className="ten wide column">
            <div className="video-container">
              <GatsbyImage
                alt="Versatile Markdown editor"
                className="feature-image"
                image={data.discordCover.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </Container>

      {/*
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
        */}
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
    discordCover: file(relativePath: { eq: "stay-inspired.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 720)
      }
    }
  }
`
