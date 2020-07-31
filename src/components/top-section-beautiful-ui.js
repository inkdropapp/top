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
        <Container>
          <div className="ui stackable grid">
            <div className="ten wide column">
              <Img
                fluid={data.image01.childImageSharp.fluid}
                alt="Beautiful UI"
              />
            </div>
            <div className="six wide column">
              <BlockBadge />
              <h2 className="ui header">Clean, intuitive and beautiful</h2>
              <p>
                Sophisticated UIs don&apos;t distract you from the text and come
                with customizable themes including a dark theme for night owls.
              </p>
            </div>
          </div>
          <div className="ui stackable three column grid">
            <div className="column">
              <h3>Bring your ideas to life</h3>
              <p>
                From pixel-perfect icons and scalable vector graphics, to full
                user flows and interactive prototypes, Sketch is the perfect
                place to design, create, test and iterate.
              </p>
            </div>
            <div className="column">
              <h3>Build designs that scale</h3>
              <p>
                Lay the foundations for your product’s design system with
                reusable, responsive components that automatically scale to fit
                their content. Then update them everywhere in a click.
              </p>
            </div>
            <div className="column">
              <h3>Customise your workflow</h3>
              <p>
                Choose from hundreds of plugins and integrations that let you do
                everything from animating interactions to designing with live
                data.
              </p>
            </div>
          </div>
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
