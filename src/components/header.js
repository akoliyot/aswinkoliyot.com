import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderBottom: `1px dashed grey`,
      marginBottom: `1.45rem`
    }}
  >
    <nav class="main-nav">
      <a href="/blog">Archive</a>
      <a href="/about">About</a>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
