import React from 'react';
import styled from 'styled-components';
import * as Container from 'component/common/Container';
import MemoCard from './MemoCard';

const MainContainer = styled(Container.ColumnMiddleContainer)`
  width: 270px;
  max-width: 270px;
  height: 100vh;
  border-right: 1.5px solid #e5e5e5;
  padding: 1rem;
`;

const Sidebar = () => {
  return (
    <MainContainer>
      <MemoCard />
      <MemoCard />
      <MemoCard />
    </MainContainer>
  );
};

export default Sidebar;
