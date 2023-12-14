import './tips-four-steps.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ZoomableImage } from './zoomable-image'
import BlockBadge from './block-badge'
import OutboundLink from './outbound-link'
import PerspectiveImage from './3d-perspective-image'
import SectionThird from './section-third'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

const SectionFourSteps = () => {
  const data = useStaticQuery(query)
  return (
    <SectionThird id="four-steps">
      <Container>
        <h2 className="ui header" id="four-steps-for-taking-tech-notes">
          Four steps for taking tech notes
        </h2>
        <p>
          In the world of software development, our day-to-day life revolves
          around identifying problems, referring to API docs, sketching out
          solutions, diving in and implementing those solutions in code, then
          checking the results, learning from our blunders, and finally, making
          better-informed decisions. This cycle can be broken down into four key
          stages:
        </p>

        <Container text>
          <PerspectiveImage mode="scroll" name="hoge">
            <ZoomableImage
              className="section-header-image"
              alt="4 steps for taking tech notes"
              img={data.fourSteps.childImageSharp.gatsbyImageData}
            />
          </PerspectiveImage>
        </Container>

        <p>
          This whole cycle is quite similar to what&apos;s known as the{' '}
          <strong>PDCA</strong> cycle – Plan, Do, Check, Act – a four-step
          approach for continuous learning and improvement. When I navigate
          through each of these stages, I make it a point to take notes. Now,
          let&apos;s dive into some real-life examples from my own tech
          note-taking process.
        </p>

        <BlockBadge />
        <h2>1. Identify the problem</h2>

        <p>
          No matter if it&apos;s dealing with a bug, enhancing existing code,
          implementing new features, or facing issues, everything starts with
          identifying and understanding the problem.
        </p>

        <p>
          Sometimes I get bug reports on{' '}
          <OutboundLink
            href="https://forum.inkdrop.app/"
            className="underline link"
          >
            the user forum
          </OutboundLink>
          , or I might even stumble upon bugs myself while using my app. When
          this happens, I immediately note down the specifics – stuff like error
          messages, stack traces, screenshots, and anything else that helps
          capture the essence of the issue. For instance:
        </p>
      </Container>

      <Carousel className="examples">
        <CarouselItem index={0}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={
                  data.identifyTheProblemEx01.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. App crash bug</h3>
              <p>
                There was this one time when the desktop app kept crashing upon
                quitting on Windows 8.1. It was weird because it didn&apos;t
                happen on Windows 10. So, I wrote down the error and steps I
                took to reproduce it like this.
              </p>
              <ul>
                <li>According to the error log, it was a fatal error in V8</li>
                <li>Added a link to the similar issue on Electron</li>
                <li>
                  Found that it comes from <code>node_bindings.cc</code>, so it
                  might be caused by a native module.
                </li>
                <li>After that, I started investigating the issue</li>
              </ul>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem index={1}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={
                  data.identifyTheProblemEx02.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. Payment issue on Stripe</h3>
              <p>
                Another time, I dealt with a bug causing card errors to some
                customers. I managed to reproduce it, took a screenshot, and
                pasted it in my note.
              </p>
              <ul>
                <li>
                  I took a screenshot of the error message on the payment page
                </li>
                <li>
                  I was not sure what was causing the error at that moment
                </li>
                <li>
                  When I looked into the error message closely, I noticed that
                  it was due to the 3D-secure authentication.
                </li>
              </ul>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem index={2}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={
                  data.identifyTheProblemEx03.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. Adding a new feature</h3>
              <p>
                When I come up with new features, like the revision history
                view, I capture my thoughts in notes. In this particular note,
                I&apos;ve linked the new internal module repository, written
                down some test scripts, and even dropped in a screenshot of
                GitHub&apos;s UI as a point of reference.
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <Container>
        <BlockBadge />
        <h2>2. Research the possible solutions</h2>

        <p>
          Okay, so after identifying the problem, the next step is digging into
          potential solutions. This is where I start exploring promising
          libraries, tools, or even scouring StackOverflow answers and related
          GitHub issues. I take notes about all these things.
        </p>
      </Container>

      <Carousel className="examples">
        <CarouselItem index={0}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={data.researchSolutionsEx01.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. PDF export feature</h3>
              <p>
                For instance, I&apos;m currently thinking about adding a feature
                to export notes as PDFs. Now, that&apos;s going to need native
                implementations on both Android and iOS. So, I started doing
                some research on the APIs and modules that could help me achieve
                this, and wrote down some snippets as I explored them.
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
                img={data.researchSolutionsEx02.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. In-App Purchases</h3>
              <p>
                Take a look at this note on implementing In-App Purchases for
                iOS. You&apos;ll see a library I found promising:
                react-native-iap. I&apos;ve also linked Apple&apos;s
                documentation and some blog posts about using StoreKit2. Plus,
                there&apos;s a handy sequence diagram detailing the business
                logic for the purchase flow.
              </p>
              <ul>
                <li>A link to the similar app</li>
                <li>A ChatGPT prompt memo and the chat history link</li>
                <li>Useful articles and promising libraries</li>
                <li>A sequence diagram on the business logic</li>
              </ul>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem index={2}>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <ZoomableImage
                className="section-header-image"
                alt="4 steps for taking tech notes"
                img={data.researchSolutionsEx04.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="eight wide column">
              <h3>Ex. Learn Three.js</h3>
              <p>
                I&apos;ve been really into ThreeJS lately, so I&apos;ve filled a
                bunch of notes about it, like this one. So, I often take notes
                when learning new technologies.
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
      <Container>
        <h3>Learning new technologies</h3>
        <ZoomableImage
          className="section-header-image"
          alt="4 steps for taking tech notes"
          img={data.learningNewTechnologies.childImageSharp.gatsbyImageData}
        />
        <Container text>
          <p className="paragraph">
            I also have a whole lot of notes in my <strong>Learn</strong>
            notebook. It&apos;s filled with stuff about libraries I want to try
            out, like SvelteJS, Radix UI, LangChain, Whisper API, and so on.
            Plus, there are even some notes on how to use DaVinci Resolve 18,
            which is not related to coding though since I am a video content
            creator, too.
          </p>
        </Container>
      </Container>
    </SectionThird>
  )
}

export default SectionFourSteps

const query = graphql`
  query {
    fourSteps: file(relativePath: { eq: "tips/four-steps.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    identifyTheProblemEx01: file(
      relativePath: { eq: "tips/identify-the-problem_ex01.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    identifyTheProblemEx02: file(
      relativePath: { eq: "tips/identify-the-problem_ex02.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    identifyTheProblemEx03: file(
      relativePath: { eq: "tips/identify-the-problem_ex03.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    researchSolutionsEx01: file(
      relativePath: { eq: "tips/research-the-solutions_ex01.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    researchSolutionsEx02: file(
      relativePath: { eq: "tips/research-the-solutions_ex02.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    researchSolutionsEx03: file(
      relativePath: { eq: "tips/research-the-solutions_ex03.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    researchSolutionsEx04: file(
      relativePath: { eq: "tips/research-the-solutions_ex04.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
    learningNewTechnologies: file(
      relativePath: { eq: "tips/learning-new-technologies.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2000)
      }
    }
  }
`
