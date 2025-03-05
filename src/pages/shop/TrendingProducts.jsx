import React, { useState } from 'react';
import ProductsCard from './ProductsCard';
import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visibleProducts,setVisibleProducts]=useState(8);
    const loadProducts=()=>{
        setVisibleProducts(prevCount =>prevCount + 4)
    }
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>Discover the Hottest picks: Elevate Your style with our curated of women's  Fashion Product </p>
        {/**products card */}
        <ProductsCard products={products}></ProductsCard>
        </section>
    );
};

export default TrendingProducts;