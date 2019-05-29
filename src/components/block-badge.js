import './block-badge.less'
import * as React from 'react'
import PropTypes from 'prop-types'

const BlockBadge = props => {
  const { white, center } = props
  return (
    <i
      className={`block-badge ${white ? 'white' : ''} ${
        center ? 'center' : ''
      }`}
    />
  )
}

BlockBadge.propTypes = {
  white: PropTypes.bool,
  center: PropTypes.bool
}

export default BlockBadge
