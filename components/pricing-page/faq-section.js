import React from 'react'
import './faq-section.scss'
import OutboundLink from '../outbound-link'

export default function FaqSection () {
  return (
    <section className='white-bg light faq-section'>
      <div className='ui container'>
        <div className='ui segment'>
          <h2>FAQ</h2>
          <div className='ui two column stackable grid'>
            <div className='row'>
              <div className='column'>
                <h3>How do I cancel my plan?</h3>
                <p>
                  You can cancel your subscription by deleting your account through the Account page.
                  Please keep in mind that all created notes and uploaded images will be deleted forever.
                </p>
              </div>
              <div className='column'>
                <h3>What happens if I change my plan before my next billing date?</h3>
                <p>
                  If you switch from a monthly plan to a yearly plan, the billing date becomes the date of the switch.
                  By default, Inkdrop prorates subscription costs.
                  Please read the <OutboundLink
                    href='https://stripe.com/docs/subscriptions/upgrading-downgrading'>
                    Stripe&apos;s documentation
                  </OutboundLink> for more detail.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <h3>What payment methods are available?</h3>
                <p>
                  Currently, we can only accept credit card payment with Visa, MasterCard, and American Express.
                </p>
              </div>
              <div className='column'>
                <h3>Is it secure to send my credit card information?</h3>
                <p>
                  We uses <OutboundLink href='https://stripe.com/'>
                    Stripe.com
                  </OutboundLink> for online payments. Stripe provides security and compliance without the headaches.
                  We never send and store your credit card information to Inkdrop server.
                </p>
                <p>
                  Learn more: <OutboundLink href='https://stripe.com/docs/security/stripe'>Security at Stripe</OutboundLink>
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <h3>What happens if the free trial expired without adding my credit card?</h3>
                <p>
                  Your account will be deleted and you can no longer access to your account.
                  But you can still access your data stored in local with the app in read-only mode.
                </p>
              </div>
              <div className='column'>
                <h3>What happens if the payment failed?</h3>
                <p>
                  The payment fails if you have canceled your card, the card may have expired,
                  or the payment might be declined by the bank for some other reason.
                  Then we will send you an email notification.
                  Inkdrop will retry failed payments up to three times:
                </p>
                <ul>
                  <li>1st failed attempt: Retry 3 days after the previous attempt</li>
                  <li>2nd failed attempt: Retry 5 days after the previous attempt</li>
                  <li>3rd failed attempt: Retry 7 days after the previous attempt</li>
                  <li>Then finally: Cancel your subscription and delete your account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
