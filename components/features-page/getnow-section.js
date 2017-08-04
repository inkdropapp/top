import React, { Component } from 'react'
import Link from '../Link'
import './getnow-section.scss'
import RetinaImage from '../retina-image'

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
              <a href='https://app.inkdrop.info/signup' className='ui rounded primary button'>
                Start your 60-day free trial now
              </a>
            </div>

          </div>

        </div>
      </section>
    )
  }
}
