import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

type Mode = "gatsby" | "default";

interface Props {
  mode?: Mode;
  onClick?: () => void;
  to: string;
}

const StyledLink = styled.span`
  padding: 10px 15px;

  a {
    top: 8px;
    right: 6px;
    color: #5badf0;
    font-size: 13px;
    line-height: 1.35;
    border-radius: 3px;
    text-decoration: none;
  }
`;

export const Link: React.FC<Props> = ({
  mode = "gatsby",
  onClick,
  to,
  children
}) => {
  switch (mode) {
    case "gatsby":
      return (
        <StyledLink>
          <GatsbyLink to={to}>{children}</GatsbyLink>
        </StyledLink>
      );
    case "default":
      return (
        <StyledLink>
          <a href={to} onClick={onClick}>
            {children}
          </a>
        </StyledLink>
      );
  }
};
