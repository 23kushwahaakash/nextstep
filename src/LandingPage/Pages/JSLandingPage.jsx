
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
        <h1 className='text-2xl font-serif pt-10 pb-10'>We are trusted by the world's largest companies</h1>
        <div className='w-full flex justify-evenly pb-20'>
          <img src={Yahoo} alt="yahoo" />
          <img src={Microsoft2} alt="microsoft" />
          <img src={Youtube} alt="youtube" />
          <img src={Lenovo} alt="lenovo" />
          <img src={Samsung} alt="samsung" />
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default JSLandingPage
