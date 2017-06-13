/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss'
import React, { Component } from 'react'
import Link from '../components/Link'
import Masthead from '../components/masthead'

export default class IndexPage extends Component {
  static title = 'Note-taking App for Markdown Lovers'

  constructor (props) {
    super(props)
    const isWin32 = window.navigator.platform === 'Win32'

    this.state = {
      isWin32
    }
  }

  componentDidMount () {
    $('.ui.embed').embed()
  }

  render () {
    return (
      <article className='app--top'>

        <Masthead>
          <div className='ui container'>
            <h1>Jot down your daily hacking endeavors.</h1>
            <h2>The Note-Taking App for Markdown Lovers</h2>
            <div>
              <Link to='/signup' className='ui rounded button primary'>
                Start your 60-day free trial now
              </Link>
            </div>
          </div>
        </Masthead>

        <div className='ui image' style={{ paddingTop: '2em' }}>
          <div
            className={`ui embed ${this.state.isWin32 ? 'win' : ''}`}
            data-source='vimeo'
            data-id='186246591'
            data-placeholder='/top/sc01@2x.png' />
        </div>

        <div style={{ paddingTop: '2em' }}>
          <img
            className='ui image'
            src='/top/sc01.png'
            srcSet='/top/sc01.png 1x, /top/sc01@2x.png 2x'
          />
        </div>

      </article>
    )
  }
}
