import AddUser from "../Images/AddUser.png"
import ArrowToDown from "../Images/ArrowToDown.png"
import Upload from "../Images/Upload.png"
import ArrowToUp from "../Images/ArrowToUp.png"
import Find from "../Images/Find.png"
import Verified from "../Images/Verified.png"

function StepsSection() {
  return (
    <div className='bg-[#F1F5FA] mt-8 w-full px-15 shadow-lg'>
      <h1 className='text-3xl font-serif pt-15 pb-10 flex flex-col justify-center items-center'>Only 4 Steps to get your dream job</h1>
      <div className='grid grid-cols-7 pb-20'>
        <div className="flex flex-col justify-center items-center py-2 gap-2 px-5">
            <img src={AddUser} alt="add user"/>
            <h1>Create Account</h1>
        </div>
        <div className="flex items-start py-2">
            <img src={ArrowToDown} alt="arrow down" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-2  px-5 rounded-lg">
            <img src={Upload} alt="upload" />
            <h1>Upload CV/Resume</h1>
        </div>
        <div className="flex items-end py-2">
            <img src={ArrowToUp} alt="arrow up" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-2 px-5">
            <img src={Find} alt="find" />
            <h1>Find suitable job</h1>
        </div>
        <div className="flex items-start py-2">
            <img src={ArrowToDown} alt="arrow down" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-2 px-5">
            <img src={Verified} alt="apply job" />
            <h1>Apply job</h1>
        </div>
      </div>
    </div>
  )
}

export default StepsSection
