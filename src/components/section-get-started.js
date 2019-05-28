import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './section-get-started.less'
import Img from 'gatsby-image'
import SignupButton from './signup-button'
import Container from 'semantic-ui-react/dist/es/elements/Container'

export default class GetNowSection extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section id="get-started">
            <Container>
              <div className="panel">
                <div className="ui stackable grid">
                  <div className="four wide column big-icon">
                    <Img fixed={data.logo.childImageSharp.fixed} />
                  </div>

                  <div className="twelve wide column get-started-message">
                    <h2>Get started with Inkdrop</h2>
                    <h3>
                      Available on 5 platforms for just $4.16 per month (annual
                      billing). No credit card information required.
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
        )}
      />
    )
  }
}

const query = graphql`
  query {
    logo: file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        fixed(width: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
