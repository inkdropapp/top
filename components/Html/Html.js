/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from '../GoogleAnalytics'
import config from '../../config'

function Html({ title, image, description, body }) {
  const coverUrl = `${config.baseUrl}/cover.png`
  const imageUrl = image ? `${config.baseUrl}${image}` : coverUrl

  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:title" content={title || config.title} />
        <meta
          name="twitter:description"
          content={description || config.description}
        />
        <meta name="twitter:image" content={imageUrl} />

        <meta property="og:site_name" content={config.title} />
        <meta property="og:title" content={title || config.title} />
        <meta
          property="og:description"
          content={description || config.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />

        <meta
          name="google-site-verification"
          content="HIOE45mmxL8AGVMPwLdDod2J9vqgwMJCL_HsaHW19K8"
        />

        <link rel="shortcut icon" href="/favicon@2x.png" />
        <link rel="mask-icon" href="/favicon.svg" color="rgb(17, 20, 24)" />
        <link rel="stylesheet" href={'/app.css?' + new Date().getTime()} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700|Lato:300,400"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/earlyaccess/notosansjapanese.css"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };

            return t;
          }(document, "script", "twitter-wjs"));
        `
          }}
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
        <GoogleAnalytics />
        <script src={'/app.js?' + new Date().getTime()} />
      </body>
    </html>
  )
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
  image: PropTypes.string
}

export default Html
