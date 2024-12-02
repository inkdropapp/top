/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config')
      }
    }
  })
}

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest
// }) => {
//   const { createNode } = actions
//
//   const blogPosts = await axios.get(
//     `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/prodhacker`
//   )
//   for (const post of blogPosts.data.items) {
//     if (post.title.match(/DDoS/)) continue
//     if (post.title.match(/paternity/)) continue
//     const nodeContent = JSON.stringify(post)
//
//     const nodeMeta = {
//       id: createNodeId(`medium-post-${post.guid}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: `MediumPost`,
//         mediaType: `application/json`,
//         content: nodeContent,
//         contentDigest: createContentDigest(post)
//       }
//     }
//
//     const node = Object.assign({}, post, nodeMeta)
//     createNode(node)
//   }
// }
