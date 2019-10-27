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
  a {
    color: #5badf0;
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
