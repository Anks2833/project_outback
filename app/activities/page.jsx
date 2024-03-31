"use client"

import { motion } from "framer-motion";
import Footer from "../Components/Footer"
import Page1_act from "../Components/Page1_act"
import LocomotiveScroll from 'locomotive-scroll';
import { Lato } from 'next/font/google';
import Link from "next/link";

const lato = Lato({
    subsets: ['latin'],
    weight: ['900'],
})


const page = () => {

    const locomotiveScroll = new LocomotiveScroll();

    return (

        <div className="relative w-full h-screen bg-zinc-100 text-zinc-100">

            <div className="relative w-full h-screen sm:w-full sm:h-screen bg-zinc-100 text-zinc-100">

                <div className="absolute top-0 z-[2] w-full h-screen sm:w-full sm:h-screen bg-zinc-900/65"></div>
                <img className="w-full h-full object-cover" src="/activities.jpg" alt="" />

            </div>

            {/* The scroll down text */}
            {/* <motion.div
                // ref={scrollRef}
                // data-scroll
                // data-scroll-speed="-.5"
                initial={{ y: 0 }}
                animate={{ y: "1.3vw" }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 1, repeat: Infinity, repeatType: "reverse" }}

                className="absolute bottom-5 z-[10] w-full hidden sm:flex sm:justify-center text-white text-sm">
                Scroll down
            </motion.div> */}

            {/* THE ACTIVITIES TEXT */}
            <motion.div className="w-full flex justify-center absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden">
                <motion.div
                    initial={{ y: "50%", rotate: "40deg" }}
                    whileInView={{ y: 0, rotate: "0" }}
                    transition={{ ease: [0, 0.55, 0.45, 1], duration: 1, }}
                    className='flex text-[8vw] sm:text-[8vw] font-extrabold text-white origin-left'
                >
                    <h1
                        initial={{ y: "80%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className={`text-[12vw] sm:text-[6vw] font-extrabold text-white ${lato.className}`}>ACTIVITIES</h1>
                </motion.div>
            </motion.div>

            <Page1_act />

            <Footer />



        </div>

    )
}

export default page