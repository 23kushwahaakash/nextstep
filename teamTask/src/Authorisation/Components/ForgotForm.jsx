import {Mail} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ForgotForm() {
  const navigate = useNavigate(); 

  return (
    <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="md:w-[100%] flex justify-center items-center flex-col">
          <h1 className=" mb-5 mt-5 text-2xl font-bold">Forgot Password</h1>
          <form className="w-[80%]">
            <div className="flex gap-2 mb-7 mt-15 border-b border-gray-300">
               <label htmlFor="email"><Mail/></label>
               <div className=" mb-3">
                <input 
                type="email" 
                id="email" 
                placeholder="Enter your Email address" 
                className="focus:outline-none placeholder:text-xs"
                />
               </div>
            </div>
          </form>
          <button 
           type="submit" 
           onClick={() => navigate('/forgotpassword/verifyotp')}
           className="relative overflow-hidden bg-[#15294B] px-[25%]  py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
          >
          <span className="relative z-10">Send OTP</span>
          <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
          <a href="/login" className="hover:underline mb-10 text-blue-500">Back to Login</a>
        </div>
    </div>
  )
}

export default ForgotForm