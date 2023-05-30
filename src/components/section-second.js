import './section-second.less'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'

const SectionSecond = ({ children, id, hasSeparator }) => {
  const classHasSeparator = hasSeparator ? 'has-separator' : ''
  return (
    <section className={`section-second ${classHasSeparator}`} id={id}>
      <Container>{children}</Container>
    </section>
  )
}

export const Callout = ({ children }) => {
  return <div className="callout">{children}</div>
}

export default SectionSecond
