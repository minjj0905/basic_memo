import React from 'react';
import styled from 'styled-components';
import * as Container from 'component/common/Container';

const HomeContainer = styled(Container.ColumnMiddleContainer)`
  display: flex;
  flex-direction: colume;
  justify-content: center;
  align-items: center;
  font-family: 'Pr-Regular';
  font-size: 1.1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>로딩중</div>
    </HomeContainer>
  );
};

export default Home;
