import React from 'react';

import Summary from '../summary';
import Card from '../card';

const BlogPosts = ({ posts }) => {
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
