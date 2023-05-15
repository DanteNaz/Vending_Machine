import React from 'react';
import { Link } from 'react-router-dom';


function Ramen() {
    return (
        <div>
            <h1>Super Quick and Tasty!</h1>
            <img 
                src='https://cdn.shopify.com/s/files/1/0509/0541/5846/products/newproductsv102_grande.jpg?v=1658175756'
                alt='Cup of Ramen'
            />
            <Link to="/">Go back to Vending Machine</Link>  
        </div>
    )
}


export default Ramen;