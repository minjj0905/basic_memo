import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

import Sidebar from 'component/Side/Sidebar';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${COLOR.BACKGROUND};
`;

const ResponsiveLayout = ({ children }) => {
  return (
    <MainContainer>
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};

export default ResponsiveLayout;
