import {React,useEffect,useState} from 'react';
import '../../App.css';
import axios from 'axios';
import './Product.css';

export default function Products(){
 const[product,setProducts] = useState([]);
 const[error,setIsError] = useState("");

 const getData = async() =>{
    try{
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
 }
 catch(error){
    setIsError(error.message);
 }
}
    useEffect(() => {
    getData();
},[])
return( 
      <div>
        <h1 className='product-text'>
            Products
            </h1>
            <div className='product-container'>
            <div className='grid'>
                {product.map((products) =>{
                    const {id,title,price,description,category,image} = products;
                    return(
                        
                        <div className='card' key={id}>
                            <div className='card-container'>
                               <div className='product-title'>
                         <h2>{title.toUpperCase()}</h2>
                         </ div>

                         <div className='product-category-container'>
                         <p> CATEGORY : {category.toUpperCase()}</p>
                          </ div>

                          <div className='product-price-container'>
                         <p> Price = {price}</p>
                                </ div>

                          <div className='product-description-container'>
                         <p> About : {description.toUpperCase()}</p>
                         </ div>
                         
                         <div className='product-image'>
                         <img src={image} alt="Image" />
                          </div>
                        </div>
                    </div>
                    )}
                 )}
            </div>
            </div>
      </div>
    );
};