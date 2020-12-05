import React, { Component } from 'react';
import Builder from '../components/Body/Builder/Builder';
import IceCream from '../components/Body/IceCream/IceCream';
import classes from './IceCremBuilder.module.css';

export default class IceCreamBuilder extends Component {
  state = {};

  render() {
    return (
      <div className={[classes.container, 'container'].join(' ')}>
        <IceCream />
        <Builder />
      </div>
    );
  }
}
