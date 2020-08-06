import './3d-perspective-image.less'
import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrianglesImage } from '../images/icons/bg-triangles.svg'

let ticking = false

const ThreeDimensionalPerspectiveImage = props => {
  const refContainer = useRef()

  const transform3d = useCallback((rX, rY) => {
    const { current: elContainer } = refContainer
    const elContent = elContainer.querySelector('.content')
    elContent.style.transform = `rotateY(${rY}deg) rotateX(${-rX}deg)`
  })

  const handleMouseMove = useCallback(
    e => {
      if (!ticking) {
        ticking = true
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
          ticking = false
        })
      }
    },
    [transform3d]
  )

  const handleMouseEnter = useCallback(() => {
    const { current: elContainer } = refContainer
    const elContent = elContainer.querySelector('.content')
    elContent.style.transition = `none`
  }, [])

  const handleMouseLeave = useCallback(() => {
    window.requestAnimationFrame(() => {
      const { current: elContainer } = refContainer
      const elContent = elContainer.querySelector('.content')
      elContent.style.transition = `all 0.2s linear`
      elContent.style.transform = `rotateY(0deg) rotateX(0deg)`
    })
  }, [])

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
  }, [])

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
  children: PropTypes.node
}

function map(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export default ThreeDimensionalPerspectiveImage
