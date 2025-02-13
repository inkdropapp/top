import React, { Component } from 'react'
import PlanPanel from './pricing-plan-panel'
import DownloadButton from './download-button'

export default class FreeTrialPanel extends Component {
  render() {
    return (
      <PlanPanel>
        <h2 className="plan">Demo</h2>
        <h2 className="header price">Free</h2>
        <div className="description">
          <div className="ui list">
            <div className="item">
              <i className="asterisk icon" />
              <div className="content">No signup required</div>
            </div>
            <div className="item">
              <i className="asterisk icon" />
              <div className="content">
                Create up to <strong>5</strong> notes
              </div>
            </div>
            <div className="item">
              <i className="asterisk icon" />
              <div className="content">Just check the look and feel</div>
            </div>
            <div className="item">
              <i className="asterisk negative icon" />
              <div className="content">No cloud sync / mobile apps</div>
            </div>
          </div>
        </div>
        <div>
          <DownloadButton />
        </div>
      </PlanPanel>
    )
  }
}
