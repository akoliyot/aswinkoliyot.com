import React from "react";
import { Profile } from "../components/Profile";
import { AppWrapper } from "../components/AppWrapper";
import styled from "styled-components";
import { ThemeProps } from "../themes/Theme";
import { PostList } from "../components/PostList";

const StyledIndexPage = styled.div<{ theme: ThemeProps }>``;

const IndexPage = () => {
  return (
    <AppWrapper>
      <Profile />

      <StyledIndexPage>
        <PostList />
      </StyledIndexPage>
    </AppWrapper>
  );
};
export default IndexPage;
