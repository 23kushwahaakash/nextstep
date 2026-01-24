import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUserRole} from "../../Redux/authSlice";
import axios from "axios";
import { AUTH_API_ENDPOINT } from "../../APIs/Data";
import NextStep from "../Images/NextStep.png"

function Role({tagline1,tagline2,button,role,navigateTo}) {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const accessToken = useSelector(state => state.auth.accessToken);

    const handleClick=async()=>{
      try{
        setLoading(true);
        const res = await axios.post(
          `${AUTH_API_ENDPOINT}/roleselection`,
          {role},{
            headers:{
              Authorization:`Bearer ${accessToken}`,
            }, 
            withCredentials: true,
          }
           
        );
          toast.success("Role Selected Successfully!");
          dispatch(setUserRole(res.data.role));
          navigate(navigateTo);
      }
      catch{
        toast.error("Something went wrong!");
        }
        finally{
          setLoading(false);
        }
    }

  return (
    <div className='bg-[#F1F5FA] rounded-2xl md:w-[85%] flex flex-col justify-center items-center mx-10 mb-20 shadow-xl'>
      {loading && (
        <div className="flex flex-col justify-center items-center fixed inset-0 z-50 bg-white/80">
          <img 
          src={NextStep} 
          alt="Loading" 
          className="w-20 mb-6"
          />

          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-4 font-bold text-blue-600 text-m">
            Selecting your role..
          </p>
          
        </div>
      )}
        <div className="flex flex-col justify-center items-center w-[55%] mt-5 md:mt-30 mb-5 md:mb-30">
            <h1 className='text-4xl text-[#15294B] font-serif mb-5'>{tagline1}</h1>
            <h1 className="mb-5">{tagline2}</h1>
            <button 
               type="button" 
               onClick={handleClick}
               className="relative overflow-hidden bg-[#15294B] px-25 py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
            >
            <span className="relative z-10">{button}</span>
            <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </button>
        </div>
    </div>
  )
}

export default Role