import React from 'react';
import classes from './Scoops.module.css';

function Scoops() {
  return <div className={[classes.scoop, 'chocolate'].join(' ')} />;
}

export default Scoops;
