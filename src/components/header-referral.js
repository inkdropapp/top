import './header-referral.less'
import * as React from 'react'
import { useContext } from 'react'
import { Link } from 'gatsby'
import ReferralContext from '../utils/referral-context'

const HeaderReferral = () => {
  const { referralId } = useContext(ReferralContext)

  return referralId ? (
    <div className="header-referral">
      <Link to="/pricing">
        You&apos;ve got referral credit! Try Inkdrop today and save $2.5.
      </Link>
    </div>
  ) : null
}

export default HeaderReferral
