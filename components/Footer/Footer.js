/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import './Footer.scss'
import Link from '../Link'

class Footer extends React.Component {
  componentDidMount() {}

  handleOutboundLinkClick(event) {
    const target = event.currentTarget
    window.ga('send', 'event', {
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      eventLabel: target.href
    })
  }

  render() {
    return (
      <footer className="app--footer">
        <div className="app--footer-content ui container">
          <div className="ui stackable grid">
            <div className="thirteen wide column links">
              <ul className="links">
                <li>
                  <a href="https://doc.inkdrop.info/terms">Terms of Use</a>
                </li>
                <li>
                  <a href="https://doc.inkdrop.info/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://doc.inkdrop.info/faq">FAQ</a>
                </li>
                <li>
                  <a
                    href="mailto:contact@inkdrop.info"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/inkdrop_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.inkdrop.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="three wide column text-left">
              <a
                href="https://www.craftz.dog/"
                target="_blank"
                rel="noopener noreferrer"
                className="copyright"
                onClick={this.handleOutboundLinkClick}
              >
                © Takuya Matsuyama
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
