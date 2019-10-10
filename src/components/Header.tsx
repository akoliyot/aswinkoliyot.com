import { Link } from "./Link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  nav {
    text-align: right;

    a {
      color: #5badf0;
      font-size: 13px;
      line-height: 1.35;
      border-radius: 3px;
    }
  }
`;

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <header
      style={{
        background: `white`,
        borderBottom: `1px dashed grey`,
        marginBottom: `1.45rem`
      }}
    >
      {siteTitle}
      <nav className="main-nav">
        <Link to="/blog">Archive</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
