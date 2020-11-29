import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + action.value };
    case 'decriment':
      return { firstCounter: state.firstCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="onecounter">
        <div className="count">firstCounter - {count.firstCounter}</div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decriment', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <div className="countersecond">
        <div className="count">secondCounter - {countTwo.firstCounter}</div>
        <button onClick={() => dispatchTwo({ type: 'increment', value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: 'decriment', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
