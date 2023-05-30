import './section-fourth.less'
import React from 'react'

const SectionFourth = ({ children, id }) => {
  return (
    <section className="section-fourth" id={id}>
      {children}
    </section>
  )
}

export default SectionFourth
