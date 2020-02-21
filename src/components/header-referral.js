import './header-referral.less'
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  getReferralIdFromCookie,
  setReferralIdToCookie
} from '../utils/referral-cookie'
import getQueryVariable from '../utils/query-string'

const HeaderReferral = () => {
  const referralIdInQuery = getQueryVariable('ref')
  const referralIdInCookie = getReferralIdFromCookie()
  const [referralId, setReferralId] = useState(
    referralIdInQuery || referralIdInCookie
  )

  useEffect(() => {
    if (
      referralIdInQuery &&
      !referralIdInCookie &&
      referralIdInQuery !== referralIdInCookie
    ) {
      // TODO Check if the ID is available
      setReferralIdToCookie(referralIdInQuery)
      setReferralId(referralIdInQuery)
    }
  }, [referralId])

  return referralId ? (
    <div className="header-referral">
      <Link to="/pricing">
        You&apos;ve got referral credit! Try Inkdrop today and save $2.5.
      </Link>
    </div>
  ) : null
}

export default HeaderReferral
