'use client';

import Footer from "../Components/Footer";
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: ['900'],
})


export default function About() {


  return (
    <>
      {/* Top section */}
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover brightness-75"
          src="Cafe-Saltwater.webp"
          alt="Image"
        />
        <div className="absolute top-0 w-full h-screen bg-zinc-900/65"></div>
      </div>

      {/* Stay text */}
      <motion.div className='w-full flex justify-center absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden'>
        <motion.div
          initial={{ y: "50%", rotate: "40deg" }}
          whileInView={{ y: 0, rotate: "0" }}
          transition={{ ease: [0, 0.55, 0.45, 1], duration: 1, }}
          className={`flex text-[16vw] sm:text-[8vw] font-extrabold text-white origin-left ${lato.className}`}
        >
          <h1
          
          >
            STAY
          </h1>

        </motion.div>
      </motion.div>

      {/* The para with logo */}
      <div className="py-20 px-8 sm:px-44 bg-[#FAF8F3]">

        {/* logo */}
        <motion.div
          className="w-full flex justify-center overflow-hidden"
        >
          <motion.img
            initial={{ y: '100%' }}
            whileInView={{ y: '0' }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.1 }}
            className="" src="logo_symbole.png" alt="no-img"
          />
        </motion.div>

        {/* para */}
        <motion.div className="w-full my-8 sm:my-10 overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            whileInView={{ y: '0' }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.11 }}
            className="text-center"
          >
            In harmony with the pristine environment are the eco-tech luxurious
            rooms. The various tones and patterns depict the transient dynamics
            between the sky, land and the ocean. Giving a touch of a very
            modern-contemporary style of interior designing are the recycled
            plastic bottle walls which bring together the very concept of
            environmental sustainability.
          </motion.p>
        </motion.div>

        <motion.div className="w-full my-8 sm:my-10 overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            whileInView={{ y: '0' }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.12 }}
            className="text-center"
          >
            A total of eight in number, these well-furnished, AC rooms are very
            spacious and comfortable with the best of the bedding and mattresses
            along with a walk-in closet and all the other essential amenities you
            need. The aroma of essential oils across these rooms is sure to revoke
            one’s senses and perfect to relax after a very eventful day.
          </motion.p>
        </motion.div>
      </div>


      {/* The Swiper for desktop */}
      <div className="w-full h-[50vh] bg-[#FAF8F3] select-none hidden sm:flex">
        <Swiper
          slidesPerView={'3'}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out1.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out7.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out5.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out8.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out9.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out6.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out10.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="img1.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out11.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[40vw] h-[20vw]" src="out-4.webp" alt="noimg" /></SwiperSlide>
        </Swiper>
      </div>

      {/* The Swiper for phone */}
      <div className="w-full h-[50vh] bg-[#FAF8F3] select-none sm:hidden">
        <Swiper
          slidesPerView={'2'}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out1.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out7.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out5.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out8.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out9.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out6.webp" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out10.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="img1.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out11.jpg" alt="noimg" /></SwiperSlide>
          <SwiperSlide><img className="w-[60vw] h-[40vw]" src="out-4.webp" alt="noimg" /></SwiperSlide>
        </Swiper>
      </div>



      <Footer />
    </>
  );
}