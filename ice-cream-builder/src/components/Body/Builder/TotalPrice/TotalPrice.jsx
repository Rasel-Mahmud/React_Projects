import React from 'react';
import classes from './TotalPrice.module.css';

function TotalPrice() {
  return (
    <>
      <div className={classes.total}>
        <div>Total Price</div>
        <div>3000.00 Tk</div>
      </div>
      <button type="button" className={[classes.order, 'rounded'].join(' ')}>
        Add to Cart
      </button>
    </>
  );
}

export default TotalPrice;
