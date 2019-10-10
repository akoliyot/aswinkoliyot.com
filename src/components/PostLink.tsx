import React from "react";
import { Link } from "gatsby";
export const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
      <div>{post.frontmatter.description}</div>
      <hr />
    </Link>
  </div>
);
