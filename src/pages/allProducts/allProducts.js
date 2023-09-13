//allProducts.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./allProducts.scss";    

const AllProducts = () => {
    const [plplist, setPlplist] = useState([])
    useEffect(() => {
      fetch("https://jdsports-client-resources.s3.eu-west-1.amazonaws.com/test/learn/content.json")
        .then((res) => res.json())
        .then((response) => {
           setPlplist(response.items);
           console.log("response: ", response);
        })
    }, [])

  return (
    <div>
      <h1>All Products Listing Page</h1>
      {plplist.length > 0 ? (
                <div className="productListMain">
                    {plplist.map((items, index) => (
                       <Link to={`/product-view/${items.originalPlu}`} key={index}>
                        <div className="productList" key={index}>
                            <div className="productListimg">
                                <img
                                    src={`https://i8.amplience.net/t/jpl/jd_product_list?plu=${items.mediaRef}_a&qlt=92&v=1&fmt=auto`}
                                    alt={items.description}
                                    data-original-plu={`${items.mediaRef}_a`}
                                />
                            </div>
                            <div className="productListTitle">{items.brand}
                  <span className="productListDes">{items.description}</span></div>
                  <div className="productListPri">
                    {items.wasPrice && items.wasPrice.length > 0 ? ( <> 
                    <span className="waspri">Was: £{items.wasPrice}</span> 
                    <span className="nowpri">Now: £{items.nowPrice}</span>
                    <span className="disper">Discount: {items.disper}</span>
                    </>) : (
                    <span className="pri">£{items.unitPrice}</span>
                    )}
                    </div>
                        </div></Link>
                    ))}
                    
                </div>
                
            ) : (
                <div></div>
            )}
    </div>
  )
}

export default AllProducts
