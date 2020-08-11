import React from 'react';

import play from '../assets/img/play-icon.png';
import plus from '../assets/img/plus-icon.png';

import '../assets/styles/components/CarouselItem.scss';

export default function CarouselItem() {
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src="http://lorempixel.com/200/250/"
        alt="people"
      />
      <div className="carousel-item__details">
        <div>
          <a href="">
            <img className="icon-play" src={play} />
          </a>
          <a href="">
            <img className="icon-plus" src={plus} />
          </a>
        </div>
        <div>
          <p className="item-title">Titulo descriptivo</p>
          <p>2019 16+ 114min</p>
        </div>
      </div>
    </div>
  );
}
