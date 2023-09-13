import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledPaperFooter = styled.div`
  margin-top: var(--spacing-2);
`;

function PaperFooter(props: { children: ReactNode }) {
  const { children } = props;

  return <StyledPaperFooter>{children}</StyledPaperFooter>;
}

export default PaperFooter;
