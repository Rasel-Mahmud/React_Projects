import React from 'react';
import { NavLink } from 'react-router-dom';
import iceCreamImage from './../assets/img/ultimate-ice-cream.svg';

const Header = () => (
  <header>
    <img src={iceCreamImage} alt="" />
    <h1>Ice Cream</h1>
    <nav>
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
    </nav>
  </header>
);

export default Header;
