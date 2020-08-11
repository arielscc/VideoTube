import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Category from './components/Category';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import useInitialState from './hooks/useInitialState';

const URL = 'http://localhost:3000/initialState';

export const App = () => {
  const initialState = useInitialState(URL);
  const { mylist, originals, trends } = initialState;

  return (
    <>
      <Header />
      <Search />
      {mylist.length > 0 && (
        <Category title={'Mi Lista'}>
          <Carousel>
            {mylist.map((item) => {
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
      <Footer />
    </>
  );
};
