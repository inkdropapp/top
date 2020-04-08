import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './top-section-whomadeit.less'
import Img from 'gatsby-image'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import BlockBadge from './block-badge'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default class SectionWhoMadeIt extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section id="whomadeit">
            <Container>
              <BlockBadge center />
              <h2>Who is making Inkdrop?</h2>
              <p className="sub-headline">
                It is developed by a freelance developer, Takuya Matsuyama,
                based in Japan.
              </p>
              <div className="center aligned links">
                <OutboundLink href="https://craftz.dog/" title="Homepage">
                  <i className="home icon" />
                </OutboundLink>
                <OutboundLink
                  href="https://twitter.com/inkdrop_app"
                  title="Twitter @inkdrop_app"
                >
                  <i className="twitter icon" />
                </OutboundLink>
                <OutboundLink
                  href="https://github.com/craftzdog"
                  title="GitHub @craftzdog"
                >
                  <i className="github icon" />
                </OutboundLink>
              </div>
            </Container>
            <Container text className="center aligned content">
              <Img
                className="author"
                fluid={data.takuya.childImageSharp.fluid}
              />
              <div className="caption">
                at&nbsp;
                <OutboundLink
                  href="https://www.meetup.com/React-Native-London/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Native London
                </OutboundLink>
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
