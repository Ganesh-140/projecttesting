import React, { useContext } from 'react';
import { StoreContext } from './App';

const ComponentB = () => {
  const [data] = useContext(StoreContext);

  return (
    <div>
      <h2>Component B {data}</h2>
    </div>
  );
}

export default ComponentB;
