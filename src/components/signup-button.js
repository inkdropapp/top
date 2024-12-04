import * as React from 'react'
import { useContext } from 'react'
import './signup-button.less'
import OutboundLink from './outbound-link'
import ReferralContext from '../utils/referral-context'
import { trialPeriod } from 'inkdrop-consts'
import { GlowingPrimaryButton } from './glowing-primary-button'
import { getUTMParams } from '../utils/utm'

const SignupButton = () => {
  const { referralId } = useContext(ReferralContext)
  const utmParams = getUTMParams()
  const href = new URL('https://my.inkdrop.app/signup')
  if (referralId) href.searchParams.set('r', referralId)
  if (utmParams) {
    href.searchParams.set('utm_source', utmParams.utm_source)
    href.searchParams.set('utm_medium', utmParams.utm_medium)
    href.searchParams.set('utm_campaign', utmParams.utm_campaign)
    href.searchParams.set('utm_content', utmParams.utm_content)
  }

  return (
    <GlowingPrimaryButton
      as={OutboundLink}
      href={href.toString()}
      className="signup"
    >
      Start your {trialPeriod}-day free trial
    </GlowingPrimaryButton>
  )
}

export default SignupButton
