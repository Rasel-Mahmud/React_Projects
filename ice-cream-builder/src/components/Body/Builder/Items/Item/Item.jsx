import { countBy } from 'lodash';
import React from 'react';
import classes from './Item.module.css';

function Item({ name, add, remove, scoops }) {
  const scoopsByCount = countBy(scoops);
  console.log(scoopsByCount);
  return (
    <li className={classes.item}>
      <span>{name}</span>
      {scoopsByCount[name] ? <span className={classes.quantity}>{scoopsByCount[name]}</span> : null}
      <div className="right">
        <button
          type="button"
          onClick={add.bind(this, name)}
          className={[classes.plus, 'rounded'].join(' ')}
        >
          +
        </button>
        {scoopsByCount[name] ? (
          <button
            type="button"
            onClick={remove.bind(this, name)}
            className={[classes.minus, 'rounded'].join(' ')}
          >
            -
          </button>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}

export default Item;
