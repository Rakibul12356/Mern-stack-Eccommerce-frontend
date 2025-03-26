import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/products.json"
import ProductsCard from '../shop/ProductsCard';
const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProducts, setFiltersProducts] = useState([]);
    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLocaleLowerCase());
        setFiltersProducts(filtered);
    }, [categoryName])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <section
                className='section__container bg-primary-light'>
                <h2
                    className='section__header capitalize'>
                    {categoryName}
                </h2>
                <p className='section__subheader'>Browse a divers range categories,from chic dresses to versatile accessories. Elevate your style today</p>
            </section>
            {/*products cards */}
            <div className='section__container'>
                <ProductsCard products={filteredProducts}></ProductsCard>
            </div>
        </>
    )
}

export default CategoryPage
