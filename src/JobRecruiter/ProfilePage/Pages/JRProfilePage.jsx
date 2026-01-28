import Square from "../Images/Square.png"
import Header from '../../HomePage/Components/Header'
import Footer from '../../../LandingPage/Components/Footer'
import { useNavigate } from "react-router-dom"
import NextStep from "../../../Authorisation/Images/logo.png";
import { useState } from "react";
import { JOBGIVER_API_ENDPOINT } from "../../../APIs/Data";
import axios from "axios";
import toast from "react-hot-toast";

function JRProfilePage() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    fullname:"",
    jobtitle:"",
    companyName:"",
    location:"",
    contactEmail:"",
    description:"",
    specialization:"",
    aboutcompany:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      const res = await axios.post(
        `${JOBGIVER_API_ENDPOINT}/profilemanage`,
        data,{
          headers:{
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials:true,
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      navigate("/jobrecruiter/profile/submit");
    }catch(error){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='bg-[#F6F9FE]'>
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
              Saving your profile...
            </p>
          </div>
      )}
      <Header/>
      <div className="relative min-h-screen overflow-hidden">
        <img src={Square} alt="square" className=" absolute pt-10  -ml-50 md:-ml-120"/>
        <img src={Square} alt="square " className="absolute md:translate-x-280 translate-x-50 pt-30" />  

        <div className="mx-auto w-[70%] md:w-[10%] mt-20 bg-white border border-gray-200 rounded-full shadow-lg flex flex-col items-center justify-center text-center p-6">
          <img 
            src={NextStep} 
            alt="logo" 
            className="w-20 h-20 mb-4"
          />
        </div>

        <div className="w-full px-5 md:px-25 mt-10">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">            
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.fullname}
              onChange={(e) => setData({...data, fullname:e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
            
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.jobtitle}
              onChange={(e) => setData({...data, jobtitle:e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => setData({...data, companyName:e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
        <div>
          <label className="block text-sm font-medium mb-1">
            Location<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => setData({...data, location:e.target.value})}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          />
        </div> 
              
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="IN"
              className="w-5 h-4"
            />
            <select className="ml-2 outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+86</option>
              <option>+33</option>
              <option>+49</option>
              <option>+52</option>
              <option>+44</option>
            </select>
            <input
              type="text"
              className="ml-2 w-full outline-none py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.contactEmail}
            onChange={(e) => setData({...data, contactEmail:e.target.value})}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          />
        </div> 

        <div>
          <label className="block text-sm font-medium mb-1">
            Choose Language<span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border cursor-pointer border-gray-300 rounded-md px-3 py-2 outline-none">
            <option >Select</option>
            <option value="English-UK"> English-UK</option>
            <option value="English-US"> English-US</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          value={data.description}
          onChange={(e) => setData({...data, description:e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none">
        </textarea>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-1">
          Specializations
        </label>
        <textarea
          rows="4"
          value={data.specialization}
          onChange={(e) => setData({...data, specialization:e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none">
        </textarea>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-1">
          About Your Company<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          value={data.aboutcompany}
          onChange={(e) => setData({...data, aboutcompany:e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none">
        </textarea>
      </div>

      <div className="flex items-start gap-2 mt-6">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 cursor-pointer"
        />
        <p className="text-sm text-gray-700 leading-5">
          By submitting this application, I agree that I have read the Privacy Policy and confirm that
          NextStep store my personal details to be able to process my job application.
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 cursor-pointer"
        />
        <p className="text-sm text-gray-700 leading-5">
          Make my profile visible to candidates and other recruiters.
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button 
        className="bg-[#0F2B46] text-white px-10 py-3 rounded-md font-medium hover:bg-white hover:text-blue-950 cursor-pointer transition"
        onClick={handleSubmit}>
          Submit Application
        </button>
      </div>

    </div>
        
  </div>
  <Footer/>
</div>
  )
}

export default JRProfilePage
