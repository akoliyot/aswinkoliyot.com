import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.div`
  display: inline-flex;

  a {
    display: inline-flex;
  }
`;

interface Props {
  icon: string;
  href?: string;
  openInNewTab?: boolean;
}

export const IconButton: React.FC<Props> = ({
  icon,
  href = "#",
  openInNewTab
}) => {
  return (
    <StyledIconButton>
      <a href={href} target={openInNewTab && "_blank"}>
        <img src={icon} width="22px" height="22px" />
      </a>
    </StyledIconButton>
  );
};
