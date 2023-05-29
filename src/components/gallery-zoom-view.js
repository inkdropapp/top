import './gallery-zoom-view.less'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const GalleryZoomView = props => {
  const { img, onClick, alt = 'gallery' } = props
  return (
    <div className="gallery-zoom-view-backdrop" onClick={onClick}>
      <div className="gallery-zoom-view-background"></div>
      <div className="gallery-zoom-view-container">
        <GatsbyImage alt={alt} className="gallery-screenshot" image={img} />
      </div>
    </div>
  )
}

export default GalleryZoomView
