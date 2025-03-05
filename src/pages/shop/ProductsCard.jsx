import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({products}) => {
    console.log(products)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                products.map((product,index)=>(
                   <div key={index} className='product__card'>
                    <div>
                        <Link to={`/shop/${product._id}`}>
                        <img src={product.image} alt="" className=''/>
                        </Link>
                    </div>
                   </div>
                ))
            }
            
        </div>
    );
};

export default ProductsCard;