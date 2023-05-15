import React from 'react';
import { Link } from 'react-router-dom';


function Soda() {
    return (
        <div>
            <h1>So Refreshing!</h1>
            <img 
                src='https://target.scene7.com/is/image/Target/Grocery_Beverages_BubCat_SodaandPop-QUIVER-190913-1568392585123'
                alt='Can of Coca Cola'
            />
            <Link to="/">Go back to Vending Machine</Link>  
        </div>
    )
}


export default Soda;