import React, { useContext } from 'react';
import { userContext, ageContext } from './ComponentA';

const ComponentE = () => {
  const name = useContext(userContext);
  const age = useContext(ageContext);

  return (
    <div className="compo-e">
      <h1>
        Hello my name is {name} & I am {age} years old
      </h1>
    </div>
  );
};

export default ComponentE;
