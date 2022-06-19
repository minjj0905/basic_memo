import React from 'react';
import styled from 'styled-components';
import * as Container from 'component/common/Container';

const MainContainer = styled(Container.ColumnStartContainer)`
  width: 350px;
  border-right: 1.5px solid #e5e5e5;
  padding: 1rem;
`;

const Sidebar = () => {
  return (
    <MainContainer>
      <div>asdfas</div>
      <div>asdfas</div>
    </MainContainer>
  );
};

export default Sidebar;
