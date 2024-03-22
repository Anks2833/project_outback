"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const Wp_icon = () => {

    const [visibility, setVisibility] = useState(false)

    const handleVisibility = () => {
        setVisibility(!visibility)
    }

    return (

        <div className="fixed z-[10] bottom-2 left-2 sm:bottom-5 sm:left-5 flex items-center text-white">

            <Link href={"https://api.whatsapp.com/send/?phone=919531949235&text&type=phone_number&app_absent=0"} target="__blank">
                <motion.img
                    onMouseOver={() => { handleVisibility() }}
                    onMouseLeave={() => { handleVisibility() }}
                    whileHover={{ scale: 1.1, }}
                    whileTap={{ scale: 1, }}
                    src="/wp_ico.svg"
                    alt=""
                />
            </Link>
            <h1 className={`bg-[#25D366] h-[2vw] ${visibility ? "opacity-100" : "opacity-0"} px-3 rounded-tr-xl rounded-br-xl hidden sm:flex items-center transition-all`}>WhatsApp us</h1>

        </div>

    )
}
export default Wp_icon