import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledDropdownContainer = styled.div<{ shouldShowCityList?: Boolean }>`
  position: absolute;
  width: 100%;
  background-color: var(--white-color);
  border-top: 1px solid var(--secondary-color);
  width: 400px;
  box-shadow: var(--box-shadow-sm);
  visibility: ${(props) => (props.shouldShowCityList ? "visible" : `hidden`)};
`;

function DropdownContainer(props: {
  children: ReactNode;
  shouldShowCityList: Boolean;
}) {
  const { children, shouldShowCityList } = props;

  return (
    <StyledDropdownContainer shouldShowCityList={shouldShowCityList}>
      {children}
    </StyledDropdownContainer>
  );
}

export default DropdownContainer;
