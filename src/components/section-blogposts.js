import './section-blogposts.less'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Flickity from 'flickity'
import LazyLoad from 'react-lazyload'
import OutboundLink from './outbound-link'

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
                  href={node.link}
                >
                  <LazyLoad
                    placeholder={
                      <img
                        className="cover-image"
                        src={node.thumbnail.replace('1024', '20')}
                      />
                    }
                  >
                    <img
                      className="cover-image"
                      src={node.thumbnail}
                      alt="blog cover image"
                    />
                  </LazyLoad>
                  <div className="meta-created-at">{node.pubDate}</div>
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
    allMediumPost(
      sort: { fields: [pubDate], order: DESC }
      filter: { id: { ne: "dummy" } }
    ) {
      edges {
        node {
          id
          link
          title
          pubDate(formatString: "YYYY-MM-DD")
          thumbnail
        }
      }
    }
  }
`
