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
                  <Img
                    className="markdown-icon"
                    fixed={data.md.childImageSharp.fixed}
                  />
                  <h2>Jot down your daily creating endeavors</h2>
                  <p>
                    Your best work happens when tools stay out of the way. With
                    a highly customizable Markdown editor, 100+ powerful plugins
                    and themes, you can stay focused on taking notes about your
                    work.
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
                  <h3>Bring your ideas to life</h3>
                  <p>
                    From pixel-perfect icons and scalable vector graphics, to
                    full user flows and interactive prototypes, Sketch is the
                    perfect place to design, create, test and iterate.
                  </p>
                </div>
                <div className="column">
                  <h3>Build designs that scale</h3>
                  <p>
                    Lay the foundations for your product’s design system with
                    reusable, responsive components that automatically scale to
                    fit their content. Then update them everywhere in a click.
                  </p>
                </div>
                <div className="column">
                  <h3>Customise your workflow</h3>
                  <p>
                    Choose from hundreds of plugins and integrations that let
                    you do everything from animating interactions to designing
                    with live data.
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
