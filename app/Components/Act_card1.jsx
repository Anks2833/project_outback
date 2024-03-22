"use client"

import Image from "next/image"


const Act_card1 = () => {
    return (

        <div className="w-full sm:w-full flex justify-center">

            {/* For desktop */}
            <div className="w-full hidden sm:flex mt-10 border-b-[1px] border-zinc-200 pb-20">

                <div className="w-1/2 mt-10 py-8 text-black flex flex-col gap-6">
                    <h1 className="text-[2vw] font-extrabold text-[#53565A]">Kayak</h1>
                    <div className="paras font-light text-[1vw]">
                        <p>One of the most unique tours offered in Andaman is on a kayak. Led by Tanaz</p>
                        <p>Noble, one of the most famous kayak leaders in Andaman. Her tours have</p>
                        <p>been covered by National Geographic. She hosts multiple batches a day, and</p>
                        <p>takes you on a 3 hour kayak journey into the sea and mangroves. Naturalist</p>
                        <p>information provided by Tanaz along the journey truly makes it educating and</p>
                        <p>adventurous. All safety equipment (life jackets), kayak is included in the price.</p>
                    </div>

                    <div className="flex gap-1">
                        <h1 className="font-semibold text-emerald-600">Activity Duration:</h1>
                        <h1>3 hours</h1>
                    </div>
                    <button className="w-[8vw] mt-10 mb-16 p-3 bg-emerald-500 rounded-lg text-white">Book Now</button>
                </div>

                <div className="w-1/2 mt-10">

                    <img className="w-full h-full object-cover" src="/img3.jpg" alt="" />

                </div>

            </div>

            {/* For mobile */}
            <div className="w-[90vw] mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                {/* The heading */}
                <h1 className="w-[70vw] text-[8vw] text-center font-extrabold text-[#53565A]">Kayak</h1>

                {/* THe Image */}
                <div className="w-full mt-6">
                <img className="w-full h-full object-cover" src="/img3.jpg" alt="" />
                </div>

                {/* The para */}
                <div className="w-full flex flex-wrap justify-center paras font-light text-[3vw] py-3">
                    <p>One of the most unique tours offered in Andaman is on a kayak. Led by Tanaz Noble, one of the most famous kayak leaders in Andaman. Her tours have been covered by National Geographic. She hosts multiple batches a day, and takes you on a 3 hour kayak journey into the sea and mangroves. Naturalist information provided by Tanaz along the journey truly makes it educating and adventurous. All safety equipment (life jackets), kayak is included in the price.</p>
                </div>

                {/* The bottom text */}
                <div className="flex justify-center gap-1">
                    <h1 className="font-semibold text-emerald-600">Activity Duration:</h1>
                    <h1>3 hours</h1>
                </div>
                <button className="mt-10 mb-16 px-12 py-2 bg-emerald-500 rounded-lg text-white">Book Now</button>
            </div>

        </div>

    )
}
export default Act_card1