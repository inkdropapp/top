import './top-section-seamless-sync.less'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { ReactComponent as SyncImage } from '../images/icons/sync.svg'
import { ReactComponent as SecureImage } from '../images/icons/secure.svg'
import { ReactComponent as WorkImage } from '../images/icons/work.svg'

class SectionSeamlessSync extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <section id="seamless-sync">
        <Container text>
          <div className="image-container">
            <SyncImage className="small svg-icon" />
            <WorkImage className="svg-icon" />
            <SecureImage className="small svg-icon" />
          </div>
          <h2 className="ui icon header">
            <div className="content">Have it everywhere, securely</div>
          </h2>
          <p>
            Capture a note once, and it’s instantly available on all your
            devices. It syncs data securely with end-to-end encryption.
          </p>
          <p>
            <a
              className="ui rounded white button"
              href="https://docs.inkdrop.app/security"
            >
              Learn more about security&nbsp;
              <i className="angle double right icon" />
            </a>
          </p>
        </Container>
      </section>
    )
  }
}

export default SectionSeamlessSync
