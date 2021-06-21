import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
console.log('👉 props', props)
  
  const {
    data: {
      allMdx: { nodes: posts },
    },
    pageContext:{category}
  } = props

  return (
    <Layout>
      <Hero>
      </Hero>
        <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
      }
    }
  }
`

export default CategoryTemplate
