import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import './top-whats-new-in-v5.less'
import Img from 'gatsby-image'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const TopWhatsNewInV5 = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <OutboundLink
          className="top-featured-content"
          target="_blank"
          rel="noopener noreferrer"
          href="https://blog.inkdrop.info/introducing-inkdrop-v5-5dee5873f953"
        >
          <Container text className="ui segment grid">
            <div className="seven wide column blurb-thumb">
              <Img
                className="thumbnail"
                fluid={data.thumbnail.childImageSharp.fluid}
              />
            </div>
            <div className="nine wide column blurb">
              <div>
                <strong>Inkdrop v5 has been released!</strong>
                <div className="description">
                  Learn about what&apos;s new in this update{' '}
                  <i className="ui icon arrow alternate circle right outline" />
                </div>
                <span className="description-mobile">
                  <i className="ui icon arrow alternate circle right outline" />
                </span>
              </div>
            </div>
          </Container>
        </OutboundLink>
      )}
    />
  )
}

const query = graphql`
  query {
    thumbnail: file(relativePath: { eq: "whats-new-in-v5-thumbnail.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TopWhatsNewInV5
