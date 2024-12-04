import * as React from 'react'
import './glowing-primary-button.css'

export const GlowingPrimaryButton = props => {
  const { as, ...restProps } = props

  const Component = as || 'button'

  return (
    <Component
      {...restProps}
      className={`ui button glowing ${props.className || ''}`}
    >
      {props.children}
    </Component>
  )
}
