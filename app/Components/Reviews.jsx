'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaTripadvisor } from "react-icons/fa";
import { Cedarville_Cursive } from 'next/font/google';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Review from './Review';
import Link from 'next/link';

const cursive = Cedarville_Cursive({
    subsets: ['latin'],
    weight: ['400'],
  })

const Reviews = () => {

    const reviewData = [
        { id: 1, name: "Vidhi", date: "December 19, 2022.", para: "Wonderful wonderful wonderful I stayed with Outback for many nights, I kept extending and lost track eventually. The hospitality is...", image: "/asset4.jpeg" },
        { id: 2, name: "Pragati Bansal", date: "October 6, 2022.", para: "The Island HOME I had travelled to Andamans with friends for a much-needed break from the hectic work life, that is when we stayed at...", image: "/asset5.jpeg" },
        { id: 3, name: "Pooja N", date: "September 30, 2022.", para: "Comfortable, fun, best beach Best place to stay for solo travellers. You will meet soon many like minded people and indulge in fun...", image: "/asset6.jpeg" },
        { id: 4, name: "Digant Bhatt", date: "November 17, 2021.", para: "Eco Friendly - Neat and Clean Resort Very nice place to spend time. Rooms and Bathrooms are...", image: "/asset9.jpeg" },
        { id: 5, name: "Ranjeeta s", date: "October 23, 2021.", para: "Homely, Friendly, Excellent So greenery, friendly staff specially Rana ji and Commando.. all were so loving and helping. We stayed her...", image: "/asset10.jpeg" },
        { id: 6, name: "Shivon D", date: "May 10, 2021.", para: "Great location, staff and vibe Outback is located bang opposite one of the most serene beaches, its a 1 minute walk across the road...", image: "/asset11.jpeg" },
        { id: 7, name: "Shramona Poddar", date: "April 27, 2021.", para: "Wonderful stay in the heart of Havelock My eyes first spotted the wall in the room adorned with bottles that...", image: "/asset12.jpeg" },
        { id: 8, name: "Manik Thakar", date: "April 3, 2021.", para: "Amazing experience! We went as a group of 12 students on our college grad trip. We had the best of times at the place. A...", image: "/asset13.jpeg" },
    ]

    return (

        <div className='w-full flex flex-col items-center gap-10 sm:gap-0 sm:flex sm:flex-row sm:justify-between px-32 py-12 text-black bg-[#FAF8F3] overflow-hidden'>

            {/* The text */}
            <div className='w-full sm:w-1/2 flex flex-col gap-1 justify-center items-center sm:ml-20'>
                <h1 className={`text-[5vw] sm:text-[3vw] font-bold ${cursive.className}`}>Excellent</h1>

                <div className='w-full flex gap-1 justify-center'>

                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset26.svg" alt="" />
                    <img className='w-[4vw] sm:w-[2vw]' src="/asset27.svg" alt="" />

                </div>

                <h1 className='text-[2vw] sm:text-[1vw]'>Based on <strong>69 reviews</strong></h1>

                <div className='flex items-center gap-1 transition-all'>

                    <Link
                        href={"https://www.tripadvisor.in/Hotel_Review-g503691-d14079532-Reviews-Outback_Resorts-Havelock_Island_Andaman_and_Nicobar_Islands.html"}
                        target='_blank'
                        className="text-[#34E0A1] hover:text-black bg-white hover:bg-[#34E0A1] rounded-full border-2 border-[#34E0A1] px-1 py-1 transition-all"
                    >
                        <FaTripadvisor />
                    </Link>

                    <Link href={"https://www.tripadvisor.in/Hotel_Review-g503691-d14079532-Reviews-Outback_Resorts-Havelock_Island_Andaman_and_Nicobar_Islands.html"} target='_blank'>
                        <h1 className=''>Tripadvisor</h1>
                    </Link>
                </div>
            </div>

            {/* The swiper */}
            <div className='flex w-[125vw] md:hidden lg:flex lg:w-1/2 sm:mr-24'>
                <Swiper
                    slidesPerView={'2'}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    spaceBetween={0}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {reviewData.map((rev, index) => {
                        return <SwiperSlide key={rev.id}><Review name={rev.name} date={rev.date} para={rev.para} image={rev.image} /></SwiperSlide>
                    })}

                </Swiper>
            </div>

            {/* The swiper for tablet */}
            <div className='hidden md:flex md:w-[50vw] md:h-[20vh] lg:hidden'>
                <Swiper
                    slidesPerView={'2'}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    spaceBetween={200}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {reviewData.map((rev, index) => {
                        return <SwiperSlide key={rev.id}><Review name={rev.name} date={rev.date} para={rev.para} image={rev.image} /></SwiperSlide>
                    })}

                </Swiper>
            </div>

        </div>

    )
}
export default Reviews