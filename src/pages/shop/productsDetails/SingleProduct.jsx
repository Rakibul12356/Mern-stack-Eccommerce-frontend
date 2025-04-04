import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {
    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader'>
                    <span className='hover:text-primary'>
                        <Link to="/">home</Link>
                    </span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>
                        <Link to="/shop">shop</Link>
                    </span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>Product name</span>
                </div>
            </section>
            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    {/** product img */}
                    <div className='md:w-1/2 w-full'>
                        <img src="https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-md w-full h-auto' />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <h3>Product Name </h3>
                        <p className='text-xl text-primary mb-4'>$100 <s>$130</s></p>
                        <p className='text-gray-700 mb-4'>This is an product description</p>
                        {/**additional product info */}
                        <div>
                            <p><strong>Category:</strong>accessories</p>
                            <p><strong>Color:</strong>beige</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Rating:</strong><RatingStars rating={"4"}></RatingStars>
                            </div>

                        </div>
                        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">Add to cart</button>
                    </div>
                </div>
            </section>
            {/**display Reviews */}
            <section className='section__container'>
                Reviews Here
            </section>
        </>
    );
};

export default SingleProduct;