import React,{useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';
//import { setProducts } from '../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';

const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const {image,title,price,category,description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    //console.log("productId:",productId);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err:",err);
        });
        console.log("RES DATA:",response.data);

        dispatch(selectedProduct(response.data));

    };

    useEffect(() => {
        if(productId && productId !== '')    fetchProductDetail();

    },[productId]);

    return (
        <div className="">
            <h1  style={{marginTop:'125px'}}>{title}</h1>
            <h2>{price}</h2>
            <h3>{description}</h3>
            
            <img src={image} />
            
        </div>
    )

}
export default ProductDetail;
