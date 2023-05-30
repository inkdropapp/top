/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import 'semantic-ui-less/semantic.less'
import './layout.less'

const HeaderReferral = React.lazy(() => import('../components/header-referral'))

const Layout = ({ children, pageTitle, ogImage }) => {
  const isSSR = typeof window === 'undefined'

  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <SEO
        title={pageTitle}
        keywords={[`inkdrop`, `markdown`, `documentations`]}
        ogImage={ogImage}
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
}

export default Layout
