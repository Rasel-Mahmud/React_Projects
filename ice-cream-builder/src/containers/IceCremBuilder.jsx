import React, { Component } from 'react';
import Builder from '../components/Body/Builder/Builder';
import IceCream from '../components/Body/IceCream/IceCream';
import classes from './IceCremBuilder.module.css';

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      chocolate: 80,
      vanilla: 50,
      strawberry: 70,
      orange: 40,
      lemon: 20,
    },
    scoops: [],
    totalPrice: 0,
  };

  // Adding Scoops
  addScoop = (scoop) => {
    const { scoops, items, totalPrice } = this.state;
    const workingScoop = [...scoops];
    workingScoop.push(scoop);

    this.setState({
      scoops: workingScoop,
      totalPrice: totalPrice + items[scoop],
    });
  };

  // Removing Scoops
  removeScoop = (scoop) => {
    const { scoops, items, totalPrice } = this.state;
    const workingScoop = [...scoops];
    const scoopIndex = workingScoop.findIndex((sc) => sc === scoop);
    workingScoop.splice(scoopIndex, 1);

    this.setState({
      scoops: workingScoop,
      totalPrice: totalPrice - items[scoop],
    });
  };

  render() {
    const { items, totalPrice, scoops } = this.state;
    return (
      <div className={[classes.container, 'container'].join(' ')}>
        <IceCream scoops={scoops} />
        <Builder
          items={items}
          price={totalPrice}
          scoops={scoops}
          add={this.addScoop}
          remove={this.removeScoop}
        />
      </div>
    );
  }
}
