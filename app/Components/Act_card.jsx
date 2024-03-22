"use client"

const Act_card = () => {
    return (

        <div className="w-full sm:w-full flex justify-center">

            {/* For desktop */}
            <div className="w-full hidden sm:flex mt-10 border-b-[1px] border-zinc-200 pb-20">

                <div className="w-1/2 mt-10 py-8 text-black flex flex-col gap-6">
                    <h1 className="text-[2vw] font-extrabold text-[#53565A]">Try Scuba Dive</h1>
                    <div className="paras font-light text-[1vw]">
                        <p>This is a gentle experience designed for swimmers and non swimmers alike.</p>
                        <p>The try dive consists of briefing, shallow water scuba training and 30 minute</p>
                        <p>dive. Underwater photos and videos are especially taken for you underwater</p>
                        <p>by a professional. All equipment and dive site transfers are included in the</p>
                        <p>price. No hidden charges. Maximum depth for a try dive is 12 meters.</p>
                    </div>

                    <div className="flex gap-1">
                        <h1 className="font-semibold text-emerald-600">Activity Duration:</h1>
                        <h1>3 hours</h1>
                    </div>
                    <button className="w-[8vw] mt-10 mb-16 p-3 bg-emerald-500 rounded-lg text-white">Book Now</button>
                </div>

                <div className="w-1/2 mt-10">

                    <img className="w-full h-full object-cover" src="https://outbackresorts.in/wp-content/uploads/2020/10/Outback-Resorts-Activities-3.jpg" alt="" />

                </div>

            </div>

            {/* For mobile */}
            <div className="w-[90vw] mt-10 py-8 text-black flex flex-col items-center border-b-[1px] border-zinc-200 sm:hidden">

                {/* The heading */}
                <h1 className="w-[70vw] text-[8vw] text-center font-extrabold text-[#53565A]">Try Scuba Dive</h1>

                {/* THe Image */}
                <div className="w-full mt-6">
                    <img className="w-full h-full object-cover" src="https://outbackresorts.in/wp-content/uploads/2020/10/Outback-Resorts-Activities-3.jpg" alt="" />
                </div>

                {/* The para */}
                <div className="w-full flex flex-wrap justify-center paras font-light text-[3vw] py-3">
                    <p>This is a gentle experience designed for swimmers and non swimmers alike. The try dive consists of briefing, shallow water scuba training and 30 minute dive. Underwater photos and videos are especially taken for you underwater by a professional. All equipment and dive site transfers are included in the price. No hidden charges. Maximum depth for a try dive is 12 meters.</p>
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
export default Act_card