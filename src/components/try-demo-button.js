import * as React from 'react'
import './try-demo-button.less'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const DemoButton = () => (
  <OutboundLink href="https://my.inkdrop.app/demo" className="ui button demo">
    Try the Demo
  </OutboundLink>
)

export default DemoButton
