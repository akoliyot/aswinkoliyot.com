import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { IconButton } from "./IconButton";
import { ThemeProps } from "../themes/Theme";
import {
  behance,
  codepen,
  github,
  goodReads,
  linkedIn,
  stackOverflow,
  twitter
} from "../images/social-icons";
import { Link } from "./Link";

const StyledFooter = styled.div<{ theme: ThemeProps }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xs}`};
  text-align: center;
  font-size: 0.8rem;

  .socialIcons {
    display: inline-block;
    margin-bottom: 15px;

    a {
      margin: 0 5px;
    }
  }
`;

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledFooter theme={theme}>
      <div className="socialIcons">
        <IconButton icon={behance} href="https://airbnb.com" />
        <IconButton icon={codepen} href="https://airbnb.com" />
        <IconButton icon={github} href="https://airbnb.com" />
        <IconButton icon={goodReads} href="https://airbnb.com" />
        <IconButton icon={linkedIn} href="https://airbnb.com" />
        <IconButton icon={stackOverflow} href="https://airbnb.com" />
        <IconButton icon={twitter} href="https://airbnb.com" />
      </div>

      <div>
        Made by{" "}
        <Link to="mailto:akoliyot@gmail.com" mode="default">
          Aswin Koliyot
        </Link>{" "}
        | <Link to="/credits">Credits</Link>
      </div>
    </StyledFooter>
  );
};
