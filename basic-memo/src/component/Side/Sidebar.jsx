import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as Container from 'component/common/Container';
import { LOAD_MEMOLIST_REQUEST } from 'reducers/memo';
import MemoCard from './MemoCard';

const MainContainer = styled(Container.ColumnMiddleContainer)`
  width: 280px;
  max-width: 280px;
  height: 100vh;
  border-right: 1.5px solid #e5e5e5;
  padding: 1rem;
`;

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { memoList } = useSelector(state => state.memo);
  useEffect(() => {
    dispatch({
      type: LOAD_MEMOLIST_REQUEST,
    });
  }, [location.pathname]);
  return (
    <MainContainer>
      {memoList.map(memo => (
        <MemoCard memo={memo} />
      ))}
    </MainContainer>
  );
};

export default Sidebar;
