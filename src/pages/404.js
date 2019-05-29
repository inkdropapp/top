import './404.less'
import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="ui text container not-found-page">
      <h1>Not Found 😢</h1>
      <p>
        The page you&apos;re looking for was not found. Please check the URL or
        click a link from the menu.
      </p>
      <div className="center aligned">
        <Link to="/" className="ui rounded button">
          Return to top&nbsp;
          <i className="right angle double icon" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
