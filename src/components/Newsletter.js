import React from 'react';

const Newsletter = () => {
  return (
    <section className='section bg-newsletter min-h-[490px]'>
      <div className='container mx-auto'>
        <div className='block flex-col justify-center lg:flex-row newsletter__item'>
          <h1 className='flex justify-center title'>Location</h1>
          <iframe className='newsletter__location' title='location' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3954.681632798536!2d110.30069061477703!3d-7.609580494513042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzYnMzQuNSJTIDExMMKwMTgnMTAuNCJF!5e0!3m2!1sid!2sid!4v1684242248995!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
