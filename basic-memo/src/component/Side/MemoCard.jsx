import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Container from 'component/common/Container';
import COLOR from 'constants/color';
import useDate from 'hooks/useDate';

const CardContainer = styled(Container.ColumnStartContainer)`
  cursor: pointer;
  width: 250px;
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
  font-size: 0.92rem;
`;

const Date = styled.div`
  font-family: 'Pr-Light';
  margin-right: 0.5rem;
`;

const Content = styled.div`
  max-width: 160px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MemoCard = ({ memo }) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/${memo.id}`)}>
      <Title>{memo.title || '제목없음'}</Title>
      <ContentContainer>
        <Date>{useDate(memo.createdAt)}</Date>
        <Content>{memo.content.replace(/(<([^>]+)>)/gi, '')}</Content>
      </ContentContainer>
    </CardContainer>
  );
};

export default MemoCard;
