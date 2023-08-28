import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/me-photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>HI EVERYONE!💜</span>
          <MainTitle>
            Olga Mazhartseva is a web designer and front-end developer
          </MainTitle>
          <span>
            She crafts responsive websites where technologies meet creativity
          </span>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #f5d4e9;
`;

const Photo = styled.img`
  width: 950px;
  height: 936px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  width: 533px;
  height: 180px;
`;
