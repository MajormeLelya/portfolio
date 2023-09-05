import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const TabLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  /* position: relative;
  z-index: 0; */

  &:hover {
    /* &::before { */
    /* height: 7px; */
    font-weight: bold;
    color: ${Theme.colors.accent2};
    /* } */
  }

  /* &::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.nails};

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
  } */
`;
