
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import HeroSectionButton from '../Components/HeroSectionButton'
import TopCompaniesSection from '../Components/TopCompaniesSection'
import StepsSection from '../Components/StepsSection'
import FeaturedJobsSection from '../Components/FeaturedJobsSection'
import TestimonialsSection from '../Components/TestimonialsSection'
import Yahoo from "../Images/Yahoo.png"
import Samsung from "../Images/Samsung.png"
import Lenovo from "../Images/Lenovo.png"
import Youtube from "../Images/Youtube.png"
import Microsoft2 from "../Images/Microsoft2.png"


function JSLandingPage() {
  return (
    <div>
      <Header/>
      <HeroSection
      Title="Find Your Dream Job Today!"
      subTitle1="Connecting Talent with Opportunity: Your Gateway to Career Success"
      HeroSectionButton={<HeroSectionButton/>}/>
      <TopCompaniesSection/>
      <StepsSection/>
      <FeaturedJobsSection/>
      <TestimonialsSection/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-2xl text-xl  text-center font-serif pt-10 pb-10'>We are trusted by the world's largest companies</h1>
        <div className='w-full flex justify-evenly md:pb-20 pb-10'>
          <img src={Yahoo} alt="yahoo" className='w-15 h-7 md:w-50 md:h-15' />
          <img src={Microsoft2} alt="microsoft" className='w-15 h-7 md:w-50 md:h-15' />
          <img src={Youtube} alt="youtube" className='w-15 h-7 md:w-50 md:h-15'/>
          <img src={Lenovo} alt="lenovo" className='w-15 h-7 md:w-50 md:h-15'/>
          <img src={Samsung} alt="samsung" className='w-15 h-7 md:w-50 md:h-15'/>
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default JSLandingPage
