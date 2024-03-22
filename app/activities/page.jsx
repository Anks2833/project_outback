"use client"

import { Inter, Roboto } from 'next/font/google';

import { motion } from "framer-motion"
import Booking from "../Components/Booking"
import Footer from "../Components/Footer"
import Page1_act from "../Components/Page1_act"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from "react"

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] });


const page = () => {

    const locomotiveScroll = new LocomotiveScroll();

    // const scrollRef = useRef(null);


    // useEffect(() => {
    //     const locoScroll = new LocomotiveScroll({
    //         el: scrollRef.current,
    //     });
    //     return () => {
    //         locoScroll.destroy();
    //     };
    // }, []);


    return (

        <div className="relative w-full h-screen bg-zinc-100 text-zinc-100">

            <div className="relative w-full h-screen sm:w-full sm:h-screen bg-zinc-100 text-zinc-100">

                <div className="absolute top-0 z-[2] w-full h-screen sm:w-full sm:h-screen bg-zinc-900/65"></div>
                <img className="w-full h-full object-cover" src="/activities.jpg" alt="" />

            </div>

            <motion.div
                // ref={scrollRef}
                // data-scroll
                // data-scroll-speed="-.5"
                initial={{ y: 0 }}
                animate={{ y: "1.3vw" }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 1, repeat: Infinity, repeatType: "reverse" }}

                className="absolute bottom-5 z-[10] w-full hidden sm:flex sm:justify-center text-white text-sm">
                Scroll down
            </motion.div>

            <Booking />
            <Page1_act />

            <Footer />



        </div>

    )
}

export default page