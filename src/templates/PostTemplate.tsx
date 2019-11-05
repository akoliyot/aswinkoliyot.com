import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { AppWrapper } from "../components/AppWrapper";
import styled from "styled-components";

const StyledPost = styled.div`
  padding: 15px;

  p {
    text-align: justify;
    line-height: 1.7;
  }

  ul {
    padding: 0;
    line-height: 1.7;

    li {
      list-style-type: circle;
      list-style-position: inside;
      margin-bottom: 20px;
    }
  }

  .header {
    text-align: center;
  }

  .title {
    font-size: 1.7rem;
    font-weight: 300;
  }
`;

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter, body } = mdx;

  let featuredImgFluid;
  featuredImgFluid = frontmatter["featuredImage"]
    ? frontmatter.featuredImage.childImageSharp.fluid
    : null;

  return (
    <AppWrapper>
      <StyledPost>
        <div className="post">
          <div className="blog-post">
            <div className="header">
              <h1 className="title">{frontmatter.title}</h1>
              <div>
                <h2>{frontmatter.date}</h2>
                {/* TODO: Insert words here */}
                {/* TODO: Insert time here */}
              </div>
            </div>

            {featuredImgFluid && <Img fluid={featuredImgFluid} />}
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </StyledPost>
    </AppWrapper>
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
