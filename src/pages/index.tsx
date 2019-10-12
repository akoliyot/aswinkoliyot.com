import React, { useState } from "react";
import { graphql } from "gatsby";
import { PostLink } from "../components/postLink";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { AppWrapper } from "../components/AppWrapper";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    background: "white"
  },
  dark: {
    background: "black"
  }
};
export type ThemeProps = typeof theme.light;

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const [activeTheme, setActiveTheme] = useState(theme.light);
  const toggleTheme = () => {
    activeTheme === theme.light
      ? setActiveTheme(theme.dark)
      : setActiveTheme(theme.light);
  };
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <ThemeProvider theme={{ theme: activeTheme, toggleTheme }}>
      <AppWrapper>
        <Profile />
        <Layout>
          <div>{Posts}</div>
        </Layout>
      </AppWrapper>
    </ThemeProvider>
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
