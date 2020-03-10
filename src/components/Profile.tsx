import React, { useContext } from "react";
import avatar from "../images/avatar.png";
import styled from "styled-components";
import { ThemeProps } from "../themes/Theme";
import { ThemeContext } from "styled-components";

const StyledProfile = styled.div<{ theme: ThemeProps }>`
  text-align: center;
  margin: ${({ theme }) => `${theme.spacing.md} auto`};

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  .title {
    font-weight: 400;
    letter-spacing: 0;
    font-size: 1.2rem;
    margin-top: 18px;
    color: #222;
  }

  .tagline {
    margin-top: 12px;
    color: #acabab;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

export const Profile: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledProfile theme={theme}>
      <img src={avatar} />
      <div className="title">Aswin Koliyot</div>
      <div className="tagline">Thoughts written down</div>
    </StyledProfile>
  );
};
