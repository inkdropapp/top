import React, { Component } from 'react'
import Masthead from '../masthead'
import FreeTrialSection from './free-trial-section'
import BasicPlanSection from './basic-plan-section'
import PeriodTabs from './period-tabs'
import PeriodSection from './period-section'
import ColumnSpacer from './column-spacer'
import Link from '../Link'
import './masthead.scss'

export default class PricingMasthead extends Component {
  constructor (props) {
    super(props)
    this.state = {
      period: 'monthly'
    }
  }

  render () {
    const { period } = this.state
    return (
      <Masthead className='pricing-masthead'>
        <div className='ui container'>
          <section className='top'>
            <div className='ui container'>
              <h1>Simple pricing.</h1>
            </div>
          </section>

          <article className='pricing'>
            <div className='ui container'>
              <PeriodTabs
                onClickTab={::this.handleTabClick}
                period={period}
              />

              <PeriodSection active={period === 'monthly'}>
                <FreeTrialSection />
                <ColumnSpacer />
                <BasicPlanSection period='monthly' />
              </PeriodSection>

              <PeriodSection active={period === 'annual'}>
                <FreeTrialSection />
                <ColumnSpacer />
                <BasicPlanSection period='annual' />
              </PeriodSection>

              <div className='join'>
                <Link to='/signup' className='ui rounded button primary'>
                  Start your 60-day free trial now
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Masthead>
    )
  }

  handleTabClick (period) {
    this.setState({ period })
  }
}
