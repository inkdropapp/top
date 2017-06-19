/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'
import Navigation from '../Navigation'
import Footer from '../Footer'
// import Link from '../Link';

import '../../semantic/dist/components/reset.css'
import '../../semantic/dist/components/site.css'
import '../../semantic/dist/components/button.css'
import '../../semantic/dist/components/container.css'
import '../../semantic/dist/components/icon.css'
import '../../semantic/dist/components/header.css'
import '../../semantic/dist/components/segment.css'
import '../../semantic/dist/components/menu.css'
import '../../semantic/dist/components/grid.css'
import '../../semantic/dist/components/image.css'
import '../../semantic/dist/components/message.css'
import '../../semantic/dist/components/dropdown.css'

function Layout ({ children }) {
  return (
    <div>
      <header className='app--header'>
        <div className='ui container'>
          <Navigation />
        </div>
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
