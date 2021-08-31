import './gallery.less'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Breadcrumb from '../components/breadcrumb'
import GalleryItem from '../components/gallery-item'
import SectionGetStarted from '../components/section-get-started'

const GalleryPage = () => {
  const baseThemeUrl = 'https://my.inkdrop.app/plugins/'
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout pageTitle="Gallery of Inkdrop - Note-taking App with Robust Markdown Editor">
          <div className="main-content gallery">
            <div className="ui container">
              <Breadcrumb currentPageTitle="Gallery" />
              <div className="center aligned gallery-masthead">
                <div className="icon-container">
                  <img src="/color-brush.svg" alt="Color brush" width={24} />
                </div>
                <h1>Find your favorite flavor.</h1>
                <div>
                  <a href="https://docs.inkdrop.app/manual/extend-inkdrop-with-plugins#change-themes">
                    How to change themes?&nbsp;
                    <i className="angle double right icon" />
                  </a>
                </div>
              </div>
              <div className="ui stackable two column grid">
                <div className="row">
                  <GalleryItem
                    uiTheme="default-light-ui"
                    syntaxTheme="default-light-ui"
                    previewTheme="github-preview"
                    img={data.defaultLight.childImageSharp.fluid}
                  />
                  <GalleryItem
                    uiTheme="default-dark-ui"
                    syntaxTheme="default-dark-ui"
                    previewTheme="github-preview"
                    img={data.defaultDark.childImageSharp.fluid}
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="vibrant-dark-ui"
                    syntaxTheme="default-dark-syntax"
                    previewTheme="github-preview"
                    img={data.vibrantDark.childImageSharp.fluid}
                  />
                  <GalleryItem
                    uiTheme="horizon-dark-ui"
                    syntaxTheme="horizon-dark-syntax"
                    previewTheme="horizon-dark-preview"
                    img={data.horizonDark.childImageSharp.fluid}
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="bera-light-ui"
                    syntaxTheme="bera-light-syntax"
                    previewTheme="bera-preview"
                    img={data.beraLight.childImageSharp.fluid}
                  />
                  <GalleryItem
                    uiTheme="nord-ui"
                    syntaxTheme="nord-syntax"
                    previewTheme="nord-preview"
                    img={data.nord.childImageSharp.fluid}
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="octopus-dark-ui"
                    syntaxTheme="octopus-dark-syntax"
                    previewTheme="octopus-dark-preview"
                    img={data.octopusDark.childImageSharp.fluid}
                  />
                  <GalleryItem
                    uiTheme="night-owl-dark-ui"
                    syntaxTheme="night-owl-syntax"
                    previewTheme="night-owl-preview"
                    img={data.nightOwl.childImageSharp.fluid}
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="material-ocean-ui"
                    syntaxTheme="material-ocean-syntax"
                    previewTheme="material-ocean-preview"
                    img={data.materialOcean.childImageSharp.fluid}
                  />
                  <div className="column gallery-explore-more">
                    <div>
                      <a
                        className="ui primary rounded button"
                        href="https://my.inkdrop.app/plugins/theme"
                      >
                        Explore more themes
                      </a>
                    </div>
                    <div>
                      <a
                        className="ui rounded button"
                        href="https://docs.inkdrop.app/manual/extend-inkdrop-with-plugins#change-themes"
                      >
                        How to change themes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <SectionGetStarted />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default GalleryPage

const query = graphql`
  query {
    defaultLight: file(relativePath: { eq: "gallery/win-default-light.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    defaultDark: file(relativePath: { eq: "gallery/win-default-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vibrantDark: file(relativePath: { eq: "gallery/win-vibrant-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    horizonDark: file(relativePath: { eq: "gallery/win-horizon-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beraLight: file(relativePath: { eq: "gallery/win-bera-light.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nord: file(relativePath: { eq: "gallery/win-nord.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    octopusDark: file(relativePath: { eq: "gallery/win-octopus-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nightOwl: file(relativePath: { eq: "gallery/win-night-owl.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    materialOcean: file(
      relativePath: { eq: "gallery/win-material-ocean.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
