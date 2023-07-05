import React from 'react';
import {useSelector} from 'react-redux';


const Header = () => {
    const cartP = useSelector((state) => state.cartPrice);
    const productName = useSelector((state) => state.updateCart.products);
    console.log("CartPrice:",{productName});
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                FarazShop;&nbsp;&nbsp;&nbsp;&nbsp;    
                <div style={{float:"center"}}><h4>PRODUCT CART: {productName }</h4></div> 
            </div>


            

            <div style={{float:"right"}}><h3>TOTAL:{ cartP}</h3></div>
        </div>
        )
}

export default Header;