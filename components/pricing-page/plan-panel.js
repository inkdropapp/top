import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './plan-panel.scss'

export default class PlanPanel extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className='center aligned seven wide column plan-panel'>
        {this.props.children}
      </div>
    )
  }
}
