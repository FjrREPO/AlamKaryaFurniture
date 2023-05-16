import React from 'react';

const Newsletter = () => {
  return (
    <section className='section bg-newsletter min-h-[490px]'>
      <div className='container mx-auto'>
        <div className='block flex-col justify-center lg:flex-row newsletter__item'>
          <h1 className='flex justify-center title'>Location</h1>
          <iframe className='newsletter__location' title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.561435150292!2d110.32558042496943!3d-7.614055140666773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a601797711275%3A0xc59c874b4251745f!2sKedai%20Mbah%20Djarot!5e0!3m2!1sen!2snp!4v1684150540601!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
