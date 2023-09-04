import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import imagePse from "../../../assets/images/curvedline.svg";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle curvedLine={imagePse}>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"name"} />
          <Field placeholder={"subject"} />
          <Field placeholder={"massage"} as={"textarea"} />
          <Button type={"submit"}>SEND MESSAGE</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${Theme.colors.secondaryBg};
  border: 1px solid ${Theme.colors.borderColor};
  padding: 7px 15px;

  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  color: ${Theme.colors.font};

  &::placeholder {
    color: ${Theme.colors.placeholderColor};
  }

  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor};
  }
`;
