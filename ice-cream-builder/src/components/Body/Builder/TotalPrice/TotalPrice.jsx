import React from 'react';
import classes from './TotalPrice.module.css';

function TotalPrice({ price = 0 }) {
  return (
    <>
      <div className={classes.total}>
        <div>Total Price</div>
        <div>{price.toFixed(2)} Tk</div>
      </div>
      {/* <button type="button" className={[classes.order, 'rounded'].join(' ')}>
        Add to Cart
      </button> */}
    </>
  );
}

export default TotalPrice;
