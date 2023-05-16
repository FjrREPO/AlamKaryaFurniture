import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
import { Navigation, Pagination } from 'swiper';
import { products } from '../data';
import { HiPlus } from 'react-icons/hi';
import {
  IoLogoWhatsapp,
} from 'react-icons/io';

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='productSlider min-h-[500px] products__arw'
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
              {page.productList.map((product, index) => {
                const { image, name, desc } = product;
                return (
                  <div
                    className='w-full max-w-[290px] h-[450px] text-left'
                    key={index}
                  >
                    <div className='products__produk border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition'>
                      <img src={image.type} alt='' className='products__img' data-aos="fade-up"/>
                      <a href='https://wa.me/6281228878554' target='_blank' rel='noreferrer'>
                        <figcaption>
                          <h3>Order Whatsapp</h3>
                        </figcaption>
                      </a>
                      <div className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                        <HiPlus className='text-xl text-primary' />
                      </div>
                    </div>
                    <div className='font-semibold lg:text-xl  products__main'>{name}</div>
                    <div className='flex items-center gap-x-3  products__main'>
                      <div>{desc}</div>
                    </div>
                    <div className='products__btn flex'>
                      <a href = "https://wa.me/6281228878554" className ="products__order flex"><IoLogoWhatsapp className='products__wa justify-center'/><span> Order</span></a>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
