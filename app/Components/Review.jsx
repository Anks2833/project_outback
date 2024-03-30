const Review = ({name, date, para, image}) => {
  return (

    <div className="w-[60vw] h-[30vh] sm:w-[20vw] sm:h-[32vh] flex flex-col bg-white rounded">

      <div className="w-full flex px-4 py-4 justify-between">

        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full">
            <img className="w-full h-full rounded-full" src={image} alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-sm font-semibold">{name}</h1>
            <p className="text-xs">{date}</p>
          </div>
        </div>

        <div>
          <img className="w-[1.5vw]" src="/asset28.svg" alt="noimg" />
        </div>
      </div>

      <div className="w-full flex px-4 gap-2">

        <div className="flex items-center">
          <img className="w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[1.5vw]" src="/asset26.svg" alt="noimg" />
          <img className="w-[1.5vw]" src="/asset26.svg" alt="noimg" />
        </div>

        <div>
          <img className="w-[1.5vw]" src="/asset29.svg" alt="" />
        </div>

      </div>

      <div className="px-4 py-2">

        <p>{para}</p>

      </div>

    </div>
  )
}
export default Review