import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './article.scss'

export default class FunctionalitySection extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...props } = this.props
    return (
      <article className={`features-article ${className}`} {...props}>
        {children}
      </article>
    )
  }
}
