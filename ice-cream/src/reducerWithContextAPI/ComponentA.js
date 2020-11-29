import React, { useContext } from 'react';
import { CountContext } from './Main';

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div className="coma">
      <h1>Count From Component A is {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decriment')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA;
