import { Eye,EyeOff,Mail,Lock } from "lucide-react";
import toast from "react-hot-toast"
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import apple from "../Images/apple.png";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../APIs/Data";
import { Link } from "react-router-dom";

function LogInForm() {
  const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const togglePasswordVisibility=()=>setShowPassword(!showPassword);

    const [input,setInput]=useState({
      email:"",
      password:""
    });

    const changeEventHandler=(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
    }

    const submitHandler= async (e)=>{
      e.preventDefault();
      console.log(input);

      try {

        const res = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          input,{
            headers:{
              "Content-Type":"application/json",
            },
            withCredentials:true,
          }
        );
        if(res.data.success){
          navigate("/signup/roleselection");
          toast.success(res.data.message);
        }
        
      } catch (error) {

        toast.error(error.response?.data?.message || "Login failed");
        console.error("Login error:", error);
        
      }
    }

  return (
    <div className="flex justify-center flex-col shadow-lg items-center w-100 md:w-full bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 ">
        <div className="w-full max-w-[430px] flex justify-center items-center flex-col">
          <h1 className=" mb-5 mt-5 text-2xl font-bold">Login</h1>
          <form
           className="w-[80%]"
           onSubmit={submitHandler}
           >
            <div className="flex gap-2 mb-7 border-b border-gray-300">
               <label htmlFor="email"><Mail/></label>
               <div className=" mb-3">
                <input 
                type="email" 
                id="email"
                name="email" 
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter your Email address" 
                className="focus:outline-none"
                />
                </div>
                </div>
            
            <div className="flex flex-between gap-2 mb-3 pb-2 border-b border-gray-300">
            <div className="grid grid-cols-2">
              <div className="flex gap-2">
                <label htmlFor="password"><Lock/></label>
                <input 
                type={showPassword ? "text" :"password"} 
                id="password" 
                name="password" 
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Enter your Password"
                className="focus:outline-none" 
                />
              </div>
              <div className="flex justify-end">
                {showPassword?(
                  <EyeOff onClick={togglePasswordVisibility} className="cursor-pointer "/>)
                  :(
                  <Eye onClick={togglePasswordVisibility} className="cursor-pointer"/>)
                  }
              </div>
            </div>
            </div>
            <div className="flex justify-between items-center pb-5 ">
                <label className="text-xs flex gap-1">
                    <input  type="checkbox"  placeholder="Password"/>
                     Remember me
                </label>
                <Link to="/forgotpassword" className="hover:underline text-blue-800 text-xs">Forgot Password?</Link>
            </div>
            <button 
           type="submit" 
           className="relative overflow-hidden bg-[#15294B]  py-[2%] px-[25%] mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
          >
          <span className="relative z-10">Log in</span>
          <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
          </form>
          
          <p className="text-gray-400">or continue with</p>
          <div className="flex gap-5 mt-5 mb-5">
            <img src={facebook} alt="facebook logo" className="w-10 h-10" />
            <img src={apple} alt="apple logo" className="w-10 h-10" />
            <img src={google} alt="google logo" className="w-10 h-10"/>
          </div>
        </div>
    </div>
  )
}

export default LogInForm
