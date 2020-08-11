import React from 'react';

import '../assets/styles/components/Carousel.scss';

export default function Carousel({ children }) {
  return (
    <div>
      <section className="carousel">
        <div className="carousel__container">{children}</div>
      </section>
    </div>
  );
}
