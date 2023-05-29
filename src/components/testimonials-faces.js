import './testimonials-faces.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const TestimonialsFaces = ({ onClickItem, activeItem }) => {
  const data = useStaticQuery(query)
  const { edges: images } = data.allFile
  const items = images.map(item => {
    const { node } = item

    return (
      <div
        key={node.id}
        className={`carousel-face-dot-item ${
          activeItem === node.name ? 'active' : ''
        }`}
        onClick={() => onClickItem(node.name)}
      >
        <GatsbyImage
          className="face"
          image={node.childImageSharp.gatsbyImageData}
          alt="Reviewer face"
        />
      </div>
    )
  })
  return <div className="carousel-face-dot-container">{items}</div>
}

const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/testimonials.*.(jpg|png)/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 48, height: 48)
          }
        }
      }
    }
  }
`

export default TestimonialsFaces
