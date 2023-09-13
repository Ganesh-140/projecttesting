// DropdownContainer.js
import React, { useEffect, useState } from 'react';
import DropdownCategory from './DropdownComponent';

const DropdownContainer = () => {
  const [dropdown, setDropdown] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/dropdown")
    .then((response) => response.json())
    .then((response) => {
      const {status,data} = response;
      if(status === 101){
        console(data);
      setDropdown(data);
      }else{
        console.log("data not loading");
      }
    })
  }, [])

  return <div className="Dropdown-section"><DropdownCategory dropdown={dropdown}/></div>
};

export default DropdownContainer;
