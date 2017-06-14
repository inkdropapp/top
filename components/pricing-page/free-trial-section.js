import React, { Component } from 'react'
import PlanPanel from './plan-panel'
// import './masthead.scss'

export default class FreeTrialSection extends Component {
  render () {
    return (
      <PlanPanel>
        <h3 className='plan'>
          Free Trial
        </h3>
        <div className='ui divider' />
        <h2 className='header price'>
          <span className='currency'>&#36;</span>
          0
          <span className='period'>
            for 2 months
          </span>
        </h2>
        <div className='description'>
          <div className='ui list'>
            <div className='item'>
              <i className='asterisk icon teal' />
              <div className='content'>
                You can try it out for 60 days without any fees
              </div>
            </div>
            <div className='item'>
              <i className='asterisk icon teal' />
              <div className='content'>
                No credit card information required
              </div>
            </div>
            <div className='item'>
              <i className='asterisk icon teal' />
              <div className='content'>
                Cloud sync
              </div>
            </div>
            <div className='item'>
              <i className='asterisk icon teal' />
              <div className='content'>
                1 GB Storage
              </div>
            </div>
          </div>
        </div>
      </PlanPanel>
    )
  }
}
