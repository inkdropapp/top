import getQueryVariable from './query-string'

export function getUTMParams() {
  const utm_medium = getQueryVariable('utm_medium')
  const utm_source = getQueryVariable('utm_source')
  const utm_campaign = getQueryVariable('utm_campaign')
  const utm_content = getQueryVariable('utm_content')

  if (utm_medium) {
    return {
      utm_medium,
      utm_source,
      utm_campaign,
      utm_content
    }
  } else {
    return false
  }
}
