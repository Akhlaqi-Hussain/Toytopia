import React from 'react';
import Image from 'next/image';
import carImage from '../assets/car2.png';

const Hero = () => {
  return (
    <section className="bg-white min-h-[75vh] flex items-center justify-center lg:justify-start">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Delightful toys and easy checkout
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Toytopia makes shopping fun and easy for families everywhere. Explore our collection and enjoy seamless payments designed to spark joy with every purchase!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <Image src={carImage} alt="Car" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
