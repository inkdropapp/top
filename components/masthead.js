import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './masthead.scss'

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <section className='masthead'>
        <div className='ui container'>
          {this.props.children}
        </div>
      </section>
    )
  }
}
