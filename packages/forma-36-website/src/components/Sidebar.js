import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Navigation from './Navigation';

class Sidebar extends Component {
  render () {
    return (
      <StaticQuery query={SidebarQuery} render={data => {
        return (
          <Navigation 
            menuItems={data.allContentfulCategories && data.allContentfulCategories.menuLinks}
            currentPath={this.props.location && this.props.location.pathname} />
        )
      }} />
    )
  }
}

export default Sidebar;

const SidebarQuery = graphql`
  query SidebarQuery {
    allContentfulCategories {
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