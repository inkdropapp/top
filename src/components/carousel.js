import './carousel.less'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'

export const CarouselContext = React.createContext({
  embla: undefined,
  selectedIndex: -1
})

const Carousel = ({ children, className, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      ...(options || {})
    },
    [ClassNames(), Autoplay({ delay: 30000 })]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  const scrollTo = useCallback(
    index => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div className={className}>
        <div ref={viewportRef} className={`carousel-viewport`}>
          <div className={`carousel-container`}>{children}</div>
        </div>
        <div className="carousel-dots">
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const CarouselDotButton = ({ selected, onClick }) => {
  return (
    <button
      className={`carousel-dot-button ${selected ? 'is-selected' : ''}`}
      type="button"
      onClick={onClick}
    />
  )
}

export default Carousel
