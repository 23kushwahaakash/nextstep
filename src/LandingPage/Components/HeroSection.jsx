import HeroImage from "../Images/HeroImage.png"
import { Briefcase, Users, Building} from "lucide-react"

function HeroSection({Title,subTitle1,HeroSectionButton}) {
  return (
    <div className="min-h-screen  bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex relative z-10 flex-col items-center w-full justify-center min-h-screen">
            <h1 className="text-white text-6xl font-serif font-bold text-center px-4 drop-shadow-lg">{Title}</h1>
            <h1 className="font-serif mt-5 drop-shadow-lg text-2xl text-white">{subTitle1}</h1>
            {HeroSectionButton}
            <div className="flex gap-10 mt-20 drop-shadow-lg">
                <div className="flex text-white gap-1">
                    <div className="bg-[#15294B] w-12 h-12 rounded-full flex justify-center items-center">
                        <Briefcase stroke="white"/>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">25,850</h1>
                        <h1>Jobs</h1>
                    </div>
                </div>
                <div className="flex text-white gap-1">
                    <div className="bg-[#15294B] w-12 h-12 rounded-full flex justify-center items-center">
                        <Users stroke="white"/>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">10,250</h1>
                        <h1>Candidates</h1>
                    </div>
                </div>
                <div className="flex text-white gap-1">
                    <div className="bg-[#15294B] w-12 h-12 rounded-full flex justify-center items-center">
                        <Building stroke="white"/>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">18,400</h1>
                        <h1>Companies</h1>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection