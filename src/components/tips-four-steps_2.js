import './tips-four-steps_2.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ZoomableImage } from './zoomable-image'
import BlockBadge from './block-badge'
import OutboundLink from './outbound-link'
import SectionFourth from './section-fourth'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

const SectionFourSteps2 = () => {
  const data = useStaticQuery(query)
  return (
    <SectionFourth id="four-steps_2">
      <Container>
        <img src="/tips_learning.svg" className="svg-illust section-header" />
        <h2>3. Validate the solutions</h2>

        <p>
          Once I&apos;ve researched potential solutions—or even while I&apos;m
          still in the process of researching—it&apos;s time to roll up my
          sleeves and start implementing them to see what works, what
          doesn&apos;t, and why.
        </p>
        <p>
          During this phase, my notes become a{' '}
          <strong>dynamic coding journal</strong>, capturing the snippets of
          code I&apos;m trying, the output results, the additional insights I
          gather along the way, and so on. This record of my journey can be
          immensely helpful. Let me share a few examples:
        </p>
      </Container>

      <Carousel className="examples">
        <CarouselItem index={0}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <div className="video-container">
                <video autoPlay controls playsInline loop muted>
                  <source
                    src="https://site-cdn.inkdrop.app/site/tips/what-didnt-work_native-editor.mov"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="eight wide column">
              <h3>Ex. Build a native editor based on CodeMirror 6</h3>
              <p>
                There was the time I attempted to build a native editor based on
                CodeMirror v6. That turned out to be quite a challenge. I
                documented all the planned features, the bugs I encountered,
                insights into CodeMirror&apos;s internals, and more in this long
                long note. While I didn&apos;t manage to make it stable enough
                for production, this note helped me understand the challenges of
                building a native editor on React Native.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem index={1}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                alt="4 steps for taking tech notes"
                img={data.whatWorkedWellEx01.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. Image load stuck</h3>
              <p>
                There was a bug in my mobile app where it would get stuck while
                loading a large image. I brainstormed and researched potential
                solutions, documenting my thoughts in this note.
              </p>
              <p>
                I noted down some ideas I came up with, like implementing a
                custom protocol handler and downloading image and decoding it in
                native side I was trying CryptoKit to decode data on iOS.
              </p>
              <p>
                Eventually, I decided to implement a custom native module. The
                entire process of building this module was detailed in another
                note. This record of the problem, the potential solutions, and
                the final successful approach now forms a valuable part of my
                knowledge base. I can refer back to understand why I chose this
                solution in the future.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem index={2}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                alt="4 steps for taking tech notes"
                img={data.whatDidntWorkEx03.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. Consider switching the database engine</h3>
              <p>
                On another occasion, I was considering changing the database
                engine for my mobile app. I explored libraries like
                <code>react-native-leveldown</code> and{' '}
                <code>react-native-leveldb</code>. Unfortunately, they
                weren&apos;t entirely compatible with LevelDB at that time, as I
                noted here.
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <Container>
        <h3>Ex. Implement PDF export for Android</h3>
        <ZoomableImage
          className="section-header-image"
          alt="Implementing PDF export for Android"
          img={data.whatWorkedWellEx03.childImageSharp.gatsbyImageData}
        />
        <p className="ui text container paragraph">
          In the above image, I am trying to make my mobile app support PDF
          export and trying a snippet of code that I found in the researching
          phase. (
          <OutboundLink
            href="https://www.youtube.com/watch?v=foDCh6r5iCA"
            target="_blank"
          >
            Watch video
          </OutboundLink>
          ).
        </p>

        <p className="paragraph">
          Documenting not just my successes, but also my failures, helps me
          <em>avoid repeating the same mistakes</em> and provides a{' '}
          <em>deeper understanding</em> of the challenges involved. These
          records of exploration and validation are a crucial part of my tech
          note-taking workflow.
        </p>
      </Container>

      <Container>
        <BlockBadge />
        <h2>4. Reuse the knowledge</h2>
        <p>
          Throughout the note-taking process, my notes naturally transform into
          a robust knowledge base that can be reused for future projects.
          Here&apos;s how:
        </p>
      </Container>
      <Carousel className="examples">
        <CarouselItem index={0}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={data.reuseKnowledgeEx01.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Refer to code snippets</h3>
              <p>
                Take for instance, when I was migrating from Flow to TypeScript
                in a large project, I kept referring back to my notes containing
                useful commands and macros. Instead of repeating the
                time-consuming task of searching for them each time, I could
                quickly reuse the snippets I&apos;d noted earlier.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem index={1}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={data.reuseKnowledgeEx02.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Learn from previous solutions to common errors</h3>
              <p>
                For example, I have multiple repositories still using Rollup v2.
                When migrating to v3, I can repeatedly turn to my notes, which
                document how I previously navigated the process. This saves me
                from re-learning the steps each time
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem index={2}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={data.reuseKnowledgeEx03.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Share what you learned</h3>
              <p>
                Note-taking isn&apos;t only for my personal reference. I also
                share what I&apos;ve learned with others by publishing content
                based on my notes. This is a great way to give back to the
                developer community and it helps me attract potential customers
                by showcasing my skills and knowledge. It is like harvesting my
                knowledge from my notes to share with all of you.
              </p>
              <p>
                For example, this article is about how I improved my React
                Native app 50x faster by replacing the polyfills with native
                modules (
                <OutboundLink
                  href="https://blog.inkdrop.app/how-i-improved-my-react-native-app-50x-faster-13d566061e84"
                  target="_blank"
                >
                  Read article
                </OutboundLink>
                ) .
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </SectionFourth>
  )
}

export default SectionFourSteps2

const query = graphql`
  query {
    whatWorkedWellEx01: file(
      relativePath: { eq: "tips/what-worked-well_ex01.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    whatWorkedWellEx02: file(
      relativePath: { eq: "tips/what-worked-well_ex02.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    whatWorkedWellEx03: file(
      relativePath: { eq: "tips/what-worked-well_ex03.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    whatDidntWorkEx01: file(
      relativePath: { eq: "tips/what-didnt-work_ex01.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    whatDidntWorkEx02: file(
      relativePath: { eq: "tips/what-didnt-work_ex02.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    whatDidntWorkEx03: file(
      relativePath: { eq: "tips/what-didnt-work_ex03.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    reuseKnowledgeEx01: file(
      relativePath: { eq: "tips/reuse-the-knowledge_ex01.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    reuseKnowledgeEx02: file(
      relativePath: { eq: "tips/reuse-the-knowledge_ex02.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    reuseKnowledgeEx03: file(
      relativePath: { eq: "tips/reuse-the-knowledge_ex03.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
  }
`
