import './footer.less'
import React from 'react'
import './header.less'
import OutboundLink from './outbound-link'

const Footer = () => (
  <footer className="app--footer">
    <div className="app--footer-content ui container">
      <div className="ui stackable grid">
        <div className="thirteen wide column links">
          <ul className="links">
            <li>
              <OutboundLink href="https://docs.inkdrop.app/terms">
                Terms of Use
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://docs.inkdrop.app/privacy">
                Privacy Policy
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://docs.inkdrop.app/faq">
                FAQ
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://forum.inkdrop.app/c/announcements/14">
                Release Notes
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://docs.inkdrop.app/contact">
                Contact
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://x.com/inkdrop_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#x1D54F;
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.devas.life/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://docs.inkdrop.app/notation"
                target="_blank"
                rel="noopener noreferrer"
              >
                特定商取引法に基づく表記
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className="three wide column text-left">
          <a href="https://www.inkdrop.app/">
            © {new Date().getFullYear()} Inkdrop
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
