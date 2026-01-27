import NextStep from "../../../Authorisation/Images/logo.png";

function JobPostForm() {
  return (
    <div className='bg-blue-50 min-h-screen flex flex-col items-center'>
        <img 
        src={NextStep} 
        alt="logo"
        className="w-12 h-12 mt-5" />
        <h1 className="font-semibold mb-5 text-blue-950 font-serif">NextStep</h1>
        <form className=" w-[90%] md:w-[50%] rounded-xl flex flex-col gap-1 ">
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="Title">Title:</label>
                <input 
                type="text" 
                placeholder="Full Stack Developer"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="description">Description:</label>
                <input 
                type="text" 
                placeholder="We need full stack dev"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="minSalary">Minimum:</label>
                <input 
                type="text" 
                placeholder="4 LPA"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="maxSalary">Maximum:</label>
                <input 
                type="text" 
                placeholder="10 LPA"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="skills required">Skills:</label>
                <input 
                type="text" 
                placeholder="React, Angular"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="experience">Experience (Years):</label>
                <input 
                type="text" 
                placeholder="Full Stack Developer"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="job type">JobType:</label>
                <input 
                type="text" 
                placeholder="Full-time"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="location">Location:</label>
                <input 
                type="text" 
                placeholder="Bengaluru"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="Category">Category:</label>
                <input 
                type="text" 
                placeholder="Technical"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="Tags">Tags:</label>
                <input 
                type="text" 
                placeholder="Remote, Urgent"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
           <div className="flex justify-center md:justify-between items-center gap-1">
                <label htmlFor="Experience level">Experience Level:</label>
                <input 
                type="text" 
                placeholder="Intermediate"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex justify-center">
                <button
                className="bg-blue-950 md:py-3 mt-1 py-2 mb-2 w-1/2 md:w-1/3 md:text-2xl rounded-2xl hover:bg-white hover:text-blue-950 hover:border cursor-pointer text-white">
                POST
            </button>
            </div>
        </form>
      
    </div>
  )
}

export default JobPostForm
