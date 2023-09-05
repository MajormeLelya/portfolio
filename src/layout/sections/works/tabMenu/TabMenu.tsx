import styled from "styled-components";
import { TabLink } from "../../../../components/TabLink";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <TabLink href=" ">{item}</TabLink>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const ListItem = styled.li`
  margin: 30px 0 15px;
`;
