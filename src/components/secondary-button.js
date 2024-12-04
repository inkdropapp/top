import React from 'react'
import './secondary-button.css'

export const SecondaryButton = props => {
  const { as, ...restProps } = props

  const Component = as || 'button'

  return (
    <Component
      {...restProps}
      className={`ui button secondary ${props.className || ''}`}
    >
      {props.children}
    </Component>
  )
}
