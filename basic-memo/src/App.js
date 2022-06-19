import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Modify, New } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/:id" element={<Modify />} />
        </Routes>
      </ResponsiveLayout>
    </BrowserRouter>
  );
};

export default App;
