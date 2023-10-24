import './section-testimonials.less'
import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import TestimonialFaces from './testimonials-faces'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import SectionFifth from './section-fifth'

const people = [
  'roberto',
  'ben',
  'nicolo',
  'philip',
  'julio',
  'alfredo',
  'reilly',
  'bertrand',
  'marcus'
]

const TestimonialsSection = () => {
  const [activeItem, setActiveItem] = useState('')
  const [intervalId, setIntervalId] = useState(null)

  const startCarousel = () => {
    if (window === 'undefined' || intervalId) return
    setIntervalId(setInterval(selectReviewRandomly, 5000))
  }

  const stopCarousel = () => {
    clearInterval(intervalId)
    setIntervalId(null)
  }

  const handleClickItem = id => {
    setActiveItem(id)
    stopCarousel()
  }

  const selectReviewRandomly = () => {
    const idx = Math.floor(Math.random() * people.length)
    setActiveItem(people[idx])
  }

  useEffect(() => {
    const idx = Math.floor(Math.random() * people.length)
    setActiveItem(people[idx])
    startCarousel()

    return () => {
      stopCarousel()
    }
  }, [])

  const data = useStaticQuery(query)
  const { edges: testimonials } = data.allYaml
  const items = testimonials.map(item => {
    const { node } = item
    if (node.postId === activeItem) {
      return (
        <div key={node.id} className="testimonial-item">
          <i className="quote left icon" />
          <p>{node.comment}</p>
          <div className="profile">
            <div className="name">{node.name}</div>
            <div>
              {node.title && <span className="title">{node.title}</span>}
              {node.company && <span className="company">{node.company}</span>}
              <div className="links">
                {node.homepage && (
                  <a
                    href={node.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="home icon" />
                  </a>
                )}
                {node.twitter && (
                  <a
                    href={`https://twitter.com/${node.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="twitter icon" />
                  </a>
                )}
                {node.github && (
                  <a
                    href={`https://github.com/${node.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="github icon" />
                  </a>
                )}
                {node.facebook && (
                  <a
                    href={node.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="facebook icon" />
                  </a>
                )}
                {node.linkedin && (
                  <a
                    href={`https://www.linkedin.com/${node.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="linkedin icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
  })
  return (
    <SectionFifth id="testimonials">
      <div className="ui text container">
        <h3>
          Trusted by developers around the world
          <Link className="ui rounded tiny button" to="/reviews">
            See more
            <i className="angle double right icon" />
          </Link>
        </h3>
      </div>
      <TestimonialFaces activeItem={activeItem} onClickItem={handleClickItem} />
      <div className="testimonial-list">
        <Container text>{items}</Container>
      </div>
    </SectionFifth>
  )
}

const query = graphql`
  query {
    allYaml {
      edges {
        node {
          id
          postId
          name
          company
          title
          homepage
          twitter
          github
          facebook
          linkedin
          comment
        }
      }
    }
  }
`

export default TestimonialsSection
