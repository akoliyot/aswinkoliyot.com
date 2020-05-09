import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledPostLink = styled.div`
  margin-bottom: 40px;

  a {
    font-weight: bold;
    font-size: 19px;
    line-height: 1.4;
    color: #333333;
    text-decoration: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .title {
    margin-bottom: 4px;
  }

  .date {
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 14px;

    /* font-weight: 300;
    font-size: 17px; */
    float: right;
    position: relative;
    top: 1px;
    color: #bbb;
  }

  .excerpt {
    font-weight: normal;
    font-size: 1rem;
    /* font-size: 17px; */
    line-height: 1.6;
    color: #aaaaaa;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const PostLink = ({ post }) => (
  <StyledPostLink>
    <Link to={post.frontmatter.path}>
      <div className="header">
        <span className="title">{post.frontmatter.title}</span>
        <span className="date">{post.frontmatter.date}</span>
      </div>
      <div className="excerpt">{post.frontmatter.description}</div>
    </Link>
  </StyledPostLink>
);
