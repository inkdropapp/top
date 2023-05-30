import './zoomable-image.less'
import React, { createContext, useContext, useState, useCallback } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const ZoomedImageContext = createContext(null)

export const ZoomableImage = props => {
  const { setZoomedImage } = useContext(ZoomedImageContext)
  const { img, alt, className } = props

  const handleClick = () => {
    setZoomedImage(props)
  }
  return (
    <div onClick={handleClick}>
      <GatsbyImage
        alt={alt || 'Image'}
        className={`zoomable-image ${className || ''}`}
        image={img}
      />
    </div>
  )
}

export const FullscreenImageView = props => {
  const { img, onClick, alt = 'gallery' } = props
  return (
    <div className="zoomable-image-backdrop" onClick={onClick}>
      <div className="zoomable-image-backdrop-background"></div>
      <div className="zoomable-image-backdrop-container">
        <GatsbyImage alt={alt} className="zoomable-image" image={img} />
      </div>
    </div>
  )
}

export const ZoomedImageProvider = ({ children }) => {
  const [zoomedImage, setZoomedImage] = useState(null)
  const context = { setZoomedImage }

  const handleDismiss = useCallback(() => {
    setZoomedImage(null)
  }, [])
  return (
    <ZoomedImageContext.Provider value={context}>
      {children}
      {zoomedImage && (
        <FullscreenImageView
          alt={zoomedImage.alt}
          img={zoomedImage.img}
          onClick={handleDismiss}
        />
      )}
    </ZoomedImageContext.Provider>
  )
}
