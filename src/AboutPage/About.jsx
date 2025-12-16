import Header from '../LandingPage/Components/Header'
import Footer from '../LandingPage/Components/Footer'
import Square from '../ProfilePage/Images/Square.png'
import CrowdLeft from '../Authorisation/Images/CrowdLeft.png'
import CrowdRight from '../Authorisation/Images/CrowdRight.png'


function About() {
  return (
    <div>
      <Header/>
      <div className="relative flex flex-col min-h-screen md:grid md:grid-cols-3 overflow-hidden">
        <div className='hidden md:flex md:flex-col'>
          <div className='md:block pt-15'>
            <img src={CrowdLeft} alt="" />
          </div>
          <img src={Square} 
            alt="square" 
            className=" absolute md:static pt-10 md:pt-20 md:-ml-[50%]  -ml-50"/>
        </div>
        <div className='pt-15 px-2 md:pt-25 flex flex-col md:justify-center items-center'>
          <img src={Square} 
            alt="square" 
            className=" absolute md:hidden h-[50%] -ml-100"/>
            <img 
            src={Square} 
            alt="square " 
            className="absolute h-[50%] md:hidden translate-x-50" />
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
        <div className='hidden md:flex md:flex-col'>
          <div>
            <img 
            src={Square} 
            alt="square " 
            className="md:block md:static md:h-[20] md:translate-x-65 translate-x-50 pt-20 " />
          </div>
          <div className='md:flex flex-col h-full justify-end'>
            <img src={CrowdRight} alt="Crowd right" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
