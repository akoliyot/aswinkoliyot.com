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
      <label>asdf</label>
      <div>Aswin Koliyot</div>
      <span>Thoughts written down</span>
    </StyledProfile>
  );
};
