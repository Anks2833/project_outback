"use client"

const Booking = () => {
    return (

        <div className="absolute z-[3] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full flex flex-col justify-center items-center gap-5">

            <h1 className="text-[8vw] sm:text-[3vw] font-semibold">Activities</h1>
            
            {/* Booking section for pc */}
            <div className="bg-white p-4 hidden sm:flex rounded-2xl">

                <div className="flex items-center gap-5 text-black border-[1px] border-zinc-200 rounded-tl-2xl rounded-bl-2xl p-6">
                    <div>
                        <h3>Check In</h3>
                        <input type="date" name="" id="" />
                    </div>


                    <div>
                        <h3>Check Out</h3>
                        <input type="date" name="" id="" />
                    </div>
                </div>

                <div className="flex items-center gap-8 text-black border-[1px] border-zinc-200 rounded-tr-2xl rounded-br-2xl p-6">

                <div className="flex flex-col gap-2">
                    <h2>Promotion</h2>
                    <input className="w-[8vw] outline-none" type="text" />
                </div>

                <div>
                    <button className="bg-emerald-400 p-5 rounded-lg text-white font-semibold">Book now</button>
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

        </div>

    )
}
export default Booking