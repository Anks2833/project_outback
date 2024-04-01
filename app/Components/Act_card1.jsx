'use client';

import { motion } from "framer-motion"
import Link from "next/link"


const Act_card1 = () => {
    return (

        <div className="w-full sm:w-full flex justify-center">

            {/* For desktop */}
            <div className="hidden sm:flex md:px-10 lg:px-32 my-20">
                <div className="w-full text-black flex flex-col gap-6">
                    <h2
                    >
                        Kayak
                    </h2>

                    {/* Image on mobile */}
                    <div className="w-full flex sm:hidden">
                        <img src="pexels-aviv.jpg" alt="noimg" />
                    </div>

                    <div className='w-full flex gap-10'>
                        <div className='w-1/2 flex flex-col gap-6'>
                            <p>One of the most unique tours offered in Andaman is on a kayak. Led by Tanaz Noble, one of the most famous kayak leaders in Andaman. Her tours have been covered by National Geographic. She hosts multiple batches a day, and takes you on a 3 hour kayak journey into the sea and mangroves. Naturalist information provided by Tanaz along the journey truly makes it educating and adventurous. All safety equipment (life jackets), kayak is included in the price.</p>


                            <h1>Activity Duration: 3 hours</h1>

                            {/* The book now button */}
                            <Link href={"https://live.ipms247.com/booking/book-rooms-outbackresorts"} target='_blank'>
                                <motion.button
                                    whileHover={{ backgroundColor: "rgb(5 150 105)", color: "white" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-transparent border-2 border-emerald-600 text-emerald-600 p-5 rounded-lg font-semibold mt-5 mb-16 px-6 py-3"
                                >
                                    Book now
                                </motion.button>
                            </Link>
                        </div>

                        <div className="w-1/2 h-[55vh] hidden sm:flex">
                            <img className='w-full h-full md:w-full md:h-[40vh] lg:w-full lg:h-full object-cover origin-center' src="img3.jpg" alt="noimg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* For mobile */}
            <div className="w-full mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                {/* The heading */}
                <h1 className="w-[70vw] text-[8vw] text-center font-extrabold underline text-[#53565A]">Kayak</h1>

                {/* THe Image */}
                <div className="w-full mt-6">
                    <img className="w-full h-full object-cover" src="/img3.jpg" alt="" />
                </div>

                {/* The para */}
                <div className="w-full flex flex-wrap justify-center text-center font-light text-[4vw] px-8 py-3">
                    <p>One of the most unique tours offered in Andaman is on a kayak. Led by Tanaz Noble, one of the most famous kayak leaders in Andaman. Her tours have been covered by National Geographic. She hosts multiple batches a day, and takes you on a 3 hour kayak journey into the sea and mangroves. Naturalist information provided by Tanaz along the journey truly makes it educating and adventurous. All safety equipment (life jackets), kayak is included in the price.</p>
                </div>

                {/* The bottom text */}
                <div className="flex justify-center gap-1">
                    <h1 className="font-semibold text-emerald-600">Activity Duration:</h1>
                    <h1>3 hours</h1>
                </div>

                {/* The book now button */}
                <Link href={"https://live.ipms247.com/booking/book-rooms-outbackresorts"} target='_blank'>
                    <motion.button
                        whileHover={{ backgroundColor: "rgb(5 150 105)", color: "white" }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-transparent border-2 border-emerald-600 text-emerald-600 p-5 rounded-lg font-semibold mt-5 mb-16 px-6 py-3"
                    >
                        Book now
                    </motion.button>
                </Link>
            </div>

        </div>

    )
}
export default Act_card1