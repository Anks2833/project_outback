'use client';

import Link from "next/link"
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";



const Footer = () => {


  // const LINKS = [
  //   {
  //     title: "Product",
  //     items: ["Overview", "Features", "Solutions", "Tutorials"],
  //   },
  //   {
  //     title: "Company",
  //     items: ["About us", "Careers", "Press", "News"],
  //   },
  //   {
  //     title: "Resource",
  //     items: ["Blog", "Newsletter", "Events", "Help center"],
  //   },
  // ];

  const currentYear = new Date().getFullYear();


  return (

    //footer
    <footer className="relative w-full bg-emerald-700">
      <div className="mx-auto w-full max-w-7xl px-8">

        {/* Top */}
        <div className="flex sm:px-20 justify-between gap-4">
          <div className="mt-8">
            <img className="w-[20vw] sm:w-[8vw]" src="logo_white.png" alt="" />
          </div>
          <div className="gap-4 pt-8">

            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-white">Powered by:</h1>
              <div className="flex items-center gap-1">
                <img className="w-[5vw] sm:w-[2vw]" src="atz_logo.png" alt="" />

                <Link
                  href={"https://astratechz.com/"}
                  target="_blank"
                  className="font-extrabold text-white text-[3.5vw] sm:text-[1.2vw]">
                  A.T.Z
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-zinc-300 py-4 md:flex-row md:justify-between">
          <div
            className="mb-4 text-center font-normal text-white"
          >
            &copy; {currentYear} <Link href="https://material-tailwind.com/">Outback Resort</Link>. All
            Rights Reserved.
          </div>
          <div className="flex gap-3 text-blue-gray-900 sm:justify-center">

            {/* Fb */}
            <Link
              href={"https://www.facebook.com/outbackresorts"}
              target="_blank"
              className="">
              <IoLogoFacebook style={{width: "5vw sm:1.5vw", height: "5vw sm:1.5vw", color: "white"}} />
            </Link>

            {/* Insta */}
            <Link
              href={"https://www.instagram.com/outbackresorts/"}
              target="_blank"
              className="">
              <IoLogoInstagram style={{width: "5vw sm:1.5vw", height: "5vw sm:1.5vw", color: "white"}} />
            </Link>

            {/* Wp */}
            <Link
              href={"https://api.whatsapp.com/send/?phone=%2B919531949235&text&type=phone_number&app_absent=0"}
              target="_blank"
              className="">
              <IoLogoWhatsapp style={{width: "5vw sm:1.5vw", height: "5vw sm:1.5vw", color: "white"}} />
            </Link>

            {/* Call */}
            <Link
              href={""}
              className="">
              <IoIosCall style={{width: "5vw sm:1.5vw", height: "5vw sm:1.5vw", color: "white"}} />
            </Link>

            {/* Mail */}
            <Link
              href={""}
              className="">
              <IoMail style={{width: "5vw sm:1.5vw", height: "5vw sm:1.5vw", color: "white"}} />
            </Link>

          </div>
        </div>
      </div>
    </footer>




  )
}
export default Footer