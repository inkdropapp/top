const isBrowser = typeof window !== 'undefined'

export default function getPlatform() {
  let platform = 'macos'
  if (isBrowser) {
    if (window.navigator.platform === 'Win32') {
      platform = 'windows'
    } else if (window.navigator.platform.startsWith('Linux')) {
      platform = 'linux'
    }
  }
  return platform
}
