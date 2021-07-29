import * as React from 'react'
import { useContext } from 'react'
import './signup-button.less'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
      Get started today
    </OutboundLink>
  )
}

export default SignupButton
