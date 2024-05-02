// define the Products component with hard coded list of products

import React from 'react';
import { useNavigate } from 'react-router-dom';


function Products() {

const navigate = useNavigate();

const navigateToOrders = () => {
    navigate('/orders');
}


  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
      <button onClick={navigateToOrders}>Go to Orders</button>
    </div>
  );
}

export default Products;
