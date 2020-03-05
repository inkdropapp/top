import * as React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { checkAndUpdateReferralId } from '../utils/referral'
import ReferralContext from '../utils/referral-context'

const ReferralWrapper = props => {
  const [refId, setRefId] = useState(null)
  useEffect(() => {
    checkAndUpdateReferralId().then(newRefId => {
      if (refId !== newRefId) setRefId(newRefId)
    })
  }, [refId])

  return (
    <ReferralContext.Provider value={{ referralId: refId }}>
      {props.children}
    </ReferralContext.Provider>
  )
}
ReferralWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ReferralWrapper
