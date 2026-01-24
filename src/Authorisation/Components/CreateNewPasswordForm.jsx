import { Eye, EyeOff, Lock, Check} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {setUserPass} from "../../Redux/authSlice";
import { AUTH_API_ENDPOINT } from "../../APIs/Data";
import axios from "axios";
import toast from "react-hot-toast";
import NextStep from "../Images/logo.png";

function CreateNewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userEmail = useSelector(state => state.auth.userEmail);

    const [input, setInput] = useState({
        email:userEmail,
        newpassword:"",
        confirmpassword:""
    });   
    
    const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!input.newpassword || !input.confirmpassword) {
            toast.error("Please fill in all fields!");
            return;
        }

        if (input.newpassword.length < 6) {
            toast.error("Password should be atleast 6 characters!");
            return;
        }

        if (input.newpassword !== input.confirmpassword) {
            toast.error("Password Mismatch!");
            return;
        }

        try {
            const res = await axios.post(
                `${AUTH_API_ENDPOINT}/newpassword`,
                input,{
                    headers:{
                        "Content-Type":"application/json",
                    },
                    withCredentials:true,
                }
            );
          dispatch(setUserPass(input.newpassword));
          navigate("/forgotpassword/verifyotp/createnew/updated");
          toast.success("Password Changed Successfully!");
        }

      catch (error) {

        toast.error(error.response?.data?.message || "Password not changed!");
        console.error("Error:", error);
        
      }finally{
        setLoading(false);
      }
    };

    return (
        <div className="flex w-[250%] justify-center flex-col shadow-lg items-center md:w-full bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 p-6">
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
                    Changing Password...
                    </p>
                </div>
                  )}
                  <div className="md:w-full flex justify-center items-center flex-col">
                <h1 className="mb-5 mt-5 text-2xl font-bold">Create a new password</h1>
                <div className="w-full">
                    <div className="flex items-center gap-2 border-b border-gray-300 pt-5 pb-2">
                        <Lock className="shrink-0" />
                        <input
                            value={input.newpassword}
                            name="newpassword"
                            id="newpassword"
                            type={showPassword ? "text" : "password"}
                            onChange={changeEventHandler}                            placeholder="Enter your new password"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                        {showPassword ? (
                            <EyeOff onClick={togglePasswordVisibility} className="cursor-pointer shrink-0" />
                        ) : (
                            <Eye onClick={togglePasswordVisibility} className="cursor-pointer shrink-0" />
                        )}
                    </div>
                    <div className="flex items-center gap-2 border-b border-gray-300 pt-5 pb-2">
                        <Lock className="shrink-0" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmpassword"
                            id="confirmpassword"
                            value={input.confirmpassword}  
                            onChange={changeEventHandler}  
                            placeholder="Confirm your new password"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                        {showConfirmPassword ? (
                            <EyeOff onClick={toggleConfirmPasswordVisibility} className="cursor-pointer shrink-0" />
                        ) : (
                            <Eye onClick={toggleConfirmPasswordVisibility} className="cursor-pointer shrink-0" />
                        )}
                    </div>
                    <div className="mt-5 gap-1 flex flex-col">
                        <h1 className="text-m font-semibold">Your password must contain:</h1>
                        <h1 className="flex gap-1"><Check/>At least 8 characters</h1>
                        <h1 className="flex gap-1"><Check/>One uppercase letter</h1>
                        <h1 className="flex gap-1"><Check/>One lowercase letter</h1>
                        <h1 className="flex gap-1"><Check/>One number</h1>
                        <h1 className="flex gap-1"><Check/>One special character</h1>
                    </div>

                </div>
                <button 
                 type="submit" 
                 onClick={handleResetPassword}
                 className="w-[80%] relative overflow-hidden bg-[#15294B] mt-5 py-2 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
                >
                <span className="relative z-10">Reset Password</span>
                <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </button>
            </div>
        </div>
    );
}

export default CreateNewPasswordForm;