import React from 'react';
import classes from './Scoops.module.css';

function Scoops({ scoops }) {
  return <div className={[classes.scoop, 'scoop', classes[scoops]].join(' ')} />;
}

export default Scoops;
