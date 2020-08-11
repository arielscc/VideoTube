import React from 'react';
import PropTypes from 'prop-types';

import play from '../assets/img/play-icon.png';
import plus from '../assets/img/plus-icon.png';

import '../assets/styles/components/CarouselItem.scss';

export default function CarouselItem({
  cover,
  title,
  year,
  contentRating,
  duration,
}) {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
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
          <p className="item-title">{title}</p>
          <p>{`${year} ${contentRating} ${duration}`}</p>
        </div>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
