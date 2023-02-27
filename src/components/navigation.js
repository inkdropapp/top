import { StaticQuery, graphql, Link } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import React from 'react'
import Img from 'gatsby-image'
import './navigation.less'
import HamburgerMenuButton from './hamburger-menu-button'
import OutboundLink from './outbound-link'
import { ReactComponent as LoginIcon } from '../images/icons/login.svg'
import { ReactComponent as ArrowRightIcon } from '../images/icons/arrow-right.svg'
import { ReactComponent as BlogIcon } from '../images/icons/blog.svg'
import { ReactComponent as TwitterIcon } from '../images/icons/twitter.svg'
import { ReactComponent as FAQIcon } from '../images/icons/faq.svg'
import { ReactComponent as HelpIcon } from '../images/icons/help-wheel.svg'
import { ReactComponent as ForumIcon } from '../images/icons/forum.svg'
import { ReactComponent as DownloadIcon } from '../images/icons/download.svg'
import { ReactComponent as PluginsIcon } from '../images/icons/plugins.svg'
import { ReactComponent as PricingIcon } from '../images/icons/pricing.svg'
import { ReactComponent as GalleryIcon } from '../images/icons/gallery.svg'

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
                    <Img
                      fixed={data.placeholderImage.childImageSharp.fixed}
                      alt="Inkdrop logo"
                    />
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
                <li>
                  <OutboundLink href="https://docs.inkdrop.app/">
                    Docs
                  </OutboundLink>
                </li>
                <li className="ui simple dropdown item">
                  More
                  <i className="dropdown icon" />
                  <div className="menu">
                    <Link className="item" to="/gallery">
                      <GalleryIcon className="svg-icon left icon" />
                      Gallery
                    </Link>
                    <OutboundLink
                      className="item"
                      href="https://my.inkdrop.app/demo"
                    >
                      <DownloadIcon className="svg-icon left icon" />
                      Demo
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://forum.inkdrop.app/"
                    >
                      <ForumIcon className="svg-icon left icon" />
                      User Forum
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://docs.inkdrop.app/faq"
                    >
                      <FAQIcon className="svg-icon left icon" />
                      FAQ
                    </OutboundLink>
                    <div className="divider" />
                    <OutboundLink
                      className="item"
                      href="https://twitter.com/inkdrop_app"
                    >
                      <TwitterIcon className="svg-icon left icon" />
                      Twitter
                    </OutboundLink>
                    <OutboundLink
                      className="item"
                      href="https://blog.inkdrop.app/"
                    >
                      <BlogIcon className="svg-icon left icon" />
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
                <OutboundLink
                  className="item login"
                  href="https://my.inkdrop.app/"
                >
                  <LoginIcon className="svg-icon left" />
                  Log in
                </OutboundLink>
                <Link className="item" to="/pricing">
                  <PricingIcon className="svg-icon left" />
                  <span>Pricing</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </Link>
                <OutboundLink
                  href="https://my.inkdrop.app/plugins"
                  className="item"
                >
                  <PluginsIcon className="svg-icon left" />
                  <span>Plugins</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <Link className="item" to="/gallery">
                  <GalleryIcon className="svg-icon left" />
                  <span>Gallery</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </Link>
                <OutboundLink
                  className="item"
                  href="https://my.inkdrop.app/demo"
                >
                  <DownloadIcon className="svg-icon left" />
                  <span>Demo</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <OutboundLink className="item" href="https://docs.inkdrop.app/">
                  <HelpIcon className="svg-icon left icon" />
                  <span>Documentation</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://forum.inkdrop.app/"
                >
                  <ForumIcon className="svg-icon left" />
                  <span>User Forum</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://docs.inkdrop.app/faq"
                >
                  <FAQIcon className="svg-icon left" />
                  <span>FAQ</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <OutboundLink
                  className="item"
                  href="https://twitter.com/inkdrop_app"
                >
                  <TwitterIcon className="svg-icon left" />
                  <span>Twitter</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
                </OutboundLink>
                <OutboundLink className="item" href="https://blog.inkdrop.app/">
                  <BlogIcon className="svg-icon left" />
                  <span>Blog</span>
                  <ArrowRightIcon className="svg-icon right aligned" />
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
