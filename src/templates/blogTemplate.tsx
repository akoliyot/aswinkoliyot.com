import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
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

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter, body } = mdx;

  let featuredImgFluid;
  featuredImgFluid = frontmatter["featuredImage"]
    ? frontmatter.featuredImage.childImageSharp.fluid
    : null;

  return (
    <ThemeProvider theme={{ theme: theme.light, toggleTheme: () => false }}>
      <AppWrapper>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            {featuredImgFluid && <Img fluid={featuredImgFluid} />}
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
