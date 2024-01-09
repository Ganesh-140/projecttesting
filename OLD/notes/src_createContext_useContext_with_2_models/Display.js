import React, { useContext,useState } from 'react';
import { MobileStore } from './App';


const Display = () => {  
  const [mdata, setMData] = useContext(MobileStore);
  const [name, setName] = useState('');

  
const addHandler = e => {setName(e.target.value)};

const submitHandler = e =>{
  e.preventDefault();
  if (name.trim() !== '') { // Check if the name is not empty or just spaces  
    setMData([...mdata, { brandname: name }]);
    setName(''); // Clear the input field
  }
}
  return (
    <div>
      {mdata.map(item=> <h3 key={item.brandname}>{item.brandname}</h3>  )}
      <form onSubmit={submitHandler}>
        <input type="text" onChange={addHandler} placeholder="Enter Your Brand" />
        <input type="submit" value="Add" /> 
      </form>
    </div>
  )
}

export default Display
