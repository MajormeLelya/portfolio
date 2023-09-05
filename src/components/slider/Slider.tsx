import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            obcaecati similique vitae minima inventore perferendis consequatur
            amet eligendi harum, natus neque explicabo soluta labore modi.
            Assumenda quaerat dignissimos quod repellat!
          </Text>
          <Name>@ivan salov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
        <span className={"active"}> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
  font-family: Inconsolata, monospace;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255, 165, 249, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${Theme.colors.accent2};
      width: 20px;
    }
  }
`;
