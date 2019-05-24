import './supported-platforms-menu.less'
import React from 'react'
import PropTypes from 'prop-types'
import './masthead.less'

const SupportedPlatformsMenu = props => {
  const { active, onClick } = props
  const handleClick = item => {
    if (onClick) onClick(item)
  }
  return (
    <div className="supported-platforms-container">
      <div className="supported-platforms-group">
        <ul className="supported-platforms-list">
          <li
            className={active === 'macos' ? 'active' : ''}
            onClick={() => handleClick('macos')}
          >
            <i className="apple icon" /> macOS
          </li>
          <li
            className={active === 'windows' ? 'active' : ''}
            onClick={() => handleClick('windows')}
          >
            <i className="windows icon" /> Windows
          </li>
          <li
            className={active === 'linux' ? 'active' : ''}
            onClick={() => handleClick('linux')}
          >
            <i className="linux icon" /> Linux
          </li>
        </ul>
      </div>
      <div className="supported-platforms-group">
        <ul className="supported-platforms-list">
          <li
            className={active === 'ios' ? 'active' : ''}
            onClick={() => handleClick('ios')}
          >
            <i className="apple icon" /> iOS
          </li>
          <li
            className={active === 'android' ? 'active' : ''}
            onClick={() => handleClick('android')}
          >
            <i className="android icon" /> Android
          </li>
        </ul>
      </div>
    </div>
  )
}

SupportedPlatformsMenu.propTypes = {
  active: PropTypes.string,
  onClick: PropTypes.func
}

export default SupportedPlatformsMenu
