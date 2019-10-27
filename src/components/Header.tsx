import { Link } from "./Link";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { ThemeProps } from "../themes/Theme";

const StyledHeader = styled.div<{ theme: ThemeProps }>`
  nav {
    text-align: right;
    padding: ${({ theme }) => theme.spacing.xs};

    a {
      padding: 10px 15px;
      color: #5badf0;
      font-size: 0.8rem;
      line-height: 1.35;
      border-radius: 3px;
    }
  }
`;

export const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <StyledHeader theme={theme}>
      <header>
        {siteTitle}
        <nav className="main-nav">
          <Link mode="default" onClick={toggleTheme} to="#">
            Toggle Theme
          </Link>
          <Link to="/blog">Archive</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
