import { Link } from "./Link";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const StyledHeader = styled.div`
  nav {
    text-align: right;
    padding: 15px;

    a {
      color: #5badf0;
      font-size: 0.8rem;
      line-height: 1.35;
      border-radius: 3px;
    }
  }
`;

export const Header = ({ siteTitle }) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <StyledHeader>
      <header>
        {siteTitle}
        <nav className="main-nav">
          <button onClick={toggleTheme}>Toggle theme</button>
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
