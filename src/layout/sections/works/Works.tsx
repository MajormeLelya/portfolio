import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import quizlImage from "./../../../assets/images/rickandmorthy.jpeg";
import imagePse from "./../../../assets/images/curvedline.svg";
import { Container } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";

const worksItems = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle curvedLine={imagePse}>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={"space-around"}>
          <Work
            title={"Quiz Rick and Morty"}
            src={quizlImage}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
