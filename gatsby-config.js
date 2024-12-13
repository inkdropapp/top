// const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  siteMetadata: {
    title: `Inkdrop`,
    description: `The Note-Taking App with Robust Markdown Editor`,
    author: `@inkdrop_app`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 70
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['src/components/']
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    'gatsby-plugin-svgr'
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: false,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: false, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       'script-src': `'self' 'unsafe-inline' *.inkdrop.app *.usefathom.com *.senja.io senja-assets.b-cdn.net ajax.googleapis.com cdn.jsdelivr.net ${
    //         isDev ? " 'unsafe-eval'" : ''
    //       }`,
    //       'style-src':
    //         "'self' 'unsafe-inline' *.inkdrop.app fonts.googleapis.com *.typekit.net",
    //       'img-src':
    //         "'self' data: *.inkdrop.app *.usefathom.com *.senja.io stats.g.doubleclick.net *.medium.com senjaio.b-cdn.net *.imagekit.io pbs.twimg.com",
    //       'media-src': "'self' *.inkdrop.app blob:",
    //       'font-src': "'self' data: fonts.gstatic.com *.typekit.net",
    //       'frame-src': 'www.youtube.com',
    //       'connect-src': `'self' api.inkdrop.app *.usefathom.com *.senja.io stats.g.doubleclick.net ${
    //         isDev ? ' localhost:* ws://localhost:*' : ''
    //       }`
    //     }
    //   }
    // }
  ]
}
