import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lighten, darken } from "polished";

const silverChalice = "#aaaaaa";
const silverChaliceLight = lighten(0.2, silverChalice);
const silverChaliceDark = darken(0.2, silverChalice);

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", helvetica, Arial, sans-serif;
  background: ${({ theme }) => theme.background};
  opacity: 1;
}

code {
  background: #fff;
  font-size: 11px;
  padding: 4px;
  border: none;
  box-shadow: inset 0 0 0 1px #e4ebf2;
  border-radius: 4px;
  overflow: scroll;
  font-family: Menlo,Monaco,Courier,monospace;
}`;

const theme = {
  light: {
    background: "white"
  },
  dark: {
    background: "black"
  }
};

export type ThemeProps = typeof theme.light;

export const ThemeWrapper: React.FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(theme.light);
  const toggleTheme = () => {
    activeTheme === theme.light
      ? setActiveTheme(theme.dark)
      : setActiveTheme(theme.light);
  };

  return (
    <ThemeProvider theme={{ theme: activeTheme, toggleTheme }}>
      <>
        <GlobalStyles theme={activeTheme} />
        {children}
      </>
    </ThemeProvider>
  );
};
