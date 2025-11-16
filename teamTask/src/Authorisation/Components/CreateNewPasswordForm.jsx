import { Eye, EyeOff, Lock, Check} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  // ← Add this

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            alert("Please fill in all fields!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Password reset successful");
        alert("Password reset successful!");
        navigate("/forgotpassword/verifyotp/createnew/updated");
    };

    return (
        <div className="flex justify-center flex-col shadow-lg items-center md:w-[100%] bg-[#F1F5FA] border border-gray-300 rounded-xl mb-5 p-6">
            <div className="md:w-[100%] flex justify-center items-center flex-col">
                <h1 className="mb-5 mt-5 text-2xl font-bold">Create a new password</h1>
                <div className="w-[80%]">
                    <div className="flex items-center gap-2 border-b border-gray-300 pt-5 pb-2">
                        <Lock className="flex-shrink-0" />
                        <input
                            value={password}
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Enter your new password"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                        {showPassword ? (
                            <EyeOff onClick={togglePasswordVisibility} className="cursor-pointer flex-shrink-0" />
                        ) : (
                            <Eye onClick={togglePasswordVisibility} className="cursor-pointer flex-shrink-0" />
                        )}
                    </div>
                    <div className="flex items-center gap-2 border-b border-gray-300 pt-5 pb-2">
                        <Lock className="flex-shrink-0" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}  
                            onChange={(e) => setConfirmPassword(e.target.value)}  
                            placeholder="Confirm your new password"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                        {showConfirmPassword ? (
                            <EyeOff onClick={toggleConfirmPasswordVisibility} className="cursor-pointer flex-shrink-0" />
                        ) : (
                            <Eye onClick={toggleConfirmPasswordVisibility} className="cursor-pointer flex-shrink-0" />
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
                 className="relative overflow-hidden bg-[#15294B] px-30 py-5 mb-3 rounded-md text-white text-2xl transition-colors duration-300 hover:text-[#15294B] group"
                >
                <span className="relative z-10">Reset Password</span>
                <span className="absolute inset-0 bg-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </button>
            </div>
        </div>
    );
}

export default CreateNewPasswordForm;