import React, { Component } from 'react'
import './pricing-masthead.less'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Masthead from './masthead'
import PeriodTabs from './pricing-period-tabs'
import PeriodSection from './pricing-period-section'
import BasicPlanPanel from './pricing-basic-plan-panel'
import { NotebookIcon } from './icons/notebook'

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
            <NotebookIcon />
          </div>
          <h1>
            <span className="avoid-wrap">Start your tech journey today</span>
          </h1>
        </Container>
        <div className="ui container sub-headline">
          Increase your productivity with organized Markdown notes.
        </div>

        <article className="pricing">
          <Container>
            <PeriodTabs onClickTab={this.handleTabClick} period={period} />

            <PeriodSection active={period === 'monthly'}>
              <BasicPlanPanel period="monthly" />
            </PeriodSection>

            <PeriodSection active={period === 'annual'}>
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
