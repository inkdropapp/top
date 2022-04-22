import * as React from 'react'
import { useContext } from 'react'
import './signup-button.less'
import OutboundLink from './outbound-link'
import ReferralContext from '../utils/referral-context'

const SignupButton = () => {
  const { referralId } = useContext(ReferralContext)

  return (
    <OutboundLink
      href={`https://my.inkdrop.app/signup${
        referralId ? `?r=${referralId}` : ''
      }`}
      className="ui button signup"
    >
      Start your 30-day free trial
    </OutboundLink>
  )
}

export default SignupButton
