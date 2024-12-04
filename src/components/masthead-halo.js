import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import HALO from 'vanta/src/vanta.halo'
import './masthead.less'
import './masthead-halo.css'

export const MastheadHalo = props => {
  const refContainer = useRef(null)
  const [halo, setHalo] = useState(null)
  const { className, children, theme } = props

  useEffect(() => {
    if (halo) return
    setTimeout(() => {
      const newHalo = HALO({
        el: refContainer.current,
        THREE,
        backgroundColor: theme.mastheadBgColor,
        baseColor: theme.mastheadEffectColor,
        size: window.innerWidth > 1000 ? 1.5 : 1.0
      })
      setHalo(newHalo)
    }, 200)
  }, [])

  useEffect(() => {
    if (!halo) return
    halo.setOptions({
      backgroundColor: theme.mastheadBgColor,
      baseColor: theme.mastheadEffectColor
    })
  }, [theme])

  return (
    <section
      className={`masthead halo ${className}`}
      style={{
        backgroundColor: theme.mastheadBgColor
      }}
    >
      <div ref={refContainer} className="vanta-container"></div>
      <div className="content">{children}</div>
    </section>
  )
}
