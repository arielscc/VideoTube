import React from 'react';

import '../assets/styles/components/Category.scss';

export default function Category({ children, title }) {
  return (
    <div>
      <h2 className="categories__title">{title}</h2>
      {children}
    </div>
  );
}
