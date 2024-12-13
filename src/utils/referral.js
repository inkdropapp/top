import axios from 'axios'
import getQueryVariable from './query-string'

const KEY_REFERRER_ID = 'referrer_identity'

export function getReferralIdFromQuery() {
  return getQueryVariable('r')
}

export function getReferralIdFromLocalStorage() {
  return localStorage.getItem(KEY_REFERRER_ID)
}

export function setReferralIdToLocalStorage(refId) {
  localStorage.setItem(KEY_REFERRER_ID, refId)
}

export async function increaseReferralViewCount(refId) {
  const { data } = await axios.post(
    `${process.env.GATSBY_INKDROP_API_URL}/referral/${refId}/_visit`
  )
  if (data && typeof data.ok === 'boolean') {
    return data.ok
  } else {
    throw new Error(`Failed to check referral code: ${refId}`)
  }
}

export const reducerInitialState = {
  referralId: getReferralIdFromQuery() || getReferralIdFromLocalStorage()
}

export async function checkAndUpdateReferralId() {
  const referralIdInQuery = getReferralIdFromQuery()
  const referralIdInBrowser = getReferralIdFromLocalStorage()

  const refId = referralIdInQuery || referralIdInBrowser
  if (
    referralIdInQuery &&
    (!referralIdInBrowser || referralIdInQuery !== referralIdInBrowser)
  ) {
    const referralExists = await increaseReferralViewCount(refId)
    if (referralExists) {
      setReferralIdToLocalStorage(referralIdInQuery)
      return refId
    } else {
      return null
    }
  } else {
    return refId
  }
}
