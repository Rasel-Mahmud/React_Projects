import React, { createContext } from 'react';
import ComponentB from './ComponentB';

export const userContext = createContext();

const ComponentA = () => {
  return (
    <div className="compo-a">
      <userContext.Provider value={'Rasel'}>
        <ComponentB />
      </userContext.Provider>
    </div>
  );
};

export default ComponentA;
