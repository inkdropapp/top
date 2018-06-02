import React, { Component } from 'react'
import Masthead from '../masthead'
import './masthead.scss'

export default class FeaturesMasthead extends Component {
  render() {
    return (
      <Masthead className="features-masthead">
        <div className="ui container">
          <h1>Simple, Beautiful &amp; Extensible.</h1>
          <div className="headline">
            Inkdrop is designed to be the most convenient and natural way to
            make notes for your daily hacking.
          </div>
          <nav className="stackable ui four column grid sections">
            <div className="column section-item simplicity">
              <a href="#simplicity">
                <strong>Simple functionality</strong>
                <span>Supports writing notes that sync.</span>
              </a>
            </div>
            <div className="column section-item beauty">
              <a href="#beauty">
                <strong>Beautiful interface</strong>
                <span>Does not distract you from the text.</span>
              </a>
            </div>
            <div className="column section-item extensibility">
              <a href="#extensibility">
                <strong>Powerful APIs</strong>
                <span>Plugin support lets you add new feature.</span>
              </a>
            </div>
            <div className="column section-item security">
              <a href="#security">
                <strong>Seamless security</strong>
                <span>Trusted, secure, and headache-free.</span>
              </a>
            </div>
          </nav>
        </div>
      </Masthead>
    )
  }
}
