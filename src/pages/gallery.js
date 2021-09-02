import './gallery.less'
import { StaticQuery, graphql } from 'gatsby'
import React, { useState, useCallback } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Breadcrumb from '../components/breadcrumb'
import GalleryItem from '../components/gallery-item'
import GalleryZoomView from '../components/gallery-zoom-view'
import SectionGetStarted from '../components/section-get-started'

const GalleryPage = () => {
  const [zoomImage, setZoomImage] = useState(null)
  const baseThemeUrl = 'https://my.inkdrop.app/plugins/'
  const handleItemClick = useCallback(img => {
    setZoomImage(img)
  }, [])
  const handleDismiss = useCallback(() => {
    setZoomImage(null)
  })

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
                    onClick={() =>
                      handleItemClick(data.defaultLight.childImageSharp.fluid)
                    }
                  />
                  <GalleryItem
                    uiTheme="default-dark-ui"
                    syntaxTheme="default-dark-ui"
                    previewTheme="github-preview"
                    img={data.defaultDark.childImageSharp.fluid}
                    onClick={() =>
                      handleItemClick(data.defaultDark.childImageSharp.fluid)
                    }
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="vibrant-dark-ui"
                    syntaxTheme="default-dark-syntax"
                    previewTheme="github-preview"
                    img={data.vibrantDark.childImageSharp.fluid}
                    onClick={() =>
                      handleItemClick(data.vibrantDark.childImageSharp.fluid)
                    }
                  />
                  <GalleryItem
                    uiTheme="horizon-dark-ui"
                    syntaxTheme="horizon-dark-syntax"
                    previewTheme="horizon-dark-preview"
                    img={data.horizonDark.childImageSharp.fluid}
                    authorName="Camden DeVoogd"
                    authorId="cdevoogd"
                    onClick={() =>
                      handleItemClick(data.horizonDark.childImageSharp.fluid)
                    }
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="bera-light-ui"
                    syntaxTheme="bera-light-syntax"
                    previewTheme="bera-preview"
                    img={data.beraLight.childImageSharp.fluid}
                    authorName="Taylan Tatlı"
                    authorId="TaylanTatli"
                    onClick={() =>
                      handleItemClick(data.beraLight.childImageSharp.fluid)
                    }
                  />
                  <GalleryItem
                    uiTheme="nord-ui"
                    syntaxTheme="nord-syntax"
                    previewTheme="nord-preview"
                    img={data.nord.childImageSharp.fluid}
                    authorName="choco"
                    authorId="choco14t"
                    onClick={() =>
                      handleItemClick(data.nord.childImageSharp.fluid)
                    }
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="octopus-dark-ui"
                    syntaxTheme="octopus-dark-syntax"
                    previewTheme="octopus-dark-preview"
                    img={data.octopusDark.childImageSharp.fluid}
                    authorName="Peter Bartha"
                    authorId="peterbartha"
                    onClick={() =>
                      handleItemClick(data.octopusDark.childImageSharp.fluid)
                    }
                  />
                  <GalleryItem
                    uiTheme="night-owl-dark-ui"
                    syntaxTheme="night-owl-syntax"
                    previewTheme="night-owl-preview"
                    img={data.nightOwl.childImageSharp.fluid}
                    authorName="Sami Korpela"
                    authorId="skipadu"
                    onClick={() =>
                      handleItemClick(data.nightOwl.childImageSharp.fluid)
                    }
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="material-ocean-ui"
                    syntaxTheme="material-ocean-syntax"
                    previewTheme="material-ocean-preview"
                    img={data.materialOcean.childImageSharp.fluid}
                    authorName="Abubakar Yagoub"
                    authorId="Blacksuan19"
                    onClick={() =>
                      handleItemClick(data.materialOcean.childImageSharp.fluid)
                    }
                  />
                  <GalleryItem
                    uiTheme="vibrant-dark-ui"
                    syntaxTheme="material-dark-mod-syntax"
                    img={data.materialDarkMod.childImageSharp.fluid}
                    authorName="tawara"
                    authorId="yuru7"
                    onClick={() =>
                      handleItemClick(
                        data.materialDarkMod.childImageSharp.fluid
                      )
                    }
                  />
                </div>
                <div className="row">
                  <GalleryItem
                    uiTheme="night-owl-dark-ui"
                    syntaxTheme="galaxy-syntax"
                    additionalPlugin="sidetoc"
                    img={data.nightOwlGalaxySyntaxSideToc.childImageSharp.fluid}
                    authorName="basyura"
                    authorId="basyura"
                    onClick={() =>
                      handleItemClick(
                        data.nightOwlGalaxySyntaxSideToc.childImageSharp.fluid
                      )
                    }
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
                    <div>
                      <a
                        className="ui rounded button"
                        href="https://docs.inkdrop.app/manual/creating-a-theme"
                      >
                        Create your own theme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <SectionGetStarted />
            </div>
            {zoomImage && (
              <GalleryZoomView img={zoomImage} onClick={handleDismiss} />
            )}
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
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    defaultDark: file(relativePath: { eq: "gallery/win-default-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vibrantDark: file(relativePath: { eq: "gallery/win-vibrant-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    horizonDark: file(relativePath: { eq: "gallery/win-horizon-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beraLight: file(relativePath: { eq: "gallery/win-bera-light.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nord: file(relativePath: { eq: "gallery/win-nord.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    octopusDark: file(relativePath: { eq: "gallery/win-octopus-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nightOwl: file(relativePath: { eq: "gallery/win-night-owl.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    materialOcean: file(
      relativePath: { eq: "gallery/win-material-ocean.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    materialDarkMod: file(
      relativePath: { eq: "gallery/win-material-dark-mod.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nightOwlGalaxySyntaxSideToc: file(
      relativePath: {
        eq: "gallery/win-night-owl-dark-ui_galaxy-syntax_sidetoc.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
