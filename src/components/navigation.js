import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import './navigation.less'
import HamburgerMenuButton from './hamburger-menu-button'
import OutboundLink from './outbound-link'
import { ReactComponent as LoginIcon } from '../images/icons/login.svg'
import { ReactComponent as ArrowRightIcon } from '../images/icons/arrow-right.svg'
import { ReactComponent as BlogIcon } from '../images/icons/blog.svg'
import { ReactComponent as XIcon } from '../images/icons/x.svg'
import { ReactComponent as FAQIcon } from '../images/icons/faq.svg'
import { ReactComponent as AnnouncementsIcon } from '../images/icons/announcements.svg'
import { ReactComponent as HelpIcon } from '../images/icons/help-wheel.svg'
import { ReactComponent as ForumIcon } from '../images/icons/forum.svg'
import { ReactComponent as DiscordIcon } from '../images/icons/discord.svg'
import { ReactComponent as PluginsIcon } from '../images/icons/plugins.svg'
import { ReactComponent as PricingIcon } from '../images/icons/pricing.svg'

const Navigation = () => {
  const [navbarMobileVisible, setNavbarMobileVisible] = useState(false)

  const handleToggleMobileMenu = () => {
    setNavbarMobileVisible(!navbarMobileVisible)
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "navbar-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 142, height: 45)
        }
      }
    }
  `)

  return (
    <>
      <Container className="app--navigation">
        <nav className="ui grid">
          <div className="row">
            <Link to="/" className="app--logo">
              <GatsbyImage
                image={data.placeholderImage.childImageSharp.gatsbyImageData}
                alt="Inkdrop logo"
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
                  <OutboundLink
                    className="item"
                    href="https://forum.inkdrop.app/"
                  >
                    <ForumIcon className="svg-icon left icon" />
                    User Forum
                  </OutboundLink>
                  <OutboundLink
                    className="item"
                    href="https://docs.inkdrop.app/start-guide/join-discord-server"
                  >
                    <DiscordIcon className="svg-icon left icon" />
                    Discord Server
                  </OutboundLink>
                  <OutboundLink
                    className="item"
                    href="https://docs.inkdrop.app/faq"
                  >
                    <FAQIcon className="svg-icon left icon" />
                    FAQ
                  </OutboundLink>
                  <OutboundLink
                    className="item"
                    href="https://forum.inkdrop.app/c/announcements/14"
                  >
                    <AnnouncementsIcon className="svg-icon left icon" />
                    What&apos;s New
                  </OutboundLink>

                  <div className="divider" />
                  <OutboundLink
                    className="item"
                    href="https://x.com/inkdrop_app"
                  >
                    <XIcon className="svg-icon left icon" />X
                  </OutboundLink>
                  <OutboundLink className="item" href="https://www.devas.life/">
                    <BlogIcon className="svg-icon left icon" />
                    Blog
                  </OutboundLink>
                </div>
              </li>
              <li>
                <OutboundLink href="https://my.inkdrop.app/" className="login">
                  <i className="sign in icon" />
                  Log in
                </OutboundLink>
              </li>
            </ul>

            <div className="hamburger-menu">
              <HamburgerMenuButton
                opened={navbarMobileVisible}
                onClick={handleToggleMobileMenu}
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
              <OutboundLink className="item" href="https://docs.inkdrop.app/">
                <HelpIcon className="svg-icon left icon" />
                <span>Documentation</span>
                <ArrowRightIcon className="svg-icon right aligned" />
              </OutboundLink>
              <OutboundLink className="item" href="https://forum.inkdrop.app/">
                <ForumIcon className="svg-icon left" />
                <span>User Forum</span>
                <ArrowRightIcon className="svg-icon right aligned" />
              </OutboundLink>
              <OutboundLink
                className="item"
                href="https://docs.inkdrop.app/start-guide/join-discord-server"
              >
                <DiscordIcon className="svg-icon left" />
                <span>Discord Server</span>
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
                href="https://forum.inkdrop.app/c/announcements/14"
              >
                <AnnouncementsIcon className="svg-icon left icon" />
                <span>What&apos;s New</span>
                <ArrowRightIcon className="svg-icon right aligned" />
              </OutboundLink>
              <OutboundLink className="item" href="https://x.com/inkdrop_app">
                <XIcon className="svg-icon left" />
                <span>X</span>
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

export default Navigation
