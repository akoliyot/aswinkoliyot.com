import React, { useState } from "react";
import { graphql } from "gatsby";
import { PostLink } from "../components/postLink";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { AppWrapper } from "../components/AppWrapper";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { ThemeWrapper } from "../themes/Theme";

const StyledIndexPage = styled.div`
  .postList {
    margin-top: 100px;
  }
`;

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <ThemeWrapper>
      <AppWrapper>
        <Profile />
        <Layout>
          <StyledIndexPage>
            <div className="postList">{Posts}</div>
          </StyledIndexPage>
        </Layout>
      </AppWrapper>
    </ThemeWrapper>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD")
            path
            title
            description
          }
        }
      }
    }
  }
`;
