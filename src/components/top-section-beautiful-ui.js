import { Link } from 'gatsby'
import React from 'react'
import BlockBadge from './block-badge'
import OutboundLink from './outbound-link'
import PerspectiveImage from './3d-perspective-image'
import { ReactComponent as MarkdownRendererImage } from '../images/icons/markdown-extensions.svg'
import { ReactComponent as KeyboardImage } from '../images/icons/keyboard.svg'
import { ReactComponent as ThemesImage } from '../images/icons/themes.svg'
import { ReactComponent as WebClipperImage } from '../images/icons/web-clipper.svg'
import { ReactComponent as AIReadyImage } from '../images/icons/ai-ready.svg'
import { ReactComponent as AccessInstantlyImage } from '../images/icons/access-instantly.svg'
import SectionThird from './section-third'
import Container from 'semantic-ui-react/dist/es/elements/Container'

const SectionBeautifulUI = () => {
  return (
    <SectionThird id="beautiful-ui">
      <Container>
        <div className="ui stackable grid">
          <div className="ten wide column">
            <PerspectiveImage mode="scroll" name="hoge">
              <div className="video-container">
                <video autoPlay={true} playsInline={true} loop={true} muted>
                  <source
                    src="https://site-cdn.inkdrop.app/site/features/demo-plugins.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </PerspectiveImage>
          </div>
          <div className="six wide column">
            <BlockBadge />
            <h2 className="ui header">Work with developer-focused features</h2>
            <p>
              With its high customizability, extensibility and 100+ plugins, it
              will stick with your workflow and improve your productivity.
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
        <div className="ui container">
          <div className="ui stackable three column grid">
            <div className="column">
              <ThemesImage className="icon" />
              <h3>Make it your notebook</h3>
              <p>
                Pick your favorite look and feel from the themes. You can also
                tweak your UI with CSS to make it more comfortable for your
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
                  href="https://developers.inkdrop.app/guides/style-tweaks"
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
                  href="https://my.inkdrop.app/plugins/mermaid"
                  className="underline link"
                >
                  mermaid
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/toc"
                  className="underline link"
                >
                  toc
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/embed"
                  className="underline link"
                >
                  embed
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/code-title"
                  className="underline link"
                >
                  code-title
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
                Keymaps are flexibly customizable to fit your typing style. It
                also supports multi-stroke keybindings.&nbsp;
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/vim"
                  className="underline link"
                >
                  Vim
                </OutboundLink>
                ,&nbsp;
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/emacs-keybindings"
                  className="underline link"
                >
                  Emacs
                </OutboundLink>
                , and&nbsp;
                <OutboundLink
                  href="https://my.inkdrop.app/plugins/sublime"
                  className="underline link"
                >
                  Sublime Text
                </OutboundLink>
                &nbsp;key bindings are also available to choose for wizards.
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
            <div className="column">
              <WebClipperImage className="icon" />
              <h3>Collect knowledge</h3>
              <p>
                The browser extensions for{' '}
                <OutboundLink
                  href="https://chrome.google.com/webstore/detail/inkdrop-web-clipper/foeipofmnkjhlbojckgiecdffbfnnofj"
                  className="underline link"
                >
                  Google Chrome
                </OutboundLink>
                &nbsp; and&nbsp;
                <OutboundLink
                  href="https://addons.mozilla.org/en-US/firefox/addon/inkdrop-web-clipper/"
                  className="underline link"
                >
                  Firefox
                </OutboundLink>
                &nbsp;let you clip the web page&apos;s main article to store
                knowledge from the internet. It also supports&nbsp;
                <OutboundLink
                  href="https://docs.inkdrop.app/reference/import-kindle-highlights"
                  className="underline link"
                >
                  importing Kindle highlights
                </OutboundLink>
                .
              </p>
              <p>
                <a
                  className="white link"
                  href="https://docs.inkdrop.app/manual/clipping-web-pages-from-browser"
                >
                  How to set the up web clipper&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
            <div className="column">
              <AccessInstantlyImage className="icon" />
              <h3>Access instantly</h3>
              <p>
                Inkdrop is very performant and responsive, even with a large
                number of notes. The&nbsp;
                <OutboundLink
                  href="https://docs.inkdrop.app/reference/integrate-with-alfred"
                  className="underline link"
                >
                  Alfred workflow
                </OutboundLink>
                &nbsp;and&nbsp;
                <OutboundLink
                  href="https://docs.inkdrop.app/reference/integrate-with-raycast"
                  className="underline link"
                >
                  Raycast extension
                </OutboundLink>
                &nbsp;even let you access your notes lightning fast.
              </p>
            </div>
            <div className="column">
              <AIReadyImage className="icon" />
              <h3>AI Integration ✨</h3>
              <p>
                The{' '}
                <OutboundLink
                  href="https://github.com/inkdropapp/mcp-server"
                  className="underline link"
                >
                  Inkdrop MCP server
                </OutboundLink>
                &nbsp;allows AI to search your notes, understand their context,
                and generate new notes based on your existing content.
              </p>
              <p>
                <a
                  className="white link"
                  href="https://docs.inkdrop.app/reference/mcp-server"
                >
                  How to set up the MCP server&nbsp;
                  <i className="angle double right icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionThird>
  )
}

export default SectionBeautifulUI
