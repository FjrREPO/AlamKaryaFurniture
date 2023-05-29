import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import NewItems from './NewItems';
import Products from './Products';
import Testimonial from './Testimonial';
import Newsletter from './Newsletter';
import Footer from './Footer';

const App = () => {
    return (
        <div className='w-screen max-w-[1440px] mx-auto bg-white'>
            <Header />
            <Hero />
            <Features />
            <NewItems />
            <Products />
            <Testimonial />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default App;
