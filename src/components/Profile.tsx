import React from "react";
import avatar from "../images/avatar.png";
import styled from "styled-components";

const StyledProfile = styled.div`
  text-align: center;
  margin-top: 50px;

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
  return (
    <StyledProfile>
      <img src={avatar} />
      <div className="title">Aswin Koliyot</div>
      <div className="tagline">Thoughts written down</div>
    </StyledProfile>
  );
};
