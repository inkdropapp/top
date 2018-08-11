import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './embedded-tweet.scss'

export default class Tweet extends Component {
  static propTypes = {
    tweetId: PropTypes.string,
    theme: PropTypes.string
  }

  componentDidMount() {
    twttr.widgets.createTweet(this.props.tweetId, this.container, {
      theme: this.props.theme
    })
  }

  render() {
    return <div className="embedded-tweet" ref={el => (this.container = el)} />
  }
}
