import React from 'react';

import '../assets/styles/components/Category.scss';

export default function Category({ children }) {
  return (
    <div>
      <h2 className="categories__title">Mi Lista</h2>
      {children}
    </div>
  );
}
