import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './masthead.less'

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props
    return <section className={`masthead ${className}`}>{children}</section>
  }
}
