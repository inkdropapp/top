import React from 'react'
import './tips-masthead.less'
import { useStaticQuery, graphql } from 'gatsby'
import OutboundLink from './outbound-link'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Masthead from './masthead'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ReactComponent as PlayIcon } from '../images/icons/play.svg'

const TipsMasthead = () => {
  const data = useStaticQuery(query)
  return (
    <Masthead className="tips-masthead">
      <Container>
        <div className="coffee-icon-container">
          <img src="/boost.svg" alt="Boost" width={24} />
        </div>
        <h1>
          <span className="avoid-wrap">How to maximize your productivity</span>
          &nbsp;
          <span className="avoid-wrap">with tech note-taking</span>
        </h1>
      </Container>
      <div className="ui container sub-headline">
        <a href="#the-right-tool-for-the-right-task" className="avoid-wrap">
          The right tool for the right task
        </a>{' '}
        /{' '}
        <a href="#design-for-productive-failure" className="avoid-wrap">
          Design for productive failure
        </a>{' '}
        /{' '}
        <a href="#four-steps-for-taking-tech-notes" className="avoid-wrap">
          Four steps for taking tech notes
        </a>
      </div>
      <div className="ui container">
        <OutboundLink
          className="masthead-image-container"
          href="https://www.youtube.com/watch?v=rjOuCFrs584"
          target="_blank"
        >
          <GatsbyImage
            image={data.cover.childImageSharp.gatsbyImageData}
            className="rounded-image"
            alt="Cover"
          />
          <div className="play-button">
            <PlayIcon />
          </div>
        </OutboundLink>
      </div>
      <section className="ui text container">
        <p>
          Hi, there. My name is{' '}
          <OutboundLink
            href="https://www.craftz.dog/"
            title="Takuya's homepage"
          >
            Takuya Matsuyama
          </OutboundLink>
          , the author of Inkdrop. Note-taking is one of the key habits that
          significantly boosts my productivity. Every day, in my engineering
          process, as I learn new technologies, debug my code, add new features,
          and so on, I use Inkdrop to take notes. So, I&apos;d like to share how
          I use my own product for tech note-taking.
        </p>
      </section>
    </Masthead>
  )
}

const query = graphql`
  query {
    cover: file(relativePath: { eq: "tips/cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1800)
      }
    }
  }
`

export default TipsMasthead
