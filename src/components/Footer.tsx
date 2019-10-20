import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: salmon;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>I'm the footer</div>
    </StyledFooter>
  );
};
