import React from 'react'
import PropTypes from 'prop-types'

const OutboundLink = props => {
  return <a {...props}>{props.children}</a>
}

OutboundLink.propTypes = {
  children: PropTypes.node
}

export default OutboundLink
