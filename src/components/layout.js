/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={title || data.site.siteMetadata.title}>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '40em',
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header siteTitle={title || data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

graphql`
  query($path: String) {
    __typename
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default Layout
