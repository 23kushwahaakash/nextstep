import Map from "../Images/Map.png"
import HeroImage from "../Images/HeroImage.png"
import Header from '../../LandingPage/Components/Header'
import Footer from '../../LandingPage/Components/Footer'

function JobPage() {
  return (
    <div>
        <Header/>
        <div className=" pt-10 md:pt-6 z-0">
            <img src={Map} alt="map" className="relative md:min-h-screen "/>
            <img src={HeroImage} alt="hero image" className="absolute top-0 md:min-h-screen w-full pt-10 md:pt-20" />  
        </div>
        <div cl>
            <h1 className="font-serif ">Recent Jobs Available</h1>
        </div>
        
        <Footer/>
      
    </div>
  )
}

export default JobPage
