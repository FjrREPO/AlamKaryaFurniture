import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";

import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navigation } from '../data';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg
          ? 'bg-primary py-4 lg:py-6'
          : 'bg-none'
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='/'>
            <span className='header__logo'>AlamKaryaFurniture</span>
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='md:hidden text-2xl lg:text-3xl text-white cursor-pointer'
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <ScrollLink to={item.href} className='capitalize text-white hover:border-b transition-all cursor-pointer no-underline' smooth={true} duration={50}>
                      {item.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
