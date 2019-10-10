import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { Header } from "./Header";

const StyledApp = styled.div`
  font: 16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const App: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledApp>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aswin Koliyot" />
        <meta
          name="description"
          content="I write about tech, travel, and whatever …"
        />
      </Helmet>

      <Header />

      {children}
    </StyledApp>
  );
};
