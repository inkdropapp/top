import './carousel-item.less'
import React, { useContext, useCallback } from 'react'
import { CarouselContext } from './carousel'

const CarouselItem = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div
      className={`carousel-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default CarouselItem
