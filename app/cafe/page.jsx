"use client"

import { Pacifico, Recursive, Roboto } from 'next/font/google';
import Footer from "../Components/Footer"
import Food from "../Components/Food";
import LocomotiveScroll from 'locomotive-scroll';


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const recursive = Recursive({
  subsets: ['latin'],
  weight: '400',
})

const page = () => {

  const locomotiveScroll = new LocomotiveScroll();


  const foodData = [
    { id: "1", name: "ALL DAY BREAKFAST", price: "₹450", info: "3 eggs any style, sausages, grilled tomato, mushrooms, mash potatoes" },
    { id: "2", name: "EGGS ANY STYLE", price: "₹200", info: "2 eggs any style served along with toast butter" },
    { id: "3", name: "PORRIDGE", price: "₹150", info: "Cooked with milk and a dollop of honey and seasonal fruits" },
    { id: "4", name: "CEREALS", price: "₹150", info: "Served with hot / cold milk & honey" },
    { id: "5", name: "SWISS BIRCHER MUESLI", price: "₹200", info: "" },
    { id: "6", name: "SEASONAL FRESH FRUIT BOWL", price: "₹200", info: "" },
    { id: "7", name: "FRUITS & YOGURT", price: "₹250", info: "Bowl of handmade yoghurt and seasonal fresh fruits along with honey & nuts" },
    { id: "8", name: "AMERICAN PANCAKES", price: "₹250", info: "Served with honey and cream/chocolate/butter" },
    { id: "9", name: "FRENCH TOASTS", price: "₹250", info: "Served with honey and cream/chocolate" },
    { id: "10", name: "STUFFED PARANTHA (POTATO / PANEER / MIX VEG)", price: "₹200", info: "Served with tangy pickle & yoghurt" },
    { id: "11", name: "POORI BHAJI", price: "₹200", info: "Served with tangy potato curry" },
    { id: "12", name: "CHOLA BHATURA", price: "₹250", info: "Served with onion salad & tangy pickle" },
  ]

  const food1Data = [
    { id: "1", name: "CREAM OF TOMATO", price: "₹150", info: "Served with garlic crostini" },
    { id: "2", name: "GARLIC INFUSED CHICKEN BROTH", price: "₹200", info: "served with garlic crostini" },
    { id: "3", name: "HOT & SOUR SOUP (VEG/CHICKEN)", price: "₹150/200", info: "" },
  ]

  const food2Data = [
    { id: "1", name: "COLD PASTA SALAD (VEG / CHICKEN)", price: "₹200/250", info: "" },
    { id: "2", name: "CHICKEN SALAD", price: "₹250", info: "" },
    { id: "3", name: "FRESH GARDEN GREEN SALAD", price: "₹150", info: "" },
  ]

  const food3Data = [
    { id: "1", name: "ARABIATTA SAUCE", price: "₹300", info: "(tomato, garlic, basil)" },
    { id: "2", name: "AL FREDO", price: "₹300", info: "(cheese, cream, mushroom)" },
    { id: "3", name: "AGLIO E OLIO", price: "₹300", info: "(olive oil, garlic, chilli flakes)" },
    { id: "4", name: "MARINARA", price: "₹400", info: "(tomato, cream, fish, prawns) Please specify in case of any food allergies" },
  ]

  const food4Data = [
    { id: "1", name: "CAJUN SPICED POTATO WEDGES", price: "₹150", info: "" },
    { id: "2", name: "ONION RINGS WITH MUSTARD DIP", price: "₹150", info: "" },
    { id: "3", name: "DAHI KEBAB", price: "₹250", info: "" },
    { id: "4", name: "FISH / CHICKEN FINGERS", price: "₹250", info: "" },
    { id: "5", name: "FRIED MOZZARELLA STICKS WITH COCKTAIL SAUCE", price: "₹250", info: "" },
    { id: "6", name: "CHILLI CHICKEN / PANEER", price: "₹250", info: "" },
    { id: "7", name: "KADAK PAPAD KE KEBAB", price: "₹250", info: "" },
  ]

  const food5Data = [
    { id: "1", name: "GRILLED CHICKEN BREAST", price: "₹350", info: "Served with mash potatoes, grilled vegetables & mushroom / pepper / saffron sauce" },
    { id: "2", name: "GRILLED FISH WITH LEMON BUTTER SAUCE", price: "₹350", info: "Served with grilled vegetables & mash potatoes" },
    { id: "3", name: "CLASSICAL FISH & CHIPS", price: "₹350", info: "Served with tartar & salad" },
    { id: "4", name: "DAL TADKA", price: "₹200", info: "" },
    { id: "5", name: "DAL MAKHNI", price: "₹250", info: "" },
    { id: "6", name: "MASALA EGG CURRY", price: "₹250", info: "" },
    { id: "7", name: "MIX DRY VEG", price: "₹250", info: "" },
    { id: "8", name: "PANEER", price: "₹300", info: "(Gravy: masala/ kadhai/ makhni)" },
    { id: "9", name: "CHICKEN", price: "₹350", info: "(Gravy: masala/ kadhai/ makhni)" },
    { id: "10", name: "MALABAR FISH CURRY", price: "₹400", info: "Served with steamed rice" },
    { id: "11", name: "MALABAR PRAWN CURRY", price: "₹450", info: "Served with steamed rice" },
  ]

  const food6Data = [
    { id: "1", name: "TAWA ROTI PLAIN / BUTTER / GARLIC", price: "₹25/35", info: "" },
    { id: "2", name: "TAWA LACHCHA PARANTHA", price: "₹50", info: "" },
    { id: "3", name: "STEAMED RICE/ ZEERA RICE", price: "₹120", info: "" },
    { id: "4", name: "BIRYANI VEG / CHICKEN / SEA FOOD", price: "₹200/250/300", info: "" },
    { id: "5", name: "FRIED RICE VEG /CHICKEN /SEAFOOD", price: "₹200/220/250", info: "" },
    { id: "6", name: "NOODLES VEG/ CHICKEN/ SEAFOOD", price: "₹200/220/250", info: "" },
  ]

  const food7Data = [
    { id: "1", name: "PHIRNI", price: "₹200", info: "" },
    { id: "2", name: "GULABJAMUN / ROSSOGULLA", price: "₹200", info: "" },
    { id: "3", name: "FRUIT SALAD WITH WHIPPED CREAM", price: "₹250", info: "" },
    { id: "4", name: "CHOCOLATE MOUSSE", price: "₹250", info: "" },
    { id: "5", name: "FRESH FRUIT CUSTARD PUDDING", price: "₹250", info: "" },
  ]

  const food8Data = [
    { id: "1", name: "TEA / COFFEE", price: "₹30 / 50", info: "" },
    { id: "2", name: "LEMON GINGER HONEY TEA", price: "₹50", info: "" },
    { id: "3", name: "LEMONADE", price: "₹100", info: "You know it's good, just order it" },
    { id: "4", name: "HOT / COLD CHOCOLATE MILK", price: "₹100", info: "You know it's good, just order it" },
    { id: "5", name: "ICE TEA", price: "₹100", info: "" },
    { id: "6", name: "COLD COFFEE", price: "₹150", info: "" },
    { id: "7", name: "MILK SHAKES", price: "₹150", info: "(Mango/ Cold coffee Banana/ Strawberry/ Chocolate/ Blueberry)" },
    { id: "8", name: "SWEET LASSI", price: "₹150", info: "Chardonnay with a little twist" },
  ]

  return (

    <div className="relative w-full h-screen">

      <div className="relative w-full h-screen bg-zinc-100 text-zinc-100">

        <div className="absolute top-0 z-[2] w-full h-screen bg-zinc-900/65"></div>
        <img className="w-full h-full object-cover object-center" src="/cafe.jpg" alt="" />
        <h1 className="absolute w-full bottom-[40%] flex justify-center items-center z-[5] text-[10vw] sm:text-[6vw] font-extrabold">Cafe Salt Water</h1>

      </div>


      {/* Ala carte breakfast */}
      <div className="w-full pt-36 flex flex-col items-center px-16 border-b-[1px] border-zinc-200 pb-32">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>ALA CARTE BREAKFAST</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {foodData.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>



      {/* Soups */}
      <div className="w-full py-32 flex flex-col px-36 border-b-[1px] border-zinc-200">

        <div className="flex px-16 flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>SOUP</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {food1Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* SALADS */}
      <div className="w-full px-52 py-32 flex flex-col border-b-[1px] border-zinc-200">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>SALADS</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {food2Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* PASTA & PIZZA */}
      <div className="w-full pt-32 flex flex-col px-52">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>PASTA & PIZZA</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {food3Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* Dish1 Image */}
      <div className="dish1 w-full h-[30vw] my-28">
        <img className="w-full h-full object-cover object-center" src="/dish1.webp" alt="" />
      </div>

      {/* STARTERS */}
      <div className="w-full flex flex-col px-52 border-b-[1px] border-zinc-200 pb-32">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>STARTERS</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {food4Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* MAINS */}
      <div className="w-full pt-32 flex flex-col px-52">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>MAINS</h1>

          <div className={`w-full flex flex-col gap-6 items-start ${roboto.className}`}>

            {food5Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* Dish2 Image */}
      <div className="dish1 w-full h-[30vw] my-28">
        <img className="w-full h-full object-cover object-center" src="/dish2.webp" alt="" />
      </div>

      {/* STAPLES & ACCOMPANIMENTS */}
      <div className="w-full py-32 flex flex-col px-16 border-b-[1px] border-zinc-200">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[4.5] sm:text-[5.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>STAPLES & ACCOMPANIMENTS</h1>

          <div className={`w-full flex flex-col px-36 gap-6 items-start ${roboto.className}`}>

            {food6Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* DESSERT */}
      <div className="w-full pt-32 flex flex-col px-16">

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>DESSERT</h1>

          <div className={`w-full flex flex-col px-36 gap-6 items-start ${roboto.className}`}>

            {food7Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      {/* Dish3 Image */}
      <div className="dish1 w-full h-[30vw] my-28">
        <img className="w-full h-full object-cover object-center" src="/dish3.webp" alt="" />
      </div>

      {/* BEVERAGE */}
      <div className="w-full pt-32 flex flex-col px-16 mb-32">  

        <div className="flex flex-col items-center gap-6">
          <h1 className={`text-[5.5vw] sm:text-[6.5vw] font-extrabold text-emerald-700 ${recursive.className}`}>BEVERAGE</h1>

          <div className={`w-full flex flex-col px-36 gap-6 items-start ${roboto.className}`}>

            {food8Data.map((item, index) => {
              return <Food key={item.id} name={item.name} price={item.price} info={item.info} />
            })}

          </div>

        </div>

      </div>

      <Footer />

    </div>

  )
}
export default page