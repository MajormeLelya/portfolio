import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import imagePse from "../../../assets/images/curvedline.svg";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle curvedLine={imagePse}>my skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill
            iconId={"typescriptSvg"}
            // title={"TYPESCRIPT"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"jsSvg"}
            // title={"JS"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"vscodeSvg"}
            // title={"VS CODE"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"htmlSvg"}
            // title={"HTML"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"cssSvg"}
            // title={"CSS"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"styledcomponentsSvg"}
            // title={"STYLED COMPONENTS"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"reactSvg"}
            // title={"REACT"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"githubSvg"}
            // title={"GITHUB"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />

          <Skill
            iconId={"figmaSvg"}
            // title={"FIGMA"}
            // description={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            // }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
