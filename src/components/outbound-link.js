import React from 'react'
import PropTypes from 'prop-types'

const OutboundLink = props => {
  const handleClick = _e => {
    window.fathom?.trackEvent(`Click external link: ${props.href}`)
  }
  return (
    <a {...props} onClick={handleClick}>
      {props.children}
    </a>
  )
}

OutboundLink.propTypes = {
  children: PropTypes.node
}

export default OutboundLink
