import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/Vector.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
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
            <Button>get in touch</Button>
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
  width: 600px;
  height: 570px;
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
  color: #282828;
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 0.38px;
`;

const Button = styled.button`
  width: 251px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #e2e2e2;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;

  &&::before {
    content: "";
    display: inline-block;
    width: 100%;
    /* width: 62px; */
    height: 62px;
    top: 694px;
    left: 551px;
    position: absolute;
    bottom: 0;
  }
`;
