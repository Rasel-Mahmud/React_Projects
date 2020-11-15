import React, { createContext } from 'react';
import ComponentB from './ComponentB';

export const userContext = createContext();
export const ageContext = createContext();

const ComponentA = () => {
  return (
    <div className="compo-a">
      <userContext.Provider value={'Rasel'}>
        <ageContext.Provider value={'28'}>
          <ComponentB />
        </ageContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default ComponentA;
