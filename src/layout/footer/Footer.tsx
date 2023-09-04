import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper directon={"column"} align={"center"}>
        <Name>Olga</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"50px"}
                width={"50px"}
                viewBox={"0 0 50px 50px"}
                iconId={"linkedinSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"50px"}
                width={"50px"}
                viewBox={"0 0 50px 50px"}
                iconId={"mailSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"50px"}
                width={"50px"}
                viewBox={"0 0 50px 50px"}
                iconId={"telegramSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"50px"}
                width={"50px"}
                viewBox={"0 0 50px 50px"}
                iconId={"instagramSvg"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Mazhartseva Olga, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.secondaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 3px;
  text-transform: capitalize;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Theme.colors.socialColor};

  &:hover {
    color: ${Theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  opacity: 0, 5;
`;
