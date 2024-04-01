'use client';


import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { Lato } from 'next/font/google';
import Link from "next/link";

const lato = Lato({
  subsets: ['latin'],
  weight: ['900'],
})


export default function About() {


  return (
    <>

      {/* Top section */}
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover brightness-75"
          src="pexels-pixabay.jpg"
          alt="Image"
        />
        <div className="absolute top-0 w-full h-screen bg-zinc-900/65"></div>
      </div>

      {/* About text */}
      <motion.div className='w-full flex justify-center absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden'>
        <motion.div
          initial={{ y: "50%", rotate: "40deg" }}
          whileInView={{ y: 0, rotate: "0" }}
          transition={{ ease: [0, 0.55, 0.45, 1], duration: 1, }}
          className={`flex text-[16vw] sm:text-[8vw] font-extrabold text-white origin-left ${lato.className}`}
        >
          <h1
          >
            ABOUT
          </h1>

        </motion.div>
      </motion.div>

      {/* Our story */}
      <div
        className="flex sm:flex md:px-10 lg:px-32 py-20 bg-[#FAF8F3] text-center sm:text-left"
      >
        <div
          className="w-full text-black flex flex-col gap-6"
        >
          <div className='w-full flex px-8 sm:px-0'>
            <h2
              className="w-full text-[6vw] sm:text-[3vw] font-extrabold text-[#53565A] underline sm:no-underline sm:border-b-[1px] sm:border-b-zinc-500"
            >
              Our Story
            </h2>
          </div>

          {/* Image on mobile */}
          <div className="w-full flex sm:hidden">
            <img src="pexels-aviv.jpg" alt="noimg" />
          </div>

          <div className='w-full flex gap-10'>
            <div className='w-full sm:w-1/2 px-8 sm:px-0 flex flex-col'>
              <p>Overlooking the luscious green tropical trees, with pristine clear beach & clear blue waters a minute away, our resort, Outback Resorts has created its own niche. The picturesque jungle side view and proximity to the ocean give a sense of belonging to the place. The interiors have a more contemporary outlook which depicts the transient dynamics between the sky, land and the ocean. The highlight of the property is in our recycled plastic installations, crossing 200,000 in numbers.</p>

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

            <div className="w-1/2 h-[55vh] hidden sm:flex">
              <img className='md:w-full md:h-[40vh] lg:w-full lg:h-full object-cover origin-center' src="pexels-aviv.jpg" alt="noimg" />
            </div>
          </div>
        </div>
      </div>


      {/* Gallery */}
      <div className='w-full relative flex items-center gap-3 overflow-hidden bg-[#FAF8F3] text-center sm:text-left'>

        <div className='w-full'>
          <h1 className='w-full absolute top-0 left-0 z-[1] px-12 text-[#4c4e50] text-[8vw] underline sm:no-underline sm:text-[6vw] font-bold'>Our Gallery</h1>
        </div>

        <motion.div
          className="flex items-end gap-2 sm:gap-3 py-12 sm:py-32"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img
              className='w-full h-full' src="/out1.webp" alt="noimg"
            />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out2.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out3.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out-4.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out5.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out6.webp" alt="noimg" />
          </div>
        </motion.div>


        <motion.div
          className="flex items-end gap-2 sm:gap-3 py-12 sm:py-32"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img
              className='w-full h-full' src="/out1.webp" alt="noimg"
            />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out2.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out3.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out-4.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out5.webp" alt="noimg" />
          </div>

          <div className="w-[70vw] h-[30vh] md:w-[40vw] md:h-[40vw] lg:w-[40vw] lg:h-[50vh]">
            <img className='w-full h-full' src="/out6.webp" alt="noimg" />
          </div>
        </motion.div>
      </div>

      {/* recycle */}
      <motion.div className="flex sm:flex md:px-10 lg:px-32 py-20 bg-[#FAF8F3] text-center sm:text-left">
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full text-black flex flex-col gap-6"
        >

          <div className='w-full flex px-8 sm:px-0'>
            <h2
              className="w-full text-[5vw] sm:text-[3vw] font-extrabold text-[#53565A] underline sm:no-underline sm:border-b-[1px] sm:border-b-zinc-500"
            >
              400,000 Recycled Installations
            </h2>
          </div>

          {/* Image on mobile */}
          <div className="w-full flex sm:hidden">
            <img src="/out5.webp" alt="noimg" />
          </div>

          <div className='w-full flex flex-row-reverse gap-10'>
            <div className='w-full sm:w-1/2 px-8 sm:px-0 flex flex-col'>
              <p>We aim to give our visitors some of the most amazing experiences of a lifetime that will remain imbibed in their memories for ages. We are here to create everlasting impressions and be a part of your journey. A journey to unfold the hidden mysteries of the Havelock and enjoy what it has to offer to the fullest!</p>

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

            <div className="w-1/2 h-[55vh] hidden sm:flex">
              <img className='md:w-full md:h-[40vh] lg:w-full lg:h-full w-full h-full object-cover origin-center' src="asset 23.webp" alt="noimg" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
}
