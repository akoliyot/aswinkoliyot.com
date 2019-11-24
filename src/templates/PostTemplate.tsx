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
<<<<<<< HEAD:src/templates/blogTemplate.tsx
      <h1>Hallo</h1>

      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          {featuredImgFluid && <Img fluid={featuredImgFluid} />}
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>

      {/* Root element of PhotoSwipe. Must have class pswp. */}
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        {/* Background of PhotoSwipe. It's a separate element as animating opacity
        is faster than rgba(). --> */}
        <div className="pswp__bg"></div>
        {/* Slides wrapper with overflow:hidden. --> */}
        <div className="pswp__scroll-wrap">
          {/* Container that holds slides. PhotoSwipe keeps only 3 of them in the
          DOM to save memory. Don't modify these 3 pswp__item elements, data is
          added later on. */}
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can
          be changed. */}
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              {/* Controls are self-explanatory. Order can be changed. */}
              <div className="pswp__counter"></div>
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              ></button>
              <button
                className="pswp__button pswp__button--share"
                title="Share"
              ></button>
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              ></button>
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              ></button>
              {/* Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
              element will get class pswp__preloader--active when preloader is
              running. */}
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>

            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>

            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
=======
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
>>>>>>> c1c33b7ff648da91910e01c85cf13d884e2a29f8:src/templates/PostTemplate.tsx
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
