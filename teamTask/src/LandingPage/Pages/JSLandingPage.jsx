import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import HeroSectionButton from '../Components/HeroSectionButton'

function JSLandingPage() {
  return (
    <div>
      <Header/>
      <HeroSection
      Title="Find Your Dream Job Today!"
      subTitle1="Connecting Talent with Opportunity: Your Gateway to Career Success"
      HeroSectionButton={<HeroSectionButton/>}/>
      <Footer/>
    </div>
  )
}

export default JSLandingPage
