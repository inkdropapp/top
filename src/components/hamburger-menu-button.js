import './hamburger-menu-button.less'
import * as React from 'react'
import PropTypes from 'prop-types'

const Hamburger = props => {
  const icon = props.opened ? 'x.svg' : 'menu.svg'
  return (
    <img
      width={46}
      height={36}
      src={`/${icon}`}
      className={`hamburger-menu-button`}
      onClick={props.onClick}
    />
  )
}

Hamburger.propTypes = {
  opened: PropTypes.bool,
  onClick: PropTypes.func
}

export default Hamburger
