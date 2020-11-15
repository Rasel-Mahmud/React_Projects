import React from 'react';
import { userContext } from './ComponentA';

const ComponentE = () => {
  return (
    <div className="compo-e">
      <userContext.Consumer>
        {user => {
          return <div>Hello - {user}</div>;
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentE;
