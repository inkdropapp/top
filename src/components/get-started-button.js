import React from 'react'
import { Link } from 'gatsby'
import { GlowingPrimaryButton } from './glowing-primary-button'

export const GetStartedButton = () => {
  return (
    <GlowingPrimaryButton as={Link} to={'/pricing'}>
      Get started for free
    </GlowingPrimaryButton>
  )
}
