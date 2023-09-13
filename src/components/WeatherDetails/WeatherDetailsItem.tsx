import React from "react";
import styled from "styled-components";

const WeartherDetailsItemStyled = styled.div`
  display: flex;
  border-bottom: 1px solid var(--grey-color);
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  width: 50%;

  p{
    font-weight: bold;
  }
`;

const DataContainer = styled.div`
  width: 50%
`;



function WeartherDetailsItem(props: { title: string; data: string }) {
  const { title, data } = props;

  return (
    <WeartherDetailsItemStyled>
      <TitleContainer>
        <p>{title}</p>
      </TitleContainer>

      <DataContainer>
        <p>{data}</p>
      </DataContainer>
    </WeartherDetailsItemStyled>
  );
}

export default WeartherDetailsItem;
