import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './top-section-whomadeit.less'
import Img from 'gatsby-image'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import BlockBadge from './block-badge'

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
                It is developed by a solo developer, Takuya Matsuyama, based in
                Japan.
              </p>
              <div className="center aligned links">
                <a href="https://craftz.dog/">
                  <i className="home icon" />
                </a>
                <a href="https://twitter.com/inkdrop_app">
                  <i className="twitter icon" />
                </a>
                <a href="https://github.com/craftzdog">
                  <i className="github icon" />
                </a>
              </div>
            </Container>
            <Container text className="center aligned content">
              <Img
                className="author"
                fluid={data.takuya.childImageSharp.fluid}
              />
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
