import React, { createContext, useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import Count from './Count';
import Display from './Display';

export const StoreContext = createContext(); 
export const MobileStore = createContext(); 

const App = () => {
const [data, setData] = useState(0);
const [mdata, setMData] = useState([
{
  brandname: "Nokia"
},
{
  brandname: "Samsung"
},
{
  brandname: "MI"
}
]);
  return (
    <StoreContext.Provider value={[data, setData]}>
    <ComponentA />
    <ComponentB />      
    <button onClick={() => setData(data + 1)}>Increment Data</button>
    
    {/* Corrected context placement */}
    <MobileStore.Provider value={[mdata, setMData]}>
      <Count />
      <Display />
    </MobileStore.Provider>
  </StoreContext.Provider>
  );
}

export default App;