import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imagePse from "./../../../assets/images/curvedline.svg";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper directon={"column"} align={"center"}>
          <SectionTitle>
            The fastest speed in a career is to go forward slowly
          </SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #e4f3c4;
`;
