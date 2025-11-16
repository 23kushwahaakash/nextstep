import Briefcase from "../Images/Briefcase.png"
import Clock from "../Images/Clock.png"
import Wallet from "../Images/Wallet.png"
import MapPin from "../Images/MapPin.png"
import Save from "../Images/Save.png"

function Jobcards({time,logo,title,position,duration,salary,location}) {
  return (
    <div className='shadow-lg rounded-lg grid grid-rows-3 p-2 md:p-5 gap-2 md:gap-5 md:mb-5'>

      <div className="flex justify-between items-center">
        <h1 className="bg-gray-300 rounded-md px-1 font-serif text-gray-500 md:text-xs">{time}</h1>
        <img src={Save} alt="save" className="h-5 w-5"/>
      </div>

      <div className="flex gap-1 md:gap-2 items-center">
        <img src={logo} alt="logo" className="md:h-15" />
        <h1 className="font-serif md:text-4xl">{title}</h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex gap-5 w-full">
          <div className="md:flex gap-1 items-center">
            <img src={Briefcase} alt="briefcase" className="md:w-8 md:h-8" />
            <h1 className="text-xs md:text-xl text-gray-500">{position}</h1>
          </div>
          <div className="flex gap-1 items-center">
            <img src={Clock} alt="clock" className="md:w-8 md:h-8"  />
            <h1 className="text-xs md:text-xl text-gray-500">{duration}</h1>
         </div>
         <div className="flex gap-1 items-center">
          <img src={Wallet} alt="wallet" className="md:w-8 md:h-8" />
          <h1 className="text-xs md:text-xl text-gray-500">{salary}</h1>
         </div>
         <div className="flex gap-1 items-center">
          <img src={MapPin} alt="Map pin" className="md:w-8 md:h-8"/>
          <h1 className="text-xs md:text-xl text-gray-500">{location}</h1>
         </div>
        </div>
        <button className="bg-[#15294B] text-white md:text-lg mx-auto px-5 md:px-5 rounded-lg whitespace-nowrap">Job Details</button>
      </div>

            
    </div>
  )
}

export default Jobcards
