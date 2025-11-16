

function Card({title,icon,icon1,title1,subtitle1,icon2,title2,subtitle2,icon3,title3,subtitle3}) {
  return (
    <div className='bg-[#F1F5FA] flex flex-col justify-center items-center border border-gray-500 p-4 md:px-10 md:pb-10 rounded-lg'>
        <div className="flex items-center p-5 gap-1 justify-center ">
            <h1 className="text-2xl md:text-4xl">{title}</h1>
            <img src={icon} alt="icon" className="h-8 md:h-10" />
        </div>
        <div className="flex flex-col md:w-full md:mt-10 items-start md:gap-8 gap-2">
            <div className="flex items-center gap-3">
               <img src={icon1} alt="icon1" />
               <div>
                <h1 className="text-lg font-semibold">{title1}</h1>
                <h1>{subtitle1}</h1>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <img src={icon2} alt="icon2" />
               <div>
                <h1 className="text-lg font-semibold">{title2}</h1>
                <h1>{subtitle2}</h1>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <img src={icon3} alt="icon3" />
               <div>
                <h1 className="text-lg font-semibold">{title3}</h1>
                <h1>{subtitle3}</h1>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card