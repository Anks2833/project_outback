"use client"

import { motion } from "framer-motion"
import Act_card from "./Act_card"
import Act_card1 from "./Act_card1"
import Link from "next/link"

const Page1_act = () => {

    return (

        <div className="w-full min-h-screen bg-[#FAF8F3] sm:px-5 pt-10 sm:pt-16 flex flex-col items-center">

            <div className="flex justify-center">
                <h1 className="sm:w-full w-[90vw] text-emerald-700 text-xs underline sm:no-underline text-center sm:text-xl sm:border-b-[1px] sm:border-b-emerald-700">Activities are an add on option, ahead of room bookings. Please click 'Book Now' to proceed.</h1>
            </div>

            <Act_card />

            {/* For desktop screen */}
            <div className="hidden sm:flex md:px-10 lg:px-32 my-20">
                <div className="w-full text-black flex flex-col gap-6">
                    <h2
                        className="w-full text-[3.5vw] sm:text-[3vw] font-extrabold text-[#53565A] border-b-[1px] border-b-zinc-500"
                        initial={{ y: "30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                    >

                        Open Water Course
                    </h2>

                    {/* Image on mobile */}
                    <div className="w-full flex sm:hidden">
                        <img src="pexels-aviv.jpg" alt="noimg" />
                    </div>

                    <div className='w-full flex flex-row-reverse gap-10'>
                        <div className='w-1/2 flex flex-col gap-6'>

                            <div className="flex flex-col gap-6">
                                <p>This course enables you to get a diving license, permitting dives anywhere in the world to a maximum depth of 18 meters. The course involves a bit of theory, which can be covered online if pre-booked, decreasing course duration to 3 days (water activity only). Usually, in a 4-day format, 1st day is in a theory, 2nd day is confined water training, 3rd day two dives in the ocean to a max depth of 12m, 4th day two more dives in the ocean to a max depth of 18m.</p>
                                <p>The Open Water course is also known as the gateway course, into the SCUBA industry. From just being an avid diver, to professional ratings, all begin with an Open Water Course. Havelock also happens to be one the best destinations in India to do SCUBA. The pristine waters offer excellent visibility, and the industry has evolved over time to attain the global repute it has today.</p>
                                <p>All our courses and dives are conducted and supervised by our in-house instructor.</p>
                            </div>

                            <h1>Duration: 4 days (6 hours daily)  |  Price: ₹ 28,000</h1>

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

                        <div className="w-1/2 h-[75vh] hidden sm:flex">
                            <img className='w-full h-full md:w-full md:h-[40vh] lg:w-full lg:h-full object-cover origin-center' src="img2.jpg" alt="noimg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* For mobile devices */}
            <div className="w-full mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                <div className="w-full flex flex-col items-center py-6 gap-6">

                    <h1 className="text-[8vw] text-center font-extrabold text-[#53565A]">Open Water Course</h1>

                    <div className="">
                        <img className="w-full h-full object-cover object-center" src="/img2.jpg" alt="" />
                    </div>

                    {/* Para1 */}
                    <div className="w-full flex flex-wrap justify-center text-center font-light text-[4vw] px-8 py-3">
                        <p>This course enables you to get a diving license, permitting dives anywhere in the world to a maximum depth of 18 meters. The course involves a bit of theory, which can be covered online if pre-booked, decreasing course duration to 3 days (water activity only). Usually, in a 4-day format, 1st day is in a theory, 2nd day is confined water training, 3rd day two dives in the ocean to a max depth of 12m, 4th day two more dives in the ocean to a max depth of 18m.</p>
                    </div>

                    {/* Para2 */}
                    <div className="w-full flex flex-wrap justify-center text-center font-light text-[4vw] px-8">
                        <p>The Open Water course is also known as the gateway course, into the SCUBA industry. From just being an avid diver, to professional ratings, all begin with an Open Water Course. Havelock also happens to be one the best destinations in India to do SCUBA. The pristine waters offer excellent visibility, and the industry has evolved over time to attain the global repute it has today.</p>
                    </div>

                    {/* Para3 */}
                    <div className="w-full flex flex-wrap justify-center text-center font-light text-[4vw] px-8">
                        <p>All our courses and dives are conducted and supervised by our in-house instructor.</p>
                    </div>

                    {/* Pricing */}
                    <div className="pricing flex text-xs">
                        <div className="pricing flex gap-1 border-r-2 border-zinc-700 pr-2">
                            <h1 className="font-semibold text-emerald-600">Duration:</h1>
                            <h1>4 days (6 hours daily)</h1>
                        </div>
                        <div className="pricing flex gap-1 pl-2">
                            <h1 className="font-semibold text-emerald-600">Price:</h1>
                            <h1>₹28,000</h1>
                        </div>

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

            <Act_card1 />

        </div>

    )
}
export default Page1_act