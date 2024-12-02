import * as React from 'react'
import { useContext } from 'react'
import './signup-button.less'
import OutboundLink from './outbound-link'
import ReferralContext from '../utils/referral-context'
import { trialPeriod } from 'inkdrop-consts'
import { GlowingPrimaryButton } from './glowing-primary-button'

const SignupButton = () => {
  const { referralId } = useContext(ReferralContext)

  return (
    <GlowingPrimaryButton
      as={OutboundLink}
      href={`https://my.inkdrop.app/signup${
        referralId ? `?r=${referralId}` : ''
      }`}
      className="signup"
    >
      Start your {trialPeriod}-day free trial
    </GlowingPrimaryButton>
  )
}

export default SignupButton
