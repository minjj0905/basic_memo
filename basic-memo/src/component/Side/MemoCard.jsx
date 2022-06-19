import React from 'react';
import styled from 'styled-components';
import * as Container from 'component/common/Container';
import COLOR from 'constants/color';

const CardContainer = styled(Container.ColumnStartContainer)`
  cursor: pointer;
  width: 240px;
  padding: 0.7rem;
  border-radius: 0.25rem;
  margin: 0 0 0.3rem 0;
  &:hover {
    background: ${COLOR.LIGHTGRAY};
  }
`;

const Title = styled.div`
  width: 100%;
  display: block;
  font-family: 'Pr-Bold';
  font-size: 1.1.rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.2rem;
`;

const ContentContainer = styled(Container.RowStartContainer)`
  width: 100%;
  font-size: 0.92rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MemoCard = () => {
  return (
    <CardContainer>
      <Title>제목입니다</Title>
      <ContentContainer>
        오후 3:53 어쩌고저쩌고내용어쩌고저쩌고내용
      </ContentContainer>
    </CardContainer>
  );
};

export default MemoCard;
