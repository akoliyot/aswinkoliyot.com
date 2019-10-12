import React, { useContext } from "react";
import styled, { createGlobalStyle, ThemeContext } from "styled-components";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { Header } from "./Header";
import { lighten, darken } from "polished";
import { ThemeProps } from "../pages/index";

const silverChalice = "#aaaaaa";
const silverChaliceLight = lighten(0.2, silverChalice);
const silverChaliceDark = darken(0.2, silverChalice);

const mischka = "#cdd2db";
const outerSpace = "#2F363D";

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
body {
    background: ${({ theme }) => theme.background};
  }
`;

const StyledAppWrapper = styled.div`
  img {
    opacity: 0.2;
  }
`;

export const AppWrapper: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <StyledAppWrapper>
      <GlobalStyles theme={theme} />
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
    </StyledAppWrapper>
  );
};
