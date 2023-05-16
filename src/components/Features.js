import React, { useEffect } from 'react';
import { features } from '../data';
import AOS from "aos";
import img1 from '../assets/img/img.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'
import img5 from '../assets/img/img5.jpg'

const Features = () => {
  const { title, subtitle } = features;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='about' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[80px]'>
          <div className='flex-1 order-1 lg:-order-1 flex-col justify-center'>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img1} alt="" data-aos="fade-right"/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img2} alt=""  data-aos="fade-right"/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img3} alt="" data-aos="fade-left"/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={img5} alt="" data-aos="fade-left"/>
                    </div>
                </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-center'>
            <h2 className='title text-center'>{title}</h2>
            <p className='subtitle text-center'>{subtitle}</p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
