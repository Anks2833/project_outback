const Review = ({name, date, para, image}) => {
  return (

    <div className="w-[60vw] h-[50vh] lg:w-[20vw] lg:h-[32vh] flex flex-col bg-white rounded">

      {/* First part */}
      <div className="w-full flex px-4 py-4 justify-between">

        {/* THe dp */}
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full">
            <img className="w-full h-full rounded-full" src={image} alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-sm font-semibold">{name}</h1>
            <p className="text-xs">{date}</p>
          </div>
        </div>

        {/* Trip advisor logo */}
        <div>
          <img className="w-[5vw] sm:w-[1.5vw]" src="/asset28.svg" alt="noimg" />
        </div>
      </div>

      {/* The second part */}
      <div className="w-full flex px-4 gap-2">

        {/* Rating dots */}
        <div className="flex items-center">
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset26.svg" alt="noimg" />
        </div>

        {/* The verified icon */}
        <div>
          <img className="w-[3vw] sm:w-[1.5vw]" src="/asset29.svg" alt="" />
        </div>

      </div>

      <div className="px-4 py-2">

        <p className="select-none text-wrap">{para}</p>

      </div>

    </div>
  )
}
export default Review