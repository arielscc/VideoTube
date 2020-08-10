import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

export default function CarouselItem() {
  return (
    <div>
      <div className="carousel-item">
        <img className="carousel-item__img" src="./img/01.jpg" alt="people" />
        <div className="carousel-item__details">
          <div>
            <a href="" className="item_icon">
              <span className="icon-play3"></span>
            </a>
            <a href="" className="item_icon">
              <span className="icon-plus"></span>
            </a>
          </div>
          <div>
            <p className="item-title">Titulo descriptivo</p>
            <p>2019 16+ 114min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
