import './pricing-why-a-subscription.less'
import React from 'react'
import OutboundLink from './outbound-link'
import SectionSecond, { Callout } from './section-second'

const SectionWhySubscription = () => {
  return (
    <SectionSecond id="pricing-why">
      <h2>Frequently Asked Questions</h2>
      <div className="ui two column stackable grid">
        <div className="row">
          <div className="column">
            <details>
              <summary>What platforms does Inkdrop run on?</summary>
              <p>
                Inkdrop is available for macOS 10.13 or later, Windows 8.1 or
                later, and Ubuntu Linux 18.04 or later. Mobile app is also
                available for iOS 15.6+ and Android 14.0+.
              </p>
            </details>
          </div>
          <div className="column">
            <details>
              <summary>
                Can I sync my data with DropBox, GoogleDrive, etc?
              </summary>
              <p>
                No. You can only sync your data with a server compatible with
                CouchDB. Read the{' '}
                <OutboundLink href="https://docs.inkdrop.app/reference/note-synchronization#how-to-set-up-your-own-sync-server">
                  documentation
                </OutboundLink>{' '}
                to learn how to set up your own sync server.
              </p>

              <p>
                We’re delivering stable smooth experience to our users. That’s
                why we don’t want to defocus on support of different platforms.
              </p>
            </details>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <details>
              <summary>
                I don’t trust anyone with my note. Can I run Inkdrop server
                myself?
              </summary>
              <p>
                Yes. See the{' '}
                <OutboundLink href="https://docs.inkdrop.app/reference/note-synchronization#how-to-set-up-your-own-sync-server">
                  documentation
                </OutboundLink>{' '}
                for full instructions on setting up the sync server on your
                local machine. Or you can simply use it in offline by setting
                from preferences.
              </p>
            </details>
          </div>
          <div className="column">
            <details>
              <summary>How do I cancel my plan?</summary>
              <p>
                You can cancel your subscription by deleting your account
                through{' '}
                <OutboundLink href="https://my.inkdrop.app/account/delete">
                  the Account page
                </OutboundLink>
                . Please keep in mind that all created notes and uploaded images
                will be deleted forever. Since Inkdrop is not like a big
                company, we don&apos;t have a budget for keeping your data
                without your payments.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Callout>
        <p>
          <h3>Have a question?</h3>
          Please check out{' '}
          <OutboundLink href="https://docs.inkdrop.app/faq">
            the FAQ page on the docs
          </OutboundLink>{' '}
          for more detail or{' '}
          <OutboundLink href="https://docs.inkdrop.app/contact">
            get in touch
          </OutboundLink>{' '}
          with the author.
        </p>
      </Callout>
    </SectionSecond>
  )
}

export default SectionWhySubscription
