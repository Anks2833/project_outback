"use client"


import { Lato } from 'next/font/google';
import { motion, stagger } from "framer-motion"
import Link from "next/link"
import { IoMenuOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import Image from "next/image"
import { useState } from 'react';


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

    const [clicked, setIsClicked] = useState(false)

    const handleClick = ()=>{
        setIsClicked(!clicked);
    }


    return (
        <div className="text-zinc-100">

            <motion.div
                initial={{ y: "2vw", opacity: 0 }}
                animate={{ y: "-1vw", opacity: 1 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, staggerChildren: 0.5 }}
                className="absolute top-0 z-[5] w-full flex items-center justify-between px-10 sm:px-36 pt-6">

                <motion.div className="">
                    <motion.img
                        className="w-[20vw] h-[13vw] sm:w-[10vw] sm:h-[6vw]"
                        src="/logo_white.png"
                        alt=""
                    />
                </motion.div>

                {/* The phone screen Navbar */}
                <div className={`absolute top-0 left-0 z-[-1] flex flex-col w-full h-screen py-24 bg-[#006868] sm:hidden ${clicked ? "flex" : "hidden"}`}>
                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaHome style={{width: "6vw", height: "6vw"}} />
                        <Link href="/" className="text-[6vw]">HOME</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaInfo style={{width: "6vw", height: "6vw"}} />
                        <Link href="/about" className="text-[6vw]">ABOUT</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaHouseUser style={{width: "6vw", height: "6vw"}} />
                        <Link href="/stay" className="text-[6vw]">STAY</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <FaSwimmer style={{width: "6vw", height: "6vw"}} />
                        <Link href="/activities" className="text-[6vw]">ACTIVITIES</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <IoRestaurant style={{width: "6vw", height: "6vw"}} />
                        <Link href="/cafe" className="text-[6vw]">CAFE SALT WATER</Link>
                    </div>

                    <div className={`flex items-center gap-3 border-b-[1px] border-b-zinc-100 px-6 py-2 ${lato.className} tracking-tighter`}>
                        <RiContactsFill style={{width: "6vw", height: "6vw"}} />
                        <Link href="/contact" className="text-[6vw]">CONTACT</Link>
                    </div>

                    <div className='w-full mt-10 flex justify-center'>
                    <Image src="/travel.webp" width={100} height={100}></Image>
                </div>

                </div>

                
                {/* The navigator on phone screen */}
                <span onClick={()=>{handleClick()}} className='sm:hidden'>
                    <IoMenuOutline style={{ width: "8vw", height: "8vw" }} />
                </span>

                <motion.div
                    className={`hidden sm:flex sm:gap-5 ${lato.className} font-bold`}
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