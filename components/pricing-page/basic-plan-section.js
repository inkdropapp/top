import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RetinaImage from '../retina-image'
import PlanPanel from './plan-panel'

export default class BasicPlanSection extends Component {
  static propTypes = {
    period: PropTypes.string.isRequired
  }

  render() {
    const { period } = this.props
    return (
      <PlanPanel>
        <h3 className="plan">Basic Plan</h3>
        <div className="ui divider" />
        {period === 'monthly' ? (
          <h2 className="header price">
            <span className="currency">&#36;</span>
            4.99
            <span className="period">/ mo.</span>
          </h2>
        ) : (
          <h2 className="header price">
            <span className="currency">&#36;</span>
            49.90
            <span className="period">/ yr.</span>
          </h2>
        )}
        <div className="description">
          <div className="ui list">
            <div className="item">
              <i className="asterisk icon teal" />
              <div className="content">
                You will be charged once the free trial has ended
              </div>
            </div>
            <div className="item">
              <i className="asterisk icon teal" />
              <div className="content">No setup or hidden fees</div>
            </div>
            <div className="item">
              <i className="asterisk icon teal" />
              <div className="content">Cloud sync</div>
            </div>
            <div className="item">
              <i className="asterisk icon teal" />
              <div className="content">10 GB Storage</div>
            </div>
          </div>
        </div>

        <RetinaImage src="/powered-by-stripe.png" width="119" height="26" />
      </PlanPanel>
    )
  }
}
