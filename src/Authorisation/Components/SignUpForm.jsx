import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import google from "../Images/google.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
    
    const signUp = async (e) => {
        e.preventDefault();

        const userData = { fullname, email, password, confirmpassword };
        console.log("sending", userData);

        if (!fullname || !email || !password || !confirmpassword) {
            alert("Please fill in all fields!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }
        
        if (password !== confirmpassword) {
            alert("Wrong Password");
            return;
        }

        if (!agreedToTerms) {
            alert("Please agree to the Terms of Services!");
            return;
        }

        try {
            const response = await axios.post(
                "https://job-seeking-app-1-5auy.onrender.com/api/v1/user/SignUp",
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log("Signup Successful:", response.data);
            navigate('/forgotpassword/verifyotp', { state: { email: email } });
        } catch (error) {
            console.error("Signup Failed:", error.response ? error.response.data : error.message);
            alert("Signup Failed! " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5">
            <div className="max-w-md w-[90%] mx-auto flex justify-center items-center flex-col">
                <h1 className="mb-5 mt-5 text-2xl font-bold">Sign Up</h1>
                <form onSubmit={signUp} className="w-[80%]">
                    <div className="border-b border-gray-300">
                        <input
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            id="fullname"
                            placeholder="Full name"
                            className="focus:outline-none bg-[#F1F5FA] w-full py-2"
                        />
                    </div>
                    <div className="border-b border-gray-300 pt-5">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="focus:outline-none bg-[#F1F5FA] w-full py-2"
                        />
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pt-5">
                        <input
                            value={password}
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Password"
                            className="focus:outline-none bg-[#F1F5FA] w-full py-2"
                        />
                        {showPassword ? (
                            <EyeOff onClick={togglePasswordVisibility} className="cursor-pointer" />
                        ) : (
                            <Eye onClick={togglePasswordVisibility} className="cursor-pointer" />
                        )}
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pt-5">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmpassword"
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="focus:outline-none bg-[#F1F5FA] w-full py-2"
                        />
                        {showConfirmPassword ? (
                            <EyeOff onClick={toggleConfirmPasswordVisibility} className="cursor-pointer" />
                        ) : (
                            <Eye onClick={toggleConfirmPasswordVisibility} className="cursor-pointer" />
                        )}
                    </div>
                    <div>
                        <label className="text-xs flex gap-1 pt-5 pb-5">
                            <input
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />
                            I have read and agree to the Terms of Services
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="relative overflow-hidden bg-[#15294B] w-full py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
                    >
                        <span className="relative z-10">Sign Up</span>
                        <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    </button>
                </form>
                <p className="text-gray-400">or</p>
                <button className="border mt-3 flex gap-3 hover:shadow-2xl justify-center items-center border-gray-300 py-3 px-5 rounded-lg mb-3">
                    <img src={google} alt="google logo" className="w-5 h-5" />
                    Sign up with Google
                </button>
            </div>
        </div>
    );
}

export default SignUpForm;