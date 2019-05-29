import * as React from 'react'
import './signup-button.less'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const SignupButton = () => (
  <OutboundLink
    href="https://my.inkdrop.app/signup"
    className="ui button signup"
  >
    Start your 60-day free trial
  </OutboundLink>
)

export default SignupButton
