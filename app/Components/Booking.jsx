"use client"

import { motion } from 'framer-motion';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: "500" });

const Booking = () => {
    return (

        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.6}}
            viewport={{once: true}}
            className="absolute z-[3] top-[55%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full flex flex-col justify-center items-center gap-5"
        >

            {/* Booking section for pc */}
            <div className="md:w-[80vw] lg:w-[55vw] lg:h-[25vh] bg-white hidden p-4 sm:flex sm:justify-center rounded-2xl">

                {/* The check in check out section */}
                <div className="md:w-1/2 lg:w-1/2 flex md:flex-col lg:flex-row md:gap-2 lg:gap-0 justify-center px-12 items-center text-black border-[1px] border-zinc-200 rounded-tl-2xl rounded-bl-2xl p-6">
                    <div className="flex flex-col justify-center">
                        <h3 className={`text-[2vw] ${roboto.className}`}>Check In</h3>
                        <input className='outline-none' type="date" name="" id="" />
                    </div>


                    <div className="flex flex-col justify-center">
                        <h3 className={`text-[2vw] ${roboto.className}`}>Check Out</h3>
                        <input className='outline-none' type="date" name="" id="" />
                    </div>
                </div>

                <div className="md:w-1/2 lg:w-1/2 flex justify-center items-center gap-8 text-black border-[1px] border-zinc-200 rounded-tr-2xl rounded-br-2xl p-6">

                    {/* The promotion text with an input */}
                    <div className="flex flex-col gap-2">
                        <h2>Promotion</h2>
                        <input className="w-[8vw] outline-none" type="text" />
                    </div>

                    {/* Book now button */}
                    <div>
                        <motion.button
                            whileHover={{ backgroundColor: "rgb(5 150 105)", color: "white" }}
                            className="bg-transparent border-[1px] border-emerald-600 p-5 rounded-lg text-emerald-600 font-semibold"
                        >
                            Book now
                        </motion.button>
                    </div>

                </div>

            </div>

            {/* Booking section for mobile */}
            <div className="w-[80vw] bg-white p-4 flex flex-col rounded-2xl sm:hidden">

                <div className="flex flex-col items-center gap-8 text-black border-[1px] border-zinc-200 rounded-tl-2xl rounded-tr-2xl p-6">
                    <div>
                        <h3>Check In</h3>
                        <input className="outline-none" type="date" name="" id="" />
                    </div>


                    <div>
                        <h3>Check Out</h3>
                        <input className="outline-none" type="date" name="" id="" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 text-black border-[1px] border-zinc-200 rounded-bl-2xl rounded-br-2xl p-6">

                    <div className="flex flex-col gap-2">
                        <h2>Promotion</h2>
                        <input className="w-full outline-none border-[1px] border-zinc-300" type="text" />
                    </div>

                    <div>
                        <button className="bg-emerald-400 px-16 py-3 rounded-lg text-white font-semibold">Book now</button>
                    </div>

                </div>

            </div>

        </motion.div>

    )
}
export default Booking



