import React from 'react'
import './tips-masthead.less'
import { useStaticQuery, graphql } from 'gatsby'
import OutboundLink from './outbound-link'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Masthead from './masthead'
import { ZoomableImage } from './zoomable-image'

const TipsMasthead = () => {
  const data = useStaticQuery(query)
  return (
    <Masthead className="tips-masthead">
      <Container>
        <div className="coffee-icon-container">
          <img src="/boost.svg" alt="Boost" width={24} />
        </div>
        <h1>
          <span className="avoid-wrap">Effective note-taking</span>&nbsp;
          <span className="avoid-wrap">in coding and learning</span>
        </h1>
      </Container>
      <div className="ui container sub-headline">
        How the app author actually uses Inkdrop.
      </div>
      <div className="ui container">
        <ZoomableImage
          img={data.cover.childImageSharp.gatsbyImageData}
          alt="Cover"
        />
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
