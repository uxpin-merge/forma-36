import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Navigation from './Navigation';
// import Search from './Search';

class Sidebar extends Component {
  render () {
    return (
      <StaticQuery query={SidebarQuery} render={data => {
        return (
          <React.Fragment>
            {/* <Search items={data.allContentfulCategories && data.allContentfulCategories.menuLinks} /> */}
            <Navigation 
              menuItems={data.allContentfulCategories && data.allContentfulCategories.menuLinks}
              currentPath={this.props.location && this.props.location.pathname} />
          </React.Fragment>
        )
      }} />
    )
  }
}

export default Sidebar;

const SidebarQuery = graphql`
  query SidebarQuery {
    allContentfulCategories(sort: {fields: categoryName, order: DESC}) {
      menuLinks: nodes {
        name: categoryName
        menuLinks: articles {
          link: slug
          name: title
          parent: category {
            link: slug
          }
        }
      }
    }
  }
`