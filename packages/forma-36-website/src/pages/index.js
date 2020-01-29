import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articleTitle = get(this, 'props.data.allContentfulArticles');

    console.log(articleTitle);

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          {siteTitle}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticles {
      edges {
        node {
          title
          childContentfulArticlesContentTextNode {
            content
          }
        }
      }
    }
  }
`