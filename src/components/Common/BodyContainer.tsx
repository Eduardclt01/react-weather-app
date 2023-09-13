import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledBodyContainer = styled.div`
  max-width: 1200px;
  padding: var(--spacing-1);
  margin: auto;
  padding-top: var(--spacing-3);
`;

function BodyContainer(props: { children: ReactNode }) {
  const { children } = props;

  return <StyledBodyContainer>{children}</StyledBodyContainer>;
}

export default BodyContainer;
