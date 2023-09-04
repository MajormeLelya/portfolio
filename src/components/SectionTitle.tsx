import styled from "styled-components";

interface PseImg {
  curvedLine?: string;
}

export const SectionTitle = styled.h2<PseImg>`
  text-align: center;
  font-family: Inconsolata, monospace;
  font-weight: 400;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 3px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 52px;
    height: 5px;
    background-image: url(${(props) => props.curvedLine});
    background-size: cover;
    margin-right: 15px;

    position: absolute;
    transform: translateX(-120%);
    bottom: 13px;
  }
`;
