import React, { useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import { PostLink } from "../components/postLink";
import styled from "styled-components";
import { ThemeProps } from "../themes/Theme";
import { ThemeContext } from "styled-components";

const StyledPostList = styled.div<{ theme: ThemeProps }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xs}`};
`;

export const PostList: React.FC<any> = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={({ allMdx: { edges } }) => {
        const posts = edges
          .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
          .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
        return <StyledPostList theme={theme}>{posts}</StyledPostList>;
      }}
    />
  );
};
