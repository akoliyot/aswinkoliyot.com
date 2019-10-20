import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lighten, darken } from "polished";

const silverChalice = "#aaaaaa";
const silverChaliceLight = lighten(0.2, silverChalice);
const silverChaliceDark = darken(0.2, silverChalice);

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
      <>{children}</>
    </ThemeProvider>
  );
};
