import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
  const [age, setAge] = useState(28);
  const [salary, setSalary] = useState(49000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button clickhandle={increaseAge}>Increase Age</Button>
      <Count text="Salery" count={salary} />
      <Button clickhandle={increaseSalary}>Increase Salary</Button>
    </div>
  );
}

export default ParentComponent;
