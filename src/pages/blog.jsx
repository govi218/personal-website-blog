import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import BlogHeader from '../components/blog-header';
import Container from '../components/container';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-100">
      <Container>
        <SEO title="Blog" />
        <BlogHeader metadata={data.site.siteMetadata} />
        {!noBlog && <BlogPosts posts={posts} />}
      </Container>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage{
              childImageSharp {
                sizes(maxWidth: 850) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
