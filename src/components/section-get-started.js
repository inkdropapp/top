import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './section-get-started.less'
import Img from 'gatsby-image'
import SignupButton from './signup-button'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
                    <Img
                      fixed={data.logo.childImageSharp.fixed}
                      alt="App logo"
                    />
                  </div>

                  <div className="twelve wide column get-started-message">
                    <h2>Get started today</h2>
                    <h3>
                      Available on 5 platforms for just $4.16 per month (annual
                      billing). No credit card information required for 30-day
                      free trial.
                    </h3>
                    <div className="link-to-signup">
                      <SignupButton />
                      <Link className="ui rounded button" to="/pricing">
                        See pricing&nbsp;
                        <i className="angle right icon" />
                      </Link>
                    </div>
                    <div className="link-to-discount">
                      Need discount? Check out:&nbsp;
                      <OutboundLink href="https://docs.inkdrop.app/student-discount">
                        Educational discount
                      </OutboundLink>
                      &nbsp;&amp;&nbsp;
                      <OutboundLink href="https://blog.inkdrop.app/announcing-inkdrop-plugin-developer-license-d5c9be52f8af">
                        plugin developer license
                      </OutboundLink>
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
