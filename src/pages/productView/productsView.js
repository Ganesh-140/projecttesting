import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productsView.scss";    

function ProductsView() {
  const { originalPlu } = useParams();
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    fetch(`https://jdsports-client-resources.s3.eu-west-1.amazonaws.com/test/learn/content.json`)
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProductsData([]);
      });
  }, []);

  if (!productsData) {
    return <div>Loading...</div>;
  }

  const thisProduct = productsData.items.find((prod) => prod.originalPlu === originalPlu);

  if (!thisProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="productdetailMain">
        <div className="productdetailimg">
          <img src={`https://i8.amplience.net/t/jpl/jd_product_list?plu=${thisProduct.mediaRef}_a&qlt=92&v=1&fmt=auto`} alt={thisProduct.description} data-original-plu={`${thisProduct.mediaRef}_a`} />
        </div>

        <div className="productdetails">
          <div className="productdetailsTitle">{thisProduct.brand}
          <span className="productdetailsDes">{thisProduct.description}</span>
          </div>
          {thisProduct.wasPrice && thisProduct.wasPrice.length > 0 ? ( <>
          <span className="waspri">Was: £{thisProduct.wasPrice}</span>
          <span className="nowpri">Now: £{thisProduct.nowPrice}</span>
          <span className="disper">Discount: {thisProduct.disper}</span>
          </>) : (
          <span className="pri">£{thisProduct.unitPrice}</span>
          )}
        </div>
    </div>

  );
}

export default ProductsView;
