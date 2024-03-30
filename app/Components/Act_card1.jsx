"use client"

import { motion } from "framer-motion"


const Act_card1 = () => {
    return (

        <div className="w-full sm:w-full flex justify-center">

            {/* For desktop */}
            <div className="hidden sm:flex px-32 my-20">
                <div className="w-full text-black flex flex-col gap-6">
                    <h2
                        className="w-full text-[3.5vw] sm:text-[3vw] font-extrabold text-[#53565A] border-b-[1px] border-b-zinc-500"
                        initial={{ y: "30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
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
                            <div>
                                <motion.button
                                    whileHover={{ backgroundColor: "rgb(5 150 105)", color: "white" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-transparent border-2 border-emerald-600 text-emerald-600 p-5 rounded-lg font-semibold mt-5 mb-16 px-6 py-3"
                                >
                                    Book now
                                </motion.button>
                            </div>
                        </div>

                        <div className="w-1/2 h-[55vh] bg-red-500 hidden sm:flex">
                            <img className='w-full h-full object-cover origin-center' src="img3.jpg" alt="noimg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* For mobile */}
            <div className="w-full mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                {/* The heading */}
                <h1 className="w-[70vw] text-[8vw] text-center font-extrabold text-[#53565A]">Kayak</h1>

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
                <div className="">
                    <button className="mt-5 mb-16 px-6 py-3 bg-emerald-500 rounded-lg text-white">Book Now</button>
                </div>
            </div>

        </div>

    )
}
export default Act_card1