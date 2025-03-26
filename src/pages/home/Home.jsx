
import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Hero from './Hero'
import TrendingProducts from '../shop/TrendingProducts'
import DealSection from './DealSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
   <>
   <Banner></Banner>
   <Category></Category>
   <Hero></Hero>
   <TrendingProducts></TrendingProducts>
   <DealSection></DealSection>
   <PromoBanner></PromoBanner>
   <Blogs></Blogs>
   </>
  )
}
export default Home
