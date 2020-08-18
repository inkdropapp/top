import './top-section-beautiful-ui.less'
import { StaticQuery, graphql } from 'gatsby'
import React, { useEffect } from 'react'
import Container from 'semantic-ui-react/dist/es/elements/Container'
import Img from 'gatsby-image'
import BlockBadge from './block-badge'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PerspectiveImage from './3d-perspective-image'
import { ReactComponent as MarkdownRendererImage } from '../images/icons/markdown-extensions.svg'
import { ReactComponent as KeyboardImage } from '../images/icons/keyboard.svg'
import { ReactComponent as ThemesImage } from '../images/icons/themes.svg'

const SectionBeautifulUI = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section id="beautiful-ui">
        <Container>
          <div className="ui stackable grid">
            <div className="ten wide column">
              <PerspectiveImage mode="scroll" name="hoge">
                <Img
                  fluid={data.image01.childImageSharp.fluid}
                  alt="Beautiful UI"
                />
              </PerspectiveImage>
            </div>
            <div className="six wide column">
              <BlockBadge />
              <h2 className="ui header">
                Work with developer-focused features
              </h2>
              <p>
                With its high customizability, extensibility and 100+ plugins,
                it will stick with your workflow and improve your productivity.
              </p>
              <p>
                <a
                  className="ui white rounded button"
                  href="https://my.inkdrop.app/plugins"
                >
                  Browse plugins&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
          </div>
          <div className="ui stackable three column grid">
            <div className="column">
              <ThemesImage className="icon" />
              <h3>Make it your notebook</h3>
              <p>
                Pick your favorite look and feel from the themes. You can also
                tweak your UI with CSS/Less to make it more comfortable for your
                jottings.
              </p>
              <p>
                <a
                  className="white link"
                  href="https://my.inkdrop.app/plugins/theme"
                >
                  Browse themes&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
              <p>
                <a
                  className="white link"
                  href="https://docs.inkdrop.app/manual/style-tweaks"
                >
                  How to tweak styles&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
            <div className="column">
              <MarkdownRendererImage className="icon" />
              <h3>Do even more with Markdown</h3>
              <p>
                Not only GitHub-flavored Markdown, an extensible Markdown
                renderer can support various flavors such as{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/math"
                  className="underline link"
                >
                  math (KaTeX)
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/flowchart"
                  className="underline link"
                >
                  flowchart
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/mermaid"
                  className="underline link"
                >
                  mermaid
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/sequence-diagrams"
                  className="underline link"
                >
                  sequence diagrams
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/toc"
                  className="underline link"
                >
                  toc
                </OutboundLink>
                , and more.
              </p>
              <p>
                <a
                  className="white link"
                  href="https://docs.inkdrop.app/manual/extend-inkdrop-with-plugins"
                >
                  How to install plugins&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
            <div className="column">
              <KeyboardImage className="icon" />
              <h3>Type fluently in your way</h3>
              <p>
                Keymaps are flexibly customizable to fit your typing
                style.&nbsp;
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/vim"
                  className="underline link"
                >
                  Vim
                </OutboundLink>
                &nbsp;and&nbsp;
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/emacs-keybindings"
                  className="underline link"
                >
                  Emacs
                </OutboundLink>
                -like key bindings are also available to choose for wizards.
              </p>
              <p>
                <a
                  className="white link"
                  href="https://docs.inkdrop.app/manual/customizing-keybindings"
                >
                  How to customize keybindings&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    )}
  />
)

export default SectionBeautifulUI

const query = graphql`
  query {
    image01: file(relativePath: { eq: "ss-macos-04.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
