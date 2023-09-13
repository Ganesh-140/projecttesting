// DropdownComponent.js
import "./dropdownComponent.css";

const DropdownCategory = (  props) => {
  const {dropdown} = props;
  return (
    <>
     <ul>
    {dropdown.map((item, index)=> {
      return <li key={index}>{item.name}</li>
    })} 
  </ul>  
  </>
  )
};

export default DropdownCategory;
