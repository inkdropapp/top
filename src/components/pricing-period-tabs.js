import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './pricing-period-tabs.less'

export default class PeriodTabs extends Component {
  static propTypes = {
    period: PropTypes.string.isRequired,
    onClickTab: PropTypes.func.isRequired
  }

  render() {
    const { period, onClickTab } = this.props
    return (
      <div className="ui stackable centered grid period-tabs">
        <div className="seven wide column billing-interval-menu">
          <div className="ui secondary pagination pointing menu">
            <a
              className={`item ${period === 'monthly' ? 'active' : ''}`}
              onClick={() => onClickTab('monthly')}
            >
              Monthly billing
            </a>
            <a
              className={`item ${period === 'annual' ? 'active' : ''}`}
              onClick={() => onClickTab('annual')}
            >
              <div className="ui teal bottom pointing label">Save 15%</div>
              <div>Annual billing</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
