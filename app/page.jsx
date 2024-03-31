"use client"


import Footer from './Components/Footer';
import Booking from './Components/Booking';
import Reviews from './Components/Reviews';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import Link from 'next/link';


const page = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (

    <div className="relative w-full h-screen bg-[#FAF8F3] text-zinc-100">


      {/*Hero section*/}

      <div className="relative w-full h-screen">

        <div className='w-full flex flex-col items-center'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className='absolute top-[20%] w-[15vw] h-[20vh] md:w-[20vw] md:h-[15vh] lg:w-[15vw] lg:h-[20vh] hidden md:flex lg:flex' src="logo_white.png" alt="noimg"
          />

          <Booking />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className='absolute bottom-[2%] w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vh] lg:w-[5vw] lg:h-[10vh]' src="travel.webp" alt="noimg"
          />

        </div>

        {/* The video */}
        <video
          className="w-full h-screen object-cover no-controls"
          autoPlay
          loop
          muted
        >
          <source src="mainVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/*Review section*/}
      <Reviews />


      {/* Our story */}
      <div
        className="flex sm:flex md:px-10 lg:px-32 py-20 bg-[#FAF8F3] text-center sm:text-left"
      >
        <div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          className="w-full text-black flex flex-col gap-6"
        >
          <div className='w-full flex px-8 sm:px-0'>
            <h2
              className="w-full text-[6vw] sm:text-[3vw] font-extrabold text-[#53565A] sm:border-b-[1px] sm:border-b-zinc-500"
              initial={{ y: "30%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
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
          <h1 className='w-full absolute top-0 left-0 z-[1] px-12 text-[#4c4e50] text-[8vw] sm:text-[6vw] font-bold'>Our Gallery</h1>
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
              className="w-full text-[5vw] sm:text-[3vw] font-extrabold text-[#53565A] sm:border-b-[1px] sm:border-b-zinc-500"
              initial={{ y: "30%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
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

      {/* The stay part */}
      <div
        className="relative bg-[#FAF8F3]">
        <img
          className="w-full h-[500px] object-cover brightness-50"
          src="pexels-pavel.jpg"
          alt="noimg"
        />

        <div className="p-20 absolute top-3 text-white">
          <h2 className="text-[5vw] sm:text-[2vw] font-extrabold mb-4 sm:mb-4">The Stay</h2>
          <div>
            <p className="font-light text-[3vw] sm:text-[1vw] sm:w-1/3">
              In harmony with the pristine environment are the eco-tech
              luxurious rooms. The various tones and patterns depict the
              transient dynamics between the sky, land and the ocean. Giving a
              touch of a very modern-contemporary style of interior designing
              are the recycled plastic bottle walls which bring together the
              very concept of environmental sustainability.
            </p>
          </div>
        </div>
      </div>


      {/* Cafe saltwater part */}
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
              className="w-full text-[6vw] sm:text-[3vw] font-extrabold text-[#53565A] sm:border-b-[1px] sm:border-b-zinc-500"
              initial={{ y: "30%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
            >
              Café Saltwater
            </h2>
          </div>

          {/* Image on mobile */}
          <div className="w-full flex sm:hidden">
            <img src="/out6.webp" alt="noimg" />
          </div>

          <div className='w-full flex gap-10'>
            <div className='w-full sm:w-1/2 px-8 sm:px-0 flex flex-col'>

              <div className='flex flex-col gap-6'>
                <p>Talk of the perfect summertime patio. This gorgeous, comfortable & hidden gem serves up some of the best North Indian curry’s, continental grilled meats & oriental fare on Havelock island. Overlooking the light & shadow scenes of a dense beetle plantation,</p>
                <p>Café SaltWater comes alive at breakfast hours, serving the islands most popular ‘All day breakfast’ amongst other local favourites. With an outdoorsy & relaxed ambience, an excellent playlist of lively music & a hot young team of talented chef’s in the kitchen, Café SaltWater is raising the bar for dining experiences on the island, 1 dish at a time!</p>
              </div>

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
              <img className='md:w-full md:h-[40vh] lg:w-full lg:h-full w-full h-full object-cover origin-center' src="asset 24.webp" alt="noimg" />
            </div>
          </div>
        </motion.div>
      </motion.div>



      {/*last section*/}

      <motion.div className="flex flex-col gap-8 min-h-screen items-center justify-center px-2 py-20 sm:my-0 sm:px-0 bg-[#FAF8F3]">

        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2
            className="w-full text-[6vw] sm:text-[2.5vw] font-extrabold text-[#53565A] border-b-[1px] border-b-zinc-500"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
          >
            Explore Havelock
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"
          >
            <div className="h-96 w-96">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-kevin.jpg"
                alt="noimg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Try Scuba Dive
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This is a gentle experience designed for swimmers and non
                swimmers alike. The try dive consists of briefing, shallow water
                scuba training and 30 minute dive.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"
          >
            <div className="h-96 w-96">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-john.jpg"
                alt="noimg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Open Water Course
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This course enables you to get a diving license, permitting
                dives anywhere in the world to a maximum depth of 18 meters.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"
          >
            <div className="h-96 w-96">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-uriel.jpg"
                alt="noimg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Kayak</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                One of the most unique tours offered in Andaman is on a kayak.
                Led by Tanaz Noble, one of the most famous kayak leaders in
                Andaman.
              </p>

            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />

    </div>

  )
}
export default page