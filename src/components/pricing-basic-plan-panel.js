import React from 'react'
import PlanPanel from './pricing-plan-panel'

const BasicPlanPanel = props => {
  const { period } = props
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
            <i className="asterisk icon" />
            <div className="content">
              You will be charged once the free trial has ended
            </div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">No setup or hidden fees</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">Cloud sync</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">10 GB Storage</div>
          </div>
        </div>
      </div>
    </PlanPanel>
  )
}

export default BasicPlanPanel
