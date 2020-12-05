import React from 'react';
import IceCreamBuilder from '../../containers/IceCremBuilder';
import classes from './Body.module.css';

function Body() {
  return (
    <div className={classes.mainBody}>
      <IceCreamBuilder />
    </div>
  );
}

export default Body;
