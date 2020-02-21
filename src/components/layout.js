/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import './layout.less'
import 'semantic-ui-less/semantic.less'

const HeaderReferral = React.lazy(() => import('../components/header-referral'))

const Layout = ({ children, pageTitle }) => {
  const isSSR = typeof window === 'undefined'
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <SEO
            title={pageTitle}
            keywords={[`inkdrop`, `markdown`, `documentations`]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          {!isSSR && (
            <React.Suspense fallback={null}>
              <HeaderReferral />
            </React.Suspense>
          )}
          <main>{children}</main>
          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
}

export default Layout
