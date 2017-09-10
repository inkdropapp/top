import React from 'react'
import './Navigation.scss'
import Link from '../Link'
import RetinaImage from '../retina-image'

function Navigation () {
  return (
    <nav className='ui grid'>
      <div className='row'>
        <Link to='/' className='app--logo'>
          <RetinaImage
            src='/navbar-logo.png'
            width='186'
            height='45'
            alt='logo'
          />
        </Link>

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
            <a href='https://app.inkdrop.info/plugins'>
              Plugins
            </a>
          </li>
          <li className='ui simple dropdown item'>
            More
            <i className='dropdown icon' />
            <div className='menu'>
              <a className='item' href='https://app.inkdrop.info/demo'>Demo</a>
              <Link className='item' to='/pricing'>Pricing</Link>
              <a className='item' href='https://doc.inkdrop.info/faq'>FAQ</a>
              <div className='divider' />
              <a className='item' href='https://twitter.com/inkdrop_app'>Twitter</a>
              <a className='item' href='https://medium.com/@inkdrop'>Blog</a>
              <a className='item' href='https://forum.inkdrop.info/'>User Forum</a>
            </div>
          </li>
          <li>
            <a href='https://app.inkdrop.info/' className='login'>
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
