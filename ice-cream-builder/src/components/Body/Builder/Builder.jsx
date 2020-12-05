import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

function Builder({ items, price, add, remove, scoops }) {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <div>
          <Items items={items} add={add} remove={remove} scoops={scoops} />
        </div>
        <TotalPrice price={price} />
      </div>
      <Modal>Hello Modal</Modal>
    </div>
  );
}

export default Builder;
