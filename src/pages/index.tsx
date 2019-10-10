import React from "react";
import { PostLink } from "../components/postLink";
import { App } from "../components/App";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <App>
      <Profile />
      <Layout>
        <div>{Posts}</div>
      </Layout>
    </App>
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