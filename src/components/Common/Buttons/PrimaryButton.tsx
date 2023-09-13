import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.button<{ shouldShowCityList?: boolean }>`
  background-color: var(--secondary-color);
  border: none;
  color: white;
  padding: var(--spacing-1) var(--spacing-2);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

function PrimaryButton(props: {
  text: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { text, onClick } = props;

  return <StyledPrimaryButton onClick={onClick}>{text}</StyledPrimaryButton>;
}

export default PrimaryButton;
