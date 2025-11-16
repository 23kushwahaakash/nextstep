import AI from "./Images/AI.png"
import Applicants from "./Images/Applicants.png"
import DirectMessage from "./Images/DirectMessage.png"
import HeartInBrain from "./Images/HeartInBrain.png"
import People from "./Images/People.png"
import People2 from "./Images/People2.png"
import Poster from "./Images/Poster.png"
import AppStore from "./Images/AppStore.png"
import Playstore from "./Images/Playstore.png"
import Image2 from "./Images/Image2.jpg"
import Image3 from "./Images/Image3.jpg"
import ProfileBuilder from "./Images/ProfileBuilder.png"
import Header from '../LandingPage/Components/Header'
import Footer from '../LandingPage/Components/Footer'
import HeroSection from './Components/HeroSection'
import Card from './Components/Card'

function PromotionPage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <div className="flex flex-col bg-white p-5 md:p-20 gap-5 md:gap-10">
        <Card
          title="Find the job you love"
          icon={HeartInBrain}
          icon1={AI}
          title1="AI-Powered Matching"
          subtitle1="Get matched with jobs that fit your skills."
          icon2={DirectMessage}
          title2="Direct Messaging"
          subtitle2="Connect directly with hiring managers."
          icon3={ProfileBuilder}
          title3="Profile Builder"
          subtitle3="Showcase your experience with a beautiful profile"/>

        <Card
          title="Hire the talent you need"
          icon={People}
          icon1={People2}
          title1="Vetted Candidate Pool"
          subtitle1="Access thousands of qualified professionals"
          icon2={Poster}
          title2="Easy Job Posting"
          subtitle2="Post openings quickly and easily."
          icon3={Applicants}
          title3="Applicant Management"
          subtitle3="Track and manage candidates in one place."/>
      </div>
      <img src={Image2} alt="image 2"  className="mb-5 md:w-full md:mb-20"/>
      <div className="grid grid-cols-2 mb-5 md:pb-15">
        <div className="bg-[#15294B] flex flex-col justify-center items-start p-2 md:pl-10">
            <h1 className="text-white text-xl mb-2 md:text-6xl md:mb-10">Get the App</h1>
            <h1 className="text-white md:text-xl">Experience the power of NextStep anywhere with our quick apply feature</h1>
            <div className="flex mt-2 gap-2 md:mt-15">
                <img src={AppStore} alt="app store" className="h-8 w-20 md:w-full md:h-full"/>
                <img src={Playstore} alt="Playstore" className="h-8 w-20 md:w-full md:h-full" />
            </div>
        </div>
        <img src={Image3} alt="image 3" className="h-full" />
      </div>

      <Footer/>
    </div>
  )
}

export default PromotionPage
