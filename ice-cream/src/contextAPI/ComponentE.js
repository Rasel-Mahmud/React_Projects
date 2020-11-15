import React from 'react';
import { userContext, ageContext } from './ComponentA';

const ComponentE = () => {
  return (
    <div className="compo-e">
      <userContext.Consumer>
        {user => {
          return (
            <ageContext.Consumer>
              {age => {
                return (
                  <div>
                    Hello My Name is - {user} & I am {age} years old
                  </div>
                );
              }}
            </ageContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentE;
