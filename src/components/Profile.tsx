import React from "react";
import avatar from "../images/avatar.png";
import styled from "styled-components";

const StyledProfile = styled.div`
  text-align: center;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
`;

export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <img src={avatar} />
      <div>Aswin Koliyot</div>
      <div>Thoughts written down</div>
    </StyledProfile>
  );
};
