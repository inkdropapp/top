import './dots.css'
import React from 'react'

export const Dots = ({ numOfDots, selectedIndex, onClick }) => {
  return (
    <div className="dots-container">
      {Array.from({ length: numOfDots }).map((_, index) => (
        <span
          key={index}
          className={(index === selectedIndex ? 'active' : '') + ' dot-item'}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  )
}
