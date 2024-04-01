'use client';

import { motion } from "framer-motion";
import Footer from "../Components/Footer"
import Page1_act from "../Components/Page1_act"
import { Lato } from 'next/font/google';
import Image from "next/image";

const lato = Lato({
    subsets: ['latin'],
    weight: ['900'],
})


const page = () => {


    return (

        <div className="relative w-full h-screen bg-zinc-100 text-zinc-100">

            <div className="relative w-full h-screen sm:w-full sm:h-screen bg-zinc-100 text-zinc-100">

                <div className="absolute top-0 z-[2] w-full h-screen sm:w-full sm:h-screen bg-zinc-900/65"></div>
                <div className="w-full h-full object-cover">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                        src="/activities.jpg"
                        alt="noimg" />

                </div>

            </div>

            {/* THE ACTIVITIES TEXT */}
            <motion.div className="w-full flex justify-center absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden">
                <motion.div
                    initial={{ y: "50%", rotate: "40deg" }}
                    whileInView={{ y: 0, rotate: "0" }}
                    transition={{ ease: [0, 0.55, 0.45, 1], duration: 1, }}
                    className='flex text-[8vw] sm:text-[8vw] font-extrabold text-white origin-left'
                >
                    <h1
                        className={`text-[12vw] sm:text-[6vw] font-extrabold text-white ${lato.className}`}>ACTIVITIES</h1>
                </motion.div>
            </motion.div>

            <Page1_act />

            <Footer />



        </div>

    )
}

export default page