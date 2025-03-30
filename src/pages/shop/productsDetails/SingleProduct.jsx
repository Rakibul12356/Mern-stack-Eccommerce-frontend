import React from 'react';
import { Link } from 'react-router-dom';

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
                </div>
            </section>
        </>
    );
};

export default SingleProduct;