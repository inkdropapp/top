import './reviews-section-testimonials.less'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'
import shuffle from 'shuffle-array'

export default class TestimonialsSection extends React.Component {
  getImageWithId(images, id) {
    for (const item of images) {
      const { node: img } = item
      if (img.name === id) {
        return img
      }
    }
    return null
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          const { edges: images } = data.allFile
          const { edges: testimonials } = data.allYaml
          const items = shuffle(testimonials).map(item => {
            const { node } = item
            const img = this.getImageWithId(images, node.id)

            return (
              <div key={node.id} className="review-item">
                <div className="profile">
                  <Img className="face" fixed={img.childImageSharp.fixed} />
                  <div className="name">{node.name}</div>
                  {node.title && <div className="title">{node.title}</div>}
                  {node.company && (
                    <div className="company">{node.company}</div>
                  )}
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
                  <img src="/smile.svg" width={40} />
                </h2>
                <p className="sub-headline">
                  How Inkdrop helps their productivities.
                </p>
              </Container>
              <Container text>{items}</Container>
            </section>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/testimonials/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 140, height: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    allYaml {
      edges {
        node {
          id
          name
          company
          title
          homepage
          twitter
          github
          facebook
          comment
        }
      }
    }
  }
`
