import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import wrapper from 'store/configureStore';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Home, Modify, New } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/:id" element={<Modify />} />
        </Routes>
      </ResponsiveLayout>
    </BrowserRouter>
  );
};

export default wrapper.withRedux(App);
