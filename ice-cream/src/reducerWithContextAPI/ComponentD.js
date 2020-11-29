import React, { useContext } from 'react';
import { CountContext } from './Main';

function ComponentD() {
  const countContextD = useContext(CountContext);
  return (
    <div className="comd">
      <h1>Count From Component D is {countContextD.countState}</h1>
      <button onClick={() => countContextD.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContextD.countDispatch('decriment')}>
        Decrement
      </button>
      <button onClick={() => countContextD.countDispatch('reset')}>
        Reset
      </button>
    </div>
  );
}

export default ComponentD;
