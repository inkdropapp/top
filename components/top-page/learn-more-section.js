import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import getPlatform from '../utils/platform'
import './learn-more-section.scss'

export default class LeanMoreSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const platform = getPlatform()
    return (
      <section className={`learn-more-section ${platform}`}>
        <div className="ui container">
          <h1>Simple, Beautiful &amp; Extensible.</h1>
          <div className="description">
            Inkdrop is designed to be the most convenient and natural way to
            make notes for your daily hacking.
          </div>
          <Link to="/features" className="ui rounded button">
            Learn More
            <i className="angle right icon" />
          </Link>
        </div>
      </section>
    )
  }
}
