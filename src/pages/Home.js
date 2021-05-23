import React, { useState, useEffect } from 'react';

import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';
// import useInitialState from '../hooks/useInitialState';

//redux
import { connect } from 'react-redux';

// const URL = 'http://localhost:3000/initialState';

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(URL);
  // const { mylist, originals, trends } = initialState;

  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Category title={'Mi Lista'}>
          <Carousel>
            {myList.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Category>
      )}
      <Category title={'Tendencias'}>
        <Carousel>
          {trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Category>

      <Category title={'Originales'}>
        <Carousel>
          {originals.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Category>
    </>
  );
};
const mapStateToProps = (state) => ({
  myList: state.myList,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
