import React, { useContext } from 'react';
import { MobileStore } from './App';

const Count = () => {
  const [mdata] = useContext(MobileStore);
  return (
    <div>
      <h3>{mdata.length}</h3>
    </div>
  )
}

export default Count
