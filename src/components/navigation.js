import { StaticQuery, graphql, Link } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import React from 'react'
import Img from 'gatsby-image'
import './navigation.less'
import HamburgerMenuButton from './hamburger-menu-button'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarMobileVisible: false
    }
  }

  render() {
    const { navbarMobileVisible } = this.state

    return (
      <>
        <Container className="app--navigation">
          <nav className="ui grid">
            <div className="row">
              <Link to="/" className="app--logo">
                <StaticQuery
                  query={graphql`
                    query {
                      placeholderImage: file(
                        relativePath: { eq: "navbar-logo.png" }
                      ) {
                        childImageSharp {
                          fixed(width: 142, height: 45) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  `}
                  render={data => (
                    <Img fixed={data.placeholderImage.childImageSharp.fixed} />
                  )}
                />
              </Link>

              <ul className="app--navbar reset-list un-select">
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <OutboundLink href="https://my.inkdrop.app/plugins">
                    Plugins
                  </OutboundLink>
                </li>
                <li className="ui simple dropdown item">
                  More
                  <i className="dropdown icon" />
                  <div className="menu">
                    <OutboundLink
                      className="item"
                      href="https://my.inkdrop.app/demo"
                    >
                      Demo
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://docs.inkdrop.app/"
                    >
                      Documentation
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://forum.inkdrop.app/"
                    >
                      User Forum
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://docs.inkdrop.app/faq"
                    >
                      FAQ
                    </OutboundLink>
                    <div className="divider" />
                    <OutboundLink
                      className="item"
                      href="https://twitter.com/inkdrop_app"
                    >
                      Twitter
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://blog.inkdrop.info/"
                    >
                      Blog
                    </OutboundLink>
                  </div>
                </li>
                <li>
                  <OutboundLink
                    href="https://my.inkdrop.app/"
                    className="login"
                  >
                    <i className="sign in icon" />
                    Log in
                  </OutboundLink>
                </li>
              </ul>

              <div className="hamburger-menu">
                <HamburgerMenuButton
                  opened={navbarMobileVisible}
                  onClick={this.handleToggleMobileMenu}
                />
              </div>
            </div>
          </nav>
        </Container>
        <div className="app-navbar-mobile-container">
          <div
            className={`${
              navbarMobileVisible ? 'visible' : ''
            } app--navbar-mobile`}
          >
            <div className="content">
              <Container text>
                <Link className="item" to="/pricing">
                  <i className="chevron right icon" />
                  Pricing
                </Link>
                <OutboundLink
                  href="https://my.inkdrop.app/plugins"
                  className="item"
                >
                  <i className="chevron right icon" />
                  Plugins
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://my.inkdrop.app/demo"
                >
                  <i className="chevron right icon" />
                  Demo
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://forum.inkdrop.app/"
                >
                  <i className="chevron right icon" />
                  User Forum
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://docs.inkdrop.app/faq"
                >
                  <i className="chevron right icon" />
                  FAQ
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://twitter.com/inkdrop_app"
                >
                  <i className="chevron right icon" />
                  Twitter
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://blog.inkdrop.info/"
                >
                  <i className="chevron right icon" />
                  Blog
                </OutboundLink>
                <OutboundLink
                  className="item login"
                  href="https://my.inkdrop.app/"
                >
                  <i className="sign in icon" />
                  Log in
                </OutboundLink>
              </Container>
            </div>
          </div>
        </div>
      </>
    )
  }

  handleToggleMobileMenu = () => {
    const { navbarMobileVisible } = this.state
    this.setState({ navbarMobileVisible: !navbarMobileVisible })
  }
}

export default Navigation
