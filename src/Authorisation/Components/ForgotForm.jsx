import {Mail} from "lucide-react";
import { useState } from "react";
import { useNavigate,Link} from "react-router-dom";
import axios from "axios";
import { setUserEmail } from "../../Redux/authSlice";
import { AUTH_API_ENDPOINT } from "../../APIs/Data";
import {useDispatch} from 'react-redux';
import toast from "react-hot-toast";
import NextStep from "../Images/logo.png";

function ForgotForm() {
  const navigate = useNavigate(); 
  const dispatch =useDispatch();

  const [email,setEmail]=useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e)=>{
    e.preventDefault();
    setLoading(true);

    if (!email) {
        toast.error("Please fill the field!");
        return;
    }

    try{
      const res = await axios.post(
        `${AUTH_API_ENDPOINT}/forgotpassword`,
        {email},{
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true,
        }
      );
      toast.success("Email Sent Successfully!");
          dispatch(setUserEmail(email));
          navigate('/forgotpassword/verifyotp');
    }
    catch{
      toast.error("Some Error Occurred!");
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center flex-col shadow-lg items-center w-[250%] md:w-full bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
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
            Sending OTP...
          </p>
        </div>
      )}
      <div className="w-full flex justify-center items-center flex-col">
          <h1 className=" mb-5 mt-5 text-2xl font-bold">Forgot Password</h1>
          <form className="w-[80%]">
            <div className="flex gap-2 mb-7 mt-15 border-b border-gray-300">
               <label htmlFor="email"><Mail/></label>
               <div className=" mb-3">
                <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="Enter your Email address" 
                className="focus:outline-none placeholder:text-xs"
                />
               </div>
            </div>
          </form>
          <button 
           type="button" 
           onClick={submitHandler}
           className="relative overflow-hidden bg-[#15294B] px-[25%]  py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
          >
          <span className="relative z-10">Send OTP</span>
          <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
          <Link to="/login" className="hover:underline mb-10 text-blue-500">Back to Login</Link>
        </div>
    </div>
  )
}

export default ForgotForm