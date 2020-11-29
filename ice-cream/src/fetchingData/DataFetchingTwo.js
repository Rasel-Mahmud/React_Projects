import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initailState = {
  loading: true,
  error: false,
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SICCESS':
      return {
        loading: false,
        error: false,
        post: action.data,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initailState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        dispatch({
          type: 'FETCH_SICCESS',
          data: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_ERROR',
        });
      });
  }, []);

  return (
    <div className="article">
      {state.error ? state.error : null}
      {state.loading ? 'Loading...' : state.post.title}
    </div>
  );
}

export default DataFetchingTwo;
