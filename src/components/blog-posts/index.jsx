import React from 'react';

import Layout from '../layout2';
import Container from '../container2';
import Summary from '../summary2';
import Card from '../card2';

const BlogPosts = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.node.fields.slug}>
          <Summary
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.excerpt}
            image={post.node.frontmatter.featuredImage}
            slug={post.node.fields.slug}
          />
        </Card>
      ))}
    </div>
  );
};

export default BlogPosts;
