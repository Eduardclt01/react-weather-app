import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: var(--primary-color);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header(props: { children: ReactNode }) {
  const { children } = props;

  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
