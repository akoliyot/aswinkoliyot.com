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
    word-spacing: 1px;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 2rem;
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

  figure {
    text-align: center;
    margin: 3rem 0;

    img {
      max-width: 100%;
    }

    figcaption {
      margin: 0.4rem;
      font-size: 0.7rem;
      color: #77776c;
    }
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 1.7rem;
    font-weight: 300;
  }

  .meta {
    letter-spacing: 1px;
    font-size: 0.8rem;
    color: #b2b9be;

    span {
      margin-left: 10px;
      margin-right: 10px;
      position: relative
    }

    span:not(:last-child)::after {
      content: '•';
      position: absolute;
      right: -13px;
    }

    span::after::last-child {
      
    }
  }

  h2 {
    font-weight: 300;
  }
`;

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter, body, fields } = mdx;

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
              <div className="meta">
                <span>{frontmatter.date}</span>
                <span>{fields.readingTime.words} words</span>
                <span>{fields.readingTime.text}</span>
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
      fields {
        readingTime {
          text
          words
        }
      }
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
