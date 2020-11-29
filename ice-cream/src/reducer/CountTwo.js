import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decriment':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decriment2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="count">firstCounter - {count.firstCounter}</div>
      <div className="count">secondCounter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decriment', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decriment', value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div className="second-button">
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decriment2', value: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
