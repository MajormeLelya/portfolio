import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

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
  background-color: #ffffff;
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
