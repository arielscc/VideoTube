import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = ({ playing, getVideoSource, id }) => {
  const history = useHistory();
  const params = useParams();

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(params.id);
  }, []);

  const handleBack = () => {
    history.goBack();
  };
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};
const mapStateToProps = (state) => ({ playing: state.playing });
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
