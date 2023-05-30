import React, { Component } from 'react'
import './pricing-masthead.less'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Masthead from './masthead'
import PeriodTabs from './pricing-period-tabs'
import PeriodSection from './pricing-period-section'
import FreeTrialPanel from './pricing-free-trial-panel'
import PlusSeparator from './pricing-plus-separator'
import BasicPlanPanel from './pricing-basic-plan-panel'
import SignupButton from './signup-button'

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
          <div className="coffee-icon-container">
            <img src="/coffee.svg" alt="Coffee" width={24} />
          </div>
          <h1>
            <span className="avoid-wrap">At the cost of</span>&nbsp;
            <span className="avoid-wrap">a coffee per month.</span>
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
              <PlusSeparator />
              <BasicPlanPanel period="monthly" />
            </PeriodSection>

            <PeriodSection active={period === 'annual'}>
              <FreeTrialPanel />
              <PlusSeparator />
              <BasicPlanPanel period="annual" />
            </PeriodSection>

            <div className="join">
              <SignupButton />
            </div>
          </Container>
        </article>
      </Masthead>
    )
  }

  handleTabClick = period => {
    this.setState({ period })
  }
}
