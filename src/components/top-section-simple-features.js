import './top-section-simple-features.less'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import { GatsbyImage } from 'gatsby-plugin-image'
import gifLayout from '../images/feature-distraction-free.gif'

const SectionSimpleFeatures = () => {
  const data = useStaticQuery(query)
  return (
    <section id="simple-features">
      <Container>
        <div className="ui stackable grid">
          <div className="six wide column">
            <h2>Solely designed for Markdown to improve your dev workflow</h2>
            <p>
              Get a low-friction personal note-taking workflow and accomplish
              more. With your notes well-organized effortlessly, you can stay
              focused on doing your best work.
            </p>
          </div>
          <div className="ten wide column">
            <div className="video-container">
              <video autoPlay controls playsInline loop muted>
                <source
                  src="https://site-cdn.inkdrop.app/site/features/demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="ui stackable three column grid">
          <div className="column">
            <GatsbyImage
              alt="Versatile Markdown editor"
              className="feature-image"
              image={data.versatileEditor.childImageSharp.gatsbyImageData}
            />
            <h3>A versatile Markdown editor</h3>
            <p>
              It comes with multi-language code highlighting, multi-cursors,
              line numbers, scrolling beyond the last line, showing invisible
              characters and more.
            </p>
          </div>
          <div className="column">
            <img className="feature-image" src={gifLayout} />
            <h3>Focus on the work that matters</h3>
            <p>
              An intuitive and clean user interface and &apos;
              <a
                href="https://docs.inkdrop.app/manual/write-notes#distraction-free-mode"
                className="white bold underline link"
              >
                Distraction free mode
              </a>
              &apos; don&apos;t distract you from the text.
            </p>
          </div>
          <div className="column">
            <GatsbyImage
              alt="Stay organized, find quickly"
              className="feature-image"
              image={data.organize.childImageSharp.gatsbyImageData}
            />
            <h3>Stay organized, find quickly</h3>
            <p>
              With{' '}
              <a
                href="https://docs.inkdrop.app/manual/basic-usage#creating-new-note-and-notebook"
                className="white bold underline link"
              >
                nestable notebooks
              </a>
              ,{' '}
              <a
                href="https://docs.inkdrop.app/manual/pin-notes-to-top"
                className="white bold underline link"
              >
                pin-to-top
              </a>
              ,{' '}
              <a
                href="https://docs.inkdrop.app/manual/write-notes#tag-notes"
                className="white bold underline link"
              >
                tags
              </a>{' '}
              and{' '}
              <a
                href="https://docs.inkdrop.app/manual/organize-notebooks"
                className="white bold underline link"
              >
                workspace view
              </a>
              , it allows you to flexibly organize your notes.
            </p>
          </div>
          <div className="column">
            <GatsbyImage
              alt="Get things done"
              className="feature-image"
              image={data.taskManagement.childImageSharp.gatsbyImageData}
            />
            <h3>Get things done</h3>
            <p>
              Track your work progress with{' '}
              <a
                className="white underline bold link"
                href="https://docs.inkdrop.app/manual/managing-tasks-with-status"
              >
                note status
              </a>{' '}
              and task progress view in the note list.
            </p>
          </div>
          <div className="column">
            <GatsbyImage
              alt="Share your work quickly with people"
              className="feature-image"
              image={data.shareYourWork.childImageSharp.gatsbyImageData}
            />
            <h3>Share your work quickly with people</h3>
            <p>
              Your notes can be{' '}
              <a
                href="https://docs.inkdrop.app/manual/sharing-your-notes-on-the-web"
                className="white bold underline link"
              >
                shared on the web with a public link
              </a>
              . It also supports exporting as HTML, PDF and Markdown file
              format.
            </p>
          </div>
          <div className="column">
            <GatsbyImage
              alt="Never lose your ideas"
              className="feature-image"
              image={data.offlineSupport.childImageSharp.gatsbyImageData}
            />
            <h3>Never lose your ideas</h3>
            <p>
              Whenever, even while in offline, you can read and write notes.
              Just open up the app, then it will be instantly ready for you to
              start jotting down before you forget the idea.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionSimpleFeatures

const query = graphql`
  query {
    versatileEditor: file(relativePath: { eq: "feature-editor.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
    organize: file(relativePath: { eq: "feature-organize.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
    taskManagement: file(relativePath: { eq: "feature-task-management.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
    shareYourWork: file(relativePath: { eq: "feature-export-share.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
    offlineSupport: file(relativePath: { eq: "feature-offline.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 350)
      }
    }
  }
`
