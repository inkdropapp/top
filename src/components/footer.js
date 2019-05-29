import './footer.less'
import React from 'react'
import './header.less'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = () => (
  <footer className="app--footer">
    <div className="app--footer-content ui container">
      <div className="ui stackable grid">
        <div className="thirteen wide column links">
          <ul className="links">
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <a href="mailto:contact@inkdrop.app">Contact</a>
            </li>
            <li>
              <OutboundLink
                href="https://twitter.com/inkdrop_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://blog.inkdrop.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className="three wide column text-left">
          <a href="https://inkdrop.app/">
            © {new Date().getFullYear()} Inkdrop
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
