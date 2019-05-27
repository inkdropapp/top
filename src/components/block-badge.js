import './block-badge.less'
import * as React from 'react'
import PropTypes from 'prop-types'

const BlockBadge = props => {
  const { white } = props
  return <i className={`block-badge ${white ? 'white' : ''}`} />
}

BlockBadge.propTypes = {
  white: PropTypes.bool
}

export default BlockBadge
