"use client";

import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { Lato } from 'next/font/google';
import LocomotiveScroll from 'locomotive-scroll';

const lato = Lato({
  subsets: ['latin'],
  weight: ['900'],
})


const page = () => {


  const locomotiveScroll = new LocomotiveScroll();

  return (

    <div className="relative w-full h-screen bg-[#FAF8F3] text-zinc-100">

      <div className="absolute top-0 z-[2] w-full h-screen bg-black/65"></div>
      <img
        className="w-full h-full object-cover object-center"
        src="palm.jpg"
        alt=""
      />


      <motion.div className="w-full flex justify-center absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden">
        <motion.div
          initial={{ y: "50%", rotate: "40deg" }}
          whileInView={{ y: 0, rotate: "0" }}
          transition={{ ease: [0, 0.55, 0.45, 1], duration: 1, }}
          className='flex text-[8vw] sm:text-[8vw] font-extrabold text-white origin-left'
        >
          <h1
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className={`text-[12vw] sm:text-[6vw] font-extrabold text-white ${lato.className}`}>Contact</h1>
        </motion.div>
      </motion.div>

      {/* The first section */}
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-center sm:justify-between py-20 sm:px-32 border-b-[1px] border-b-zinc-300 bg-[#FAF8F3]">

        {/* The location iframe */}
        <div className="w-full px-10 sm:px-0">
          <iframe
            className="w-full h-[50vh] sm:w-[800px] sm:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.244200089987!2d93.00000052525996!3d12.02670208488913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088d36ea9916325%3A0xbdce4116db26504b!2sOutback%20Resorts!5e0!3m2!1sen!2sin!4v1711632504397!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* The location text */}
        <div className="w-full sm:w-1/2 items-center flex flex-col">

          {/* The heading */}
          <div className="text-black">
            <h1 className="font-bold text-[6vw] sm:text-[3vw] tracking-tighter">Get in touch</h1>
          </div>

          {/* The location text */}
          <div className="w-full text-black flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-center gap-3 ">

              {/* heading */}
              <h1 className="font-semibold text-sm sm:text-[1.5vw]">Outback Resorts</h1>

              {/* para */}
              <div>
                <p>SH5, Govind Nagar, Havelock Islands, </p>
                <p>Andaman and Nicobar Islands –744211</p>
              </div>
            </div>

            <div>
              <p>Email: bookings@outbackresorts.in</p>
              <p>Tel: +91 31922 82068</p>
            </div>

            <motion.div className="">
              <motion.button 
              whileHover={{ backgroundColor: "rgb(59, 130, 246)", color: "white" }}
              whileTap={{scale: 0.9}}
              className="text-blue-500 bg-transparent border-2 border-blue-500 rounded-md px-3 py-2"
              >
                View in Google Maps
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The second section */}
      <div className="flex flex-col-reverse sm:flex-row justify-between py-20 px:10 sm:px-32 bg-[#FAF8F3]">

        {/* First part */}
        <div className="basis-2/5 text-black bg-white mt-10 sm:mt-0 mx-6 sm:mx-0 p-10 rounded-md">
          <div className="flex flex-col pb-4 sm:pb-10 border-b-[1px] border-blue-800">
            <p>Book your escape to Outback Resorts today!</p>
            <p>Book direct for the best price, exclusive offers and no hidden fees</p>
          </div>

          <hr />

          <div className="py-10">
            <h1 className="text-[6.5vw] sm:text-[2vw] tracking-tighter font-bold">Why Book Direct?</h1>
          </div>

          <div className="pb-8">
            <p className="font-semibold">Best price guarantee</p>
            <p className="text-[4vw] sm:text-[1vw] font-light">Book direct and enjoy the lowest rates available!</p>
          </div>

          <div className="pb-8">
            <p className="font-semibold">Exclusive offers</p>
            <p className="text-[4vw] sm:text-[1vw] font-light">Book direct and enjoy exclusive offers</p>
          </div>

          <div className="pb-8">
            <p className="font-semibold">No hidden fees</p>
            <p className="text-[4vw] sm:text-[1vw] font-light">Many websites charge extra fees for bookings; we do not</p>
          </div>
        </div>

        {/* Second part */}
        <div className="w-full sm:basis-1/2 sm:ml-14">


          {/* The form heading */}
          <div className="w-full text-black px-8">
            <h1 className="font-semibold text-xl sm:text-[1.2vw]">
              Make a reservation by phone: +91 3192282068 or write to us at
              bookings@outbackresorts.in.
            </h1>
          </div>

          {/* The form */}
          <div className="w-full text-black">
            <form className="flex flex-col px-8 sm:px-0">

              {/* Name and email field */}
              <div className="flex flex-col sm:flex-row py-14 gap-4">

                {/* Name field */}
                <div className="">
                  <label htmlFor="name">Name *</label> <br />
                  <input
                    className="w-[80vw] sm:w-[20vw] bg-zinc-100 h-10 w-54 mt-2 px-3 outline-none"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="name">Email ID *</label> <br />
                  <input
                    className="w-[80vw] sm:w-[20vw] bg-zinc-100 h-10 w-54 mt-2 px-3 outline-none"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              {/* Contact field */}
              <div className="mb-14">
                <label htmlFor="name">Contact *</label> <br />
                <input
                  className="w-full bg-zinc-100 h-10 mt-2 px-3 outline-none"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="+1-999-999-9999"
                />
              </div>

              {/* Message field */}
              <div className="mb-14">
                <label htmlFor="name">Message *</label> <br />
                <textarea
                  className="w-full h-[20vh] bg-zinc-100 mt-2 p-3 outline-none resize-none"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Tell us briefly about your needs"
                />
              </div>

              {/* Submit btn */}
              <motion.div className="">
                <motion.button 
                whileTap={{scale: 0.9}}
                className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit"
                >
                  Submit
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>


      <Footer />
    </div>

  );
};
export default page;