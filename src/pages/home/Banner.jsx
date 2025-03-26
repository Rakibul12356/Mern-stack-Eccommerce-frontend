
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/header.png'

const Banner = () => {
    return (
        <div
            className='section__container header__container'>
            <div
                className='header__content z-30'>
                <h4
                    className='uppercase'>UP TO 20% Discount on</h4>
                <h1>Girl's Fashion</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque veritatis molestias eligendi quis, fugiat saepe inventore facilis, excepturi veniam qui nobis dolores porro perspiciatis cupiditate quidem optio magni nostrum tempora nulla vitae. Commodi est id accusantium magnam ullam nisi quas at qui ipsam, fuga, explicabo eos dolores unde dolorem.</p>
                <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
            </div>
            <div className='header__image'>
                <img src={bannerImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;