import './gallery.less'
import { useStaticQuery, graphql } from 'gatsby'
import React, { useState, useCallback } from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import GalleryItem from '../components/gallery-item'
import GalleryZoomView from '../components/gallery-zoom-view'
import SectionGetStarted from '../components/section-get-started'

const GalleryPage = () => {
  const [zoomImage, setZoomImage] = useState(null)
  const handleItemClick = useCallback(img => {
    setZoomImage(img)
  }, [])
  const handleDismiss = useCallback(() => {
    setZoomImage(null)
  })
  const data = useStaticQuery(query)

  return (
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
                img={data.defaultLight.childImageSharp.gatsbyImageData}
                onClick={() =>
                  handleItemClick(
                    data.defaultLight.childImageSharp.gatsbyImageData
                  )
                }
              />
              <GalleryItem
                uiTheme="default-dark-ui"
                syntaxTheme="default-dark-ui"
                previewTheme="github-preview"
                img={data.defaultDark.childImageSharp.gatsbyImageData}
                onClick={() =>
                  handleItemClick(
                    data.defaultDark.childImageSharp.gatsbyImageData
                  )
                }
              />
            </div>
            <div className="row">
              <GalleryItem
                uiTheme="vibrant-dark-ui"
                syntaxTheme="default-dark-syntax"
                previewTheme="github-preview"
                img={data.vibrantDark.childImageSharp.gatsbyImageData}
                onClick={() =>
                  handleItemClick(
                    data.vibrantDark.childImageSharp.gatsbyImageData
                  )
                }
              />
              <GalleryItem
                uiTheme="horizon-dark-ui"
                syntaxTheme="horizon-dark-syntax"
                previewTheme="horizon-dark-preview"
                img={data.horizonDark.childImageSharp.gatsbyImageData}
                authorName="Camden DeVoogd"
                authorId="cdevoogd"
                onClick={() =>
                  handleItemClick(
                    data.horizonDark.childImageSharp.gatsbyImageData
                  )
                }
              />
            </div>
            <div className="row">
              <GalleryItem
                uiTheme="bera-light-ui"
                syntaxTheme="bera-light-syntax"
                previewTheme="bera-preview"
                img={data.beraLight.childImageSharp.gatsbyImageData}
                authorName="Taylan Tatlı"
                authorId="TaylanTatli"
                onClick={() =>
                  handleItemClick(
                    data.beraLight.childImageSharp.gatsbyImageData
                  )
                }
              />
              <GalleryItem
                uiTheme="nord-ui"
                syntaxTheme="nord-syntax"
                previewTheme="nord-preview"
                img={data.nord.childImageSharp.gatsbyImageData}
                authorName="choco"
                authorId="choco14t"
                onClick={() =>
                  handleItemClick(data.nord.childImageSharp.gatsbyImageData)
                }
              />
            </div>
            <div className="row">
              <GalleryItem
                uiTheme="octopus-dark-ui"
                syntaxTheme="octopus-dark-syntax"
                previewTheme="octopus-dark-preview"
                img={data.octopusDark.childImageSharp.gatsbyImageData}
                authorName="Peter Bartha"
                authorId="peterbartha"
                onClick={() =>
                  handleItemClick(
                    data.octopusDark.childImageSharp.gatsbyImageData
                  )
                }
              />
              <GalleryItem
                uiTheme="night-owl-dark-ui"
                syntaxTheme="night-owl-syntax"
                previewTheme="night-owl-preview"
                img={data.nightOwl.childImageSharp.gatsbyImageData}
                authorName="Sami Korpela"
                authorId="skipadu"
                onClick={() =>
                  handleItemClick(data.nightOwl.childImageSharp.gatsbyImageData)
                }
              />
            </div>
            <div className="row">
              <GalleryItem
                uiTheme="material-ocean-ui"
                syntaxTheme="material-ocean-syntax"
                previewTheme="material-ocean-preview"
                img={data.materialOcean.childImageSharp.gatsbyImageData}
                authorName="Abubakar Yagoub"
                authorId="Blacksuan19"
                onClick={() =>
                  handleItemClick(
                    data.materialOcean.childImageSharp.gatsbyImageData
                  )
                }
              />
              <GalleryItem
                uiTheme="vibrant-dark-ui"
                syntaxTheme="material-dark-mod-syntax"
                img={data.materialDarkMod.childImageSharp.gatsbyImageData}
                authorName="tawara"
                authorId="yuru7"
                onClick={() =>
                  handleItemClick(
                    data.materialDarkMod.childImageSharp.gatsbyImageData
                  )
                }
              />
            </div>
            <div className="row">
              <GalleryItem
                uiTheme="night-owl-dark-ui"
                syntaxTheme="galaxy-syntax"
                additionalPlugin="sidetoc"
                img={
                  data.nightOwlGalaxySyntaxSideToc.childImageSharp
                    .gatsbyImageData
                }
                authorName="basyura"
                authorId="basyura"
                onClick={() =>
                  handleItemClick(
                    data.nightOwlGalaxySyntaxSideToc.childImageSharp
                      .gatsbyImageData
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
          <GalleryZoomView
            alt="screenshot"
            img={zoomImage}
            onClick={handleDismiss}
          />
        )}
      </div>
    </Layout>
  )
}

export default GalleryPage

const query = graphql`
  query {
    defaultLight: file(relativePath: { eq: "gallery/win-default-light.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    defaultDark: file(relativePath: { eq: "gallery/win-default-dark.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    vibrantDark: file(relativePath: { eq: "gallery/win-vibrant-dark.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    horizonDark: file(relativePath: { eq: "gallery/win-horizon-dark.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    beraLight: file(relativePath: { eq: "gallery/win-bera-light.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    nord: file(relativePath: { eq: "gallery/win-nord.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    octopusDark: file(relativePath: { eq: "gallery/win-octopus-dark.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    nightOwl: file(relativePath: { eq: "gallery/win-night-owl.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    materialOcean: file(
      relativePath: { eq: "gallery/win-material-ocean.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    materialDarkMod: file(
      relativePath: { eq: "gallery/win-material-dark-mod.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
    nightOwlGalaxySyntaxSideToc: file(
      relativePath: {
        eq: "gallery/win-night-owl-dark-ui_galaxy-syntax_sidetoc.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 2400)
      }
    }
  }
`
