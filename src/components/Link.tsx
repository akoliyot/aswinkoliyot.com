import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled.span`
  padding: 0 15px;
  a {
    color: tomato;
  }
`;

export const Link = ({ to, children }) => {
  return (
    <StyledLink>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </StyledLink>
  );
};
