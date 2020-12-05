import React from 'react';
import classes from './IceCream.module.css';
import Scoops from './Scoops/Scoops';

function IceCream({ scoops }) {
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone} />
        {scoops.map((scoop) => (
          <Scoops key={`${scoop}.${Math.random()}`} scoops={scoop} />
        ))}
        <div className={classes.cherry} />
      </div>
    </div>
  );
}

export default IceCream;
