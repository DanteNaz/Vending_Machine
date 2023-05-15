import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <div>
            <h1>So Crispy and Crunchy!</h1>
            <img 
                src='https://www.kroger.com/product/images/large/front/0002840031041'
                alt='Bag of Lays Chips'
            />
            <Link to="/">Go back to Vending Machine</Link>  
        </div>
    )
}


export default Chips;