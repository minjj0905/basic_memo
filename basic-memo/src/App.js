import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Home } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ResponsiveLayout>
    </BrowserRouter>
  );
};

export default App;
