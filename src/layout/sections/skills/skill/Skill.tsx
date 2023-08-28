import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <StyledSkillTitle>{props.title}</StyledSkillTitle>
      <StyledSkillText>{props.description}</StyledSkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(247, 226, 226, 0.56);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledSkillTitle = styled.h3``;
const StyledSkillText = styled.p``;
