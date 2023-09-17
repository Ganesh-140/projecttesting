import React, { useContext } from 'react';
import { StoreContext } from './App';

const ComponentA = () => {
  const [data] = useContext(StoreContext);

  return (
    <div>
      <h2>Component A {data}</h2>
    </div>
  );
}

export default ComponentA;
