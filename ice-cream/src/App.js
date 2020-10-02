import React, { Fragment } from 'react';
import Header from './structure/Header';
import Footer from './structure/Footer';
import IceCreamMenu from './ice-cream/iceCremMenu';
import './styles/ice-cream.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <IceCreamMenu />
      <Footer />
    </Fragment>
  );
};

export default App;
