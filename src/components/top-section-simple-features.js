import './top-section-simple-features.less'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'
import Flickity from 'flickity'

class SectionSimpleFeatures extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.carouselRef, {
        wrapAround: true,
        autoPlay: true
      })
    }, 500)
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section id="simple-features">
            <Container>
              <div className="ui stackable grid">
                <div className="six wide column">
                  <h2>Clarify your thoughts fast, solve elegantly</h2>
                  <p>
                    Get a low-friction personal note-taking workflow and
                    accomplish more. With your notes well-organized
                    effortlessly, you can stay focused on doing your best work.
                  </p>
                </div>
                <div className="ten wide column">
                  <div className="video-container">
                    <iframe
                      src="https://player.vimeo.com/video/186246591"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="ui stackable three column grid">
                <div className="column">
                  <Img
                    className="markdown-icon"
                    fixed={data.md.childImageSharp.fixed}
                  />
                  <h3>A versatile Markdown editor</h3>
                  <p>
                    It comes with multi-language code highlighting,
                    multi-cursors, line numbers, scrolling beyond the last line,
                    showing invisible characters and more.
                  </p>
                </div>
                <div className="column">
                  <h3>Focus on the work that matters</h3>
                  <p>
                    An intuitive and clean user interface and &apos;Distraction
                    free mode&apos; don&apos;t distract you from the text.
                  </p>
                </div>
                <div className="column">
                  <h3>Stay organized, find quickly</h3>
                  <p>
                    With nestable notebooks, pin-to-top, tags and workspace
                    view, it allows you to flexibly organize your notes.
                  </p>
                </div>
                <div className="column">
                  <h3>Get things done</h3>
                  <p>
                    Track your work progress with note status and task progress
                    view in the note list.
                  </p>
                </div>
                <div className="column">
                  <h3>Share your work quickly with people</h3>
                  <p>
                    Your notes can be shared on the web with a public link. It
                    also supports exporting as HTML, PDF and Markdown file
                    format.
                  </p>
                </div>
                <div className="column">
                  <h3>Never miss your ideas</h3>
                  <p>
                    Whenever, even while in offline, you can read and write
                    notes. Just open up the app, then it will be instantly ready
                    for you to start jotting down before you forget the idea.
                  </p>
                </div>
              </div>
            </Container>
            <div ref={el => (this.carouselRef = el)} className="carousel">
              <div className="carousel-cell">
                <Container>
                  <Img
                    fluid={data.image01.childImageSharp.fluid}
                    alt="Robust editor"
                  />
                </Container>
                <h3>
                  <i className="write icon" />
                  Robust editor
                </h3>
                <p className="ui text container">
                  It comes with a highly customizable editor which lets you jot
                  down in GitHub-flavored Markdown with code syntax
                  highlightings support.
                </p>
              </div>
              <div className="carousel-cell">
                <Container>
                  <Img
                    fluid={data.image02.childImageSharp.fluid}
                    alt="Keep it organized"
                  />
                </Container>
                <h3>
                  <i className="book icon" />
                  Keep it organized
                </h3>
                <p className="ui text container">
                  Nestable notebooks, tags and status help you quickly find and
                  organize notes however you like.
                </p>
              </div>
              <div className="carousel-cell plugins">
                <Container>
                  <Img
                    fluid={data.image03.childImageSharp.fluid}
                    alt="100+ Powerful plugins"
                  />
                </Container>
                <h3>
                  <i className="plug icon" />
                  100+ Powerful Plugins
                </h3>
                <p className="ui text container">
                  Plugins add new functionality or provide a new look to
                  Inkdrop. vim, math, sequence-diagrams, and more!
                  <br />
                  <a
                    className="ui rounded white button"
                    href="https://my.inkdrop.app/plugins"
                  >
                    Explore plugins&nbsp;
                    <i className="angle double right icon" />
                  </a>
                </p>
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export default SectionSimpleFeatures

const query = graphql`
  query {
    md: file(relativePath: { eq: "markdown.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image01: file(relativePath: { eq: "ss-macos-03.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image02: file(relativePath: { eq: "keep-it-organized.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image03: file(relativePath: { eq: "powerful-plugins.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
