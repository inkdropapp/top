import React from 'react'
import PlanPanel from './pricing-plan-panel'
import SignupButton from './signup-button'

const BasicPlanPanel = props => {
  const { period } = props
  return (
    <PlanPanel>
      <h2 className="plan">Basic</h2>
      {period === 'monthly' ? (
        <h2 className="header price">
          <span className="currency">&#36;</span>
          9.98
          <span className="period">/ mo.</span>
        </h2>
      ) : (
        <h2 className="header price">
          <span className="currency">&#36;</span>
          99.80
          <span className="period">/ yr.</span>
        </h2>
      )}
      <div className="description">
        <div className="ui list">
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">Cloud sync</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">Unlimited number of notes</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">30GB storage</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">No setup or hidden fees</div>
          </div>
          <div className="item">
            <i className="asterisk icon" />
            <div className="content">
              You will be charged once the free trial has ended
            </div>
          </div>
        </div>
      </div>
      <div>
        <SignupButton />
      </div>
    </PlanPanel>
  )
}

export default BasicPlanPanel
