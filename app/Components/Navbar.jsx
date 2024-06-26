'use client';


import { Lato } from 'next/font/google';
import Link from "next/link"
import { IoMenuOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
import { motion } from 'framer-motion';



const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900']
})

const Navbar = () => {

    const links = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/stay", label: "STAY" },
        { href: "/activities", label: "ACTIVITIES" },
        { href: "/cafe", label: "CAFE SALT WATER" },
        { href: "/contact", label: "CONTACT" },
    ]

    const [clicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!clicked);
    }


    return (
        <div className="text-zinc-100">

            <motion.div
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                className="absolute top-0 z-[5] w-full md:w-full flex items-center justify-between px-10 md:px-8 lg:px-36 pt-6"
            >

                <motion.div
                >
                    <Link href={"/"} className="">
                        <img
                            className="w-[20vw] h-[13vw] sm:w-[10vw] sm:h-[6vw]"
                            src="/logo_white.png"
                            alt="noimg"
                        />
                    </Link>
                </motion.div>

                {/* The phone screen Navbar */}
                <div className={`absolute top-0 left-0 z-[-1] flex flex-col w-full h-screen py-24 bg-emerald-800 sm:hidden ${clicked ? "translate-y-[0%] transition-all" : "translate-y-[-100%] transition-all"}`}>
                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaHome style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/" className="text-[6vw]">HOME</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaInfo style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/about" className="text-[6vw]">ABOUT</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaHouseUser style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/stay" className="text-[6vw]">STAY</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaSwimmer style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/activities" className="text-[6vw]">ACTIVITIES</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <IoRestaurant style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/cafe" className="text-[6vw]">CAFE SALT WATER</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <RiContactsFill style={{ width: "6vw", height: "6vw" }} />
                        <Link href="/contact" className="text-[6vw]">CONTACT</Link>
                    </div>

                    <div className='w-full mt-10 flex justify-center'>
                        <img src="/travel.webp" width={100} height={100}></img>
                    </div>

                </div>


                {/* The navigator on phone screen */}
                <span onClick={() => { handleClick() }} className={`sm:hidden ${clicked === true ? "hidden opacity-0 transition-all" : "opacity-100 transition-all"}`}>
                    <IoMenuOutline style={{ width: "10vw", height: "10vw", backgroundColor: "white", color: "black", borderRadius: "100%", padding: "1vw" }} />
                </span>

                {/* The navigator cross on phone screen */}
                <span onClick={() => { handleClick() }} className={`sm:hidden ${clicked === false ? "hidden opacity-0 transition-all" : "opacity-100 transition-all"}`}>
                    <MdCancel style={{ width: "10vw", height: "10vw" }} />
                </span>

                {/* The links */}
                <motion.div
                    className={`hidden md:flex md:gap-3 lg:flex lg:gap-5 ${lato.className} font-bold text-white`}
                >

                    {links.map((item, index) => {
                        return <Link
                            key={index}
                            href={item.href}>{item.label}
                        </Link>
                    })}
                </motion.div>

            </motion.div>

        </div>
    )
}
export default Navbar