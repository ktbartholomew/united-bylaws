import React from "react"
import {graphql} from "gatsby"


import Layout from "../components/layout"


const IndexPage = (pageData) => {
  const md = pageData.data.markdownRemark

  return ( <Layout title={pageData.data.markdownRemark.frontmatter.title}>
    <div dangerouslySetInnerHTML={{__html: md.html}}/>
  </Layout>);
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      date
    }
  }
}
`

export default IndexPage
