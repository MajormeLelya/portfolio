import React from "react";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg
      width={props.width || "80"}
      height={props.height || "80"}
      viewBox={props.viewBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  object-fit: contain;
`;
