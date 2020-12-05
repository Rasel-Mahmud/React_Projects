import React from 'react';
import classes from './IceCream.module.css';
import Scoops from './Scoops/Scoops';

function IceCream() {
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone} />
        <Scoops />
        <div className={classes.cherry} />
      </div>
    </div>
  );
}

export default IceCream;
