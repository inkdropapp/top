import React from 'react'
import './Navigation.scss'
import Link from '../Link'

function Navigation () {
  return (
    <nav className='ui grid'>
      <div className='row'>
        <a href='https://www.inkdrop.info/' className='app--logo'>
          <img
            src='/navbar-logo.png'
            srcSet='/navbar-logo.png 1x, /navbar-logo@2x.png 2x'
            width='186'
            height='45'
            alt='logo'
          />
        </a>

        <ul className='app--navbar reset-list un-select'>
          <li>
            <Link to='/features'>
              Features
            </Link>
          </li>
          <li>
            <a href='https://doc.inkdrop.info/'>
              Docs
            </a>
          </li>
          <li>
            <Link to='/plugins'>
              Plugins
            </Link>
          </li>
          <li className='ui simple dropdown item'>
            More
            <i className='dropdown icon' />
            <div className='menu'>
              <Link className='item' to='/demo'>Demo</Link>
              <Link className='item' to='/pricing'>Pricing</Link>
              <a className='item' href='http://doc.inkdrop.info/faq'>FAQ</a>
              <div className='divider' />
              <a className='item' href='https://twitter.com/inkdrop_app'>Twitter</a>
              <a className='item' href='https://medium.com/@inkdrop'>Blog</a>
            </div>
          </li>
          <li>
            <a href='https://www.inkdrop.info/login' className='login'>
              <i className='sign in icon' />
              Log in
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navigation
