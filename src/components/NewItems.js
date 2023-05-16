import React from 'react';

// import data
import { newInStore } from '../data';

// import components
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  const { title, link, icon } = newInStore;
  return (
    <section className='section relative overflow-hidden lg:min-h-[540px] newitem__bg'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
            <h2 className='title flex text-center'>
              {title}
            </h2>
            <div className='hidden lg:flex items-center'>
              <a
                className='hover:border-b border-primary lg:items-center font-medium transition-all'
                href='https://wa.me/6281228878554'
                target='_blank'
                rel='noreferrer'
              >
                {link}
              </a>
              <div className='text-3xl'>{icon}</div>
            </div>
          </div>
          {/* product slider */}
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
