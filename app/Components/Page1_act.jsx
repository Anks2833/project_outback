"use client"

import Act_card from "./Act_card"
import Act_card1 from "./Act_card1"

const Page1_act = () => {

    return (

        <div className="w-full min-h-screen bg-[#FAF8F3] px-32 pt-10 sm:pt-16 flex flex-col items-center">

            <div className="flex justify-center">
                <h1 className="sm:w-full w-[90vw] text-emerald-700 text-xs underline sm:no-underline text-center sm:text-xl sm:border-b-[1px] sm:border-b-emerald-700">Activities are an add on option, ahead of room bookings. Please click 'Book Now' to proceed.</h1>
            </div>

            <Act_card />
            
            {/* For desktop screen */}
            <div className="w-full hidden sm:flex gap-8 mt-28 text-black border-b-[1px] border-zinc-200 pb-20">
                <div className="w-1/2 h-[100vh]">
                    <img className="w-full h-full object-cover object-center" src="/img2.jpg" alt="" />
                </div>

                <div className="w-1/2 py-6 px-2 flex flex-col gap-6">

                    <h1 className="text-[2vw] font-extrabold text-[#53565A]">Open Water Course</h1>

                    <div className="para1 font-light">
                        <p>This course enables you to get a diving license, permitting dives anywhere in</p>
                        <p>the world to a maximum depth of 18 meters. The course involves a bit of</p>
                        <p>theory, which can be covered online if pre-booked, decreasing course duration</p>
                        <p>to 3 days (water activity only). Usually, in a 4-day format, 1st day is in a theory,</p>
                        <p>2nd day is confined water training, 3rd day two dives in the ocean to a max</p>
                        <p>depth of 12m, 4th day two more dives in the ocean to a max depth of 18m.</p>
                    </div>

                    <div className="para2 font-light">
                        <p>The Open Water course is also known as the gateway course, into the SCUBA</p>
                        <p>industry. From just being an avid diver, to professional ratings, all begin with an</p>
                        <p>Open Water Course. Havelock also happens to be one the best destinations in</p>
                        <p>India to do SCUBA. The pristine waters offer excellent visibility, and the</p>
                        <p>industry has evolved over time to attain the global repute it has today.</p>
                    </div>

                    <div className="para3 font-light">
                        <p>All our courses and dives are conducted and supervised by our in-house</p>
                        <p>instructor.</p>
                    </div>

                    <div className="pricing flex gap-1">
                        <div className="pricing flex gap-1 border-r-2 border-zinc-700 pr-2">
                            <h1 className="font-semibold text-emerald-600">Activity Duration:</h1>
                            <h1>4 days (6 hours daily)</h1>
                        </div>
                        <div className="pricing flex gap-1 pl-2">
                            <h1 className="font-semibold text-emerald-600">Price:</h1>
                            <h1>₹28,000</h1>
                        </div>

                    </div>

                    <button className="w-[8vw] mt-10 mb-16 p-3 bg-emerald-500 rounded-lg text-white">Book Now</button>

                </div>
            </div>

            {/* For mobile devices */}
            <div className="w-[90vw] mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                <div className="w-full flex flex-col items-center py-6 px-2 gap-6">

                    <h1 className="text-[8vw] text-center font-extrabold text-[#53565A]">Open Water Course</h1>

                    <div className="">
                        <img className="w-full h-full object-cover object-center" src="/img2.jpg" alt="" />
                    </div>

                    <div className="para1 text-[3vw] font-light flex flex-wrap">
                        <p>This course enables you to get a diving license, permitting dives anywhere in the world to a maximum depth of 18 meters. The course involves a bit of theory, which can be covered online if pre-booked, decreasing course duration to 3 days (water activity only). Usually, in a 4-day format, 1st day is in a theory, 2nd day is confined water training, 3rd day two dives in the ocean to a max depth of 12m, 4th day two more dives in the ocean to a max depth of 18m.</p>
                    </div>

                    <div className="para2 text-[3vw] font-light flex flex-wrap">
                        <p>The Open Water course is also known as the gateway course, into the SCUBA industry. From just being an avid diver, to professional ratings, all begin with an Open Water Course. Havelock also happens to be one the best destinations in India to do SCUBA. The pristine waters offer excellent visibility, and the industry has evolved over time to attain the global repute it has today.</p>
                    </div>

                    <div className="para3 text-[3vw] font-light flex flex-wrap">
                        <p>All our courses and dives are conducted and supervised by our in-house instructor.</p>
                    </div>

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

                    <button className="w-[50vw] mt-5 mb-16 py-2 bg-emerald-500 rounded-lg text-white">Book Now</button>

                </div>
            </div>

            <Act_card1 />

        </div>

    )
}
export default Page1_act