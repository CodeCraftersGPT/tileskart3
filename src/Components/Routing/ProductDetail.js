// define product detail component to display the selected product details

import { useParams,useLocation } from "react-router-dom";


 // define product array with id name price and description
 const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Product 1 description', rating: '4.5'},
    { id: 2, name: 'Product 2', price: 200, description: 'Product 2 description', rating: '4.1' },
    { id: 3, name: 'Product 3', price: 300, description: 'Product 3 description', rating: '4.3' }
  ];

function ProductDetail() {
    // access the id of the product to display

    const { id,name } = useParams();

    // we want to access the query parameter price
    // const search = window.location.search;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const price = params.get('price');
    const name1 = params.get('name');
    console.log(price);
    console.log(name1);




    console.log(id);
    console.log(name);


    const product = products.find(product => product.id === parseInt(id));

    
    return(
        <div style={{margin:'10px'}}>
            <h2>Product Details</h2>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <p>Product Rating: {product.rating}</p>

        </div>
    )

}

export default ProductDetail;