import './gallery-item.less'
import React from 'react'
import Img from 'gatsby-image'

function convertUserFriendlyName(name) {
  return name
    .split('-')
    .reduce(
      (res, txt, i) =>
        res + (i > 0 ? ' ' : '') + txt.charAt(0).toUpperCase() + txt.slice(1),
      ''
    )
    .replace('Ui', 'UI')
}

const GalleryItem = props => {
  const baseThemeUrl = 'https://my.inkdrop.app/plugins/'
  const { uiTheme, syntaxTheme, previewTheme, img } = props
  return (
    <div className="column">
      <Img className="gallery-screenshot" fluid={img} />
      <div className="theme-information">
        {uiTheme.indexOf('default') >= 0 ? (
          convertUserFriendlyName(uiTheme)
        ) : (
          <a href={`${baseThemeUrl}${uiTheme}`}>
            {convertUserFriendlyName(uiTheme)}
          </a>
        )}
        &nbsp;+&nbsp;
        {syntaxTheme.indexOf('default') >= 0 ? (
          convertUserFriendlyName(syntaxTheme)
        ) : (
          <a href={`${baseThemeUrl}${syntaxTheme}`}>
            {convertUserFriendlyName(syntaxTheme)}
          </a>
        )}
        &nbsp;+&nbsp;
        {previewTheme.indexOf('github-preview') >= 0 ? (
          convertUserFriendlyName(previewTheme)
        ) : (
          <a href={`${baseThemeUrl}${previewTheme}`}>
            {convertUserFriendlyName(previewTheme)}
          </a>
        )}
      </div>
    </div>
  )
}

export default GalleryItem
