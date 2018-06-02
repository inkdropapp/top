import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './period-section.scss'

export default class PeriodSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool.isRequired
  }

  render() {
    const { children, active } = this.props
    return (
      <section className={`period-section ${active ? 'active' : ''}`}>
        <div className="ui stackable centered grid">{children}</div>
      </section>
    )
  }
}
