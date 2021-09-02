import './gallery-zoom-view.less'
import React from 'react'
import Img from 'gatsby-image'

const GalleryZoomView = props => {
  const { img, onClick } = props
  return (
    <div className="gallery-zoom-view-backdrop" onClick={onClick}>
      <div className="gallery-zoom-view-background"></div>
      <div className="gallery-zoom-view-container">
        <Img className="gallery-screenshot" fluid={img} />
      </div>
    </div>
  )
}

export default GalleryZoomView
