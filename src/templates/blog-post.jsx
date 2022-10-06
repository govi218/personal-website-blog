import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import Link from 'gatsby-link';

import BlogHeader from '../components/blog-header';
import Container from '../components/container';
import Card from '../components/card';
import FeaturedImage from '../components/featured-image';
import SEO from '../components/seo';
import Share from '../components/share'

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-center text-gray-800 font-bold',
  date: 'text-gray-800 font-light text-center',
  line: 'bg-gray-900 block my-12 mx-auto h-px w-40',
  nav: 'my-12 text-center h-10',
  navButton: 'border border-solid border-gray-300 rounded-2xl inline-block m-1 py-1 px-4 no-underline hover:border-gray-800',
};

class BlogPost extends React.Component {

  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }

    return (
      <Container>
        <BlogHeader metadata={this.props.data.site.siteMetadata} />
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
          <Share url={url} title={post.frontmatter.title} />
        </Card>
        <div className={classes.nav}>
          {previous && (
            <Link className={classes.navButton} to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link className={classes.navButton} to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </Container>
    );
  }
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
