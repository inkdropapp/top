export const screenshotThemes = [
  {
    id: 'light',
    mastheadBgColor: '#471c98',
    mastheadEffectColor: '#471c98',
    imageSrc: '/ss-mac-light.png',
    isDark: false
  },
  {
    id: 'dark',
    mastheadBgColor: '#471c98',
    mastheadEffectColor: '#a3ac14',
    imageSrc: '/ss-mac-dark.png',
    isDark: true
  },
  {
    id: 'solarized-light',
    mastheadBgColor: '#471c98',
    mastheadEffectColor: '#471c98',
    imageSrc: '/ss-mac-solarized-light.png',
    isDark: false
  },
  {
    id: 'solarized-dark',
    mastheadBgColor: '#471c98',
    mastheadEffectColor: '#a3ac14',
    imageSrc: '/ss-mac-solarized-dark.png',
    isDark: true
  }
]

// preload
const preloadImage = src => {
  const img = new Image()
  img.src = src
}

screenshotThemes.forEach(theme => {
  preloadImage(theme.imageSrc)
})
