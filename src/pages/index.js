import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { RegVideo } from '../components/Complete/Video'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero showPerson />
      <RegVideo/>
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM, Do YYYY")
          readTime
          category
          author
          slug
          image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  }
`

export default IndexPage
