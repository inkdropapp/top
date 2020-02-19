import Cookies from 'js-cookie'

const COOKIE_KEY_REFERRER_ID = 'inkdrop_referrer_identity'

export function getReferralIdFromCookie() {
  return Cookies.get(COOKIE_KEY_REFERRER_ID)
}

export function setReferralIdToCookie(referralId) {
  Cookies.set(COOKIE_KEY_REFERRER_ID, referralId, {
    expires: 365,
    domain: '.inkdrop.app'
  })
}
