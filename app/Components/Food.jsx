'use client';

const Food = ({name, price, info}) => {
    return (

        <div className="w-full flex flex-col border-b-[1px] border-black pb-1">

            <div className="w-full flex justify-between gap-3">

                <h1 className="max-w-fit text-xs sm:text-2xl font-semibold text-[#53565A]">{name}</h1>
                {/* <div className="w-[30vw] border-b-[1px] border-[#000] mb-[.4vw]"></div> */}
                <h1 className="text-xs sm:text-2xl font-semibold text-[#53565A]">{price}</h1>

            </div>

            <div>

                <p className="text-xs sm:text-lg">{info}</p>

            </div>

        </div>
    )
}
export default Food