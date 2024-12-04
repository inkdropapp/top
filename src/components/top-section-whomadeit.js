import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './top-section-whomadeit.less'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import BlockBadge from './block-badge'
import OutboundLink from './outbound-link'
import { YouTubeVideo } from './youtube-embed'

const SectionWhoMadeIt = () => {
  const _data = useStaticQuery(query)
  return (
    <section id="whomadeit">
      <Container>
        <BlockBadge center />
        <h2>Who is making Inkdrop?</h2>
        <div className="sub-headline">
          It is developed by an indie developer, Takuya Matsuyama, based in
          Japan.
        </div>
        <div className="center aligned links">
          <OutboundLink href="https://www.craftz.dog/" title="Homepage">
            <i className="home icon" />
          </OutboundLink>
          <OutboundLink
            href="https://www.youtube.com/@craftzdog"
            title="YouTube @craftzdog"
          >
            <i className="youtube icon" />
          </OutboundLink>
          <OutboundLink
            href="https://github.com/craftzdog"
            title="GitHub @craftzdog"
          >
            <i className="github icon" />
          </OutboundLink>
        </div>
      </Container>
      <Container className="vlogs center aligned content stackable three column grid">
        <div className="column">
          <YouTubeVideo videoId="KbZbz1TdgwA" width="560" height="315" />
        </div>
        <div className="column">
          <YouTubeVideo videoId="eLja90T28AQ" width="560" height="315" />
        </div>
        <div className="column">
          <YouTubeVideo videoId="vj723NlrIQc" width="560" height="315" />
        </div>
      </Container>
    </section>
  )
}

const query = graphql`
  query {
    takuya: file(relativePath: { eq: "takuya-01.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`

export default SectionWhoMadeIt
