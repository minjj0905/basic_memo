import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as Container from 'component/common/Container';
import { LOAD_MEMOLIST_REQUEST } from 'reducers/memo';
import MemoCard from './MemoCard';

const MainContainer = styled(Container.ColumnMiddleContainer)`
  width: 270px;
  max-width: 270px;
  height: 100vh;
  border-right: 1.5px solid #e5e5e5;
  padding: 1rem;
`;

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MEMOLIST_REQUEST,
    });
  }, [location.pathname]);
  return (
    <MainContainer>
      <MemoCard />
      <MemoCard />
      <MemoCard />
    </MainContainer>
  );
};

export default Sidebar;
