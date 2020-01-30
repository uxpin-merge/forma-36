const fs = require('fs');
const Promise = require('bluebird');
const path = require('path')

exports.onPostBuild = () => {
  fs.copyFileSync('./_redirects', './public/_redirects', err => {
    if (err) throw err;
    console.log('redirect added!'); // eslint-disable-line
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const ArticleTemplate = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allContentfulArticles {
              edges {
                node {
                  title
                  slug
                  category {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulArticles.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/${post.node.category.slug}/${post.node.slug}/`,
            component: ArticleTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}