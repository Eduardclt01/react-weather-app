import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function CardContainer(props: { children: ReactNode }) {
  const { children } = props;

  return <StyledCardContainer>{children}</StyledCardContainer>;
}

export default CardContainer;
