import React from "react"; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cartPrice,updateCart } from "../redux/actions/productActions";

const ProductComponent = () => {

    const dispatch = useDispatch();

    const updateCartPrice = (price) => {
        console.log(`product clicked:",${price}`);
        dispatch(cartPrice(price));
    }


    //const cartProduct = useSelector((state) => state.updateCart);

    const updateCartHeader = (title) => {
        //const dispatch = useDispatch();
        //console.log(`product clicked:",${product.title}`);
        console.log(`product clicked:${title}`);
        
        dispatch(updateCart(title));
    }


    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) =>{

        //console.log("PPRODUC:"+product);
        const { id,title,image,price,category} = product;
        return (
            <div className="four column wide" key={ id }>

                
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={ image } alt={ title } />
                        </div>
                        <div className="content">
                            <Link to={`/product/${id}`} >
                                <div className="header">{title}</div>
                            </Link>
                            <div onClick={() => updateCartPrice(price) } className="meta price">$ {price}</div>
                            <div onClick={() => updateCartHeader(title)} className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                
    </div>);
    });
    //const { id, title } = products[0];
    return <>{renderList}</>;
    //return <div>renderList</div>;
};
export default ProductComponent;
