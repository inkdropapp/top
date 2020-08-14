import './3d-perspective-image.less'
import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrianglesImage } from '../images/icons/bg-triangles.svg'
import getPlatform from '../utils/platform'

const isTouchDevice = ['ios', 'android'].indexOf(getPlatform()) >= 0

const ThreeDimensionalPerspectiveImage = props => {
  const { mode } = props
  const refContainer = useRef()
  const tickingRef = useRef(false)

  const transform3d = useCallback((rX, rY) => {
    const { current: elContainer } = refContainer
    const elContent = elContainer.querySelector('.content')
    elContent.style.transform = `rotateY(${rY}deg) rotateX(${-rX}deg)`
  })

  if (isTouchDevice || mode === 'scroll') {
    const tiltImages = useCallback(() => {
      const { current: elContainer } = refContainer
      const bRect = elContainer.getBoundingClientRect()
      const pY = bRect.top / 800
      const rX = -pY * 30 + 15
      const rY = pY * 30 - 15
      transform3d(rX, rY)
    }, [refContainer])
    const handleScroll = useCallback(() => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          tiltImages()
          tickingRef.current = false
        })

        tickingRef.current = true
      }
    }, [tiltImages])
    useEffect(() => {
      tiltImages()
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
  } else {
    const handleMouseMove = useCallback(
      e => {
        if (!tickingRef.current) {
          tickingRef.current = true
          window.requestAnimationFrame(() => {
            const { current: elContainer } = refContainer
            const {
              top: bodyTop,
              left: bodyLeft
            } = document.body.getBoundingClientRect()
            const {
              top: elTop,
              left: elLeft
            } = elContainer.getBoundingClientRect()
            const offX = elLeft - bodyLeft
            const offY = elTop - bodyTop

            var x = e.clientX - offX + 0
            var y = e.clientY - offY + window.scrollY

            var rY = map(x, 0, elContainer.clientWidth, -10, 10)
            var rX = map(y, 0, elContainer.clientHeight, -10, 10)

            transform3d(rX, rY)
            tickingRef.current = false
          })
        }
      },
      [transform3d, refContainer]
    )

    const handleMouseEnter = useCallback(() => {
      const { current: elContainer } = refContainer
      const elContent = elContainer.querySelector('.content')
      elContent.style.transition = `none`
    }, [refContainer])

    const handleMouseLeave = useCallback(() => {
      window.requestAnimationFrame(() => {
        const { current: elContainer } = refContainer
        const elContent = elContainer.querySelector('.content')
        elContent.style.transition = `all 0.2s linear`
        elContent.style.transform = `rotateY(0deg) rotateX(0deg)`
      })
    }, [refContainer])

    useEffect(() => {
      const { current: elContainer } = refContainer
      if (elContainer) {
        elContainer.addEventListener('mousemove', handleMouseMove)
        elContainer.addEventListener('mouseenter', handleMouseEnter)
        elContainer.addEventListener('mouseleave', handleMouseLeave)
      }
      return () => {
        elContainer.removeEventListener('mousemove', handleMouseMove)
        elContainer.removeEventListener('mouseenter', handleMouseEnter)
        elContainer.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [refContainer])
  }

  return (
    <div ref={refContainer} className="perspective-image">
      <div className="content">
        <div className="bg-triangles">
          <TrianglesImage />
        </div>
        <div className="bg-triangles bg-triangles-2">
          <TrianglesImage />
        </div>
        <div className="bg-triangles bg-triangles-3">
          <TrianglesImage />
        </div>
        {props.children}
      </div>
    </div>
  )
}

ThreeDimensionalPerspectiveImage.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string
}

function map(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export default ThreeDimensionalPerspectiveImage
