import './section-blogposts.less'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Flickity from 'flickity'
import LazyLoad from 'react-lazyload'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default class BlogpostsSection extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      new Flickity(this.carouselRef, {
        wrapAround: true,
        autoPlay: true
      })
    }, 200)
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          const articles = data.allMediumPost.edges.map(edge => {
            const { node } = edge
            return (
              <div key={node.id} className="carousel-cell">
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://blog.inkdrop.info/${node.uniqueSlug}`}
                >
                  <LazyLoad
                    placeholder={
                      <img
                        className="cover-image"
                        src={`https://cdn-images-1.medium.com/max/20/${
                          node.virtuals.previewImage.imageId
                        }`}
                      />
                    }
                  >
                    <img
                      className="cover-image"
                      src={`https://cdn-images-1.medium.com/max/800/${
                        node.virtuals.previewImage.imageId
                      }`}
                    />
                  </LazyLoad>
                  <div className="meta-created-at">{node.createdAt}</div>
                  <h3>{node.title}</h3>
                </OutboundLink>
              </div>
            )
          })
          return (
            <section id="blogposts">
              <h2>Blog posts</h2>
              <p className="ui container sub-headline">
                I&apos;m sharing most of my experiences on this product.
              </p>
              <div ref={el => (this.carouselRef = el)} className="carousel">
                {articles}
              </div>
            </section>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          uniqueSlug
          title
          createdAt
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
