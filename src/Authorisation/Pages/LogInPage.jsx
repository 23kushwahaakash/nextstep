import FullLogo from '../Components/FullLogo'
import LogInForm from '../Components/LogInForm'
import crowdLeft from '../Images/CrowdLeft.png'
import crowdRight from '../Images/CrowdRight.png'

function LogInPage() {
  return (
    <div className='grid grid-cols-3 min-h-screen'>
      <div className='flex items-end'>
        <img src={crowdLeft} alt="crowd on left" className='hidden md:block w-150 h-100 hidden md:block' />
      </div>
      <div className='flex flex-col justify-center items-center  w-[100%] mt-5'>
        <FullLogo/>
        <LogInForm/>
        <p>Don't have an account?<a href="/signup" className='hover:underline'>Sign Up</a></p>
      </div>
      <div className='flex items-end'>
        <img src={crowdRight} alt="crowd on right" className='hidden md:block w-150 h-100 hidden md:block' />
      </div>
    </div>
  )
}

export default LogInPage