import React, { Component } from 'react'
import Masthead from '../components/masthead'
import './demo.scss'
import DownloadPlatform from '../components/demo-page/download-platform'

export default class Demo extends Component {
  static title = 'Demo'

  render () {
    return (
      <article className='app--demo'>
        <Masthead>
          <h1>Demo</h1>
          <p>Choose your environment</p>
        </Masthead>
        <div className='ui container main-content'>
          <div className='ui segment'>

            <div className='ui message'>
              <p>
                <strong>Notice</strong>:
                This demo is intended to provide for users just checking out the Inkdtop&apos;s UI
                without registering an account for free.
              </p>
              <p>
                With this demo, you can NOT:
              </p>
              <ul>
                <li>Create more than 5 notes</li>
                <li>Sync with other devices</li>
                <li>Try iOS and Android app</li>
              </ul>
            </div>

            <div className='download-links ui three column stackable divided grid'>
              <DownloadPlatform
                platform='macOS'
                image='/finder.png'
                version='OS Version: 10.11.4+'
                links={[{
                  id: 'darwin-archive',
                  href: 'https://github.com/inkdropapp/releases/releases/download/v3.4.1/Inkdrop-demo-3.4.1-Mac.zip',
                  fileType: 'Zip Archive'
                }]}
              />

              <DownloadPlatform
                platform='Windows'
                image='/windows.png'
                version='OS Version: 7+ (64bit)'
                links={[{
                  id: 'win32-archive',
                  href: 'https://github.com/inkdropapp/releases/releases/download/v3.4.1/Inkdrop-demo-3.4.1-Windows.zip',
                  fileType: 'Zip Archive'
                }]}
              />

              <DownloadPlatform
                platform='Ubuntu'
                image='/ubuntu.png'
                version='Tested on Ubuntu 16.04 LTS (64bit)'
                links={[{
                  id: 'linux-archive',
                  href: 'https://github.com/inkdropapp/releases/releases/download/v3.4.1/Inkdrop-demo-3.4.1-Linux.zip',
                  fileType: 'Zip Archive'
                }, {
                  id: 'linux-package',
                  href: 'https://github.com/inkdropapp/releases/releases/download/v3.4.1/inkdrop_demo_3.4.1_amd64.deb',
                  fileType: 'Debian Package'
                }]}
              />
            </div>
          </div>
        </div>
      </article>
    )
  }
}
