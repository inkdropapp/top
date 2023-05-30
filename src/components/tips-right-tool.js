import './tips-right-tool.less'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SectionSecond, { Callout } from './section-second'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ZoomableImage } from './zoomable-image'

const SectionRightTool = () => {
  const data = useStaticQuery(query)
  return (
    <SectionSecond id="right-tool" hasSeparator>
      <img src="/tips_right-tool.svg" className="svg-illust section-header" />
      <h2>The right tool for the right task</h2>
      <p>
        I am a firm believer in the importance of using the right tools for the
        right tasks.
      </p>
      <p>
        I prefer using a <strong>screwdriver</strong> over a swiss-army knife
        because bloated tools tend to be sluggish and their features are often
        elusive to locate and understand. I also personally love simple and
        clean UIs. Note-taking is not an exception here. I don&apos;t have a
        central tool where every piece of information is stored.
      </p>
      <div className="ui stackable grid">
        <div className="row">
          <div className="ten wide column">
            <p>
              When it comes to coding, I prefer taking notes in{' '}
              <strong>Markdown</strong>, which is the most widely adopted text
              format for writing readme files and communicating on platforms
              such as GitHub and GitLab. Markdown is a simple format that can
              include code snippets like this:
            </p>
          </div>
          <div className="six wide column center aligned">
            <GatsbyImage
              alt="Versatile Markdown editor"
              className="feature-image"
              image={data.versatileEditor.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
      <p>
        This feature makes it especially handy for note-taking while coding. So,
        using Markdown for note-taking feels pretty natural. However, it
        isn&apos;t the best choice when you need to incorporate large amounts of
        images, videos, audio, tables, or other types of content. Rest assured
        that Markdown would be a screwdriver for tech notes. Thanks to the{' '}
        <strong>constraint</strong>, I can{' '}
        <em>avoid adding topics that aren&apos;t related to coding</em>, like
        shopping wishlists, travel venues, etc. That lets me keep my notes
        simple and organized. It significantly reduces the time it takes to
        switch between tasks.
      </p>
      <p>
        That&apos;s why I designed Inkdrop to be a dedicated place to assist{' '}
        <strong>the engineering process</strong> through tech note-taking.
      </p>

      <Callout>
        <p className="left aligned">
          <b>
            Being the note app creator doesn&apos;t mean that I use it for
            everything
          </b>
          . Notion is one of the popular note apps, so I use it to share the
          manual with my back office agent. For non-linear notes like
          moodboards, I prefer to use apps like Milanote. The right tools for
          the right tasks.
        </p>
      </Callout>

      <h2>Design for productive failure</h2>
      <ZoomableImage
        alt="Embrace your imperfection"
        img={data.embrace.childImageSharp.gatsbyImageData}
      />
      <p>
        When taking notes, you might be tempted to create perfect ones - akin to
        constructing a beautifully organized and completely structured knowledge
        base. I&apos;ve given up on that approach, finding it to be virtually
        impossible. Most of my notes are{' '}
        <em>cluttered, unstructured, and incomplete</em>, and that&apos;s{' '}
        <strong>fine</strong>. They are roughly organized with notebooks, tags,
        and statuses.
      </p>
      <p>
        They&apos;re like entries in a <strong>sketchbook</strong>; I draw
        things as freely as they appear in my imagination. So, essentially, I
        jot down what&apos;s currently buffering in my brain when coding. I
        don&apos;t want to invest unnecessary time and effort in maintaining my
        notes. It&apos;s more important to focus on solving the problem at hand.
        In tech note-taking,&nbsp;
        <em>perfection is not the goal, progress is</em>. So, jot down as freely
        as you would in a sketchbook.
      </p>
      <p>
        Embrace your <strong>imperfections</strong>. You make mistakes. You
        forget things. Rather than striving for perfection in your tech
        note-taking, approach it casually. By doing so, your failures become{' '}
        <strong>productive failures</strong>. You can learn from them, and here
        is how.
      </p>
    </SectionSecond>
  )
}

export default SectionRightTool

const query = graphql`
  query {
    versatileEditor: file(relativePath: { eq: "feature-editor.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
    embrace: file(relativePath: { eq: "tips/embrace-your-imperfection.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1800)
      }
    }
  }
`
