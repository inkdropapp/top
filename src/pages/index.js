import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Masthead from '../components/top-masthead'
import SectionSimpleFeatures from '../components/top-section-simple-features'
import SectionBeautifulUI from '../components/top-section-beautiful-ui'
import SectionSeamlessSync from '../components/top-section-seamless-sync'
import SectionBlogposts from '../components/section-blogposts'
import SectionGetStarted from '../components/section-get-started'
import SectionTestimonials from '../components/section-testimonials'
import SectionWhoMadeIt from '../components/top-section-whomadeit'

const IndexPage = () => (
  <Layout pageTitle="Inkdrop - Note-taking App with Robust Markdown Editor">
    <div className="main-content">
      <Masthead />
      <SectionSimpleFeatures />
      <SectionBeautifulUI />
      <SectionSeamlessSync />
      <div className="section-get-now">
        <SectionTestimonials />
        <SectionGetStarted />
      </div>
      <SectionWhoMadeIt />
      <SectionBlogposts />
    </div>
  </Layout>
)

export default IndexPage
