import Booking from "../Components/Booking";
import Footer from "../Components/Footer";

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function About() {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover brightness-75"
          src="pexels-pixabay.jpg"
          alt="Image"
        />
        <div className="absolute top-0 w-full h-screen bg-zinc-900/65"></div>
      </div>

      <div className='w-full flex justify-center absolute z-[2] top-[30%]'>
        <h1 className="text-[8vw] sm:text-[3vw] font-extrabold text-white">About</h1>
      </div>

      <Booking />

      <div className="flex justify-evenly items-center gap-36 p-20 bg-gray-50">
        <div className="basis-1/2 ">
          <h2 className="text-2xl font-semibold pb-5">Our Story</h2>
          <p>
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

      <div className="m-20  grid grid-cols-3 auto-rows-[300px]">
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

      <div className="flex justify-evenly items-center gap-36 p-20  bg-gray-50">
        <div>
          <img src="asset 23.webp" alt="" />
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold pb-5">
            400,000 Recycled Installations
          </h2>
          <p>
            We aim to give our visitors some of the most amazing experiences of
            a lifetime that will remain imbibed in their memories for ages. We
            are here to create everlasting impressions and be a part of your
            journey. A journey to unfold the hidden mysteries of the Havelock
            and enjoy what it has to offer to the fullest!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
