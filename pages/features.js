import './index.scss'
import React, { Component } from 'react'
import Masthead from '../components/features-page/masthead'
import FunctionalitySection from '../components/features-page/functionality-section'
import InterfaceSection from '../components/features-page/interface-section'
import ExtensibilitySection from '../components/features-page/extensibility-section'
import SecuritySection from '../components/features-page/security-section'
import GetNowSection from '../components/features-page/getnow-section'
import './features.scss'

export default class FeaturesPage extends Component {
  static title = 'Features'

  render() {
    return (
      <div className="app--features">
        <Masthead />
        <div className="main-content">
          <FunctionalitySection />
          <InterfaceSection />
          <ExtensibilitySection />
          <SecuritySection />
          <GetNowSection />
        </div>
      </div>
    )
  }
}
