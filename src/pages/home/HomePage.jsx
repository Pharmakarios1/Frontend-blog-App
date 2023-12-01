import React from 'react'
import MainLayout from '../../components/MainLayout';
import Hero from "./container/Hero";
import BlogCards from './container/BlogCard';
const HomePage = () => {
  return ( 
  <MainLayout>
   <Hero></Hero>
   <BlogCards></BlogCards>
   <BlogCards></BlogCards>
  </MainLayout>
  );
  
};

export default HomePage;