import Square from './Square.png'
import CrowdLeft from './CrowdLeft.png'
import CrowdRight from './CrowdRight.png'
import Flying from "./Flying.png"
import Check from "./Check.png"
import Header from './Header'
import Footer from './Footer'
import { useNavigate,Link } from 'react-router-dom'

function JRSubmitPage() {
    const navigate=useNavigate()
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
                  <div>
                    <div className='flex flex-col justify-center items-center'>
                     <img src={Flying} alt="flying" />
                     <h1 className='mt-5 text-3xl font-semibold mb-3'>Your Application Has Been</h1>
                     <h1 className='text-2xl font-semibold text-green-700 md:mb-10'>Submitted!</h1>
                  </div>
                  <div className='flex flex-col text-lg text-gray-500 gap-3  md:mb-10 border-b border-gray-300 pb-5'>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="check Circle" className='w-5 h-6' />
                        <h1>You will get an email confirmation</h1>
                    </div>
                    <div className='flex gap-2 '>
                        <img src={Check} alt="check circle"className='w-5 h-6' />
                        <h1>The employer typically responds to applications within 1 day</h1>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 md:gap-5 md:mb-15 mb-15'>
                    <h1 className='text-2xl font-semibold'>Keep track of your applications</h1>
                    <p className='text-md text-gray-500'>
                        You will receive a status update in an email from NextStep within a few weeks
                         of submitting your application. In the meantime, you can view and track all 
                         your applications in the NextStep {<Link className='text-green-500 font-semibold hover-underline cursor-pointer' to=''>Jobs</Link>} section at any time.
                    </p>
                    <Link to="#" className='text-violet-800 underline cursor-pointer'>Check your applications on Recent Activities</Link>
                  </div>
                  <div className='flex justify-center mb-15'>
                    <button 
                      className='bg-[#15294B] text-white text-lg p-5 '
                      onClick={()=>navigate('/login')}>
                      Return To Job Search
                    </button>
                  </div>
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

export default JRSubmitPage
