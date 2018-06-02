import React, { Component } from 'react'
import Masthead from '../components/masthead'
import Link from '../components/Link'

export default class NotFound extends Component {
  static title = 'Not Found'

  render() {
    return (
      <article className="app--top">
        <Masthead>
          <h1>Not Found 😢</h1>
          <p>
            The page you&apos;re looking for was not found. Please check the URL
            or click a link from the menu.
          </p>
          <div style={{ marginTop: '3em' }}>
            <Link to="/" className="ui rounded button">
              Return to top
            </Link>
          </div>
        </Masthead>
      </article>
    )
  }
}
