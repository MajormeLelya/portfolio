import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imagePse from "../../../assets/images/curvedline.svg";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle curvedLine={imagePse}>Testimony</SectionTitle>
      <FlexWrapper directon={"column"} align={"center"}>
        {/* <Icon iconId={"hiSvg"} /> */}
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  /* min-height: 50vh;
  background-color: #fbd8f4; */
`;
