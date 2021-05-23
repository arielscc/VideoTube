import React from 'react';
import Footer from './Footer';
import Header from './Header';

export const Loyout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
