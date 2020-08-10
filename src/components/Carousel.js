import React from 'react';

import '../assets/styles/components/Carousel.scss';

export default function Carousel({ children }) {
  return (
    <div>
      <section class="carousel">
        <div class="carousel__container">{children}</div>
      </section>
    </div>
  );
}
