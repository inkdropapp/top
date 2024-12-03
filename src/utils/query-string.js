import { isBrowser } from './platform'

// parse `location.search` query string
export default function getQueryVariable(variable) {
  if (!isBrowser) return null
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1])
    }
  }
  return null
}
