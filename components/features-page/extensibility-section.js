import React, { Component } from 'react'
import './extensibility-section.scss'
import Article from './article'
import Link from '../Link'
import OutboundLink from '../outbound-link'

export default class ExtensibilitySection extends Component {
  render () {
    return (
      <Article className='extensibility-section'>
        <a name='extensibility' />
        <header>
          <h2>Powerful APIs</h2>
          <p>Simple, composable, orthogonal APIs that let you add new feature to the app.</p>
        </header>
        <section className='ui container'>
          <hr className='separator' />
          <div className='ui stackable three column grid'>
            <div className='column plugin-support'>
              <h3 className='ui header'>
                <i className='cubes icon' />
                <div className='content'>
                  Extend with plugins
                </div>
              </h3>
              <div className='feature-description'>
                <p>
                  Inkdrop provides an <OutboundLink href='https://atom.io/'>Atom</OutboundLink>-inspired plugin system.
                  Plugins add new functionality or provide a new look to Inkdrop.
                  You can activate or deactivate them at any time.
                </p>
                <p>
                  <a href='https://doc.inkdrop.info/manual/extend-inkdrop-with-plugins'>
                    Learn more
                    <i className='angle double right icon' />
                  </a>
                </p>
                <p>
                  <Link to='/plugins'>
                    Explore plugins
                    <i className='angle double right icon' />
                  </Link>
                </p>
              </div>
            </div>
            <div className='column access-cloud'>
              <h3 className='ui header'>
                <i className='cloud icon' />
                <div className='content'>
                  Access data in the cloud
                </div>
              </h3>
              <div className='feature-description'>
                <p>
                  Data Access API is a RESTful API compatible with&nbsp;
                  <OutboundLink href='http://couchdb.apache.org/'>CouchDB</OutboundLink>.
                  That means there are already tons of libraries for CouchDB which you can choose
                  from in your favorite language to create your own client app.
                </p>
                <p>
                  <a href='http://doc.inkdrop.info/manual/accessing-data-in-the-cloud'>
                    Learn more
                    <i className='angle double right icon' />
                  </a>
                </p>
              </div>
            </div>
            <div className='column integration'>
              <h3 className='ui header'>
                <i className='puzzle icon' />
                <div className='content'>
                  Integration
                </div>
              </h3>
              <div className='feature-description'>
                <p>
                  The Inkdrop client app is built on top of a&nbsp;
                  <OutboundLink href='https://pouchdb.com/'>PouchDB</OutboundLink>&nbsp;
                  for storing data locally and syncing with the remote database.
                  So it’s easy to write scripts to integrate Inkdrop notes with other tools you use.
                </p>
                <p>
                  <a href='https://doc.inkdrop.info/manual/accessing-the-local-database'>
                    Learn more
                    <i className='angle double right icon' />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Article>
    )
  }
}
