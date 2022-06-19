import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initial, setInitial] = useState(false);
  const { memoList, loadMemoListDone } = useSelector(state => state.memo);
  useEffect(() => {
    dispatch({
      type: LOAD_MEMOLIST_REQUEST,
    });
  }, [location.pathname]);

  useEffect(() => {
    if (loadMemoListDone) {
      if (!initial && memoList.length) {
        navigate(`/${memoList[0]?.id}`);
        setInitial(true);
      }
      if (!memoList.length) {
        navigate('/new');
      }
    }
  }, [loadMemoListDone]);

  return (
    <MainContainer>
      {!memoList.length ? (
        <Container.ColumnMiddleContainer
          style={{
            width: '250px',
            height: '100vh',
            justifyContent: 'center',
          }}
        >
          메모가 없습니다
        </Container.ColumnMiddleContainer>
      ) : null}
      {memoList?.map(memo => (
        <MemoCard memo={memo} />
      ))}
    </MainContainer>
  );
};

export default Sidebar;
