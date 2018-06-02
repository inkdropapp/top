import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RetinaImage from '../retina-image'
import './functionality-section.scss'
import Article from './article'

export default class FunctionalitySection extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <Article className="functionality-section">
        <a name="simplicity" />
        <header>
          <h2>Simple functionality</h2>
          <p>
            Robust, clean features that let you focus on taking notes that sync
            across computers
          </p>
        </header>
        <section className="ui container">
          <div className="markdown-support">
            <RetinaImage
              className="ui image"
              src="/features/markdown-support.png"
              alt="Markdown Support"
              width="1046"
            />
          </div>
          <div className="ui stackable five column grid">
            <div className="column">
              <h3>
                <i className="write icon" />Markdown Editor
              </h3>
              <p>
                Inkdrop lets you write in GitHub-flavored Markdown with inline
                code syntax highlightings.
              </p>
            </div>
            <div className="column">
              <h3>
                <i className="pause icon" />Side-by-side Preview
              </h3>
              <p>
                A live preview pane on the right side of editor renders Markdown
                as you type.
              </p>
            </div>
            <div className="column">
              <h3>
                <i className="bullseye icon" />Distraction Free
              </h3>
              <p>
                Sidebar and note list view can be hidden. Now just focus on
                writing.
              </p>
            </div>
            <div className="column">
              <h3>
                <i className="attach icon" />Image Attachments
              </h3>
              <p>
                Drag an image file into the editor and it will be inserted into
                the note.
              </p>
            </div>
            <div className="column">
              <h3>
                <i className="keyboard icon" />Key Customization
              </h3>
              <p>
                You can customize keybindings for any commands from preferences.
              </p>
            </div>
          </div>
        </section>
        <section className="high-usability">
          <div className="ui container">
            <div className="ui stackable centered grid sixteen column">
              <div className="five wide column usability-description-column">
                <div className="usability-description-block">
                  <h2>Keep it organized.</h2>
                  <div className="feature-description">
                    Notebooks can be nested, meaning you can create a
                    sub-notebook inside the notebook. You can also add tags to a
                    note. These features are useful to organize notes based on
                    projects and topics.
                  </div>

                  <h2>Find them quickly.</h2>
                  <div className="feature-description">
                    <p>
                      Search through note title and contents as-you-type.
                      Inkdrop&apos;s full-text search also supports filtering
                      notebooks and tags with search qualifiers. Start searching
                      just as you launch Inkdrop, no more focusing search field.
                    </p>
                    <p>
                      <a href="https://doc.inkdrop.info/manual/searching-notes">
                        Learn how to search
                        <i className="angle double right icon" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="five wide column" />
            </div>
          </div>
        </section>
        <section className="gray-bg light">
          <div className="ui container">
            <div className="ui stackable centered grid sixteen column">
              <div className="six wide column builtin-sync">
                <img
                  className="ui image"
                  src="/features/builtin-sync.png"
                  alt="Have it everywhere"
                  width="340"
                />
              </div>
              <div className="ten wide column">
                <h2>Work better &amp; faster.</h2>
                <div className="feature-description">
                  <p>
                    Inkdrop stores your data locally so you don&apos;t need to
                    wait for the server response on every action. You can access
                    any notes even offline.
                  </p>
                </div>

                <h2>Have it everywhere.</h2>
                <div className="feature-description">
                  <p>
                    Capture a note once, and it’s instantly available on all
                    your computers. The app automatically syncs notes across
                    computers when you install Inkdrop on another computer.
                    Never worry about where you saved a note because it’s in
                    Inkdrop.
                  </p>

                  <p>
                    <a href="https://doc.inkdrop.info/manual/synchronizing-in-the-cloud">
                      Learn more
                      <i className="angle double right icon" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Article>
    )
  }
}
