import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './top-section-whomadeit.less'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import BlockBadge from './block-badge'
import OutboundLink from './outbound-link'

export default class SectionWhoMadeIt extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={_data => (
          <section id="whomadeit">
            <Container>
              <BlockBadge center />
              <h2>Who is making Inkdrop?</h2>
              <p className="sub-headline">
                It is developed by an indie developer, Takuya Matsuyama, based
                in Japan.
              </p>
              <div className="center aligned links">
                <OutboundLink href="https://www.craftz.dog/" title="Homepage">
                  <i className="home icon" />
                </OutboundLink>
                <OutboundLink
                  href="https://twitter.com/inkdrop_app"
                  title="Twitter @inkdrop_app"
                >
                  <i className="twitter icon" />
                </OutboundLink>
                <OutboundLink
                  href="https://www.youtube.com/@craftzdog"
                  title="YouTube @craftzdog"
                >
                  <i className="youtube icon" />
                </OutboundLink>
                <OutboundLink
                  href="https://github.com/craftzdog"
                  title="GitHub @craftzdog"
                >
                  <i className="github icon" />
                </OutboundLink>
              </div>
            </Container>
            <Container className="vlogs center aligned content stackable three column grid">
              <div className="column">
                <div className="embed-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/KbZbz1TdgwA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="column">
                <div className="embed-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/eLja90T28AQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="column">
                <div className="embed-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vj723NlrIQc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </section>
        )}
      />
    )
  }
}

const query = graphql`
  query {
    takuya: file(relativePath: { eq: "takuya-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
