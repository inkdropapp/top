import React, { Component } from 'react'
import './getnow-section.scss'
import RetinaImage from '../retina-image'
import Link from '../Link'

export default class GetNowSection extends Component {
  render () {
    return (
      <section className='getnow-section'>
        <div className='ui container'>

          <div className='ui stackable grid'>

            <div className='four wide column big-icon'>
              <RetinaImage
                src='/icon_w128.png'
                width='128'
                height='128'
              />
            </div>

            <div className='twelve wide column get-started-message'>
              <h1>Get started with Inkdrop</h1>
              <h2>Available on 5 platforms for just $4.16 per month (annual billing).</h2>
              <div className='pricing'>
                <Link to='/pricing'>
                  See pricing
                  <i className='angle right icon' />
                </Link>
              </div>
              <div className='link-to-signup'>
                <a href='https://app.inkdrop.info/signup' className='ui rounded primary button'>
                  Start your 60-day free trial now
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    )
  }
}
