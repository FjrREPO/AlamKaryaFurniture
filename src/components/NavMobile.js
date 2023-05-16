import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <nav className='bg-white shadow-2xl w-full h-full'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <ScrollLink className='text-xl font-medium capitalize' href={item.href}>
                {item.name}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
