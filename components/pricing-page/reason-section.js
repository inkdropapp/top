import React from 'react'
import './faq-section.scss'
import OutboundLink from '../outbound-link'

export default function ReasonSection () {
  return (
    <section className='faq-section'>
      <div className='ui container'>
        <h1 className='center aligned'>Why this pricing</h1>
        <div className='ui four column stackable grid'>
          <div className='row'>
            <div className='column'>
              <h3>Why is it subscription model?</h3>
              <p>
                Because lifetime pricing is not sustainable.
                We know there are similar apps with lifetime pricing out there, but it doesn&apos;t work for long-running business.
                The sustainability is crucial especially for note-taking apps because you will store a lot of notes in it day by day.
              </p>
            </div>
            <div className='column'>
              <h3>$5 per month is too expensive.</h3>
              <p>
                It is for professional use, not targeted to the mass of people.
                We believe it would improve your work worth over $5.
                This is the price we would pay as a user.
              </p>
            </div>
            <div className='column'>
              <h3>If lowered the pricing, you get more customers.</h3>
              <p>
                We would like to provide good, quick and warm user support.
                If we got a lot of users, we won&apos;t be able to support them all.
              </p>
            </div>
            <div className='column'>
              <h3>Do you offer student discounts?</h3>
              <p>
                Yes.
                We&apos;re committed to helping students and teachers experience the power of Inkdrop.
                See <OutboundLink href='https://doc.inkdrop.info/student-discount'>this page</OutboundLink> for requesting your discount.
              </p>
            </div>
          </div>
        </div>
        <div className='ui divider' />
        <p className='right aligned'>
          If you are curious about our pricing, please read <OutboundLink href='https://hackernoon.com/why-inkdrop-is-a-subscription-app-beda29c507d5'>our blog post</OutboundLink> for more detail.
        </p>
      </div>
    </section>
  )
}
