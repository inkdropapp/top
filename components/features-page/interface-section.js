import React, { Component } from 'react'
import RetinaImage from '../retina-image'
import './interface-section.scss'
import Article from './article'
import Link from '../Link'

export default class InterfaceSection extends Component {
  render () {
    return (
      <Article className='interface-section'>
        <a name='beauty' />
        <header className='ui container'>
          <h2>Beautiful Interface</h2>
          <p>
            Sophisticated UIs don&apos;t distract you from the text and come with customizable themes
            including a dark theme for night owls.
          </p>
        </header>
        <section className='ui container ui-themes'>
          <div className='dark-theme'>
            <img
              className='ui image'
              src='/features/dark-theme.png'
              alt='Dark Theme'
              width='1168' />
          </div>
        </section>
        <section className='gray-bg light syntax-themes'>
          <div className='ui container'>
            <div className='ui stackable centered grid'>
              <div className='six wide column'>
                <h2>
                  <i className='paint brush icon' />
                  Pick your favorite flavor.
                </h2>
                <div className='feature-description'>
                  <p>
                    Inkdrop comes with several beautifully designed UI,
                    preview and syntax themes in both dark and light colors.
                    Just choose a built-in theme you like.
                    If you can&apos;t find what you&apos;re looking for,
                    you can also install themes created by the Inkdrop community or create your own.
                  </p>
                  <p>
                    <Link to='/themes'>
                      Find your favorite theme
                      <i className='angle double right icon' />
                    </Link>
                  </p>
                  <p>
                    <a href='http://doc.inkdrop.info/manual/creating-a-theme'>
                      Learn how to create a theme
                      <i className='angle double right icon' />
                    </a>
                  </p>
                </div>
              </div>
              <div className='six wide column'>
                <img
                  className='ui image'
                  src='/features/syntax-themes.png'
                  alt='Have it everywhere'
                  width='458' />
              </div>
            </div>
          </div>
        </section>
      </Article>
    )
  }
}
