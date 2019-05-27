import './top-section-beautiful-ui.less'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'
import BlockBadge from './block-badge'

const SectionBeautifulUI = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section id="beautiful-ui">
        <Container text>
          <BlockBadge />
          <h2 className="ui header">Clean, intuitive and beautiful</h2>
          <p>
            Sophisticated UIs don&apos;t distract you from the text and come
            with customizable themes including a dark theme for night owls.
          </p>
        </Container>
        <Container>
          <Img fluid={data.image01.childImageSharp.fluid} />
        </Container>
      </section>
    )}
  />
)

export default SectionBeautifulUI

const query = graphql`
  query {
    image01: file(relativePath: { eq: "beautiful-ui.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
