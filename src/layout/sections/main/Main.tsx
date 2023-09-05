import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/Vector.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>💜 hi everyone!</SmallText>
            <MainTitle>
              Olga Mazhartseva is a <span>web designer</span> and
              <span> front-end developer</span>
            </MainTitle>
            <SecondText>
              She crafts responsive websites where technologies meet creativity
            </SecondText>
            <ButtonWrapper>
              <Button>get in touch</Button>
            </ButtonWrapper>
          </div>
          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Photo = styled.img`
  width: 950px;
  height: 936px;
  object-fit: cover;
`;

const SmallText = styled.span`
  color: #717171;
  font-family: Inconsolata, monospace;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4.32px;
  text-transform: uppercase;
`;

const MainTitle = styled.h1`
  width: 533px;
  height: 180px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1.48px;
  margin: 30px 0;

  span {
    color: #c776f2;
  }
`;

const SecondText = styled.span`
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 0.38px;
`;

const ButtonWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    margin: 60px 0;
  }
`;
