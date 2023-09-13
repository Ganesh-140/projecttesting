import React from 'react';
import Search from '../search';
import "./topNavComponent.scss"

const TopNavComponent = () => {
  const links = [
    { label: "Login", link: "" },
    { label: "Find a Store", link: "" },
    { label: "Help", link: "" },
    { label: "Track my Order", link: "" },
    { label: "wishlist", link: "" }
  ];
  
  return (
    <>
    <div className="navimage">
    <img src="https://www.jdsports.co.uk/skins/jdsportsuk-desktop/public/img/logos/logo-large-en-dark.png" alt=""/>
    </div>
    
    <div className="search">
                <Search />
            </div>
    <ul>
      {links && links.length > 0 && links.map((item, index) => (
        <li key={index}><a href={item.link}>{item.label}</a></li>
      ))}
    </ul>
    </>
  );
};

export default TopNavComponent;
