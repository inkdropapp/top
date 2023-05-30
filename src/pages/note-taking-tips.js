import './note-taking-tips.less'
import React from 'react'

import Layout from '../components/layout'
import Masthead from '../components/tips-masthead'
import SectionRightTool from '../components/tips-right-tool'
import SectionFourSteps from '../components/tips-four-steps'
import SectionFourSteps2 from '../components/tips-four-steps_2'
import SectionGetStarted from '../components/section-get-started'
import SectionWrapUp from '../components/tips-wrap-up'
import { ZoomedImageProvider } from '../components/zoomable-image'

const TipsPage = () => (
  <Layout pageTitle="Effective tech note-taking">
    <ZoomedImageProvider>
      <div className="main-content" id="tips">
        <Masthead />

        <SectionRightTool />
        <SectionFourSteps />
        <SectionFourSteps2 />
        <div className="section-get-now">
          <SectionWrapUp />
          <SectionGetStarted />
        </div>
      </div>
    </ZoomedImageProvider>
  </Layout>
)

export default TipsPage
