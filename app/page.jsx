"use client"
import LocomotiveScroll from 'locomotive-scroll';
import { useState } from "react";
import Footer from './Components/Footer';
import Booking from './Components/Booking';
// import Review from "./components/Review";




const page = () => {


  const locomotiveScroll = new LocomotiveScroll();

  let [isOpen, setisOpen] = useState(false);

  return (

    <div className="relative w-full h-screen bg-zinc-100 text-zinc-100">


      {/*Hero section*/}

      <div className="relative w-full h-screen">

        <div className='w-full flex flex-col items-center'>
          <img className='absolute top-[20%] w-[15vw] h-[20vh]' src="logo_white.png" alt="" />
          <Booking />
          <img className='absolute bottom-[2%] w-[5vw] h-[10vh]' src="travel.webp" alt="" />

        </div>

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

      {/* <Review></Review> */}

      {/*Grid section*/}

      <div className="flex justify-evenly items-center gap-36 p-20 pb-32 border-b-[1px] border-b-zinc-200">
        <div className="basis-1/2 text-black flex flex-col gap-6">
          <h2 className="text-[2vw] font-extrabold text-[#53565A]">Our Story</h2>
          <p className='font-light text-[1vw]'>
            Overlooking the luscious green tropical trees, with pristine clear
            beach & clear blue waters a minute away, our resort, Outback Resorts
            has created its own niche. The picturesque jungle side view and
            proximity to the ocean give a sense of belonging to the place. The
            interiors have a more contemporary outlook which depicts the
            transient dynamics between the sky, land and the ocean. The
            highlight of the property is in our recycled plastic installations,
            crossing 200,000 in numbers.
          </p>
        </div>

        <div className="basis-2/3">
          <img src="pexels-aviv.jpg" alt="" />
        </div>
      </div>

      <div className="m-20 grid grid-cols-3 auto-rows-[300px] py-32">
        <div
          className="bg-cover col-span-2 bg-center"
          style={{ backgroundImage: `url('./Grid/pexels1.jpg')` }}
        ></div>
        <div
          className="bg-cover"
          style={{ backgroundImage: `url('./Grid/pexels3.jpg')` }}
        ></div>

        <div
          className="bg-cover row-span-2 bg-bottom"
          style={{ backgroundImage: `url('./Grid/pexels5.jpg')` }}
        ></div>

        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url('./Grid/pexels7.jpg')` }}
        ></div>
        <div
          className="bg-cover row-span-2 bg-center"
          style={{ backgroundImage: `url('./Grid/pexels4.jpg')` }}
        ></div>
        <div
          className="bg-cover bg-bottom"
          style={{ backgroundImage: `url('./Grid/pexels8.jpg')` }}
        ></div>
      </div>


      <div className="flex justify-evenly items-center gap-36 px-32 py-32 border-t-[1px] border-t-zinc-200">
        <div>
          <img src="asset 23.webp" alt="" />
        </div>
        <div className="basis-1/2 text-black flex flex-col gap-6">
          <h2 className="text-[2vw] font-extrabold text-[#53565A]">
            400,000 Recycled Installations
          </h2>
          <p className='font-light text-[1vw]'>
            We aim to give our visitors some of the most amazing experiences of
            a lifetime that will remain imbibed in their memories for ages. We
            are here to create everlasting impressions and be a part of your
            journey. A journey to unfold the hidden mysteries of the Havelock
            and enjoy what it has to offer to the fullest!
          </p>
        </div>
      </div>

      <div className="my-20 relative ">
        <img
          className="z-0 w-full h-[500px] object-cover brightness-50"
          src="pexels-pavel.jpg"
          alt=""
        />

        <div className="p-20 absolute top-3 text-white">
          <h2 className="text-[2vw] font-extrabold mb-6 text-white">The Stay</h2>
          <div>
            <p className="w-1/3">
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

      <div className="flex justify-evenly items-center gap-36 p-20 py-32 border-b-[1px] border-b-zinc-200">
        <div className="basis-1/2 text-black">
          <h2 className="text-[2vw] font-extrabold text-[#53565A] mb-6">Café Saltwater</h2>
          <p className="pb-6 font-light">
            Talk of the perfect summertime patio. This gorgeous, comfortable &
            hidden gem serves up some of the best North Indian curry’s,
            continental grilled meats & oriental fare on Havelock island.
            Overlooking the light & shadow scenes of a dense beetle plantation,
          </p>
          <p className='font-light'>
            Café SaltWater comes alive at breakfast hours, serving the islands
            most popular ‘All day breakfast’ amongst other local favourites.
            With an outdoorsy & relaxed ambience, an excellent playlist of
            lively music & a hot young team of talented chef’s in the kitchen,
            Café SaltWater is raising the bar for dining experiences on the
            island, 1 dish at a time!
          </p>
        </div>

        <div>
          <img src="Cafe-Saltwater.webp" alt="" />
        </div>
      </div>



      {/*last section*/}

      <div class="flex min-h-screen items-center justify-center">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-kevin.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Try Scuba Dive
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This is a gentle experience designed for swimmers and non
                swimmers alike. The try dive consists of briefing, shallow water
                scuba training and 30 minute dive.
              </p>

            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-john.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Open Water Course
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This course enables you to get a diving license, permitting
                dives anywhere in the world to a maximum depth of 18 meters.
              </p>

            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-96">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./lastSection/pexels-uriel.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Kayak</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                One of the most unique tours offered in Andaman is on a kayak.
                Led by Tanaz Noble, one of the most famous kayak leaders in
                Andaman.
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>

  )
}
export default page