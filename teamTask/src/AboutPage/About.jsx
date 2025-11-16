import Header from '../LandingPage/Components/Header'
import Footer from '../LandingPage/Components/Footer'
import Square from '../ProfilePage/Images/Square.png'
import CrowdLeft from '../Authorisation/Images/CrowdLeft.png'
import CrowdRight from '../Authorisation/Images/CrowdRight.png'


function About() {
  return (
    <div>
      <Header/>
      <div className="relative min-h-screen overflow-hidden">
        <img src={Square} 
        alt="square" 
        className=" absolute pt-10 -ml-50 md:-ml-120"/>
        <img 
        src={Square} 
        alt="square " 
        className="absolute md:translate-x-280 translate-x-50 pt-30" /> 
        <div className='pt-15 flex flex-col md:mt-15 md:grid md:grid-cols-3 gap-10 justify-center items-center px-5'>
            <div className='hidden md:flex flex-col h-full justify-start'>
                <img src={CrowdLeft} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-serif text-2xl font-semibold mb-3'>About NextStep</h1>
                <p className='text-center mb-10 text-lg'>
                Welcome to NextStep, a vibrant community dedicated to helping junior professionals 
                in the creative field find their dream jobs. Connect with employers, showcase your 
                talents, and take the next step in your career journey with us. Join our network of 
                talented individuals and innovative companies today.                   
                </p>
                <h1 className='font-serif text-2xl font-semibold mb-5'>Vision</h1>
                <p className='text-center mb-10 text-lg'>
                Our vision is to create unparalleled economic opportunities for every junior 
                creative professional worldwide, empowering them to achieve their career goals 
                and contribute to the global workforce.
                </p>
                <h1 className='font-serif text-2xl font-semibold mb-5'>Mission</h1>
                <p className='text-center mb-10 text-lg'>
                Our mission is simple: to connect junior creative professionals with opportunities 
                that inspire and enable them to grow, thrive, and succeed in their careers. 
                </p>
                <h1 className='font-serif text-2xl font-semibold mb-5'>Who are we?</h1>
                <p className='text-center mb-10 text-lg'>
                NextStep started as an idea in 2025, born out of a desire to help junior creative
                 professionals find meaningful job opportunities. Officially launched in 2025, 
                 NextStep has quickly grown into a dynamic platform, connecting talented individuals
                  with innovative companies. Under visionary leadership, NextStep continues to
                   expand, offering a range of services including job listings, career resources, 
                   and networking opportunities to support the next generation of creative
                    professionals.
                </p>
            </div>
            <div className='hidden md:flex flex-col h-full justify-end'>
                <img src={CrowdRight} alt="Crowd right" />
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
