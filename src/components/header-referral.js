import './header-referral.less'
import React, { useEffect, useState } from 'react'
import {
  getReferralIdFromCookie,
  setReferralIdToCookie
} from '../utils/referral-cookie'
import getQueryVariable from '../utils/query-string'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const HeaderReferral = () => {
  const referralIdInQuery = getQueryVariable('ref')
  const referralIdInCookie = getReferralIdFromCookie()
  const [referralId, setReferralId] = useState(
    referralIdInQuery || referralIdInCookie
  )

  useEffect(() => {
    if (referralIdInQuery && !referralIdInCookie) {
      // TODO Check if the ID is available
      setReferralIdToCookie(referralIdInQuery)
      setReferralId(referralIdInQuery)
    }
  }, [referralId])

  return referralId ? (
    <div className="header-referral">
      <OutboundLink href="https://my.inkdrop.app/signup">
        You&apos;ve got referral credit! Try Inkdrop today and save $2.5.
      </OutboundLink>
    </div>
  ) : null
}

export default HeaderReferral
