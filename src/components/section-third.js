import './section-third.less'
import React from 'react'

const SectionThird = ({ children, id }) => {
  return (
    <section className="section-third" id={id}>
      {children}
    </section>
  )
}

export default SectionThird
