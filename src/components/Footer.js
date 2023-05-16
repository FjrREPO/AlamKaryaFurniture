import React from 'react';

import { footer } from '../data';

const Footer = () => {
  return (
    <footer id='contact' className='section bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-7'>
          <a className='mb-6 lg:mb-0' href='/'>
            <span className='header__logo'>AlamKaryaFurniture</span>
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-white rounded-full flex justify-center items-center transition-all footer__icon cursor-pointer'
                  key={index}
                >
                  <a href={item.link} className='' target="_blank" rel='noreferrer'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
