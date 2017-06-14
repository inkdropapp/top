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

            <div className='four wide column right aligned'>
              <RetinaImage
                src='/icon_w128.png'
                width='128'
                height='128'
              />
            </div>

            <div className='twelve wide column'>
              <h1>Get started with Inkdrop</h1>
              <Link to='/signup' className='ui rounded primary button'>
                Start your 60-day free trial now
              </Link>
            </div>

          </div>

        </div>
      </section>
    )
  }
}
