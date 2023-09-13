import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledSecondaryButton = styled.button<{ shouldShowCityList?: boolean }>`
  background-color: transparent;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: var(--spacing-1) var(--spacing-2);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

function SecondaryButton(props: {
  text: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { text, onClick } = props;

  return (
    <StyledSecondaryButton onClick={onClick}>{text}</StyledSecondaryButton>
  );
}

export default SecondaryButton;
