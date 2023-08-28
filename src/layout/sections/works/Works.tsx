import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import quizlImage from "./../../../assets/images/rickandmorthy.jpeg";

const worksItems = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper justify={"space-around"}>
        <Work
          title={"Quiz Rick and Morty"}
          src={quizlImage}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #b5cbf4;
`;
