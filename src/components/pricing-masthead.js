import React, { Component } from 'react'
import './pricing-masthead.less'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Masthead from './masthead'
import PeriodTabs from './pricing-period-tabs'
import PeriodSection from './pricing-period-section'
import FreeTrialPanel from './pricing-free-trial-panel'
import BasicPlanPanel from './pricing-basic-plan-panel'
import { DashboardIcon } from './icons/dashboard'

export default class PricingMasthead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      period: 'monthly'
    }
  }

  render() {
    const { period } = this.state
    return (
      <Masthead className="pricing-masthead">
        <Container>
          <div className="icon-container">
            <DashboardIcon />
          </div>
          <h1>
            <span className="avoid-wrap">Simple pricing</span>
          </h1>
        </Container>
        <div className="ui container sub-headline">
          Increase your productivity with organized Markdown notes.
        </div>

        <article className="pricing">
          <Container>
            <PeriodTabs onClickTab={this.handleTabClick} period={period} />

            <PeriodSection active={period === 'monthly'}>
              <FreeTrialPanel />
              <BasicPlanPanel period="monthly" />
            </PeriodSection>

            <PeriodSection active={period === 'annual'}>
              <FreeTrialPanel />
              <BasicPlanPanel period="annual" />
            </PeriodSection>
          </Container>
        </article>
      </Masthead>
    )
  }

  handleTabClick = period => {
    this.setState({ period })
  }
}
