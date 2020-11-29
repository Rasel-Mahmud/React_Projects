import React, { useContext } from 'react';
import { CountContext } from './Main';

function ComponentF() {
  const countContextF = useContext(CountContext);
  return (
    <div className="comf">
      <h1>Count From Component F is {countContextF.countState}</h1>
      <button onClick={() => countContextF.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContextF.countDispatch('decriment')}>
        Decrement
      </button>
      <button onClick={() => countContextF.countDispatch('reset')}>
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
