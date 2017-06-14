import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masthead from '../components/masthead'
import Link from '../components/Link'

export default class ErrorPage extends Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error)
  }

  renderError () {
    return (
      <div className='ui error message'>
        { this.props.error }
      </div>
    )
  }

  render () {
    return (
      <article className='app--top'>
        <Masthead>
          <h1>Sorry, unexpected error has been occurred 😢</h1>
          <div>
            Check the URL and try again.
          </div>
          { this.props.error ? this.renderError() : null }
          <div>
            <Link to='/' className='ui rounded button'>
              Return to top
            </Link>
          </div>
        </Masthead>
      </article>
    )
  }
}
