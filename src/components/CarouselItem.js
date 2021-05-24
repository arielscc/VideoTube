import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import play from '../assets/img/play-icon.png';
import plus from '../assets/img/plus-icon.png';
import remove from '../assets/img/remove-icon.png';

import '../assets/styles/components/CarouselItem.scss';

import { setFavorite } from '../actions';
import { deleteFavorite } from '../actions';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <button>
            <img className="icon-play" src={play} />
          </button>
          <button onClick={handleSetFavorite}>
            <img className="icon-plus" src={plus} />
          </button>
          <button onClick={() => handleDeleteFavorite(id)}>
            <img className="icon-plus" src={remove} />
          </button>
        </div>
        <div>
          <p className="item-title">{title}</p>
          <p>{`${year} ${contentRating} ${duration}`}</p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
