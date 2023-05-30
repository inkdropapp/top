import './tips-wrap-up.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ZoomableImage } from './zoomable-image'
import BlockBadge from './block-badge'
import SectionFifth from './section-fifth'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

const SectionWrapUp = () => {
  const data = useStaticQuery(query)
  return (
    <SectionFifth id="wrap-up">
      <Container>
        <h2>Your efforts will pay off 💪</h2>

        <p>
          That&apos;s my process for taking tech notes. It is crucial for my
          daily coding workflow. These are four steps to my tech note-taking
          process: identifying the problem, researching solutions, validating
          them, and reusing the knowledge. I want you to remember that
          note-taking isn&apos;t about being perfect. Jot down as freely as you
          would in a sketchbook. Make your failures productive by the effective
          tech note-taking. The most important thing is to keep coding and
          writing. I hope it&apos;s helpful for improving your productivity.
        </p>
      </Container>
    </SectionFifth>
  )
}

export default SectionWrapUp

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
