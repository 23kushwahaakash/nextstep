import FullLogo from '../Components/FullLogo'
import UpdatedPasswordForm from '../Components/UpdatedPasswordForm'
import crowdLeft from '../Images/CrowdLeft.png'
import crowdRight from '../Images/CrowdRight.png'

function UpdatedPasswordPage() {
  return (
    <div className='grid grid-cols-3 min-h-screen'>
      <div className='flex items-end'>
        <img src={crowdLeft} alt="crowd on left" className='w-150 h-100 hidden md:block' />
      </div>
      <div className='flex flex-col justify-center items-center  w-[100%] mt-5'>
        <FullLogo/>
        <UpdatedPasswordForm/>
      </div>
      <div className='flex items-end'>
        <img src={crowdRight} alt="crowd on right" className='w-150 h-100 hidden md:block' />
      </div>
    </div>
  )
}

export default UpdatedPasswordPage
