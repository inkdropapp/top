const isBrowser = typeof window !== 'undefined'

export default function getPlatform() {
  let platform = 'macos'
  if (isBrowser) {
    if (window.navigator.platform === 'Win32') {
      platform = 'windows'
    } else if (window.navigator.userAgent.indexOf('Android') >= 0) {
      platform = 'android'
    } else if (window.navigator.userAgent.indexOf('iPhone') >= 0) {
      platform = 'ios'
    } else if (window.navigator.platform.startsWith('Linux')) {
      platform = 'linux'
    }
  }
  return platform
}
