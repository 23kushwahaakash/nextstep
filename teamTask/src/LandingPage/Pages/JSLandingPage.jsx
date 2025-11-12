import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import HeroSectionButton from '../Components/HeroSectionButton'
import TopCompaniesSection from '../Components/TopCompaniesSection'
import StepsSection from '../Components/StepsSection'
import FeaturedJobsSection from '../Components/FeaturedJobsSection'

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
      <Footer/>
      
    </div>
  )
}

export default JSLandingPage
