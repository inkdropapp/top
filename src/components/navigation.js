import { StaticQuery, graphql, Link } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import React from 'react'
import Img from 'gatsby-image'
import './navigation.less'
import HamburgerMenuButton from './hamburger-menu-button'

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
                  <a href="https://my.inkdrop.app/plugins">Plugins</a>
                </li>
                <li className="ui simple dropdown item">
                  More
                  <i className="dropdown icon" />
                  <div className="menu">
                    <a className="item" href="https://my.inkdrop.app/demo">
                      Demo
                    </a>
                    <a className="item" href="https://forum.inkdrop.app/">
                      User Forum
                    </a>
                    <a className="item" href="https://docs.inkdrop.app/faq">
                      FAQ
                    </a>
                    <div className="divider" />
                    <a className="item" href="https://twitter.com/inkdrop_app">
                      Twitter
                    </a>
                    <a className="item" href="https://medium.com/@inkdrop">
                      Blog
                    </a>
                  </div>
                </li>
                <li>
                  <a href="https://my.inkdrop.app/" className="login">
                    <i className="sign in icon" />
                    Log in
                  </a>
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
                <a href="https://my.inkdrop.app/plugins" className="item">
                  <i className="chevron right icon" />
                  Plugins
                </a>
                <a className="item" href="https://my.inkdrop.app/demo">
                  <i className="chevron right icon" />
                  Demo
                </a>
                <a className="item" href="https://forum.inkdrop.app/">
                  <i className="chevron right icon" />
                  User Forum
                </a>
                <a className="item" href="https://docs.inkdrop.app/faq">
                  <i className="chevron right icon" />
                  FAQ
                </a>
                <a className="item" href="https://twitter.com/inkdrop_app">
                  <i className="chevron right icon" />
                  Twitter
                </a>
                <a className="item" href="https://medium.com/@inkdrop">
                  <i className="chevron right icon" />
                  Blog
                </a>
                <a className="item login" href="https://my.inkdrop.app/">
                  <i className="sign in icon" />
                  Log in
                </a>
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
