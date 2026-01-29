import NextStep from "../../../Authorisation/Images/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { JOB_API_ENDPOINT } from "../../../APIs/Data";
import { useNavigate } from "react-router-dom";

function JobPostForm() {
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const [jobData, setJobData] = useState({
        title:"",
        description:"",
        salaryMin:0,
        salaryMax:0,
        skillsRequired:[],
        experience:"",
        jobType:"",
        location:"",
        category:"",
        tags:[],
        experienceLevel:""
    });

    const[loading, setLoading] = useState(false);

    const handlePostJob = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.post(
                `${JOB_API_ENDPOINT}/createjob`,
                jobData,
                {
                    headers:{
                        Authorization:`Bearer ${accessToken}`,
                    }
                }
            );
            console.log(res.data);
            toast.success(res.message);
            navigate("/jobrecruiter/home")
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

  return (
    <div className='bg-blue-50 min-h-screen flex flex-col items-center'>
        {loading && (
            <div className="fixed inset-0 z-50 bg-white/80 flex flex-col items-center justify-center">
            {/* Logo */}
                <img
                    src={NextStep}
                    alt="Loading"
                    className="w-20 mb-6"
                />
            {/* Spinner */}
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                    <p className="mt-4 text-blue-600 font-bold text-m">
                        Posting job...
                    </p>
                </div>
        )}
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
                value={jobData.title}
                onChange={(e) => setJobData({...jobData, title: e.target.value})}
                placeholder="Full Stack Developer"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="description">Description:</label>
                <input 
                type="text" 
                value={jobData.description}
                onChange={(e) => setJobData({...jobData, description:e.target.value})}
                placeholder="We need full stack dev"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="minSalary">Minimum:</label>
                <input 
                type="number" 
                value={jobData.salaryMin}
                onChange={(e) => setJobData({...jobData, salaryMin:Number(e.target.value)})}
                placeholder="4 LPA"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="maxSalary">Maximum:</label>
                <input 
                type="number" 
                value={jobData.salaryMax}
                onChange={(e) => setJobData({...jobData, salaryMax:Number(e.target.value)})}
                placeholder="10 LPA"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="skills required">Skills:</label>
                <input 
                type="text"
                value={jobData.skillsRequired}
                onChange={(e) => setJobData({...jobData, skillsRequired:e.target.value.split(",").map(skillsRequired => skillsRequired.trim())})}
                placeholder="React, Angular"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="experience">Experience:</label>
                <input 
                type="text" 
                value={jobData.experience}
                onChange={(e) => setJobData({...jobData, experience: e.target.value})}
                placeholder="2 Years"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="job type">JobType:</label>
                <input 
                type="text" 
                value={jobData.jobType}
                onChange={(e) => setJobData({...jobData, jobType: e.target.value})}
                placeholder="Full-time"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="location">Location:</label>
                <input 
                type="text" 
                value={jobData.location}
                onChange={(e) => setJobData({...jobData, location:e.target.value})}
                placeholder="Bengaluru"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="Category">Category:</label>
                <input 
                type="text" 
                value={jobData.category}
                onChange={(e) => setJobData({...jobData, category: e.target.value})}
                placeholder="Technical"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex md:justify-between justify-center items-center gap-1">
                <label htmlFor="Tags">Tags:</label>
                <input 
                type="text" 
                value={jobData.tags}
                onChange={(e) => setJobData({...jobData, tags:e.target.value.split(",").map(tags => tags.trim())})}
                placeholder="Remote, Urgent"
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
           <div className="flex justify-center md:justify-between items-center gap-1">
                <label htmlFor="Experience level">Experience Level:</label>
                <input 
                type="text" 
                placeholder="Intermediate"
                value={jobData.experienceLevel}
                onChange={(e) => setJobData({...jobData, experienceLevel:e.target.value})}
                className='bg-white py-2 border rounded-xl w-[90%] pl-2 border-gray-500'/>
            </div>
            <div className="flex justify-center">
                <button
                className="bg-blue-950 md:py-3 mt-1 py-2 mb-2 w-1/2 md:w-1/3 md:text-2xl rounded-2xl hover:bg-white hover:text-blue-950 hover:border cursor-pointer text-white"
                onClick={handlePostJob}>
                POST
                </button>
            </div>
        </form>
      
    </div>
  )
}

export default JobPostForm
