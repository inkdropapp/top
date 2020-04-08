import './top-section-seamless-sync.less'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'

class SectionSeamlessSync extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section id="seamless-sync">
            <Container text>
              <h2 className="ui icon header">
                <i className="cloud icon" />
                <div className="content">Have it everywhere, securely</div>
              </h2>
              <p>
                Capture a note once, and it’s instantly available on all your
                devices. It syncs data securely with end-to-end encryption.
              </p>
              <p>
                <a
                  className="ui rounded white button"
                  href="https://docs.inkdrop.app/security"
                >
                  Learn more about security&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </Container>
            <Container>
              <Img fluid={data.image01.childImageSharp.fluid} />
            </Container>
          </section>
        )}
      />
    )
  }
}

export default SectionSeamlessSync

const query = graphql`
  query {
    image01: file(relativePath: { eq: "have-it-everywhere.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
