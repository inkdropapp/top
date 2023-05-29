/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// import 'ionicons/dist/css/ionicons.min.css'
import PropTypes from 'prop-types'
import * as React from 'react'
import './src/utils/referral'
import ReferralWrapper from './src/components/referral-wrapper'

export const wrapPageElement = ({ element, props }) => (
  <ReferralWrapper {...props}>{element}</ReferralWrapper>
)
wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.object
}
