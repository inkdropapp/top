import * as React from 'react'
import { useContext } from 'react'
import './signup-button.less'
import OutboundLink from './outbound-link'
import ReferralContext from '../utils/referral-context'
import { trialPeriod } from 'inkdrop-consts'

const SignupButton = () => {
  const { referralId } = useContext(ReferralContext)

  return (
    <OutboundLink
      href={`https://my.inkdrop.app/signup${
        referralId ? `?r=${referralId}` : ''
      }`}
      className="ui button signup"
    >
      Start your {trialPeriod}-day free trial
    </OutboundLink>
  )
}

export default SignupButton
