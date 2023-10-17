import React, { useState, useEffect } from "react";
import ProductItem from './ProductItem';

function ProductList (){

const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setProducts(data.products));
    } ,[]
    
  );
  
  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

    return (
        <div className="product-list">
        {products.map(product => 
      <ProductItem key={product.id} product={product} onDelete={deleteProduct} />
    )}</div>

    )
  


};

export default ProductList;