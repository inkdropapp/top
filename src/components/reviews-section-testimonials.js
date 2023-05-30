import './reviews-section-testimonials.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { GatsbyImage } from 'gatsby-plugin-image'
import shuffle from 'shuffle-array'

function getImageWithId(images, postId) {
  for (const item of images) {
    const { node: img } = item
    if (img.name === postId) {
      return img
    }
  }
  return null
}

const TestimonialsSection = () => {
  const data = useStaticQuery(query)
  const { edges: images } = data.allFile
  const { edges: testimonials } = data.allYaml
  const items = shuffle(testimonials).map(item => {
    const { node } = item
    const img = getImageWithId(images, node.postId)

    return (
      <div key={node.id} className="review-item">
        <div className="profile">
          <GatsbyImage
            className="face"
            image={img.childImageSharp.gatsbyImageData}
            alt="face"
          />
          <div className="name">{node.name}</div>
          {node.title && <div className="title">{node.title}</div>}
          {node.company && <div className="company">{node.company}</div>}
          <div className="links">
            {node.homepage && (
              <a href={node.homepage} target="_blank" rel="noopener noreferrer">
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
              <a href={node.facebook} target="_blank" rel="noopener noreferrer">
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
        <div>
          <div className="ui card">
            <div className="content">
              <div className="description">
                <p>{node.comment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section id="reviews">
      <Container>
        <h2>
          What People Are Saying
          <img src="/smile.svg" width={40} alt="smile" />
        </h2>
        <div className="sub-headline">
          How Inkdrop helps their productivities.
        </div>
      </Container>
      <Container text>{items}</Container>
    </section>
  )
}

const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/testimonials/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 140, height: 140)
          }
        }
      }
    }
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
