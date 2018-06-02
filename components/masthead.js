import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './masthead.scss'

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...props } = this.props
    return (
      <section className={`masthead ${className}`} {...props}>
        {children}
      </section>
    )
  }
}
