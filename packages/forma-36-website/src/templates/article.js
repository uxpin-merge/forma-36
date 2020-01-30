import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import MarkdownToHtml from '../components/Markdown'
import { Heading } from '@contentful/forma-36-react-components';

// import heroStyles from '../components/hero.module.css'

class ArticleTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArticles')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const content = get(this.props, 'data.contentfulArticles.childContentfulArticlesContentTextNode.content')
    console.log(this.props.data);

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          {/* <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
          </div> */}
          <main className='wrapper'>
            <Heading element='h1'>{post.title}</Heading>
            {content && <MarkdownToHtml>{content}</MarkdownToHtml>}
          </main>
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticles(slug: { eq: $slug }) {
      title
      childContentfulArticlesContentTextNode {
        content
      }
      # publishDate(formatString: "MMMM Do, YYYY")
      # heroImage {
      #   fluid(maxWidth: 1180, background: "rgb:000000") {
      #     ...GatsbyContentfulFluid_tracedSVG
      #   }
      # }
      # body {
      #   childMarkdownRemark {
      #     html
      #   }
      # }
    }
  }
`