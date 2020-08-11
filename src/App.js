import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Category from './components/Category';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';

import './assets/styles/App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Category title={'Mi Lista'}>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>

      <Category title={'Tendencias'}>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>

      <Category title={'Guardados'}>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>
      <Footer />
    </>
  );
};
