import './section-testimonials.less'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import TestimonialFaces from './testimonials-faces'
import Container from 'semantic-ui-react/dist/es/elements/Container'

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

export default class TestimonialsSection extends React.Component {
  constructor(props) {
    super(props)
    const idx = Math.floor(Math.random() * people.length)
    this.state = {
      activeItem: people[idx]
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.selectReviewRandomly, 5000)
  }

  componentWillUnmount() {
    this.stopCarousel()
  }

  stopCarousel() {
    clearInterval(this.intervalId)
  }

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
    const { activeItem } = this.state
    return (
      <StaticQuery
        query={query}
        render={data => {
          const { edges: testimonials } = data.allYaml
          const items = testimonials.map(item => {
            const { node } = item
            if (node.id === activeItem) {
              return (
                <div key={node.id} className="testimonial-item">
                  <p>{node.comment}</p>
                  <div className="profile">
                    <div className="name">{node.name}</div>
                    <div>
                      {node.title && (
                        <span className="title">{node.title}</span>
                      )}
                      {node.company && (
                        <span className="company">{node.company}</span>
                      )}
                    </div>
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
                </div>
              )
            }
          })
          return (
            <section id="testimonials">
              <TestimonialFaces
                activeItem={activeItem}
                onClickItem={this.handleClickItem}
              />
              <div className="testimonial-list">
                <Container text>{items}</Container>
              </div>
              <div className="center aligned">
                <Link className="ui rounded button" to="/reviews">
                  See more reviews
                  <i className="angle double right icon" />
                </Link>
                <a
                  className="ui rounded button"
                  href="https://forum.inkdrop.app/"
                >
                  <i className="users icon" />
                  User community&nbsp;
                </a>
              </div>
            </section>
          )
        }}
      />
    )
  }

  handleClickItem = id => {
    this.setState({ activeItem: id })
    this.stopCarousel()
  }

  selectReviewRandomly = () => {
    const idx = Math.floor(Math.random() * people.length)
    this.setState({
      activeItem: people[idx]
    })
  }
}

const query = graphql`
  query {
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
