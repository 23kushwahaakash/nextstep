import HeroImage from "../Images/HeroImage.png"
import { useNavigate } from "react-router-dom"

function HeroSection() {
    const navigate=useNavigate()
  return (
    <div className='relative md:min-h-screen pt-10 md:pt-6 z-0'>
        <img src={HeroImage} alt="map" className="relative md:min-h-screen "/>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-15 md:top-50 flex flex-col justify-center items-center w-full ">
            <div className="flex flex-col w-full md:w-[60%] justify-center items-center">
                <h1 className="text-white text-xl md:text-6xl text-center font-serif mb-3">"Find Your Next Opportunity.Hire Your Perfect Candidate"</h1>
                <h1 className="text-white text-center text-xs md:text-2xl">"The all-in-one platform that connects top talent with leading companies."</h1>
                <div className="flex mt-2 md:mt-30 gap-5">
                   <button 
                   className="text-white bg-[#1c58c1] md:text-4xl px-5 md:px-10 md:py-2 py-1 rounded-md cursor-pointer"
                   onClick={()=>navigate("/login")}>Log In</button>
                   <button 
                   className="text-white bg-[#1c58c1] md:text-4xl px-5 md:px-10 md:py-2 py-1 rounded-md cursor-pointer"
                   onClick={()=>navigate("/signup")}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
