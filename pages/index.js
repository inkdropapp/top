import './index.scss'
import React, { Component } from 'react'
import Link from '../components/Link'
import Masthead from '../components/masthead'
import SupportingDeviceMenu from '../components/top-page/supporting-device-menu'
import DesktopDescription from '../components/top-page/desktop-description'
import MobileDescription from '../components/top-page/mobile-description'
import LeanMoreSection from '../components/top-page/learn-more-section'
import KeepInTouchSection from '../components/top-page/keep-in-touch-section'
const isBrowser = typeof window !== 'undefined'

export default class IndexPage extends Component {
  static title = 'Note-taking App for Markdown Lovers'

  constructor (props) {
    super(props)
    const isWin32 = isBrowser ? window.navigator.platform === 'Win32' : false

    this.state = {
      activeDeviceType: 'desktop',
      isWin32
    }
  }

  render () {
    const { activeDeviceType } = this.state
    return (
      <article className='app--top'>

        <Masthead>
          <div className='ui container'>
            <h1>Jot down your daily hacking endeavors.</h1>
            <h2>The Note-Taking App for Markdown Lovers</h2>
            <div>
              <a href='https://app.inkdrop.info/signup' className='ui rounded button primary'>
                Start your 60-day free trial now
              </a>
            </div>
          </div>
          <SupportingDeviceMenu
            onClickMenu={::this.handleDeviceTypeMenuItemClick}
            activeDeviceType={activeDeviceType}
          />
          <DesktopDescription active={activeDeviceType === 'desktop'} />
          <MobileDescription active={activeDeviceType === 'mobile'} />
        </Masthead>

        <LeanMoreSection />
        <KeepInTouchSection />

      </article>
    )
  }

  handleDeviceTypeMenuItemClick (deviceType) {
    this.setState({ activeDeviceType: deviceType })
  }
}
