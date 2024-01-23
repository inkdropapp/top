import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import './section-get-started.less'
import { GatsbyImage } from 'gatsby-plugin-image'
import SignupButton from './signup-button'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import OutboundLink from './outbound-link'

const GetNowSection = () => {
  const data = useStaticQuery(query)
  return (
    <section id="get-started">
      <Container>
        <div className="panel">
          <div className="ui stackable grid">
            <div className="four wide column big-icon">
              <GatsbyImage
                image={data.logo.childImageSharp.gatsbyImageData}
                alt="App logo"
              />
            </div>

            <div className="twelve wide column get-started-message">
              <h2>Get started today</h2>
              <h3>
                Available on 5 platforms for just $8.31 per month (annual
                billing). No credit card information required for 30-day free
                trial.
              </h3>
              <div className="link-to-signup">
                <SignupButton />
                <Link className="ui rounded button" to="/pricing">
                  See pricing&nbsp;
                  <i className="angle right icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const query = graphql`
  query {
    logo: file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 128)
      }
    }
  }
`
export default GetNowSection
