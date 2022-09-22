import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Header from '../components/header';
import Container from '../components/container2';
import Card from '../components/card2';
import FeaturedImage from '../components/featured-image2';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-center text-gray-700 font-bold',
  date: 'text-gray-600 font-light text-center',
  line: 'bg-gray-900 block my-12 mx-auto h-px w-40',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <Container>
        <Header metadata={data.site.siteMetadata} />
        <SEO title={post.frontmatter.title} />
        <Card>
          {post.frontmatter.featuredImage && (
            <FeaturedImage
              sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            />
          )}
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
          <p className={classes.date}>
            {moment(post.frontmatter.date).format('MMMM DD, YYYY')}
          </p>
          <span className={classes.line} />
          <article
            className={classes.wrapper}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Card>
      </Container>
    </div>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`;
