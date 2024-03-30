"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Review from './Review';

const Reviews = () => {

    const reviewData = [
        {id: 1, name: "Vidhi", date: "December 19, 2022.", para: "Wonderful wonderful wonderful I stayed with Outback for many nights, I kept extending and lost track eventually. The hospitality is...", image: "/asset4.jpeg"},
        {id: 2, name: "Pragati Bansal", date: "October 6, 2022.", para: "The Island HOME I had travelled to Andamans with friends for a much-needed break from the hectic work life, that is when we stayed at...", image: "/asset5.jpeg"},
        {id: 3, name: "Pooja N", date: "September 30, 2022.", para: "Comfortable, fun, best beach Best place to stay for solo travellers. You will meet soon many like minded people and indulge in fun...", image: "/asset6.jpeg"},
    ]

    return (

        <div className='w-full flex flex-col items-center gap-10 sm:gap-0 sm:flex sm:flex-row sm:justify-between px-32 py-12 text-black bg-[#FAF8F3]'>

            {/* The text */}
            <div className='w-full sm:w-1/2 flex flex-col gap-1 justify-center items-center sm:ml-20'>
                <h1 className='text-[5vw] sm:text-[3vw] font-bold'>Excellent</h1>

                <div className='w-full flex gap-1 justify-center'>

                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset27.svg" alt="" />

                </div>

                <h1 className='text-[2vw] sm:text-[1vw]'>Based on <strong>69 reviews</strong></h1>

                <div className='flex items-center gap-1'>
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset28.svg" alt="noimg" />
                    <h1>Tripadvisor</h1>
                </div>
            </div>

            {/* The swiper */}
            <div className='w-full sm:w-1/2 sm:mr-24'>
                <Swiper
                    slidesPerView={'2'}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {reviewData.map((rev, index)=>{
                       return <SwiperSlide><Review key={rev.id} name={rev.name} date={rev.date} para={rev.para} image={rev.image}  /></SwiperSlide> 
                    })}

                </Swiper>
            </div>

        </div>

    )
}
export default Reviews