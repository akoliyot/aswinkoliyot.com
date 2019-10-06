import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  font: 16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: tomato;
`;

export const App: React.FC = ({ children }) => {
  return (
    <StyledApp>
      <h1>Hallo</h1>
      {children}
    </StyledApp>
  );
};
