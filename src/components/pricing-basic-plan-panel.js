import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlanPanel from './pricing-plan-panel'

export default class BasicPlanPanel extends Component {
  static propTypes = {
    period: PropTypes.string.isRequired
  }

  render() {
    const { period } = this.props
    return (
      <StaticQuery
        query={query}
        render={_data => (
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
        )}
      />
    )
  }
}

const query = graphql`
  query {
    stripe: file(relativePath: { eq: "powered-by-stripe.png" }) {
      childImageSharp {
        fixed(width: 119) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
