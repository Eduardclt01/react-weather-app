import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledPaper = styled.div`
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-3);
  padding-bottom: var(--spacing-3);
  background-color: var(--white-color);
`;

function Paper(props: { children: ReactNode }) {
  const { children } = props;

  return <StyledPaper>{children}</StyledPaper>;
}

export default Paper;
