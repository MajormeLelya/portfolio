import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  // title: string;
  // description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper directon={"column"} align={"center"}>
        <Icon iconId={props.iconId} />
        {/* <StyledSkillTitle>{props.title}</StyledSkillTitle>
      <StyledSkillText>{props.description}</StyledSkillText> */}
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 280px;
  padding: 62px 20px 40px;
  /* margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; */

  &:hover {
    transform: translateY(-6px);
  }
`;
const StyledSkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;
const StyledSkillText = styled.p`
  text-align: ceneter;
`;
