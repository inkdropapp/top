import './alternativeto-ratings.less'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'

const AlternativeToRatings = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container text>
        <a
          href="https://alternativeto.net/software/inkdrop/reviews/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="alternativeto">
            <img
              className="alternativeto-logo"
              src="/alternativeto.svg"
              width={300}
              alt="alternativeTo"
            />
            <div className="ratings">
              <Img fixed={data.ratings.childImageSharp.fixed} alt="Stars" />
              <p>
                4.5 out of 5 with 15 ratings&nbsp;
                <i className="angle double right icon" />
              </p>
            </div>
          </div>
        </a>
      </Container>
    )}
  />
)

const query = graphql`
  query {
    ratings: file(relativePath: { eq: "alternativeto-ratings.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AlternativeToRatings
