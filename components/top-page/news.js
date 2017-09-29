import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './news.scss'
import OutboundLink from '../outbound-link'

export default class NewsSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <section className='white-bg light news-section'>
        <div className='ui text container'>
          <h2>News</h2>
          <ul className='left aligned'>
            <li>
              Sep 26, 2017 — &nbsp;
              <OutboundLink
                href='https://blog.inkdrop.info/the-next-roadmap-of-inkdrop-vol-2-b40a70b5498d'
              >
                The Next Roadmap of Inkdrop (vol.2)
              </OutboundLink>
            </li>
            <li>
              Sep 25, 2017 — &nbsp;
              <OutboundLink
                href='https://hackernoon.com/how-i-built-a-markdown-editor-earning-1300-mo-profit-inkdrop-ddf6ad702c42'
              >
                How I Built a Markdown Editor Earning $1300/mo Profit
              </OutboundLink>
            </li>
            <li>
              Jul 7, 2017 — &nbsp;
              <OutboundLink
                href='https://hackernoon.com/markdown-note-taking-app-can-now-cover-half-of-rent-inkdrop-795de224ebf'
              >
                Markdown Note-taking App Can Now Cover Half of Rent
              </OutboundLink>
            </li>
            <li>
              May 29, 2017 — &nbsp;
              <OutboundLink
                href='https://blog.inkdrop.info/inkdrop-for-android-is-now-available-8d2708e8f049'
              >
                Inkdrop for Android is now available
              </OutboundLink>
            </li>
            <li>
              Apr 5, 2017 — &nbsp;
              <OutboundLink
                href='https://hackernoon.com/inkdrop-has-reached-1-000-sales-f56a0b2fb60b'
              >
                Inkdrop has reached $1,000 sales
              </OutboundLink>
            </li>
            <li>
              Mar 22, 2017 — &nbsp;
              <OutboundLink
                href='https://blog.inkdrop.info/inkdrop-for-ios-is-available-now-2fe6d4bc4ea'
              >
                Inkdrop for iOS is Available Now
              </OutboundLink>
            </li>
            <li>
              Dec 7, 2016 — &nbsp;
              <OutboundLink
                href='https://blog.inkdrop.info/the-future-work-of-inkdrop-8c50c4e06e6c'
              >
                The Future Work of Inkdrop
              </OutboundLink>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
