import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    border-color: ${Theme.colors.accent2};
    transform: translateY(-4px);
  }
`;
