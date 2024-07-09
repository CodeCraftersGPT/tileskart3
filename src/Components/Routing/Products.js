// define the Products component with hard coded list of products

import React from 'react';
import { useNavigate,Link,Outlet } from 'react-router-dom';


function Products() {

  // define product array with id name price and description
  const products = [
    { id: 1, name: 'Product 1',price:200,  description: 'Product 1 description' },
    { id: 2, name: 'Product 2',price:300,  description: 'Product 2 description' },
    { id: 3, name: 'Product 3',price:400,  description: 'Product 3 description' }
  ];


const navigate = useNavigate();

const navigateToOrders = () => {
    navigate('/orders');
}


  return (
    <div>
      <h2>Products</h2>
      {/* display the products with map */}
      {products.map(product => (
        <div key={product.id}>
           <Link to={`/product/${product.id}/${product.name}?price=${product.price}&name=${product.name}`}>{product.name} -- {product.description}</Link>
          <p></p>
        </div>
      ))}
      <button onClick={navigateToOrders}>Go to Orders</button>
      <div>
        {/* define navigation to new cars and old cars */}
        <Link to="newCars">New Cars</Link> 
        <Link to="oldCars">Old Cars</Link>	
      </div>
      {/* define outlet to load the newcars and oldcars */}
      <div>
       <Outlet/>
      </div>
    </div>
  );
}

export default Products;
