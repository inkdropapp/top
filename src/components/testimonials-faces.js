import './testimonials-faces.less'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class TestimonialsFaces extends React.Component {
  render() {
    const { onClickItem, activeItem } = this.props
    return (
      <StaticQuery
        query={query}
        render={data => {
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
                <Img
                  className="face"
                  fixed={node.childImageSharp.fixed}
                  alt="Reviewer face"
                />
              </div>
            )
          })
          return <div className="carousel-face-dot-container">{items}</div>
        }}
      />
    )
  }
}

TestimonialsFaces.propTypes = {
  onClickItem: PropTypes.func,
  activeItem: PropTypes.string
}

const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/testimonials.*.(jpg|png)/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
